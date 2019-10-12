webpackJsonp([6],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsUserPageModule", function() { return ReportsUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_user__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportsUserPageModule = /** @class */ (function () {
    function ReportsUserPageModule() {
    }
    ReportsUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reports_user__["a" /* ReportsUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reports_user__["a" /* ReportsUserPage */]),
            ],
        })
    ], ReportsUserPageModule);
    return ReportsUserPageModule;
}());

//# sourceMappingURL=reports-user.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsUserPage; });
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


var ReportsUserPage = /** @class */ (function () {
    function ReportsUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reports = JSON.parse(localStorage.getItem('reportsByUser'));
        this.report = [];
    }
    ReportsUserPage.prototype.details = function (r) {
        this.report.push(r);
        localStorage.setItem('report', JSON.stringify(this.report));
        this.navCtrl.push('Historial2Page');
        this.report = [];
    };
    ReportsUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reports-user',template:/*ion-inline-start:"/home/angelzepeda/Documentos/Dev/3H/3HermanosIonic/src/pages/reports-user/reports-user.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title align="center">\n      <ion-icon name="clipboard"></ion-icon>\n      Eventos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding\n  style="background:\n  url(\'https://t3.ftcdn.net/jpg/01/30/82/72/240_F_130827267_qiwaSzorZ1Lixv5W2dPc1NXqVnxbpQiV.jpg\')">\n  <div *ngFor="let r of reports">\n    <div *ngFor="let report of r">\n      <ion-card color="danger">\n        <ion-item>\n          <ion-icon name="pin" slot="start"></ion-icon>\n          <ion-label>\n            <ion-icon name="cart"></ion-icon>\n            Tienda: {{ report.shop.name}}, Nº: {{ report.shop.shop_number}}\n          </ion-label>\n        </ion-item>\n        <ion-card-content style="font-size: 1.5rem;">\n          <br>\n          <ion-icon name="contact"></ion-icon>\n          Supervisor: {{ report.user.nick}}\n          <br><br>\n          <ion-icon name="create"></ion-icon>\n          <strong style="background: white; color: red; padding: 8px;\n            border-radius: 5px;">\n            Calificación de tienda: {{ report.score.toFixed(2) }}\n          </strong>\n          <br><br>\n          <ion-icon name="calendar"></ion-icon>\n          Fecha de supervisón: {{ report.created_at}}\n          <br><br>\n          <ion-icon name="clock"></ion-icon>\n          Hora: {{report.time}}\n        </ion-card-content>\n      </ion-card>\n      <button ion-button full block color="danger"\n        (click)="details(report)">Ver más</button>\n      <br>\n    </div>\n  </div>\n  <div *ngIf="reports.reports == 0">\n    <h2>No hay reportes</h2>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/angelzepeda/Documentos/Dev/3H/3HermanosIonic/src/pages/reports-user/reports-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ReportsUserPage);
    return ReportsUserPage;
}());

//# sourceMappingURL=reports-user.js.map

/***/ })

});
//# sourceMappingURL=6.js.map