webpackJsonp([9],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialPageModule", function() { return HistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial__ = __webpack_require__(299);
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

/***/ 299:
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
        // url = "http://157.230.81.230:5000/api/history/report/by-shop/last";
        this.url = "http://157.230.81.230:5000/api/history/reports/by-shop";
        // url = 'http://localhost:5000/api/history/report/by-shop/last';
        this.shop_id = {
            shop_id: localStorage.getItem("shop_id"),
        };
        this.report = [];
        this.role = localStorage.getItem("role");
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        // let loader = this.loadingController.create({
        //   content: "Cargando ultimo reporte ..."
        // });
        // loader.present();
        var _this = this;
        this.http.post(this.url, this.shop_id).subscribe(function (res) {
            _this.report = res;
            if (_this.role === "tienda") {
                var filteredByTienda = _this.report.report.filter(function (report) { return report.user.role === "tienda"; });
                _this.report = { report: filteredByTienda };
            }
            if (_this.role === "zona" || _this.role === "user") {
                var filteredByGerente = _this.report.report.filter(function (report) {
                    return report.user.role !== "ROLE_USER";
                });
                _this.report = { report: filteredByGerente };
            }
            if (_this.report.message === "No hay reportes") {
                _this.report = [];
            }
        });
    };
    HistorialPage.prototype.details = function (report) {
        localStorage.setItem("report", JSON.stringify(report));
        var myModal = this.modal.create("Historial2Page");
        myModal.present();
    };
    var _a, _b, _c, _d, _e;
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-historial",template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/historial/historial.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title align="center">\n      <ion-icon name="clipboard"></ion-icon>\n      Historial por tienda\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding style="background: #eeeeee">\n  <div align="center">\n    <img\n      src="http://www.liberaldictionary.com/wp-content/uploads/2018/11/test-1.png"\n      alt=""\n      height="120px"\n    />\n  </div>\n  <div *ngIf="report">\n    <div *ngFor="let report of report.report">\n      <ion-card>\n        <ion-item style="background: white">\n          <ion-icon name="pin" slot="start"></ion-icon>\n          <ion-label>\n            <ion-icon name="cart"></ion-icon>\n            Tienda: {{ report.shop.name}}, Nº: {{ report.shop.shop_number}}\n          </ion-label>\n        </ion-item>\n        <ion-card-content\n          style="font-size: 1.5rem; background: #b91919; color: white"\n        >\n          <br />\n          <div *ngIf="report.user.role === \'zona\' || role === \'user\'">\n            <ion-icon name="contact"></ion-icon>\n            Gerente de zona: {{ report.user.nick}}\n          </div>\n          <div *ngIf="report.user.role === \'tienda\'">\n            <ion-icon name="contact"></ion-icon>\n            Gerente de tienda: {{ report.user.nick}}\n          </div>\n          <div *ngIf="report.user.role === \'ROLE_USER\'">\n            <ion-icon name="contact"></ion-icon>\n            Supervisor: {{ report.user.nick}}\n          </div>\n          <br />\n          <ion-icon name="create"></ion-icon>\n          <strong>\n            Calificación de tienda: {{ report.score.toFixed(2) }}\n          </strong>\n          <br /><br />\n          <ion-icon name="calendar"></ion-icon>\n          Fecha de supervisón: {{ report.created_at}}\n          <br /><br />\n          <ion-icon name="clock"></ion-icon>\n          Hora: {{report.time}}\n        </ion-card-content>\n      </ion-card>\n      <button\n        ion-button\n        block\n        color="light"\n        style="\n          color: #b91919;\n          width: calc(100% - 24px);\n          margin: 0 auto;\n          margin-bottom: 5rem;\n        "\n        (click)="details(report)"\n      >\n        VER REPORTE\n      </button>\n      <hr />\n    </div>\n  </div>\n\n  <div *ngIf="report == 0">\n    <h2>No hay reportes</h2>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/historial/historial.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" ? _e : Object])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ })

});
//# sourceMappingURL=9.js.map