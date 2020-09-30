webpackJsonp([11],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventos__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventosPageModule = /** @class */ (function () {
    function EventosPageModule() {
    }
    EventosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__eventos__["a" /* EventosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__eventos__["a" /* EventosPage */]),
            ],
        })
    ], EventosPageModule);
    return EventosPageModule;
}());

//# sourceMappingURL=eventos.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
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



var EventosPage = /** @class */ (function () {
    function EventosPage(navCtrl, navParams, http, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingController = loadingController;
        this.url = 'http://157.230.81.230:5000/api/history/report/by-day';
        this.reports = [];
        this.user = localStorage.getItem('username');
        this.report = [];
        this.role = localStorage.getItem('role');
    }
    EventosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Cargando eventos..."
        });
        loader.present();
        this.http.get(this.url)
            .subscribe(function (res) {
            loader.dismiss();
            _this.reports = res;
            console.log(_this.reports);
        });
    };
    EventosPage.prototype.details = function (r) {
        this.report.push(r);
        localStorage.setItem('report', JSON.stringify(this.report));
        this.navCtrl.push('Historial2Page');
        this.report = [];
    };
    EventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-eventos',template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/eventos/eventos.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n\n    <ion-title align="center">\n\n      <ion-icon name="clipboard"></ion-icon>\n\n      Eventos\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding\n\n  style="background:\n\n  url(\'https://t3.ftcdn.net/jpg/01/30/82/72/240_F_130827267_qiwaSzorZ1Lixv5W2dPc1NXqVnxbpQiV.jpg\')">\n\n  <div *ngIf="reports.reports">\n\n    <div *ngFor="let report of reports.reports">\n\n      <div *ngIf="report.user.role === \'ROLE_USER\'">\n\n      <ion-card color="primary">\n\n          <ion-item>\n\n            <ion-icon name="pin" slot="start"></ion-icon>\n\n            <ion-label>\n\n              <ion-icon name="cart"></ion-icon>\n\n              Tienda: {{ report.shop.name}}, Nº: {{ report.shop.shop_number}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-card-content style="font-size: 1.5rem;">\n\n            <br>\n\n            <ion-icon name="contact"></ion-icon>\n\n            Gerente: {{ report.user.nick}}\n\n            <br><br>\n\n            <ion-icon name="create"></ion-icon>\n\n            <strong >\n\n              Calificación de tienda: {{ report.score.toFixed(2) }}\n\n            </strong>\n\n            <br><br>\n\n            <ion-icon name="calendar"></ion-icon>\n\n            Fecha de supervisón: {{ report.created_at}}\n\n            <br><br>\n\n            <ion-icon name="clock"></ion-icon>\n\n            Hora: {{report.time}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n      <div *ngIf="report.user.role === \'user\'">\n\n      <ion-card color="secondary">\n\n          <ion-item>\n\n            <ion-icon name="pin" slot="start"></ion-icon>\n\n            <ion-label>\n\n              <ion-icon name="cart"></ion-icon>\n\n              Tienda: {{ report.shop.name}}, Nº: {{ report.shop.shop_number}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-card-content style="font-size: 1.5rem;">\n\n            <br>\n\n            <ion-icon name="contact"></ion-icon>\n\n            Supervisor: {{ report.user.nick}}\n\n            <br><br>\n\n            <ion-icon name="create"></ion-icon>\n\n            <strong >\n\n              Calificación de tienda: {{ report.score.toFixed(2) }}\n\n            </strong>\n\n            <br><br>\n\n            <ion-icon name="calendar"></ion-icon>\n\n            Fecha de supervisón: {{ report.created_at}}\n\n            <br><br>\n\n            <ion-icon name="clock"></ion-icon>\n\n            Hora: {{report.time}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n        \n\n      \n\n\n\n      <button ion-button full block color="danger"\n\n      style="border-radius: 15px;"\n\n        (click)="details(report)">Ver más</button>\n\n      <br>\n\n    </div>\n\n  </div>\n\n  <div *ngIf="reports.reports == 0">\n\n    <h2>No hay reportes</h2>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/eventos/eventos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], EventosPage);
    return EventosPage;
}());

//# sourceMappingURL=eventos.js.map

/***/ })

});
//# sourceMappingURL=11.js.map