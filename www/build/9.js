webpackJsonp([9],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistorialPageModule = /** @class */ (function () {
    function HistorialPageModule() {
    }
    HistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historial__["a" /* HistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historial__["a" /* HistorialPage */]),
            ],
        })
    ], HistorialPageModule);
    return HistorialPageModule;
}());

//# sourceMappingURL=historial.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
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



var HistorialPage = /** @class */ (function () {
    function HistorialPage(navCtrl, navParams, http, modal, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modal = modal;
        this.loadingController = loadingController;
        this.url = 'http://157.230.81.230:5000/api/history/report/by-shop/last';
        // url = 'http://localhost:5000/api/history/report/by-shop/last';
        this.shop_id = {
            "shop_id": localStorage.getItem('shop_id')
        };
        this.report = [];
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // let loader = this.loadingController.create({
        //   content: "Cargando ultimo reporte ..."
        // });
        // loader.present();
        this.http.post(this.url, this.shop_id)
            .subscribe(function (res) {
            console.log(res);
            _this.report = res;
            localStorage.setItem('report', JSON.stringify(_this.report));
        });
    };
    HistorialPage.prototype.details = function () {
        var myModal = this.modal.create('Historial2Page');
        myModal.present();
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historial',template:/*ion-inline-start:"/home/angelzepeda/Documentos/Dev/3H/3HermanosIonic/src/pages/historial/historial.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title align="center">\n      <ion-icon name="clipboard"></ion-icon>\n      Historial por tienda\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding\n  style="background: url(\'https://t3.ftcdn.net/jpg/01/30/82/72/240_F_130827267_qiwaSzorZ1Lixv5W2dPc1NXqVnxbpQiV.jpg\')">\n  <div align="center">\n    <img src="http://www.liberaldictionary.com/wp-content/uploads/2018/11/test-1.png" alt="" height="120px">\n  </div>\n  <div *ngIf="report">\n    <div *ngFor="let report of report">\n      <ion-card color="danger">\n        <ion-item>\n          <ion-icon name="pin" slot="start"></ion-icon>\n          <ion-label>\n            <ion-icon name="cart"></ion-icon>\n            Tienda: {{ report.shop.name}}, Nº: {{ report.shop.shop_number}}\n          </ion-label>\n        </ion-item>\n        <ion-card-content style="font-size: 1.5rem;">\n          <br>\n          <ion-icon name="contact"></ion-icon>\n          Supervisor: {{ report.user.nick}}\n          <br><br>\n          <ion-icon name="create"></ion-icon>\n          <strong style="padding: 8px; border-radius:5px; color: red;background: white;">\n            Calificación de tienda: {{ report.score.toFixed(2) }}\n          </strong>\n          <br><br>\n          <ion-icon name="calendar"></ion-icon>\n          Fecha de supervisón: {{ report.created_at}}\n          <br><br>\n          <ion-icon name="clock"></ion-icon>\n          Hora: {{report.time}}\n        </ion-card-content>\n        <hr>\n      </ion-card>\n      <button ion-button color="danger" (click)="details()">Ver más</button>\n    </div>\n  </div>\n\n  <div *ngIf="report == 0">\n    <h2>No hay reportes</h2>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/angelzepeda/Documentos/Dev/3H/3HermanosIonic/src/pages/historial/historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ })

});
//# sourceMappingURL=9.js.map