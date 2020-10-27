webpackJsonp([5],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiendasGerentesPageModule", function() { return TiendasGerentesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tiendas_gerentes__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TiendasGerentesPageModule = /** @class */ (function () {
    function TiendasGerentesPageModule() {
    }
    TiendasGerentesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tiendas_gerentes__["a" /* TiendasGerentesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tiendas_gerentes__["a" /* TiendasGerentesPage */]),
            ],
        })
    ], TiendasGerentesPageModule);
    return TiendasGerentesPageModule;
}());

//# sourceMappingURL=tiendas-gerentes.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendasGerentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TiendasGerentesPage = /** @class */ (function () {
    function TiendasGerentesPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.user = localStorage.getItem("user_shops");
        this.page = localStorage.getItem("page");
    }
    TiendasGerentesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.user);
        this.http
            .post("http://157.230.81.230:5000/api/shops/gerente", {
            shops: JSON.parse(this.user),
        })
            .subscribe(function (res) {
            console.log(res);
            _this.shops = res;
            _this.shops = _this.shops.shops;
        });
    };
    TiendasGerentesPage.prototype.inicio = function (shop_id, name, shop_number) {
        localStorage.setItem("name", name);
        localStorage.setItem("shop_id", shop_id);
        localStorage.setItem("shop_number", shop_number);
        return this.navCtrl.push(this.page);
    };
    TiendasGerentesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-tiendas-gerentes",template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/tiendas-gerentes/tiendas-gerentes.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="text-align: center;">\n      Búsqueda de tiendas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div *ngFor="let shop of shops">\n    <ion-card style="word-wrap:break-word; font-size:\n        2rem; background: #B91919; color:white;font-weight: bold;">\n      <ion-card-header color="light">\n        <ion-avatar>\n          <img src="assets/imgs/hSDtdnxwQMqFa4QC9INn_logo.png" style="width:32px;height: 32px;">\n        </ion-avatar>\n        <strong>Tienda: {{ shop.name }}</strong>\n      </ion-card-header>\n      <ion-card-content>\n        Dirección: {{ shop.address }}\n        <br>\n        Cp: {{ shop.cp }}\n        <br>\n        Número tienda: {{ shop.shop_number}}\n        <br>\n        Colonia: {{ shop.suburb }}\n        <br>\n        Localidad: {{ shop.location }}\n      </ion-card-content>\n      <button id="buscar" ion-button block color="light"\n        (click)="inicio(this.shop._id, this.shop.name, this.shop.shop_number)" style="color:red;">\n        INGRESAR\n      </button>\n      <br>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/tiendas-gerentes/tiendas-gerentes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TiendasGerentesPage);
    return TiendasGerentesPage;
}());

//# sourceMappingURL=tiendas-gerentes.js.map

/***/ })

});
//# sourceMappingURL=5.js.map