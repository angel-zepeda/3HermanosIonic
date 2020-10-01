webpackJsonp([12],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aspects/aspects.module": [
		282,
		2
	],
	"../pages/buscar-tienda/buscar-tienda.module": [
		283,
		0
	],
	"../pages/eventos/eventos.module": [
		284,
		11
	],
	"../pages/firma-foto/firma-foto.module": [
		286,
		1
	],
	"../pages/gerente/gerente.module": [
		285,
		10
	],
	"../pages/historial/historial.module": [
		287,
		9
	],
	"../pages/historial2/historial2.module": [
		293,
		8
	],
	"../pages/inicio/inicio.module": [
		288,
		7
	],
	"../pages/mercadeo/mercadeo.module": [
		289,
		4
	],
	"../pages/reporteo/reporteo.module": [
		290,
		3
	],
	"../pages/reports-user/reports-user.module": [
		291,
		6
	],
	"../pages/tiendas-gerentes/tiendas-gerentes.module": [
		292,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, loadingController) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingController = loadingController;
        this.url = "http://157.230.81.230:5000/api/user/login";
        // url = 'http://localhost:5000/api/user/login';
        this.user_sign_in = {
            email: "",
            password: "",
            getToken: true,
        };
        this.supervisores = [
            "raulpcampos@yahoo.com.mx",
            "josemanuelre@cydecsa.com.mx",
            "riverdet@yahoo.com.mx",
            "moradelatorre@gmail.com",
            "org3_fgz@yahoo.com.mx",
            "luishp1@gmail.com",
            "aguilar285@hotmail.com",
            "olijeso@yahoo.com.mx",
            "ochoabayonalg@yahoo.com.mx",
        ];
    }
    HomePage.prototype.login = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Iniciando sesión ...",
        });
        loader.present();
        this.http.post(this.url, this.user_sign_in).subscribe(function (res) {
            loader.dismiss();
            _this.user_data = res;
            console.log(_this.user_data);
            if (_this.user_data.message) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Oops", "" + _this.user_data.message, "error");
            }
            else {
                localStorage.setItem("user_shops", JSON.stringify(_this.user_data.user.shops));
                localStorage.setItem("user_id", _this.user_data.user._id);
                localStorage.setItem("username", _this.user_data.user.nick);
                localStorage.setItem("role", _this.user_data.user.role);
                if (_this.user_data.user.role === "ROLE_USER") {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Bienvenido!", "Supervisor: " + _this.user_data.user.nick, "success");
                    if (_this.user_data.user.shops.length > 0) {
                        return _this.navCtrl.push("GerentePage");
                    }
                    _this.navCtrl.push("InicioPage");
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert___default()("Bienvenido!", "Gerente: " + _this.user_data.user.nick, "success");
                    _this.navCtrl.push("GerentePage");
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/home/home.html"*/'<ion-content padding\n  style="background:url(assets/imgs/Wm5s9eJ6RvCShoptfZgZ_background_o.jpg) no-repeat center;background-size:cover;"\n  id="page1">\n  <div class="spacer" style="width:300px;height:45px;" id="home-spacer5"></div>\n  <img src="assets/imgs/hSDtdnxwQMqFa4QC9INn_logo.png"\n    style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n  <div id="home-container1">\n    <h2 id="home-heading2" style="color:#FFFFFF;font-weight:600;text-align:center;">\n      BIENVENIDO\n    </h2>\n  </div>\n  <div id="home-container2">\n    <div id="home-markdown3" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#FFFFFF;">\n        SUPERVICIÓN DE SUCURSALES\n      </p>\n    </div>\n    <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n    <p style="color:#FFFFFF; font-weight: bold; text-align: center; letter-spacing: 2px;">\n      Iniciar sesión\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n  <form id="home-form3">\n    <ion-item id="home-input3">\n      <ion-label>\n        Usuario\n      </ion-label>\n      <ion-input type="text" placeholder="" name="email" [(ngModel)]="user_sign_in.email"></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n  <form id="home-form4">\n    <ion-item id="home-input5">\n      <ion-label>\n        Contraseña\n      </ion-label>\n      <ion-input type="password" placeholder="" name="password" [(ngModel)]="user_sign_in.password"></ion-input>\n    </ion-item>\n  </form>\n  <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n  <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n  <button id="home-button1" ion-button block\n    style="font-weight:500;border-radius:10px; background: rgba(0,0,0,0.3); border: 1px solid white;" full\n    (click)="login()">\n    INGRESAR\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_signaturepad__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aspects/aspects.module#AspectsPageModule', name: 'AspectsPage', segment: 'aspects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-tienda/buscar-tienda.module#BuscarTiendaPageModule', name: 'BuscarTiendaPage', segment: 'buscar-tienda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventos/eventos.module#EventosPageModule', name: 'EventosPage', segment: 'eventos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gerente/gerente.module#GerentePageModule', name: 'GerentePage', segment: 'gerente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firma-foto/firma-foto.module#FirmaFotoPageModule', name: 'FirmaFotoPage', segment: 'firma-foto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mercadeo/mercadeo.module#MercadeoPageModule', name: 'MercadeoPage', segment: 'mercadeo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporteo/reporteo.module#ReporteoPageModule', name: 'ReporteoPage', segment: 'reporteo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports-user/reports-user.module#ReportsUserPageModule', name: 'ReportsUserPage', segment: 'reports-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tiendas-gerentes/tiendas-gerentes.module#TiendasGerentesPageModule', name: 'TiendasGerentesPage', segment: 'tiendas-gerentes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial2/historial2.module#Historial2PageModule', name: 'Historial2Page', segment: 'historial2', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map