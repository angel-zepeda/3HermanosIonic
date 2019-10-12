webpackJsonp([7],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            ],
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = localStorage.getItem('username');
        this.name = localStorage.getItem('name');
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        this.username = this.username.toUpperCase();
    };
    InicioPage.prototype.buscarTienda = function (page) {
        this.navCtrl.push('BuscarTiendaPage');
        localStorage.setItem('page', page);
    };
    InicioPage.prototype.eventos = function () {
        this.navCtrl.push('EventosPage');
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/angelzepeda/Documentos/Dev/3H/3HermanosIonic/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{ this.username}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list id="inicio-list2">\n    <div align="center">\n      <img src="assets/imgs/logo3h.png" width="50%" alt="Logo 3H">\n    </div>\n    <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n    <div class="spacer" style="width:300px;height:5px;" id="home-spacer2"></div>\n  </ion-list>\n  <div style="background: #fff; padding:5px 20px; border-radius: 5px;">\n    <button ion-button color="light" class="boton1" block large icon-left\n      style="font-weight:500;font-size:25px; color:#fff; border-radius: 15px"\n      (click)="buscarTienda(\'ReporteoPage\')">\n      <div style="float: left; width: 25%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/reporteo.png" alt=""\n          style="width: 32px; height: 32px;">\n      </div>\n      <div style="float: left; width: 75%; text-align:center; padding-top:\n        2px;">\n        <p>Reporteo</p>\n      </div>\n    </button>\n    <div class="spacer" style="width:300px;height:7px;" id="home-spacer2"></div>\n    <button ion-button color="light" (click)="buscarTienda(\'HistorialPage\')"\n      class="boton1" block large icon-left\n      style="font-weight:500;font-size:25px;color:#fff; border-radius: 15px">\n      <div style="float: left; width: 25%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/historial.png" alt=""\n          style="width: 32px; height: 32px;">\n      </div>\n      <div style="float: left; width: 75%; text-align:center; padding-top:\n        2px;">\n        <p>Historial</p>\n      </div>\n    </button>\n    <div class="spacer" style="width:300px;height:7px;" id="home-spacer2"></div>\n    <button ion-button color="light" class="boton1" block large\n      (click)="eventos()" icon-left\n      style="font-weight:500;font-size:25px;color:#fff; border-radius: 15px">\n      <div style="float: left; width: 25%; text-align:center;">\n        <img src="http://hostingwebmex.com/z3h/iconos/eventos.png" alt=""\n          style="width: 32px; height: 32px;">\n      </div>\n      <div style="float: left; width: 75%; text-align:center; padding-top:\n        2px;">\n        <p>Eventos</p>\n      </div>\n    </button>\n  </div>\n\n  <div class="spacer" style="width:300px;height:10px;" id="home-spacer2"></div>\n  <div align="center">\n    <img src="assets/imgs/f1Zd1L2Sz6o0RYcIOyTa_img1.jpg" width="80%" alt="">\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/angelzepeda/Documentos/Dev/3H/3HermanosIonic/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=7.js.map