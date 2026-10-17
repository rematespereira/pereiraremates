#!/bin/bash
# ========================================================
#  Pereira Remates - Lanzador del Servidor Local (macOS)
#  Haz doble clic en este archivo para iniciar el servidor
# ========================================================

cd "$(dirname "$0")"

echo "========================================================="
echo "   Iniciando Pereira Remates Judiciales...               "
echo "========================================================="

# Abrir el navegador automáticamente en 2 segundos
(sleep 2 && open "http://localhost:3000/admin.html" && open "http://localhost:3000") &

# Preferir Node.js si está instalado, de lo contrario usar Perl nativo de macOS
if command -v node >/dev/null 2>&1; then
    echo "Ejecutando con Node.js..."
    node server.js
else
    echo "Ejecutando con Perl nativo de macOS..."
    perl server.pl
fi
