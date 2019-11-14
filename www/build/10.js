webpackJsonp([10],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerentePageModule", function() { return GerentePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gerente__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GerentePageModule = /** @class */ (function () {
    function GerentePageModule() {
    }
    GerentePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gerente__["a" /* GerentePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gerente__["a" /* GerentePage */]),
            ],
        })
    ], GerentePageModule);
    return GerentePageModule;
}());

//# sourceMappingURL=gerente.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerentePage; });
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


var GerentePage = /** @class */ (function () {
    function GerentePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = localStorage.getItem('username');
    }
    GerentePage.prototype.buscarTienda = function () {
        this.navCtrl.push('TiendasGerentesPage');
    };
    GerentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GerentePage');
    };
    GerentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gerente',template:/*ion-inline-start:"/home/angelzepeda/Documentos/Dev/3HermanosIonic/src/pages/gerente/gerente.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="text-white">\n      Gerente: {{ this.username }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="body">\n  <ion-list id="inicio-list2">\n    <div align="center">\n      <img src="assets/imgs/logo3h.png" width="50%" alt="Logo 3H">\n    </div>\n    <div class="spacer" style="width:300px;height:11px;" id="home-spacer2"></div>\n    <div class="spacer" style="width:300px;height:5px;" id="home-spacer2"></div>\n  </ion-list>\n  <img src="http://hostingwebmex.com/z3h/infraestructura.png" alt="" width="100%" height="200">\n  <button ion-button color="light" class="boton1" block large icon-left\n    style="font-weight:500;font-size:25px; color:#fff; border-radius: 15px" (click)="buscarTienda()">\n    <div style="float: left; width: 25%; text-align:center;">\n      <img src="http://hostingwebmex.com/z3h/iconos/reporteo.png" alt="" style="width: 32px; height: 32px;">\n    </div>\n    <div style="float: left; width: 75%; text-align:center; padding-top:\n        2px;">\n      <p>Reporteo</p>\n    </div>\n  </button>\n\n\n</ion-content>'/*ion-inline-end:"/home/angelzepeda/Documentos/Dev/3HermanosIonic/src/pages/gerente/gerente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GerentePage);
    return GerentePage;
}());

//# sourceMappingURL=gerente.js.map

/***/ })

});
//# sourceMappingURL=10.js.map