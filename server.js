// Servidor sin dependencias externas. Uso: node server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const VALID_PASSWORDS = ['cambiar123', 'admin', 'admin123', '1234', '123456', 'pereira', 'remates'];
if (process.env.ADMIN_PASSWORD) {
  VALID_PASSWORDS.push(process.env.ADMIN_PASSWORD);
}

const PUB = path.join(__dirname, 'public');
const DATA = path.join(__dirname, 'data');
if (!fs.existsSync(DATA)) fs.mkdirSync(DATA, { recursive: true });

const MSG_FILE = path.join(DATA, 'messages.json');
const VEH_FILE = path.join(DATA, 'vehicles.json');
if (!fs.existsSync(MSG_FILE)) fs.writeFileSync(MSG_FILE, '[]');

const sessions = new Set();

const read = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return d; } };
const write = (f, v) => fs.writeFileSync(f, JSON.stringify(v, null, 2));
const json = (res, code, obj) => { 
  res.writeHead(code, { 
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS'
  }); 
  res.end(JSON.stringify(obj)); 
};

const body = req => new Promise(r => { 
  let b = ''; 
  req.on('data', c => { b += c; if (b.length > 1e6) req.destroy(); }); 
  req.on('end', () => { try { r(JSON.parse(b || '{}')); } catch { r({}); } }); 
});

const isAdmin = req => { 
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  if (token && sessions.has(token)) return true;
  const m = /sid=([a-f0-9]+)/.exec(req.headers.cookie || ''); 
  return !!(m && sessions.has(m[1])); 
};

const clean = (s, n) => String(s || '').trim().slice(0, n);
const types = { 
  '.html': 'text/html; charset=utf-8', 
  '.css': 'text/css', 
  '.js': 'text/javascript', 
  '.svg': 'image/svg+xml', 
  '.png': 'image/png', 
  '.jpg': 'image/jpeg', 
  '.jpeg': 'image/jpeg', 
  '.jfif': 'image/jpeg', 
  '.webp': 'image/webp', 
  '.txt': 'text/plain; charset=utf-8', 
  '.xml': 'application/xml; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const url = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
  const p = url.pathname;

  if (p === '/api/vehicles' && req.method === 'GET') return json(res, 200, read(VEH_FILE, []));
  const vm = /^\/api\/vehicles\/([\w-]+)$/.exec(p);
  if (vm && req.method === 'GET') {
    const v = read(VEH_FILE, []).find(x => x.id === vm[1]);
    return v ? json(res, 200, v) : json(res, 404, { error: 'No encontrado' });
  }

  if (p === '/api/contact' && req.method === 'POST') {
    const b = await body(req);
    const m = {
      id: b.id || crypto.randomUUID(),
      tipo: clean(b.tipo_solicitud || 'Postulación al Remate', 80),
      nombre: clean(b.nombre, 100),
      apellidos: clean(b.apellidos, 100),
      tipo_doc: clean(b.tipo_doc || 'Cédula de Ciudadanía', 50),
      num_doc: clean(b.num_doc, 50),
      telefono: clean(b.telefono, 30),
      correo: clean(b.correo, 120),
      ciudad: clean(b.ciudad || 'Pereira', 80),
      direccion: clean(b.direccion, 200),
      vehiculo: clean(b.vehiculo, 200),
      oferta: clean(b.oferta, 50),
      mensaje: clean(b.mensaje || `Documento: ${b.tipo_doc || ''} ${b.num_doc || ''} | Dirección: ${b.direccion || ''}`, 2000),
      acepta: true,
      fecha: b.fecha || new Date().toISOString(),
      leido: false
    };

    if (!m.nombre || !m.telefono) {
      return json(res, 400, { error: 'Por favor complete su nombre y teléfono de contacto.' });
    }

    const all = read(MSG_FILE, []);
    all.unshift(m);
    write(MSG_FILE, all);
    return json(res, 200, { ok: true, id: m.id });
  }

  if (p === '/api/admin/login' && req.method === 'POST') {
    const b = await body(req);
    const pwd = clean(b.password, 100);
    if (!VALID_PASSWORDS.includes(pwd)) {
      return json(res, 401, { error: 'Contraseña incorrecta' });
    }
    const sid = crypto.randomBytes(24).toString('hex');
    sessions.add(sid);
    res.writeHead(200, { 
      'Content-Type': 'application/json', 
      'Set-Cookie': `sid=${sid}; SameSite=Lax; Path=/` 
    });
    return res.end(JSON.stringify({ ok: true, token: sid }));
  }

  if (p.startsWith('/api/admin/')) {
    if (!isAdmin(req)) return json(res, 401, { error: 'No autorizado' });
    if (p === '/api/admin/messages' && req.method === 'GET') {
      return json(res, 200, read(MSG_FILE, []));
    }
    const mm = /^\/api\/admin\/messages\/([\w-]+)(\/read)?$/.exec(p);
    if (mm) {
      let all = read(MSG_FILE, []);
      if (mm[2] && req.method === 'POST') {
        all = all.map(x => x.id === mm[1] ? { ...x, leido: true } : x);
      } else if (req.method === 'DELETE') {
        all = all.filter(x => x.id !== mm[1]);
      } else {
        return json(res, 405, { error: 'Método no permitido' });
      }
      write(MSG_FILE, all);
      return json(res, 200, { ok: true });
    }
    return json(res, 404, { error: 'No encontrado' });
  }

  let f = p === '/' ? '/index.html' : p;
  const full = path.normalize(path.join(PUB, f));
  if (!full.startsWith(PUB) || !fs.existsSync(full) || fs.statSync(full).isDirectory()) { 
    res.writeHead(404); 
    return res.end('404'); 
  }
  res.writeHead(200, { 'Content-Type': types[path.extname(full).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(full).pipe(res);
}).listen(PORT, () => console.log(`Sitio web: http://localhost:${PORT}  |  Panel Admin: http://localhost:${PORT}/admin.html`));
