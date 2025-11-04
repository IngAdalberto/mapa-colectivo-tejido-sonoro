// resources/comunicadores.js
// Datos de comunicadores por municipio (2 por municipio, 2 trabajos cada uno).
// Rutas de logo son sugeridas: img/comunicadores/<municipio>/<logo>.png
// Ajusta rutas/nombres según tus archivos reales.

(function(){
  window.comunicadores = window.comunicadores || {};

  window.comunicadores = {
    "Agustín Codazzi": [
      {
        logo: "img/comunicadores/agustin/logo1.png",
        titulo: "Radio Codazzi FM",
        slogan: "La voz del valle",
        info: "Emisora comunitaria con enfoque en agricultura, cultura y noticias locales.",
        sitio: "https://radiocodazzi.example.org",
        trabajos: [
          "https://youtu.be/example_codazzi_1",
          "https://vimeo.com/example_codazzi_2"
        ]
      },
      {
        logo: "img/comunicadores/agustin/logo2.png",
        titulo: "Canal Tejido Sonoro",
        slogan: "Historias del corredor",
        info: "Productora audiovisual local, documentales y piezas sonoras comunitarias.",
        sitio: "https://tejidosonoro.example.org",
        trabajos: [
          "https://youtu.be/example_codazzi_3",
          "https://vimeo.com/example_codazzi_4"
        ]
      }
    ],

    "Becerril": [
      {
        logo: "img/comunicadores/becerril/logo1.png",
        titulo: "Radio Becerril",
        slogan: "Voces de la serranía",
        info: "Programa radial con enfoque en minería responsable y comunidad.",
        sitio: "https://radiobecerril.example.org",
        trabajos: [
          "https://youtu.be/example_becerril_1",
          "https://vimeo.com/example_becerril_2"
        ]
      },
      {
        logo: "img/comunicadores/becerril/logo2.png",
        titulo: "Becerril Noticias TV",
        slogan: "Actualidad local",
        info: "Canal local de noticias y coberturas de eventos municipales.",
        sitio: "https://becerrilnoticias.example.org",
        trabajos: [
          "https://youtu.be/example_becerril_3",
          "https://vimeo.com/example_becerril_4"
        ]
      }
    ],

    "La Jagua de Ibirico": [
      {
        logo: "img/comunicadores/lajagua/logo1.png",
        titulo: "Radio Ibirico",
        slogan: "Entre montañas y llanos",
        info: "Emisora regional con microprogramas de memoria minera y desarrollo rural.",
        sitio: "https://radioibirico.example.org",
        trabajos: [
          "https://youtu.be/example_jagua_1",
          "https://vimeo.com/example_jagua_2"
        ]
      },
      {
        logo: "img/comunicadores/lajagua/logo2.png",
        titulo: "Aula Audiovisual Ibirico",
        slogan: "Narrativas locales",
        info: "Colectivo de producción audiovisual y formación en comunicación comunitaria.",
        sitio: "https://aulaibirico.example.org",
        trabajos: [
          "https://youtu.be/example_jagua_3",
          "https://vimeo.com/example_jagua_4"
        ]
      }
    ],

    "El Paso": [
      {
        logo: "img/comunicadores/elpaso/logo1.png",
        titulo: "Radio Río Cesar",
        slogan: "Sonidos ribereños",
        info: "Programas de pesca, cultura y economía local.",
        sitio: "https://radioriocesar.example.org",
        trabajos: [
          "https://youtu.be/example_elpaso_1",
          "https://vimeo.com/example_elpaso_2"
        ]
      },
      {
        logo: "img/comunicadores/elpaso/logo2.png",
        titulo: "El Paso TV",
        slogan: "Conectando comunidad",
        info: "Cobertura de eventos locales y reportajes sobre humedales.",
        sitio: "https://elpasotv.example.org",
        trabajos: [
          "https://youtu.be/example_elpaso_3",
          "https://vimeo.com/example_elpaso_4"
        ]
      }
    ],

    "Chiriguaná": [
      {
        logo: "img/comunicadores/chiriguana/logo1.png",
        titulo: "Chiriguaná Comunitaria",
        slogan: "Nuestra gente, nuestra voz",
        info: "Proyecto radial con énfasis en producción campesina y cultura local.",
        sitio: "https://chiriguana.radio.example.org",
        trabajos: [
          "https://youtu.be/example_chiri_1",
          "https://vimeo.com/example_chiri_2"
        ]
      },
      {
        logo: "img/comunicadores/chiriguana/logo2.png",
        titulo: "Portal Chiriguaná",
        slogan: "Noticias y memoria",
        info: "Agencia de noticias local y reportajes temáticos.",
        sitio: "https://portalchiriguana.example.org",
        trabajos: [
          "https://youtu.be/example_chiri_3",
          "https://vimeo.com/example_chiri_4"
        ]
      }
    ],

    "Chimichagua": [
      {
        logo: "img/comunicadores/chimichagua/logo1.png",
        titulo: "Radio Ciénaga",
        slogan: "Ecos de Zapatosa",
        info: "Emisora enfocada en pesca sostenible y patrimonio lacustre.",
        sitio: "https://radiocienaga.example.org",
        trabajos: [
          "https://youtu.be/example_chimi_1",
          "https://vimeo.com/example_chimi_2"
        ]
      },
      {
        logo: "img/comunicadores/chimichagua/logo2.png",
        titulo: "Chimichagua TV",
        slogan: "Historias del agua",
        info: "Productora de contenido para turismo comunitario y tradición oral.",
        sitio: "https://chimichaguatv.example.org",
        trabajos: [
          "https://youtu.be/example_chimi_3",
          "https://vimeo.com/example_chimi_4"
        ]
      }
    ],

    "El Banco": [
      {
        logo: "img/comunicadores/elbanco/logo1.png",
        titulo: "Radio El Banco",
        slogan: "Puerto y palabre",
        info: "Emisora portuaria con programación sobre comercio fluvial y cultura.",
        sitio: "https://radioelbanco.example.org",
        trabajos: [
          "https://youtu.be/example_banco_1",
          "https://vimeo.com/example_banco_2"
        ]
      },
      {
        logo: "img/comunicadores/elbanco/logo2.png",
        titulo: "Canal Magdalena",
        slogan: "Pulso ribereño",
        info: "Canal digital con reportajes y podcasts sobre el río y su gente.",
        sitio: "https://canalmagdalena.example.org",
        trabajos: [
          "https://youtu.be/example_banco_3",
          "https://vimeo.com/example_banco_4"
        ]
      }
    ]

  };
})();
