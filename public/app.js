const NEGOCIO = {
  nombre: 'Pereira Remates Judiciales',
  direccion: 'Calle 15 Este #13-110, Pereira, Risaralda',
  telefono: '3170580966',
  correo: 'dianpereirasubastas@gmail.com'
};
const WA = 'https://wa.me/57' + NEGOCIO.telefono;
const MAILTO = 'mailto:' + NEGOCIO.correo;
const money = n => '$' + Number(n).toLocaleString('es-CO');

const INITIAL_VEHICLES = [
   {
      "subtipo" : "Automóvil",
      "precio" : 8500000,
      "descripcion" : "Renault Symbol Expression color gris champagne metalizado modelo 2008 con 217.154 km. Excelente estado mecánico general, aire acondicionado, dirección hidráulica, baúl amplio y excelente consumo. Carrocería en impecable color champagne con interiores conservados. Documentación 100% al día para traspaso inmediato.",
      "titulo" : "RENAULT SYMBOL EXPRESSION",
      "tipo" : "Vehículo",
      "ciudad" : "PEREIRA",
      "fechaPublicacion" : "05/09/2026",
      "departamento" : "Risaralda",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "traccion" : "4X2",
         "modelo" : "2008",
         "color" : "GRIS CHAMPAGNE METALIZADO / BEIGE",
         "version" : "EXPRESSION",
         "marca" : "RENAULT",
         "motor" : "1.4L 8V",
         "linea" : "SYMBOL",
         "uso" : "217.154 KILÓMETROS",
         "transmision" : "MECÁNICA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "combustible" : "GASOLINA"
      },
      "fotos" : [
         "img/renault-symbol-2008/foto-1.jpg",
         "img/renault-symbol-2008/foto-2.jpg",
         "img/renault-symbol-2008/foto-3.jpg",
         "img/renault-symbol-2008/foto-4.jpg",
         "img/renault-symbol-2008/foto-5.jpg",
         "img/renault-symbol-2008/foto-6.jpg"
      ],
      "id" : "renault-symbol-2008",
      "numRemate" : "246787937353524"
   },
   {
      "especificaciones" : {
         "color" : "ROJO FUEGO / ROJO",
         "marca" : "RENAULT",
         "uso" : "217.054 KILÓMETROS",
         "version" : "AUTHENTIQUE",
         "combustible" : "GASOLINA",
         "transmision" : "MECÁNICA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "modelo" : "2013",
         "traccion" : "4X2",
         "motor" : "1.6L 8V",
         "linea" : "SANDERO"
      },
      "disponibilidad" : "Entrega inmediata",
      "fotos" : [
         "img/renault-sandero-2013/foto-1.jpg",
         "img/renault-sandero-2013/foto-2.jpg",
         "img/renault-sandero-2013/foto-3.jpg",
         "img/renault-sandero-2013/foto-4.jpg",
         "img/renault-sandero-2013/foto-5.jpg",
         "img/renault-sandero-2013/foto-6.jpg",
         "img/renault-sandero-2013/foto-7.jpg",
         "img/renault-sandero-2013/foto-8.jpg",
         "img/renault-sandero-2013/foto-9.jpg"
      ],
      "id" : "renault-sandero-2013",
      "numRemate" : "246787937353525",
      "ciudad" : "PEREIRA",
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "titulo" : "RENAULT SANDERO",
      "tipo" : "Vehículo",
      "precio" : 9000000,
      "subtipo" : "Automóvil",
      "descripcion" : "Renault Sandero color rojo fuego modelo 2013 con 217.054 km. Vehículo amplio, cómodo y muy económico en repuestos y consumo de gasolina. Carrocería en vibrante color rojo con rines oscuros deportivos, interiores cuidados y documentación completa en regla para entrega inmediata."
   },
   {
      "descripcion" : "Peugeot 3008 Allure color cobre metalizado modelo 2018 con 158.495 km. Sofisticada SUV europea con i-Cockpit digital, pantalla táctil, climatizador bizona, cojinería en cuero y distinguido color cobre metalizado con techo y detalles en negro. Máximo confort y tecnología.",
      "subtipo" : "Camioneta / SUV",
      "precio" : 28000000,
      "tipo" : "Vehículo",
      "titulo" : "PEUGEOT 3008",
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "ciudad" : "PEREIRA",
      "id" : "peugeot-3008-2018",
      "numRemate" : "246787937353526",
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "traccion" : "4X2",
         "modelo" : "2018",
         "color" : "COBRE METALIZADO / BRONCE",
         "version" : "ALLURE FULL EQUIPO",
         "marca" : "PEUGEOT",
         "motor" : "1.6L TURBO THP",
         "linea" : "3008",
         "uso" : "158.495 KILÓMETROS",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "AUTOMÁTICA TRIPTONIC",
         "combustible" : "GASOLINA"
      },
      "fotos" : [
         "img/peugeot-3008-2018/foto-1.jpg",
         "img/peugeot-3008-2018/foto-2.jpg",
         "img/peugeot-3008-2018/foto-3.jpg",
         "img/peugeot-3008-2018/foto-4.jpg"
      ]
   },
   {
      "precio" : 55000000,
      "subtipo" : "Camioneta / SUV",
      "descripcion" : "Renault Arkana color blanco perlado bitono (con techo negro) modelo 2026 con tan solo 162 km (prácticamente nueva de vitrina). Diseño SUV Coupé de última generación, tecnología híbrida E-Tech, rines oscuros deportivos, tablero digital y asistencias de seguridad ADAS.",
      "titulo" : "RENAULT ARKANA",
      "tipo" : "Vehículo",
      "ciudad" : "PEREIRA",
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "transmision" : "AUTOMÁTICA E-TECH",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "combustible" : "HÍBRIDO / GASOLINA",
         "version" : "E-TECH HYBRID INTENS",
         "marca" : "RENAULT",
         "uso" : "162 KILÓMETROS",
         "color" : "BLANCO PERLADO / BITONO (TECHO NEGRO)",
         "linea" : "ARKANA",
         "motor" : "1.3L TURBO MICRO-HÍBRIDO",
         "traccion" : "4X2",
         "modelo" : "2026"
      },
      "fotos" : [
         "img/renault-arkana-2026/foto-3.jpg",
         "img/renault-arkana-2026/foto-1.jpg",
         "img/renault-arkana-2026/foto-2.jpg",
         "img/renault-arkana-2026/foto-4.jpg",
         "img/renault-arkana-2026/foto-5.jpg",
         "img/renault-arkana-2026/foto-6.jpg",
         "img/renault-arkana-2026/foto-7.jpg",
         "img/renault-arkana-2026/foto-8.jpg",
         "img/renault-arkana-2026/foto-9.jpg",
         "img/renault-arkana-2026/foto-10.jpg",
         "img/renault-arkana-2026/foto-11.jpg",
         "img/renault-arkana-2026/foto-12.jpg",
         "img/renault-arkana-2026/foto-13.jpg",
         "img/renault-arkana-2026/foto-14.jpg"
      ],
      "numRemate" : "246787937353527",
      "id" : "renault-arkana-2026"
   },
   {
      "titulo" : "MAZDA 2",
      "tipo" : "Vehículo",
      "subtipo" : "Automóvil",
      "precio" : 19100000,
      "descripcion" : "Mazda 2 Touring color gris meteoro metalizado modelo 2019 con 78.956 km. Diseño Kodo deportivo en tono gris máquina metalizado, tecnología Skyactiv, botón de encendido, sistema Mazda Connect con pantalla flotante y rendimiento de combustible sobresaliente.",
      "fotos" : [
         "img/mazda-2-2019/foto-1.jpg",
         "img/mazda-2-2019/foto-2.jpg",
         "img/mazda-2-2019/foto-3.jpg",
         "img/mazda-2-2019/foto-4.jpg",
         "img/mazda-2-2019/foto-5.jpg",
         "img/mazda-2-2019/foto-6.jpg",
         "img/mazda-2-2019/foto-7.jpg",
         "img/mazda-2-2019/foto-8.jpg",
         "img/mazda-2-2019/foto-9.jpg",
         "img/mazda-2-2019/foto-10.jpg",
         "img/mazda-2-2019/foto-11.jpg",
         "img/mazda-2-2019/foto-12.jpg",
         "img/mazda-2-2019/foto-13.jpg",
         "img/mazda-2-2019/foto-14.jpg",
         "img/mazda-2-2019/foto-15.jpg",
         "img/mazda-2-2019/foto-16.jpg"
      ],
      "especificaciones" : {
         "linea" : "2",
         "motor" : "1.5L SKYACTIV-G",
         "modelo" : "2019",
         "traccion" : "4X2",
         "combustible" : "GASOLINA",
         "transmision" : "MECÁNICA 6 VELOCIDADES",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "marca" : "MAZDA",
         "uso" : "78.956 KILÓMETROS",
         "version" : "TOURING SKYACTIV-G",
         "color" : "GRIS METEORO / MACHINE GREY METALIZADO"
      },
      "disponibilidad" : "Entrega inmediata",
      "numRemate" : "246787937353528",
      "id" : "mazda-2-2019",
      "ciudad" : "PEREIRA",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026"
   },
   {
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "color" : "BLANCO POLAR / BLANCO",
         "marca" : "KIA",
         "uso" : "126.656 KILÓMETROS",
         "version" : "EX FULL EQUIPO",
         "combustible" : "GASOLINA",
         "transmision" : "MECÁNICA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "modelo" : "2016",
         "traccion" : "4X2",
         "motor" : "1.25L DOHC 16V",
         "linea" : "PICANTO"
      },
      "fotos" : [
         "img/kia-picanto-ex-2016/foto-4.jpg",
         "img/kia-picanto-ex-2016/foto-1.jpg",
         "img/kia-picanto-ex-2016/foto-2.jpg",
         "img/kia-picanto-ex-2016/foto-3.jpg",
         "img/kia-picanto-ex-2016/foto-5.jpg",
         "img/kia-picanto-ex-2016/foto-6.jpg",
         "img/kia-picanto-ex-2016/foto-7.jpg",
         "img/kia-picanto-ex-2016/foto-8.jpg",
         "img/kia-picanto-ex-2016/foto-9.jpg",
         "img/kia-picanto-ex-2016/foto-10.jpg"
      ],
      "numRemate" : "246787937353529",
      "id" : "kia-picanto-ex-2016",
      "ciudad" : "PEREIRA",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "fechaPublicacion" : "05/09/2026",
      "departamento" : "Risaralda",
      "titulo" : "KIA PICANTO EX",
      "tipo" : "Vehículo",
      "precio" : 17800000,
      "subtipo" : "Automóvil",
      "descripcion" : "Kia Picanto EX color blanco polar modelo 2016 con 126.656 km. Versión full equipo con carrocería en pulcro color blanco, 4 vidrios eléctricos, exploradoras, aire acondicionado potente, frenos ABS y dirección electroasistida. Muy económico y maniobrable."
   },
   {
      "precio" : 26000000,
      "subtipo" : "Camioneta / SUV",
      "descripcion" : "Kia New Sportage color negro ébano metalizado modelo 2011 con 126.360 km. Imponente camioneta SUV con carrocería en negro brillante, rines oscuros de lujo, tracción 4x4 AWD, mandos en el timón, gran estabilidad y excelente altura sobre el suelo.",
      "titulo" : "KIA NEW SPORTAGE",
      "tipo" : "Vehículo",
      "ciudad" : "PEREIRA",
      "fechaPublicacion" : "05/09/2026",
      "departamento" : "Risaralda",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "especificaciones" : {
         "traccion" : "4X2",
         "modelo" : "2011",
         "motor" : "2.0L DOHC CVVT",
         "linea" : "SPORTAGE",
         "color" : "NEGRO ÉBANO METALIZADO / NEGRO",
         "version" : "REVOLUTION / NEW SPORTAGE",
         "uso" : "126.360 KILÓMETROS",
         "marca" : "KIA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA 4X2",
         "combustible" : "GASOLINA"
      },
      "disponibilidad" : "Entrega inmediata",
      "fotos" : [
         "img/kia-sportage-2011/foto-12.jpg",
         "img/kia-sportage-2011/foto-1.jpg",
         "img/kia-sportage-2011/foto-2.jpg",
         "img/kia-sportage-2011/foto-3.jpg",
         "img/kia-sportage-2011/foto-4.jpg",
         "img/kia-sportage-2011/foto-5.jpg",
         "img/kia-sportage-2011/foto-6.jpg",
         "img/kia-sportage-2011/foto-7.jpg",
         "img/kia-sportage-2011/foto-8.jpg",
         "img/kia-sportage-2011/foto-9.jpg",
         "img/kia-sportage-2011/foto-10.jpg",
         "img/kia-sportage-2011/foto-11.jpg"
      ],
      "id" : "kia-sportage-2011",
      "numRemate" : "246787937353530"
   },
   {
      "precio" : 18000000,
      "subtipo" : "Automóvil",
      "descripcion" : "Kia Cerato Forte color negro metalizado modelo 2010 con 178.161 km. Elegante sedán con carrocería en negro brillante, techo corredizo (sunroof), rines de aluminio de fábrica, espacioso habitáculo, frenos de disco en las cuatro ruedas y aire acondicionado.",
      "titulo" : "KIA CERATO FORTE",
      "tipo" : "Vehículo",
      "ciudad" : "PEREIRA",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "fotos" : [
         "img/kia-cerato-forte-2010/foto-1.jpg",
         "img/kia-cerato-forte-2010/foto-2.jpg",
         "img/kia-cerato-forte-2010/foto-3.jpg",
         "img/kia-cerato-forte-2010/foto-4.jpg",
         "img/kia-cerato-forte-2010/foto-5.jpg",
         "img/kia-cerato-forte-2010/foto-6.jpg",
         "img/kia-cerato-forte-2010/foto-7.jpg",
         "img/kia-cerato-forte-2010/foto-8.jpg",
         "img/kia-cerato-forte-2010/foto-9.jpg",
         "img/kia-cerato-forte-2010/foto-10.jpg",
         "img/kia-cerato-forte-2010/foto-11.jpg"
      ],
      "especificaciones" : {
         "version" : "FORTE SX",
         "marca" : "KIA",
         "uso" : "178.161 KILÓMETROS",
         "color" : "NEGRO METALIZADO / NEGRO",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA",
         "combustible" : "GASOLINA",
         "traccion" : "4X2",
         "modelo" : "2010",
         "linea" : "CERATO",
         "motor" : "1.6L DOHC CVVT"
      },
      "disponibilidad" : "Entrega inmediata",
      "numRemate" : "246787937353531",
      "id" : "kia-cerato-forte-2010"
   },
   {
      "descripcion" : "Hyundai Tucson NX4 color gris titanio metalizado modelo 2024 con 44.803 km. Diseño vanguardista con parrilla paramétrica oscura y luces LED ocultas, centro multimedia con Apple CarPlay / Android Auto, cámara de reversa y sofisticado tono gris titanio.",
      "precio" : 38000000,
      "subtipo" : "Camioneta / SUV",
      "tipo" : "Vehículo",
      "titulo" : "HYUNDAI TUCSON",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "ciudad" : "PEREIRA",
      "numRemate" : "246787937353532",
      "id" : "hyundai-tucson-2024",
      "fotos" : [
         "img/hyundai-tucson-2024/foto-1.jpg",
         "img/hyundai-tucson-2024/foto-2.jpg",
         "img/hyundai-tucson-2024/foto-3.jpg",
         "img/hyundai-tucson-2024/foto-4.jpg",
         "img/hyundai-tucson-2024/foto-5.jpg",
         "img/hyundai-tucson-2024/foto-6.jpg",
         "img/hyundai-tucson-2024/foto-7.jpg",
         "img/hyundai-tucson-2024/foto-8.jpg",
         "img/hyundai-tucson-2024/foto-9.jpg",
         "img/hyundai-tucson-2024/foto-10.jpg",
         "img/hyundai-tucson-2024/foto-11.jpg",
         "img/hyundai-tucson-2024/foto-12.jpg",
         "img/hyundai-tucson-2024/foto-13.jpg",
         "img/hyundai-tucson-2024/foto-14.jpg"
      ],
      "especificaciones" : {
         "uso" : "44.803 KILÓMETROS",
         "marca" : "HYUNDAI",
         "version" : "NX4 AT FULL",
         "color" : "GRIS TITANIO METALIZADO / GRIS OSCURO",
         "combustible" : "GASOLINA",
         "transmision" : "AUTOMÁTICA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "modelo" : "2024",
         "traccion" : "4X2",
         "linea" : "TUCSON",
         "motor" : "2.0L SMARTSTREAM"
      },
      "disponibilidad" : "Entrega inmediata"
   },
   {
      "ciudad" : "PEREIRA",
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "color" : "BLANCO GLACIAR / BLANCO ÁRTICO",
         "uso" : "142 KILÓMETROS",
         "marca" : "RENAULT",
         "version" : "INTENS 1.3 TURBO 4X4",
         "combustible" : "GASOLINA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA 6 VELOCIDADES",
         "modelo" : "2026",
         "traccion" : "4X4 ALL MODE",
         "motor" : "1.3L TCe TURBO",
         "linea" : "DUSTER"
      },
      "fotos" : [
         "img/renault-duster-2026/foto-1.jpg",
         "img/renault-duster-2026/foto-2.jpg",
         "img/renault-duster-2026/foto-3.jpg",
         "img/renault-duster-2026/foto-4.jpg",
         "img/renault-duster-2026/foto-5.jpg",
         "img/renault-duster-2026/foto-6.jpg",
         "img/renault-duster-2026/foto-7.jpg",
         "img/renault-duster-2026/foto-8.jpg",
         "img/renault-duster-2026/foto-9.jpg",
         "img/renault-duster-2026/foto-10.jpg"
      ],
      "id" : "renault-duster-2026",
      "numRemate" : "246787937353533",
      "subtipo" : "Camioneta / SUV",
      "precio" : 34000000,
      "descripcion" : "Renault Duster Iconic 4x4 color blanco glaciar modelo 2026 con tan solo 142 km (estado de concesionario). Carrocería blanca con barras de techo y detalles Iconic, potente motor turbo 1.3L, tracción 4x4, pantalla táctil y suspensión reforzada.",
      "titulo" : "RENAULT DUSTER",
      "tipo" : "Vehículo"
   },
   {
      "descripcion" : "Toyota Hilux Doble Cabina 4x4 color blanco polar modelo 2013 con 144.887 km. La pick-up más apetecida y robusta, carrocería en blanco puro con rines oscuros de lujo, estribos, carpa plana, motor turbo diésel 4x4 con fuerza inigualable y mantenimiento al día.",
      "precio" : 62000000,
      "subtipo" : "Camioneta / SUV",
      "tipo" : "Vehículo",
      "titulo" : "TOYOTA HILUX",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "ciudad" : "PEREIRA",
      "id" : "toyota-hilux-2013",
      "numRemate" : "246787937353534",
      "especificaciones" : {
         "motor" : "2.5L / 3.0L D-4D DIESEL",
         "linea" : "HILUX",
         "modelo" : "2013",
         "traccion" : "4X4 CON BAJO",
         "combustible" : "DIESEL",
         "transmision" : "MECÁNICA 4X4",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "color" : "BLANCO POLAR / BLANCO",
         "uso" : "144.887 KILÓMETROS",
         "marca" : "TOYOTA",
         "version" : "DOBLE CABINA 4X4 DIESEL"
      },
      "disponibilidad" : "Entrega inmediata",
      "fotos" : [
         "img/toyota-hilux-2013/foto-3.jpg",
         "img/toyota-hilux-2013/foto-1.jpg",
         "img/toyota-hilux-2013/foto-2.jpg",
         "img/toyota-hilux-2013/foto-4.jpg",
         "img/toyota-hilux-2013/foto-5.jpg"
      ]
   },
   {
      "tipo" : "Vehículo",
      "titulo" : "CHEVROLET LUV TFR",
      "descripcion" : "Chevrolet Luv TFR color blanco modelo 2004 con 158.443 km. Vehículo de trabajo pesado con cabina blanca, estacas en madera con carpa protectora, resistente chasis y motor de gran fiabilidad para transporte y carga.",
      "subtipo" : "Camioneta / SUV",
      "precio" : 19000000,
      "numRemate" : "246787937353535",
      "id" : "chevrolet-luv-tfr-2004",
      "fotos" : [
         "img/chevrolet-luv-tfr-2004/foto-1.jpg",
         "img/chevrolet-luv-tfr-2004/foto-2.jpg",
         "img/chevrolet-luv-tfr-2004/foto-3.jpg",
         "img/chevrolet-luv-tfr-2004/foto-4.jpg",
         "img/chevrolet-luv-tfr-2004/foto-5.jpg",
         "img/chevrolet-luv-tfr-2004/foto-6.jpg",
         "img/chevrolet-luv-tfr-2004/foto-7.jpg",
         "img/chevrolet-luv-tfr-2004/foto-8.jpg"
      ],
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "modelo" : "2004",
         "traccion" : "4X2",
         "motor" : "2.3L ISUZU",
         "linea" : "LUV",
         "color" : "BLANCO (ESTACAS CON CARPA)",
         "marca" : "CHEVROLET",
         "uso" : "158.443 KILÓMETROS",
         "version" : "TFR ESTACAS / PLATÓN",
         "combustible" : "GASOLINA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA"
      },
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "ciudad" : "PEREIRA"
   },
   {
      "fotos" : [
         "img/chevrolet-luv-dmax-2016/foto-1.jpg",
         "img/chevrolet-luv-dmax-2016/foto-2.jpg",
         "img/chevrolet-luv-dmax-2016/foto-3.jpg",
         "img/chevrolet-luv-dmax-2016/foto-4.jpg",
         "img/chevrolet-luv-dmax-2016/foto-5.jpg",
         "img/chevrolet-luv-dmax-2016/foto-6.jpg",
         "img/chevrolet-luv-dmax-2016/foto-7.jpg"
      ],
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "version" : "DOBLE CABINA 4X4",
         "marca" : "CHEVROLET",
         "color" : "PLATA METALIZADO / GRIS PLATA",
         "traccion" : "4X4",
         "modelo" : "2016",
         "transmision" : "MECÁNICA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "combustible" : "DIESEL",
         "uso" : "189.700 KILÓMETROS",
         "linea" : "LUV D-MAX",
         "motor" : "2.5L / 3.0L TURBO DIESEL"
      },
      "id" : "chevrolet-luv-dmax-2016",
      "numRemate" : "246787937353536",
      "ciudad" : "PEREIRA",
      "fechaPublicacion" : "05/09/2026",
      "departamento" : "Risaralda",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "titulo" : "CHEVROLET LUV DMAX",
      "tipo" : "Vehículo",
      "subtipo" : "Camioneta / SUV",
      "precio" : 35000000,
      "descripcion" : "Chevrolet Luv D-Max 4x4 color plata metalizado modelo 2016 con 189.700 km. Camioneta doble cabina con carrocería en tono plata brillante, rines oscuros deportivos, estribos laterales, motor turbo diésel de alto rendimiento y platón espacioso."
   },
   {
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA 4X4",
         "combustible" : "GASOLINA",
         "version" : "4X4 V6",
         "uso" : "238.000 KILÓMETROS",
         "marca" : "CHEVROLET",
         "color" : "VERDE BOSQUE METALIZADO / VERDE OSCURO",
         "linea" : "RODEO",
         "motor" : "3.2L V6",
         "traccion" : "4X4 CON BAJO",
         "modelo" : "1997"
      },
      "fotos" : [
         "img/chevrolet-rodeo-1997/foto-1.jpg",
         "img/chevrolet-rodeo-1997/foto-2.jpg",
         "img/chevrolet-rodeo-1997/foto-3.jpg",
         "img/chevrolet-rodeo-1997/foto-4.jpg",
         "img/chevrolet-rodeo-1997/foto-5.jpg",
         "img/chevrolet-rodeo-1997/foto-6.jpg",
         "img/chevrolet-rodeo-1997/foto-7.jpg",
         "img/chevrolet-rodeo-1997/foto-8.jpg",
         "img/chevrolet-rodeo-1997/foto-9.jpg"
      ],
      "id" : "chevrolet-rodeo-1997",
      "numRemate" : "246787937353537",
      "ciudad" : "PEREIRA",
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "titulo" : "CHEVROLET RODEO",
      "tipo" : "Vehículo",
      "subtipo" : "Camioneta / SUV",
      "precio" : 21000000,
      "descripcion" : "Chevrolet Rodeo 4x4 color verde bosque metalizado modelo 1997 con 238.000 km. Robusta camioneta clásica con carrocería verde oscuro metalizado, platón de estacas en madera barnizada, exploradoras LED, tracción 4x4 con bajo y excelente fuerza motriz."
   },
   {
      "tipo" : "Vehículo",
      "titulo" : "KIA PICANTO LX",
      "descripcion" : "Kia Picanto LX color gris plata metalizado modelo 2015 con 131.827 km. Práctico y económico hatchback urbano en moderno tono gris plata, exploradoras delanteras, dirección asistida, aire acondicionado y bajo consumo de combustible.",
      "subtipo" : "Automóvil",
      "precio" : 16200000,
      "numRemate" : "246787937353538",
      "id" : "kia-picanto-lx-2015",
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "uso" : "131.827 KILÓMETROS",
         "marca" : "KIA",
         "version" : "LX ION",
         "color" : "GRIS PLATA / GRIS CLARO METALIZADO",
         "combustible" : "GASOLINA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA",
         "modelo" : "2015",
         "traccion" : "4X2",
         "linea" : "PICANTO",
         "motor" : "1.0L / 1.25L"
      },
      "fotos" : [
         "img/kia-picanto-lx-2015/foto-2.jpg",
         "img/kia-picanto-lx-2015/foto-1.jpg",
         "img/kia-picanto-lx-2015/foto-3.jpg",
         "img/kia-picanto-lx-2015/foto-4.jpg",
         "img/kia-picanto-lx-2015/foto-5.jpg",
         "img/kia-picanto-lx-2015/foto-6.jpg",
         "img/kia-picanto-lx-2015/foto-7.jpg",
         "img/kia-picanto-lx-2015/foto-8.jpg",
         "img/kia-picanto-lx-2015/foto-9.jpg",
         "img/kia-picanto-lx-2015/foto-10.jpg"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "ciudad" : "PEREIRA"
   },
   {
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "motor" : "1.6L 8V",
         "linea" : "SANDERO",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA",
         "combustible" : "GASOLINA",
         "uso" : "86.331 KILÓMETROS",
         "traccion" : "4X2",
         "modelo" : "2019",
         "color" : "GRIS ESTRELLA METALIZADO / GRIS PLATA",
         "version" : "LIFE / ZEN",
         "marca" : "RENAULT"
      },
      "fotos" : [
         "img/renault-sandero-2019/foto-8.jpg",
         "img/renault-sandero-2019/foto-1.jpg",
         "img/renault-sandero-2019/foto-2.jpg",
         "img/renault-sandero-2019/foto-3.jpg",
         "img/renault-sandero-2019/foto-4.jpg",
         "img/renault-sandero-2019/foto-5.jpg",
         "img/renault-sandero-2019/foto-6.jpg",
         "img/renault-sandero-2019/foto-7.jpg",
         "img/renault-sandero-2019/foto-9.jpg",
         "img/renault-sandero-2019/foto-10.jpg",
         "img/renault-sandero-2019/foto-11.jpg"
      ],
      "numRemate" : "246787937353539",
      "id" : "renault-sandero-2019",
      "ciudad" : "PEREIRA",
      "fechaPublicacion" : "05/09/2026",
      "departamento" : "Risaralda",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "titulo" : "RENAULT SANDERO",
      "tipo" : "Vehículo",
      "precio" : 18000000,
      "subtipo" : "Automóvil",
      "descripcion" : "Renault Sandero color gris estrella metalizado modelo 2019 con 86.331 km. Carrocería en impecable gris plata metalizado con techo oscuro, sistema de frenos ABS, doble airbag de seguridad, aire acondicionado y amplio espacio interior para toda la familia."
   },
   {
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "ciudad" : "PEREIRA",
      "id" : "honda-wr-v-2019",
      "numRemate" : "246787937353540",
      "especificaciones" : {
         "color" : "GRIS MODERNO METALIZADO / GRIS OSCURO",
         "uso" : "103.069 KILÓMETROS",
         "marca" : "HONDA",
         "version" : "LXC CVT AUTOMÁTICA",
         "combustible" : "GASOLINA",
         "transmision" : "AUTOMÁTICA CVT",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "modelo" : "2019",
         "traccion" : "4X2",
         "motor" : "1.5L i-VTEC",
         "linea" : "WR-V"
      },
      "disponibilidad" : "Entrega inmediata",
      "fotos" : [
         "img/honda-wr-v-2019/foto-8.jpg",
         "img/honda-wr-v-2019/foto-1.jpg",
         "img/honda-wr-v-2019/foto-2.jpg",
         "img/honda-wr-v-2019/foto-3.jpg",
         "img/honda-wr-v-2019/foto-4.jpg",
         "img/honda-wr-v-2019/foto-5.jpg",
         "img/honda-wr-v-2019/foto-6.jpg",
         "img/honda-wr-v-2019/foto-7.jpg",
         "img/honda-wr-v-2019/foto-9.jpg",
         "img/honda-wr-v-2019/foto-10.jpg"
      ],
      "descripcion" : "Honda WR-V LXC CVT color gris moderno metalizado modelo 2019 con 103.069 km. Crossover compacto de gran altura libre al piso en tono gris acero metalizado, suave transmisión automática CVT, motor i-VTEC eficiente y sistema inteligente de asientos Ultra Seat.",
      "subtipo" : "Camioneta / SUV",
      "precio" : 21000000,
      "tipo" : "Vehículo",
      "titulo" : "HONDA WR-V LXC CVT"
   },
   {
      "tipo" : "Vehículo",
      "titulo" : "CHEVROLET SPARK GT",
      "descripcion" : "Chevrolet Spark GT color verde lima metalizado modelo 2011 con 113.366 km. Atractivo y juvenil diseño en verde manzana metalizado con techo y rines oscuros de lujo, aire acondicionado, vidrios eléctricos y excelente rendimiento en ciudad.",
      "subtipo" : "Automóvil",
      "precio" : 13000000,
      "numRemate" : "246787937353522",
      "id" : "spark-gt-2011",
      "disponibilidad" : "Entrega inmediata",
      "especificaciones" : {
         "linea" : "SPARK GT",
         "motor" : "1.2L DOHC",
         "modelo" : "2011",
         "traccion" : "4x2",
         "combustible" : "GASOLINA",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA",
         "uso" : "113.366 KILÓMETROS",
         "marca" : "CHEVROLET",
         "version" : "FULL EQUIPO",
         "color" : "VERDE LIMA METALIZADO / VERDE MANZANA"
      },
      "fotos" : [
         "img/spark-gt/foto-1.jpg",
         "img/spark-gt/foto-2.jpg",
         "img/spark-gt/foto-3.jpg",
         "img/spark-gt/foto-4.jpg",
         "img/spark-gt/foto-5.jpg",
         "img/spark-gt/foto-6.jpg",
         "img/spark-gt/foto-7.jpg",
         "img/spark-gt/foto-8.jpg",
         "img/spark-gt/foto-9.jpg",
         "img/spark-gt/foto-10.jpg"
      ],
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "ciudad" : "PEREIRA"
   },
   {
      "departamento" : "Risaralda",
      "fechaPublicacion" : "05/09/2026",
      "documentacion" : [
         "Soat nuevo",
         "Técnico mecánico nuevo",
         "Impuestos Pagos",
         "Certificado de tradición y libertad",
         "Paz y salvo entidad BANCARIA",
         "Paz y salvo de la entidad rematante",
         "Peritaje realizado por (COLSERAUTO o AUTOMAS)",
         "Vehiculo 100% asegurable",
         "Sin deudas o pendientes en la entidad financiera",
         "Envío de documentos por la entidad (ÍNTER-RAPIDÍSIMO)",
         "Traslado del vehículo a cualquier ciudad del país (CAMA BAJA o NIÑERA)",
         "Traspaso a nombre del usuario"
      ],
      "ciudad" : "PEREIRA",
      "numRemate" : "21123433553",
      "id" : "spark-go-2010",
      "fotos" : [
         "img/spark-go/foto-1.jpg",
         "img/spark-go/foto-2.jpg",
         "img/spark-go/foto-3.jpg",
         "img/spark-go/foto-4.jpg",
         "img/spark-go/foto-5.jpg",
         "img/spark-go/foto-6.jpg",
         "img/spark-go/foto-7.jpg",
         "img/spark-go/foto-8.jpg",
         "img/spark-go/foto-9.jpg",
         "img/spark-go/foto-10.jpg"
      ],
      "especificaciones" : {
         "traccion" : "4x2",
         "modelo" : "2010",
         "version" : "ESTÁNDAR",
         "marca" : "CHEVROLET",
         "color" : "GRIS BEIGE METALIZADO / CHAMPAGNE",
         "linea" : "SPARK GO",
         "motor" : "1.0L",
         "uso" : "192.886 KILÓMETROS",
         "llaves" : "2 LLAVES 🔑🔑 ORIGINALES",
         "transmision" : "MECÁNICA",
         "combustible" : "GASOLINA"
      },
      "disponibilidad" : "Entrega inmediata",
      "descripcion" : "Chevrolet Spark GO color champagne (gris beige metalizado) modelo 2010 con 192.886 km. Económico hatchback en elegante color champagne, rines de aleación, farolas deportivas, excelente rendimiento de gasolina e ideal para transporte urbano diario.",
      "subtipo" : "Automóvil",
      "precio" : 10500000,
      "tipo" : "Vehículo",
      "titulo" : "CHEVROLET SPARK GO"
   }
]
;

function header() {
  return `
  <div class="govco-bar">
    <div class="govco-container">
      <img src="govco.png" alt="Portal del Estado Colombiano - GOV.CO" class="govco-logo">
    </div>
  </div>
  <header>
    <a href="index.html" class="logo-container" onclick="if(location.pathname.endsWith('index.html') || location.pathname.endsWith('/') || location.pathname === ''){event.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}else{window.location.href='index.html';}">
      <img src="logo.png" alt="Logo DIAN" class="brand-logo" onerror="this.src='dianlogo.jpg'">
      <div class="logo-text">${NEGOCIO.nombre}</div>
    </a>
    <nav>
      <a href="index.html">Inicio</a>
      <a href="index.html#bienes" onclick="if(document.getElementById('bienes')){event.preventDefault();document.getElementById('bienes').scrollIntoView({behavior:'smooth'});}">Bienes en Remate</a>
      <a href="index.html#postulacion" onclick="if(document.getElementById('postulacion')){event.preventDefault();document.getElementById('postulacion').scrollIntoView({behavior:'smooth'});}">Postularse</a>
      <a href="index.html#postulacion" onclick="if(document.getElementById('postulacion')){event.preventDefault();document.getElementById('postulacion').scrollIntoView({behavior:'smooth'});}">Contacto</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer>
    <div class="wrap">
      <div>
        <h3>${NEGOCIO.nombre}</h3>
        <p><b>Dirección:</b> ${NEGOCIO.direccion}</p>
        <p><b>Correo electrónico:</b> <a href="${MAILTO}">${NEGOCIO.correo}</a></p>
      </div>
      <div>
        <h3>Canales de Atención Directa</h3>
        <p><b>WhatsApp Oficial:</b> <a href="${WA}" target="_blank">+57 ${NEGOCIO.telefono}</a></p>
        <p><b>Correo Electrónico:</b> <a href="${MAILTO}">${NEGOCIO.correo}</a></p>
        <div style="margin-top:10px">
          <a class="btn-action btn-wa" href="${WA}" target="_blank" style="display:inline-block;padding:10px 16px">💬 Enviar mensaje directo por WhatsApp</a>
        </div>
      </div>
    </div>
    <div class="footer-institutional-bar">
      <div class="institutional-logos-wrap">
        <img src="govco.png" alt="GOV.CO" class="inst-logo">
        <img src="dianlogo.jpg" alt="DIAN" class="inst-logo">
        <img src="LOGO_PLAN_DE_DESARROLLO_COLOMBIA_POTENCIA_DE_LA_VIDA_2022-2026.png" alt="Colombia Potencia de la Vida" class="inst-logo">
      </div>
    </div>
  </footer>`;
}

function photo(v) {
  return v.fotos && v.fotos[0] ? `style="background-image:url('${v.fotos[0]}')"` : '';
}

function formPostulacionHTML(vehiculoTitulo, vehiculoNum) {
  const labelVehiculo = vehiculoTitulo ? `${vehiculoTitulo} (Remate #${vehiculoNum || ''})` : '';
  const vehicleOptions = (typeof INITIAL_VEHICLES !== 'undefined' ? INITIAL_VEHICLES : []).map(v => 
    `<option value="${v.titulo} (${v.especificaciones ? v.especificaciones.modelo : ''} - Remate #${v.numRemate || ''})">${v.titulo} ${v.especificaciones ? v.especificaciones.modelo : ''} - Remate #${v.numRemate || ''}</option>`
  ).join('');

  return `<form id="f-postulacion" class="box" style="border-top:4px solid var(--verde)">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
      <span style="font-size:1.4rem;color:var(--verde)">👥</span>
      <h3 style="margin:0;color:var(--oscuro);font-size:1.2rem">Postulación al Remate</h3>
    </div>
    <p style="font-size:0.83rem;color:#64748b;margin-bottom:18px">Diligencie los datos requeridos para registrar su postulación oficial.</p>
    
    ${labelVehiculo 
      ? `<input type="hidden" name="vehiculo" value="${labelVehiculo}">`
      : `<div class="field-group" style="margin-bottom:14px">
           <label>Vehículo / Remate de su interés *</label>
           <select name="vehiculo" required style="width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:6px;font-size:0.9rem">
             <option value="">-- Seleccione el vehículo que le interesa --</option>
             ${vehicleOptions}
             <option value="Interés general en remates de vehículos">Interés general en remates de vehículos</option>
           </select>
         </div>`
    }

    <div class="two">
      <div class="field-group"><label>Nombres *</label><input name="nombre" required placeholder="Ej. Carlos Alberto"></div>
      <div class="field-group"><label>Apellidos *</label><input name="apellidos" required placeholder="Ej. Gómez Rodríguez"></div>
    </div>

    <div class="two" style="margin-top:12px">
      <div class="field-group">
        <label>Tipo de documento *</label>
        <select name="tipo_doc" required>
          <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
          <option value="Cédula de Extranjería">Cédula de Extranjería</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="NIT">NIT</option>
        </select>
      </div>
      <div class="field-group">
        <label>Número de documento *</label>
        <input name="num_doc" required placeholder="Sin puntos ni comas">
      </div>
    </div>

    <div class="two" style="margin-top:12px">
      <div class="field-group"><label>Número de contacto / WhatsApp *</label><input name="telefono" required placeholder="Ej. 3170580966"></div>
      <div class="field-group"><label>Correo electrónico *</label><input name="correo" type="email" required placeholder="correo@ejemplo.com"></div>
    </div>

    <div class="field-group" style="margin-top:12px">
      <label>Dirección completa de correspondencia *</label>
      <input name="direccion" required placeholder="Dirección, Barrio, Ciudad...">
    </div>

    <label style="font-size:0.8rem;font-weight:400;margin-top:14px;display:flex;align-items:flex-start;gap:8px;line-height:1.4">
      <input type="checkbox" name="acepta" style="width:auto;margin-top:2px" required checked>
      <span>Acepto el tratamiento de mis datos personales para la gestión de este remate conforme a las políticas del sitio.</span>
    </label>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px">
      <button type="submit" id="btn-submit-web" class="btn-buscar" style="margin:0;max-width:100%;background:var(--verde);padding:12px;font-size:0.95rem">
        Postularme en la Web
      </button>
      <button type="button" id="btn-submit-wa" class="btn-buscar" style="margin:0;max-width:100%;background:#16a34a;padding:12px;font-size:0.95rem">
        💬 Postularme por WhatsApp
      </button>
    </div>

    <div id="res-postulacion"></div>
  </form>`;
}

function bindPostulacionForm(vehiculoTitulo, vehiculoNum) {
  const formEl = document.getElementById('f-postulacion');
  if (!formEl) return;

  function procesarFormulario(e) {
    const d = Object.fromEntries(new FormData(formEl));
    d.acepta = !!formEl.acepta.checked;
    d.tipo_solicitud = 'Postulación al Remate';
    d.id = 'post-' + Date.now().toString() + '-' + Math.floor(Math.random() * 1000);
    d.fecha = new Date().toISOString();
    d.leido = false;
    if (!d.vehiculo && vehiculoTitulo) {
      d.vehiculo = `${vehiculoTitulo} (Remate #${vehiculoNum || ''})`;
    }
    d.mensaje = `Documento: ${d.tipo_doc || ''} ${d.num_doc || ''} | Dirección: ${d.direccion || ''}`;
    return d;
  }

  async function guardarYNotificar(d) {
    // 1. Guardar en localStorage
    try {
      const locMsgs = JSON.parse(localStorage.getItem('postulaciones_locales') || '[]');
      locMsgs.unshift(d);
      localStorage.setItem('postulaciones_locales', JSON.stringify(locMsgs));
    } catch(err) {}

    // 2. Guardar en sessionStorage
    try {
      const sesMsgs = JSON.parse(sessionStorage.getItem('postulaciones_locales') || '[]');
      sesMsgs.unshift(d);
      sessionStorage.setItem('postulaciones_locales', JSON.stringify(sesMsgs));
    } catch(err) {}

    // 3. Notificar en tiempo real vía BroadcastChannel (sincroniza pestañas abiertas)
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        const bc = new BroadcastChannel('remates_channel');
        bc.postMessage({ type: 'NUEVA_POSTULACION', data: d });
        bc.close();
      }
    } catch(err) {}

    // 4. Enviar al backend HTTP (mismo origen y fallback localhost:3000)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(d)
      });
    } catch(err) {
      try {
        await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(d)
        });
      } catch(err2) {}
    }
  }

  // 1. Envío exclusivo a la Web (Panel Admin)
  formEl.onsubmit = async e => {
    e.preventDefault();
    const btnSubmit = document.getElementById('btn-submit-web');
    if (btnSubmit) { btnSubmit.disabled = true; btnSubmit.textContent = 'Enviando...'; }

    const d = procesarFormulario(e);
    await guardarYNotificar(d);

    const el = document.getElementById('res-postulacion');
    el.className = 'msg ok';
    el.innerHTML = '<b>¡Postulación recibida con éxito!</b> Su solicitud ha sido radicada correctamente en el sistema. Un asesor oficial se comunicará con usted en breve para validar sus datos y continuar con el proceso.';
    formEl.reset();

    if (btnSubmit) { btnSubmit.disabled = false; btnSubmit.textContent = 'Postularme en la Web'; }
  };

  // 2. Envío a WhatsApp
  const btnWa = document.getElementById('btn-submit-wa');
  if (btnWa) {
    btnWa.onclick = async e => {
      if (!formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      const d = procesarFormulario(e);
      await guardarYNotificar(d);

      const bienTexto = d.vehiculo || (vehiculoTitulo ? `${vehiculoTitulo} (Remate #${vehiculoNum || ''})` : 'Remate de Vehículo');
      const waText = `*POSTULACIÓN OFICIAL AL REMATE* 🚗
----------------------------------
📌 *Bien:* ${bienTexto}
👤 *Nombres:* ${d.nombre} ${d.apellidos}
🪪 *Documento:* ${d.tipo_doc} ${d.num_doc}
📱 *Teléfono:* ${d.telefono}
✉️ *Correo:* ${d.correo}
📍 *Dirección:* ${d.direccion}`;

      const waLink = `https://wa.me/573170580966?text=${encodeURIComponent(waText)}`;

      const el = document.getElementById('res-postulacion');
      el.className = 'msg ok';
      el.innerHTML = '<b>¡Postulación registrada!</b> Redirigiendo a WhatsApp... <a href="' + waLink + '" target="_blank" style="color:#000;font-weight:700;text-decoration:underline">Haz clic aquí si no abre</a>.';

      window.open(waLink, '_blank');
      formEl.reset();
    };
  }
}
