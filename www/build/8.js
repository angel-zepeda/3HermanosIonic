webpackJsonp([8],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Historial2PageModule", function() { return Historial2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historial2__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Historial2PageModule = /** @class */ (function () {
    function Historial2PageModule() {
    }
    Historial2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historial2__["a" /* Historial2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historial2__["a" /* Historial2Page */]),
            ],
        })
    ], Historial2PageModule);
    return Historial2PageModule;
}());

//# sourceMappingURL=historial2.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Historial2Page; });
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


var Historial2Page = /** @class */ (function () {
    function Historial2Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.report = [JSON.parse(localStorage.getItem('report'))];
    }
    Historial2Page.prototype.ionViewDidLoad = function () {
        console.log(this.report);
    };
    var _a;
    Historial2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historial2',template:/*ion-inline-start:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/historial2/historial2.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>Historial por áreas </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="mainContainer"\n  style="background:\n  url(\'https://t3.ftcdn.net/jpg/01/30/82/72/240_F_130827267_qiwaSzorZ1Lixv5W2dPc1NXqVnxbpQiV.jpg\')">\n  <div *ngFor="let report of report">\n    <div *ngFor="let a of report.areas">\n      <ion-card>\n        <ion-item color="danger">\n          <ion-label>\n            <ion-icon name="clipboard"></ion-icon>\n            Área: {{a.name}}\n          </ion-label>\n        </ion-item>\n        <ion-card-content style="font-size: 1.7rem !important;">\n          <div *ngFor="let aspect of a.aspects">\n            <p style="color: #B91919;">{{aspect.name}}</p>\n            <p style="color: green;"> - Calificación: {{aspect.score}}</p>\n            <p style="padding: 8px; border-radius: 5px; color: blue;">\n              - Observación: {{aspect.comment}}</p>\n            <hr>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <ion-card padding>\n      <ion-card-header align="center">\n        Evidencias fotográficas\n      </ion-card-header>\n      <div *ngFor="let photos of report.photos">\n        <img src="http://157.230.81.230:5000/{{photos}}" alt="" height="300px">\n      </div>\n    </ion-card>\n    <ion-card padding>\n      <ion-card-header align="center">\n        Firma del supervisor\n      </ion-card-header>\n      <img src="http://157.230.81.230:5000/{{report.signature}}" alt=""\n        height="25%">\n    </ion-card>\n\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/adrianperez/Documents/Dev/Projects/3H/3HermanosIonic/src/pages/historial2/historial2.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" ? _a : Object])
    ], Historial2Page);
    return Historial2Page;
}());

//# sourceMappingURL=historial2.js.map

/***/ })

});
//# sourceMappingURL=8.js.map