webpackJsonp([4],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MercadeoPageModule", function() { return MercadeoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercadeo__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MercadeoPageModule = /** @class */ (function () {
    function MercadeoPageModule() {
    }
    MercadeoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mercadeo__["a" /* MercadeoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mercadeo__["a" /* MercadeoPage */]),
            ],
        })
    ], MercadeoPageModule);
    return MercadeoPageModule;
}());

//# sourceMappingURL=mercadeo.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://157.230.81.230:5000/api/',
    ventasA: {
        "name": "Ventas",
        "aspects": [{
                "name": "Revisión de bitácora",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pizarrón de ventas de personal actualizado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cuenta con marcas nuevas",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cuenta con reporte de mercancía",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cuenta con un reporte de la competencia",
                "score": "",
                "comment": "",
            },
            {
                "name": "Total de personal por m2",
                "score": "",
                "comment": "",
            },
            {
                "name": "Productividad",
                "score": "",
                "comment": "",
            },
            {
                "name": "Realiza supervición de competencia",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    infrastructuraA: {
        "name": "Infrastructura",
        "aspects": [{
                "name": "Letrero en buenas condiciones",
                "score": "",
                "comment": "",
            },
            {
                "name": "Fachadas limpias",
                "score": "",
                "comment": "",
            },
            {
                "name": "Columnas limpias",
                "score": "",
                "comment": "",
            },
            {
                "name": "Muros limpios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Marquesina con iluminación",
                "score": "",
                "comment": "",
            },
            {
                "name": "Sin goteras en tienda",
                "score": "",
                "comment": "",
            },
            {
                "name": "Anuncios limpios y sin letras apagadas",
                "score": "",
                "comment": "",
            },
            {
                "name": "Extintores vigentes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cortinas metalicas sin polvo y sin manchas",
                "score": "",
                "comment": "",
            },
            {
                "name": "Toldos sin polvo",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cristales de escaparate limpios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Luminarias en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Contactos en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pintura bien aplicada en tienda",
                "score": "",
                "comment": "",
            },
            {
                "name": "Piso bien aplicado sin fisuras o desprendimiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cableado en orden y bien instalado",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    personalA: {
        "name": "Personal",
        "aspects": [{
                "name": "Presentación de presonal",
                "score": "",
                "comment": "",
            },
            {
                "name": "Actitud del personal",
                "score": "",
                "comment": "",
            },
            {
                "name": "Speech (saludo del empleado a cliente)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Buena atención en área de caja",
                "score": "",
                "comment": "",
            },
            {
                "name": "Uniforme del personal",
                "score": "",
                "comment": "",
            },
            {
                "name": "Atención del Gerente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Atención del Subgerente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Atención del cajero",
                "score": "",
                "comment": "",
            },
            {
                "name": "Atención del aparadorista",
                "score": "",
                "comment": "",
            },
            {
                "name": "Atención del vendedor",
                "score": "",
                "comment": "",
            },
            {
                "name": "Rapidez/Eficacia para la venta",
                "score": "",
                "comment": "",
            },
            {
                "name": "Conocimiento sobre el calzado",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    salaA: {
        "name": "Sala",
        "aspects": [{
                "name": "Iluminacón en sala",
                "score": "",
                "comment": "",
            },
            {
                "name": "Sillas limpias y en buen estado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Tapetes limpios y en buen estado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (barridos y trapeados)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Espejos limpios sin detalles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Aire acondicionado en función",
                "score": "",
                "comment": "",
            },
            {
                "name": "Música ambiental exclusivo de 3 Hermanos",
                "score": "",
                "comment": "",
            },
            {
                "name": "Música en volumen adecuado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Suficientes taconeras y en buen uso",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzadores suficientes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Botaderos con precios bien elaborados",
                "score": "",
                "comment": "",
            },
            {
                "name": "Botes de basura con bolsa y sin excedentes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mueble caja limpio y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cámaras de video en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pantallas encendidas",
                "score": "",
                "comment": "",
            },
            {
                "name": "Área de caja limpia sin papeles ni objetos ajenos al trabajo de caja",
                "score": "",
                "comment": "",
            },
            {
                "name": "Área de caja sin pilas de cajas de calzado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (AMAZONIA BEIGE)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Sillas en buen estado y limpias ",
                "score": "",
                "comment": "",
            },
            {
                "name": "Sanitarios limpios, dignos y en buen estado",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    publicidadA: {
        "name": "Publicidad",
        "aspects": [{
                "name": "Spots (Cajas de luz encendidas)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Decoracion presentable y de temporada",
                "score": "",
                "comment": "",
            },
            {
                "name": "Graficos adecuados por área según temporada",
                "score": "",
                "comment": "",
            },
            {
                "name": "Graficos adecuados por área según campaña",
                "score": "",
                "comment": "",
            },
            {
                "name": "Precio a corde al calzado (etiqueta y/o grafico)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Etiquetado de precios visibles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Material p.o.p presentable (Material de papeleria)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Redes sociales actualizadas",
                "score": "",
                "comment": "",
            },
            {
                "name": "Visibilidad en promociones",
                "score": "",
                "comment": "",
            },
            {
                "name": "Viniles presentables y de temporada",
                "score": "",
                "comment": "",
            },
            {
                "name": "Exhibicion según calendario estacional",
                "score": "",
                "comment": "",
            },
            {
                "name": "Exhibicion según calendario conmemorativo",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cenefas en buen estado y bien aplicadas",
                "score": "",
                "comment": "",
            },
            {
                "name": "Dangler colocado en mobiliario correspondiente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Test - Card aplicado en nuevas colecciones",
                "score": "",
                "comment": "",
            },
            {
                "name": "Rompetrafico en display - En buen estado",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    caballerosA: {
        "name": "Caballeros",
        "aspects": [{
                "name": "Actualización/Cambios de precios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado con precio correspondiente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado de temporada al frente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado limpio, decorado, con relleno",
                "score": "",
                "comment": "",
            },
            {
                "name": "Diversidad de modelos exhibidos",
                "score": "",
                "comment": "",
            },
            {
                "name": "Marca Nuevas exhiibidas en los frentes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Iluminación de muebles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Leeds de mobiliario en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Contactos a piso bien instalados y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Limpieza mobiliario",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (AMAZONIA BEIGE)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pergolas decorativas limpias y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Caballeros 3H-CABPERIMETRO-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Caballero 3H-PERCAB-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa Grapa 3H-GRAPC-01",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    damasA: {
        "name": "Damas",
        "aspects": [{
                "name": "Actualización/Cambios de precios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado con precio correspondiente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado de temporada al frente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado limpio, decorado, con relleno",
                "score": "",
                "comment": "",
            },
            {
                "name": "Diversidad de modelos exhibidos",
                "score": "",
                "comment": "",
            },
            {
                "name": "Marca Nuevas exhiibidas en los frentes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Iluminación de muebles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Leeds de mobiliario en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Contactos a piso bien instalados y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Limpieza de mobiliario",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (LOCETA BLANCO PULIDO)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Lamparas decorativas limpias y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro women - 3H-PERDAMA-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Dama -3H-PERDAMA-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Women -3H-MGOND-03",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Dama 3H-DAMGOND-02",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    deportesA: {
        "name": "Deportes",
        "aspects": [{
                "name": "Actualización/Cambios de precios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado con precio correspondiente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado de temporada al frente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado limpio, decorado, con relleno",
                "score": "",
                "comment": "",
            },
            {
                "name": "Diversidad de modelos exhibidos",
                "score": "",
                "comment": "",
            },
            {
                "name": "Marca Nuevas exhiibidas en los frentes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Iluminación de muebles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Leeds de mobiliario en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Contactos a piso bien instalados y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Limpieza mobiliario",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (PALADIO SILVER)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Verde 3H-PERIDEP-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Sport 3H-DEPORTIVO",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Deportivo 3H-DEPVERDE-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola CH Deportes 3H-GONDEPCH-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Deportes 3H-GONDEP-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Celosia 3H-PERILUMI-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Sport 3H-MGOND-02",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    niñosA: {
        "name": "Niños",
        "aspects": [{
                "name": "Actualización/Cambios de precios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado con precio correspondiente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado de temporada al frente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado limpio, decorado, con relleno",
                "score": "",
                "comment": "",
            },
            {
                "name": "Diversidad de modelos exhibidos",
                "score": "",
                "comment": "",
            },
            {
                "name": "Marca Nuevas exhiibidas en los frentes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Iluminación de muebles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Leeds de mobiliario en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Contactos a piso bien instalados y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Limpieza mobiliario",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (LOCETA BLANCO PULIDO)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Lamparas decorativas limpias y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Niño Arcoiris 3H-PERNINO-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Kids 3H-PERNINO-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro De Niño 3H-PERNINO-02",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Niños 3H-NINOGOND-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Kids 3H-GONNI-01",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    saldosA: {
        "name": "Saldos",
        "aspects": [{
                "name": "Calzado con precio correspondiente",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado limpio",
                "score": "",
                "comment": "",
            },
            {
                "name": "Iluminación de muebles",
                "score": "",
                "comment": "",
            },
            {
                "name": "Contactos bien instalados y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Limpieza mobiliario",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (AMAZONIA BEIGE)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Letrero decorativo limpio y en funcionamiento",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Ofertas 3H-SALD-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Saldos 3H-PSALD-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola Saldos 3H-SALD-01",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    generalA: {
        "name": "General",
        "aspects": [{
                "name": "Área de caja limpia sin papeles ni objetos ajenos",
                "score": "",
                "comment": "",
            },
            {
                "name": "Área de caja sin pilas de cajas de calzado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Pisos limpios (AMAZONIA BEIGE)",
                "score": "",
                "comment": "",
            },
            {
                "name": "sillas en buen estado y limpias",
                "score": "",
                "comment": "",
            },
            {
                "name": "Sanitarios limpios, dignos y en buen estado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mueble caja 3H-CAJA-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa pastelera 3H-MP-02",
                "score": "",
                "comment": "",
            },
            {
                "name": "Botadero 2 3H-MBOT-02",
                "score": "",
                "comment": "",
            },
            {
                "name": "Rack 3H-RACK-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa pastel 3H-MPASTEL-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Entrepaño 3H-PERIENTRE-GRAF",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro Entreñao 3H-PERIENTRE-GRAF",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa luminosa de cubos 3H-SANDWISH-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola metal 3H-GONDMETAL-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Deportivo 3H-DEPROJO-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Perímetro rojo 3H-PEROJO-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa doble repisa 3H-MDOBLEREP-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Góndola de repisas 3H-GONDREP-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Botadero c/grafico 3H-BOTAGRAF-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cubos empotrados 3H-CUBEM-01",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa pastel 3H-MPASTEL-04",
                "score": "",
                "comment": "",
            },
            {
                "name": "Mesa pastel circular 3H-MCIRCULAR-00",
                "score": "",
                "comment": "",
            },
            {
                "name": "Juego de repisas 3H-JGOREPISAS-01",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    },
    bodegaA: {
        "name": "Bodega",
        "aspects": [{
                "name": "Líneas de moda y temporada cerca de la entrada a bodega",
                "score": "",
                "comment": "",
            },
            {
                "name": "Bodega con pisos limpios",
                "score": "",
                "comment": "",
            },
            {
                "name": "Iluminación en bodega",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado acomodada por estilo y color",
                "score": "",
                "comment": "",
            },
            {
                "name": "Armazones unicamente con calzado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Cajas de calzado en buen estado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado en caja empapelado",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado con sus accesorios correspondientes",
                "score": "",
                "comment": "",
            },
            {
                "name": "Bodega emparejada y ajustada",
                "score": "",
                "comment": "",
            },
            {
                "name": "Las cajas cuentan con datos de identificación",
                "score": "",
                "comment": "",
            },
            {
                "name": "Calzado clasificado por líneas y series",
                "score": "",
                "comment": "",
            },
            {
                "name": "Armazones por tipos de calzado (marcas)",
                "score": "",
                "comment": "",
            },
            {
                "name": "Armazones numerados",
                "score": "",
                "comment": "",
            },
            {
                "name": "Serpenteo (zig zag) bien aplicado",
                "score": "",
                "comment": "",
            }, {
                "name": "Revisar que todo el modelaje esté exhibido",
                "score": "",
                "comment": ""
            }
        ]
    }
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercadeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MercadeoPage = /** @class */ (function () {
    function MercadeoPage(navCtrl, navParams, modal, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.loadingController = loadingController;
        this.user_id = localStorage.getItem('user_id');
        this.shop_id = localStorage.getItem('shop_id');
        this.shop_name = localStorage.getItem('name');
        this.evalCa = false;
        this.evalDa = false;
        this.evalDe = false;
        this.evalNi = false;
        this.evalSa = false;
        this.evalGe = false;
        this.evalBo = false;
    }
    MercadeoPage.prototype.aspectosCaballero = function (area_id) {
        this.evalCa = true;
        var b = document.getElementById('caballeros');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/caballeros.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].caballerosA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage.prototype.aspectosDama = function (area_id) {
        this.evalDa = true;
        var b = document.getElementById('damas');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/damas.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].damasA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage.prototype.aspectosDeportes = function (area_id) {
        this.evalDe = true;
        var b = document.getElementById('deportes');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/deportes.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].deportesA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage.prototype.aspectosNinos = function (area_id) {
        this.evalNi = true;
        var b = document.getElementById('niños');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/nino.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].niñosA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage.prototype.aspectosSaldos = function (area_id) {
        this.evalSa = true;
        var b = document.getElementById('saldos');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/saldos.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].saldosA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage.prototype.aspectosGeneral = function () {
        this.evalGe = true;
        var b = document.getElementById('general');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/general.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].generalA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage.prototype.aspectosBodega = function () {
        this.evalBo = true;
        var b = document.getElementById('bodega');
        b.style.background = "#e27b26";
        this.areaImg = "http://hostingwebmex.com/z3h/bodega.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].bodegaA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    MercadeoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mercadeo',template:/*ion-inline-start:"/home/angelzepeda/Documentos/Dev/3HermanosIonic/src/pages/mercadeo/mercadeo.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="pricetags"></ion-icon>\n      MERCADEO\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding\n  style="background-image: url(\'assets/imgs/Rg8Z0VG0Q1i0gnDEGP6A_back4.jpg\');background-repeat: no-repeat;  background-position: top center;">\n  <ion-avatar>\n    <img src="assets/imgs/hSDtdnxwQMqFa4QC9INn_logo.png"\n      style="width:64px;height: 64px; margin: 0; transform: translateX(38vw);">\n  </ion-avatar>\n  <h1 align="center" style="color:#fff">Áreas de mercadeo:</h1>\n  <div style=" transform:translateY(1vh);">\n    <button id="damas" ion-button block color="light" class="boton1" full (click)="aspectosDama(9)"\n      style="border-radius:15px; margin-bottom:15px; padding:25px;color:#fff">\n      <div *ngIf="evalDa == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/dama.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Damas</strong>\n          </p>\n      </div>\n    </button>\n    <button id="deportes" ion-button block color="light" class="boton1" (click)="aspectosDeportes(10)" full\n      style="border-radius:15px; margin-bottom:15px; padding:25px;color:#fff">\n      <div *ngIf="evalDe == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/deportes.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Deportes</strong>\n          </p>\n      </div>\n    </button>\n    <button id="niños" ion-button block color="light" class="boton1" full (click)="aspectosNinos(11)"\n      style="border-radius:15px; margin-bottom:15px; padding:25px;color:#fff">\n      <div *ngIf="evalNi == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/kids.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Niños </strong>\n          </p>\n      </div>\n    </button>\n    <button id="caballeros" ion-button block color="light" class="boton1" full (click)="aspectosCaballero(8)"\n      style="border-radius:15px; margin-bottom:15px; padding:25px;color:#fff">\n      <div *ngIf="evalCa == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/caballeros.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Caballeros</strong>\n          </p>\n      </div>\n    </button>\n\n\n    <button id="saldos" ion-button block color="light" class="boton1" full (click)="aspectosSaldos(12)"\n      style="border-radius:15px; margin-bottom:15px; padding:25px; color:#fff">\n      <div *ngIf="evalSa == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/saldos.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Saldos</strong>\n          </p>\n      </div>\n    </button>\n    <!-- <button id="general" ion-button block color="light" class="boton1" full (click)="aspectosGeneral(12)"\n                                                        style="border-radius:15px; margin-bottom:15px; padding:25px; color:#fff">\n      <div *ngIf="evalGe == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/general.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> General</strong>\n          </p>\n      </div>\n    </button> -->\n    <button id="bodega" ion-button block color="light" class="boton1" full (click)="aspectosBodega(12)"\n      style="border-radius:15px; margin-bottom:15px; padding:25px; color:#fff">\n      <div *ngIf="evalBo == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/sala.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Bodega</strong>\n          </p>\n      </div>\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/angelzepeda/Documentos/Dev/3HermanosIonic/src/pages/mercadeo/mercadeo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], MercadeoPage);
    return MercadeoPage;
}());

//# sourceMappingURL=mercadeo.js.map

/***/ })

});
//# sourceMappingURL=4.js.map