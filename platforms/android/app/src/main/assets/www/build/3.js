webpackJsonp([3],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteoPageModule", function() { return ReporteoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporteo__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReporteoPageModule = /** @class */ (function () {
    function ReporteoPageModule() {
    }
    ReporteoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reporteo__["a" /* ReporteoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reporteo__["a" /* ReporteoPage */]),
            ],
        })
    ], ReporteoPageModule);
    return ReporteoPageModule;
}());

//# sourceMappingURL=reporteo.module.js.map

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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteoPage; });
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



var ReporteoPage = /** @class */ (function () {
    function ReporteoPage(navCtrl, navParams, modal, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.loadingController = loadingController;
        this.user_id = localStorage.getItem('user_id');
        this.shop_id = localStorage.getItem('shop_id');
        this.shop_name = localStorage.getItem('name');
        this.report = {
            "shop": this.shop_id,
            "user": this.user_id,
            "areas": [],
            "photos": [],
            "signature": ""
        };
        this.evalI = false;
        this.evalP = false;
        this.evalV = false;
        this.evalS = false;
        this.evalPu = false;
        this.evalM = false;
        localStorage.setItem('report', JSON.stringify(this.report));
    }
    ReporteoPage.prototype.ionViewDidLoad = function () {
        console.log(this.user_id, this.shop_id);
        localStorage.setItem('report', JSON.stringify(this.report));
    };
    ReporteoPage.prototype.mercadeo = function (area_id) {
        this.evalM = true;
        var b = document.getElementById('mercadeo');
        b.style.background = "#B91919";
        this.navCtrl.push('MercadeoPage');
    };
    ReporteoPage.prototype.infrastructura = function (area_id) {
        this.evalI = true;
        var b = document.getElementById('infra');
        b.style.background = "#B91919";
        this.areaImg = "http://hostingwebmex.com/z3h/infraestructura.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].infrastructuraA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    ReporteoPage.prototype.personal = function () {
        this.evalP = true;
        var b = document.getElementById('personal');
        b.style.background = "#B91919";
        this.areaImg = "http://hostingwebmex.com/z3h/personal.png";
        localStorage.setItem('areaImg', this.areaImg);
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].personalA;
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    ReporteoPage.prototype.ventas = function () {
        this.evalV = true;
        var b = document.getElementById('ventas');
        b.style.background = "#B91919";
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].ventasA;
        this.areaImg = "http://hostingwebmex.com/z3h/ventas.png";
        localStorage.setItem('areaImg', this.areaImg);
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    ReporteoPage.prototype.sala = function () {
        this.evalS = true;
        var b = document.getElementById('sala');
        b.style.background = "#B91919";
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].salaA;
        this.areaImg = "http://hostingwebmex.com/z3h/sala.png";
        localStorage.setItem('areaImg', this.areaImg);
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    ReporteoPage.prototype.publicidad = function () {
        this.evalPu = true;
        var b = document.getElementById('pub');
        b.style.background = "#B91919";
        this.a = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* GLOBAL */].publicidadA;
        this.areaImg = "http://hostingwebmex.com/z3h/publicidad.png";
        localStorage.setItem('areaImg', this.areaImg);
        localStorage.setItem('as', JSON.stringify(this.a));
        var myModal = this.modal.create('AspectsPage');
        myModal.present();
    };
    ReporteoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reporteo',template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/reporteo/reporteo.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title style="font-size: 1.4rem;">\n      Supervisar: {{ this.shop_name }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding\n  style="background-image: url(\'assets/imgs/Rg8Z0VG0Q1i0gnDEGP6A_back4.jpg\'); background-repeat: no-repeat;  background-position: top center;">\n\n\n  <ion-avatar>\n    <img src="assets/imgs/hSDtdnxwQMqFa4QC9INn_logo.png"\n      style="width:64px;height: 64px; margin: 0; transform: translateX(38vw);">\n  </ion-avatar>\n  <div style="transform:translateY(7vh);">\n    <button id="infra" ion-button block color="light" (click)="infrastructura()" class="boton1" full\n      style="font-weight:500;font-size:20px;color:#fff;  margin-bottom:15px;  border-radius: 15px; padding: 25px">\n      <div *ngIf="evalI == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/infra.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 75%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <strong> Infraestructura</strong>\n        </p>\n      </div>\n    </button>\n    <button id="personal" ion-button block color="light" (click)="personal()" class="boton1" full\n      style="font-weight:500;font-size:20px;color:#fff;  margin-bottom:15px;  border-radius: 15px; padding: 25px">\n      <div *ngIf="evalP == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/personal.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <strong> Personal</strong>\n        </p>\n      </div>\n    </button>\n    <button id="ventas" ion-button block color="light" (click)="ventas()" class="boton1" full\n      style="font-weight:500;font-size:20px;color:#fff;  margin-bottom:15px;  border-radius: 15px; padding: 25px">\n      <div *ngIf="evalV == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/ventas.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Ventas</strong>\n          </p>\n      </div>\n    </button>\n    <button id="sala" ion-button block color="light" (click)="sala()" class="boton1" full\n      style="font-weight:500;font-size:20px;color:#fff;  margin-bottom:15px;  border-radius: 15px; padding: 25px">\n      <div *ngIf="evalS == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/sala.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <p style="font-size:1.6rem;">\n            <strong> Sala</strong>\n          </p>\n      </div>\n    </button>\n    <button id="pub" ion-button block color="light" (click)="publicidad()" class="boton1" full\n      style="font-weight:500;font-size:20px;color:#fff;  margin-bottom:15px;  border-radius: 15px; padding: 25px">\n      <div *ngIf="evalPu == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/publicidad.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <strong> Publicidad</strong>\n        </p>\n      </div>\n    </button>\n    <button id="mercadeo" ion-button block color="light" class="boton1" full (click)="mercadeo()"\n      style="font-weight:500;font-size:20px;color:#fff;  margin-bottom:15px;  border-radius: 15px; padding: 25px">\n      <div *ngIf="evalM == true">\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n      </div>\n      <div style="float: left; width: 15%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/mercadeo.png" alt="" width="32" height="32">\n      </div>\n      <div style="float: left; width: 85%; text-align:center; padding-left: 0px;">\n        <p style="font-size:1.6rem; letter-spacing: 0.3rem">\n          <strong> Mercadeo</strong>\n        </p>\n      </div>\n    </button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/reporteo/reporteo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ReporteoPage);
    return ReporteoPage;
}());

//# sourceMappingURL=reporteo.js.map

/***/ })

});
//# sourceMappingURL=3.js.map