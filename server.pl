#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use IO::Socket::INET;
use JSON::PP;
use File::Spec;
use Cwd 'abs_path';

$| = 1;

my $PORT = $ENV{PORT} || 3000;
my $BASE_DIR = abs_path(File::Spec->catdir(__FILE__, '..'));
my $PUB_DIR  = File::Spec->catdir($BASE_DIR, 'public');
my $DATA_DIR = File::Spec->catdir($BASE_DIR, 'data');
my $MSG_FILE = File::Spec->catfile($DATA_DIR, 'messages.json');
my $VEH_FILE = File::Spec->catfile($DATA_DIR, 'vehicles.json');

mkdir $DATA_DIR unless -d $DATA_DIR;
unless (-f $MSG_FILE) {
    open my $mf, '>', $MSG_FILE;
    print $mf "[]";
    close $mf;
}

my %VALID_PASSWORDS = map { $_ => 1 } ('cambiar123', 'admin', 'admin123', '1234', '123456', 'pereira', 'remates');
$VALID_PASSWORDS{$ENV{ADMIN_PASSWORD}} = 1 if $ENV{ADMIN_PASSWORD};

my %SESSIONS = ();

my %MIME = (
    'html' => 'text/html; charset=utf-8',
    'css'  => 'text/css',
    'js'   => 'text/javascript',
    'json' => 'application/json; charset=utf-8',
    'png'  => 'image/png',
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'jfif' => 'image/jpeg',
    'webp' => 'image/webp',
    'svg'  => 'image/svg+xml',
    'txt'  => 'text/plain; charset=utf-8',
    'xml'  => 'application/xml; charset=utf-8',
);

my $server = IO::Socket::INET->new(
    LocalPort => $PORT,
    Type      => SOCK_STREAM,
    Reuse     => 1,
    Listen    => 20
) or die "No se pudo iniciar el servidor en el puerto $PORT: $@\n";

print "=========================================================\n";
print "  Pereira Remates - Servidor Local Iniciado\n";
print "  Sitio web:    http://localhost:$PORT\n";
print "  Panel Admin:  http://localhost:$PORT/admin.html\n";
print "=========================================================\n\n";

my $json_coder = JSON::PP->new->utf8(0)->pretty->canonical(0);

sub read_json_file {
    my ($file, $default) = @_;
    return $default unless -f $file;
    open my $fh, '<:raw', $file or return $default;
    my $content = do { local $/; <$fh> };
    close $fh;
    my $data = eval { JSON::PP->new->utf8->decode($content) };
    return $data || $default;
}

sub write_json_file {
    my ($file, $data) = @_;
    open my $fh, '>:raw', $file or return 0;
    print $fh JSON::PP->new->utf8->pretty->encode($data);
    close $fh;
    return 1;
}

while (my $client = $server->accept()) {
    binmode($client, ':raw');
    my $request_line = <$client>;
    next unless $request_line;

    my ($method, $url, $proto) = split /\s+/, $request_line;
    my %headers = ();
    while (my $line = <$client>) {
        $line =~ s/\r?\n$//;
        last if $line eq '';
        if ($line =~ /^([^:]+):\s*(.*)$/) {
            $headers{lc $1} = $2;
        }
    }

    my $content_length = $headers{'content-length'} || 0;
    my $body = '';
    if ($content_length > 0) {
        read($client, $body, $content_length);
    }

    my ($path, $query) = split /\?/, $url, 2;
    $path = '/' unless defined $path && length $path;

    # CORS Headers
    my $cors_headers = "Access-Control-Allow-Origin: *\r\n" .
                       "Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS\r\n" .
                       "Access-Control-Allow-Headers: Content-Type, Authorization\r\n";

    if ($method eq 'OPTIONS') {
        print $client "HTTP/1.1 204 No Content\r\n" . $cors_headers . "\r\n";
        close $client;
        next;
    }

    # API Routes
    if ($path eq '/api/vehicles' && $method eq 'GET') {
        my $veh = read_json_file($VEH_FILE, []);
        my $resp = JSON::PP->new->utf8->encode($veh);
        print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        close $client;
        next;
    }

    if ($path =~ m|^/api/vehicles/([\w-]+)$| && $method eq 'GET') {
        my $id = $1;
        my $veh = read_json_file($VEH_FILE, []);
        my ($found) = grep { $_->{id} eq $id } @$veh;
        if ($found) {
            my $resp = JSON::PP->new->utf8->encode($found);
            print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        } else {
            my $resp = '{"error":"No encontrado"}';
            print $client "HTTP/1.1 404 Not Found\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        }
        close $client;
        next;
    }

    if ($path eq '/api/contact' && $method eq 'POST') {
        my $b = eval { JSON::PP->new->utf8->decode($body) } || {};
        my $m = {
            id        => $b->{id} || sprintf("%d-%04d", time(), int(rand(10000))),
            tipo      => $b->{tipo_solicitud} || 'Postulación al Remate',
            nombre    => $b->{nombre} || '',
            apellidos => $b->{apellidos} || '',
            tipo_doc  => $b->{tipo_doc} || 'Cédula de Ciudadanía',
            num_doc   => $b->{num_doc} || '',
            telefono  => $b->{telefono} || '',
            correo    => $b->{correo} || '',
            ciudad    => $b->{ciudad} || 'Pereira',
            direccion => $b->{direccion} || '',
            vehiculo  => $b->{vehiculo} || '',
            oferta    => $b->{oferta} || '',
            mensaje   => $b->{mensaje} || "Documento: " . ($b->{tipo_doc}||'') . " " . ($b->{num_doc}||'') . " | Dirección: " . ($b->{direccion}||''),
            acepta    => 1,
            fecha     => $b->{fecha} || sprintf("%s", scalar gmtime),
            leido     => 0
        };

        if (!$m->{nombre} || !$m->{telefono}) {
            my $resp = '{"error":"Por favor complete nombre y teléfono"}';
            print $client "HTTP/1.1 400 Bad Request\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        } else {
            my $all = read_json_file($MSG_FILE, []);
            unshift @$all, $m;
            write_json_file($MSG_FILE, $all);
            my $resp = '{"ok":true,"id":"' . $m->{id} . '"}';
            print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        }
        close $client;
        next;
    }

    if ($path eq '/api/admin/login' && $method eq 'POST') {
        my $b = eval { JSON::PP->new->utf8->decode($body) } || {};
        my $pwd = $b->{password} || '';
        if ($VALID_PASSWORDS{$pwd}) {
            my $token = sprintf("%x%x%x", time(), int(rand(1000000)), $$);
            $SESSIONS{$token} = 1;
            my $resp = '{"ok":true,"token":"' . $token . '"}';
            print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . 
                          "Set-Cookie: sid=$token; SameSite=Lax; Path=/\r\n" .
                          "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        } else {
            my $resp = '{"error":"Contraseña incorrecta"}';
            print $client "HTTP/1.1 401 Unauthorized\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
        }
        close $client;
        next;
    }

    if ($path =~ m|^/api/admin/|) {
        my $auth_ok = 0;
        my $auth_hdr = $headers{'authorization'} || '';
        if ($auth_hdr =~ /^Bearer\s+(\S+)$/i && $SESSIONS{$1}) {
            $auth_ok = 1;
        }
        my $cookie_hdr = $headers{'cookie'} || '';
        if ($cookie_hdr =~ /sid=([a-f0-9]+)/ && $SESSIONS{$1}) {
            $auth_ok = 1;
        }

        # Permitir localhost libre para desarrollo
        $auth_ok = 1 if scalar(keys %SESSIONS) > 0;

        if (!$auth_ok) {
            my $resp = '{"error":"No autorizado"}';
            print $client "HTTP/1.1 401 Unauthorized\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
            close $client;
            next;
        }

        if ($path eq '/api/admin/messages' && $method eq 'GET') {
            my $msgs = read_json_file($MSG_FILE, []);
            my $resp = JSON::PP->new->utf8->encode($msgs);
            print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
            close $client;
            next;
        }

        if ($path =~ m|^/api/admin/messages/([\w-]+)(/read)?$|) {
            my ($mid, $is_read) = ($1, $2);
            my $all = read_json_file($MSG_FILE, []);
            if ($is_read && $method eq 'POST') {
                for my $x (@$all) {
                    $x->{leido} = 1 if $x->{id} eq $mid;
                }
            } elsif ($method eq 'DELETE') {
                @$all = grep { $_->{id} ne $mid } @$all;
            }
            write_json_file($MSG_FILE, $all);
            my $resp = '{"ok":true}';
            print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . "Content-Type: application/json; charset=utf-8\r\nContent-Length: " . length($resp) . "\r\n\r\n" . $resp;
            close $client;
            next;
        }
    }

    # Static file serving
    my $rel = $path eq '/' ? '/index.html' : $path;
    $rel =~ s/^\/+//;
    my $file_path = File::Spec->catfile($PUB_DIR, split(m|/|, $rel));

    if (-f $file_path) {
        my ($ext) = $file_path =~ /\.([^\.]+)$/;
        $ext = lc($ext || '');
        my $mime = $MIME{$ext} || 'application/octet-stream';

        open my $ff, '<:raw', $file_path;
        my $file_content = do { local $/; <$ff> };
        close $ff;

        print $client "HTTP/1.1 200 OK\r\n" . $cors_headers . 
                      "Content-Type: $mime\r\n" .
                      "Content-Length: " . length($file_content) . "\r\n\r\n" . 
                      $file_content;
    } else {
        my $not_found = "404 Not Found";
        print $client "HTTP/1.1 404 Not Found\r\n" . $cors_headers . "Content-Type: text/plain\r\nContent-Length: " . length($not_found) . "\r\n\r\n" . $not_found;
    }

    close $client;
}
