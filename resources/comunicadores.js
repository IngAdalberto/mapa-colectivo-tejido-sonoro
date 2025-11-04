// resources/comunicadores.js
// Datos de comunicadores por municipio (2 por municipio, 2 trabajos cada uno).
// Rutas de logo son sugeridas: img/comunicadores/<municipio>/<logo>.png
// Ajusta rutas/nombres según tus archivos reales.

(function(){
  window.comunicadores = window.comunicadores || {};

  window.comunicadores = {
    "AGUSTIN CODAZZI": [
      {
        logo: "img/comunicadores/agustin/logo1.jpg",
        titulo: "Gazzetta Empresarial",
        slogan: "",
        info: "Ayudamos a líderes públicos, 🏛️ emprendedores 🚀 y empresarios 💼 a comunicar lo que hacen bien. Transformamos la gestión pública, el emprendimiento y la competitividad sostenible. 🌱",
        web: "https://www.facebook.com/GazzettaEmpresarialOficial",
        email: "gazzettaempresarial@gmail.com",
        producciones: [
          {"url":"https://youtu.be/example_codazzi_1"},
          {"url":"https://vimeo.com/example_codazzi_2"}
        ]
      },
      {
        logo: "img/comunicadores/agustin/logo2.png",
        titulo: "Canal Tejido Sonoro",
        slogan: "Historias del corredor",
        info: "Productora audiovisual local, documentales y piezas sonoras comunitarias.",
        web: "https://tejidosonoro.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_codazzi_3"},
          {"url":"https://vimeo.com/example_codazzi_4"}
        ]
      }
    ],

    "Becerril": [
      {
        logo: "img/comunicadores/becerril/logo1.png",
        titulo: "Radio Becerril",
        slogan: "Voces de la serranía",
        info: "Programa radial con enfoque en minería responsable y comunidad.",
        web: "https://radiobecerril.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_becerril_1"},
          {"url":"https://vimeo.com/example_becerril_2"}
        ]
      },
      {
        logo: "img/comunicadores/becerril/logo2.png",
        titulo: "Becerril Noticias TV",
        slogan: "Actualidad local",
        info: "Canal local de noticias y coberturas de eventos municipales.",
        web: "https://becerrilnoticias.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_becerril_3"},
          {"url":"https://vimeo.com/example_becerril_4"}
        ]
      }
    ],

    "La Jagua de Ibirico": [
      {
        logo: "img/comunicadores/lajagua/logo1.png",
        titulo: "Radio Ibirico",
        slogan: "Entre montañas y llanos",
        info: "Emisora regional con microprogramas de memoria minera y desarrollo rural.",
        web: "https://radioibirico.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_jagua_1"},
          {"url":"https://vimeo.com/example_jagua_2"}
        ]
      },
      {
        logo: "img/comunicadores/lajagua/logo2.png",
        titulo: "Aula Audiovisual Ibirico",
        slogan: "Narrativas locales",
        info: "Colectivo de producción audiovisual y formación en comunicación comunitaria.",
        web: "https://aulaibirico.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_jagua_3"},
          {"url":"https://vimeo.com/example_jagua_4"}
        ]
      }
    ],

    "El Paso": [
      {
        logo: "img/comunicadores/elpaso/logo1.png",
        titulo: "Radio Río Cesar",
        slogan: "Sonidos ribereños",
        info: "Programas de pesca, cultura y economía local.",
        web: "https://radioriocesar.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_elpaso_1"},
          {"url":"https://vimeo.com/example_elpaso_2"}
        ]
      },
      {
        logo: "img/comunicadores/elpaso/logo2.png",
        titulo: "El Paso TV",
        slogan: "Conectando comunidad",
        info: "Cobertura de eventos locales y reportajes sobre humedales.",
        web: "https://elpasotv.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_elpaso_3"},
          {"url":"https://vimeo.com/example_elpaso_4"}
        ]
      }
    ],

    "Chiriguaná": [
      {
        logo: "img/comunicadores/chiriguana/logo1.png",
        titulo: "Chiriguaná Comunitaria",
        slogan: "Nuestra gente, nuestra voz",
        info: "Proyecto radial con énfasis en producción campesina y cultura local.",
        web: "https://chiriguana.radio.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_chiri_1"},
          {"url":"https://vimeo.com/example_chiri_2"}
        ]
      },
      {
        logo: "img/comunicadores/chiriguana/logo2.png",
        titulo: "Portal Chiriguaná",
        slogan: "Noticias y memoria",
        info: "Agencia de noticias local y reportajes temáticos.",
        web: "https://portalchiriguana.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_chiri_3"},
          {"url":"https://vimeo.com/example_chiri_4"}
        ]
      }
    ],

    "Chimichagua": [
      {
        logo: "img/comunicadores/chimichagua/logo1.png",
        titulo: "Radio Ciénaga",
        slogan: "Ecos de Zapatosa",
        info: "Emisora enfocada en pesca sostenible y patrimonio lacustre.",
        web: "https://radiocienaga.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_chimi_1"},
          {"url":"https://vimeo.com/example_chimi_2"}
        ]
      },
      {
        logo: "img/comunicadores/chimichagua/logo2.png",
        titulo: "Chimichagua TV",
        slogan: "Historias del agua",
        info: "Productora de contenido para turismo comunitario y tradición oral.",
        web: "https://chimichaguatv.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_chimi_3"},
          {"url":"https://vimeo.com/example_chimi_4"}
        ]
      }
    ],

    "El Banco": [
      {
        logo: "img/comunicadores/elbanco/logo1.png",
        titulo: "Radio El Banco",
        slogan: "Puerto y palabre",
        info: "Emisora portuaria con programación sobre comercio fluvial y cultura.",
        web: "https://radioelbanco.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_banco_1"},
          {"url":"https://vimeo.com/example_banco_2"}
        ]
      },
      {
        logo: "img/comunicadores/elbanco/logo2.png",
        titulo: "Canal Magdalena",
        slogan: "Pulso ribereño",
        info: "Canal digital con reportajes y podcasts sobre el río y su gente.",
        web: "https://canalmagdalena.example.org",
        email: "",
        producciones: [
          {"url":"https://youtu.be/example_banco_3"},
          {"url":"https://vimeo.com/example_banco_4"}
        ]
      }
    ]

  };
})();
