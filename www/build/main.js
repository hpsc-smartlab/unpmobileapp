webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Welcome = (function () {
    function Welcome() {
        this.button1 = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */];
    }
    return Welcome;
}());
Welcome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'welcome',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/Welcome/welcome.html"*/'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n</head>\n\n\n<body>\n   <h2 class="nome">Nome APP</h2>\n\n   <ion-content padding="true" class="has-header">\n     <div>\n         <img class="logo" src="/android_asset/www/assets/img/Zsnc6a2wQPCZPX4oxwEt_immagineparthenope.jpg">\n     </div>\n       <button class="bottone" [navPush]="button1" ion-button color="positive" full large>Entra</button>\n   </ion-content>\n</body>\n</html>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/Welcome/welcome.html"*/,
        styleUrls: ['/welcome.scss']
    }),
    __metadata("design:paramtypes", [])
], Welcome);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mainPage_mainPage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var LoginPage = (function () {
    function LoginPage(navCtrl, http, config, nativeStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.nativeStorage = nativeStorage;
        this.url = this.config.serverUrl;
        this.nativeStorage.getItem("matricola").then(function (data) {
            if (data != null) {
                _this.matricola = data;
            }
        });
        this.nativeStorage.getItem("password").then(function (data) {
            if (data != null) {
                _this.password = data;
            }
        });
    }
    LoginPage.prototype.postRequest = function () {
        var _this = this;
        this.nativeStorage.setItem("matricola", this.matricola);
        this.nativeStorage.setItem("password", this.password);
        var postParams = {
            matricola: this.matricola,
            password: this.password
        };
        this.http.post(this.url, postParams).subscribe(function (data) {
            _this.items = data.json();
            //console.log(this.items);
            if (_this.items["login"] == 0) {
                alert("Credenziali errate");
            }
            else {
                alert("Accesso effettuato");
                /*Qui dentro ci va il codice per puntare alla nuova pagina*/
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__mainPage_mainPage__["a" /* MainPage */], { mat: _this.matricola, pass: _this.password }); //In questo modo puntiamo ad una nuova pagina.
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/login/login.html"*/'<ion-header class="header"  >\n  <ion-title class="titolo">Login Page</ion-title>\n  <ion-navbar >\n    <ion-title >\n      Welcome\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="body" padding id="page1" (ionScroll)="false">\n  <form id="page-form2">\n    <ion-item id="page-input3">\n      <ion-label>\n        Matricola\n      </ion-label>\n      <ion-input class="input" type="text" placeholder="" [(ngModel)]="matricola" name="matricola"></ion-input>\n    </ion-item>\n    <ion-item id="page-input4">\n      <ion-label>\n        Password\n      </ion-label>\n      <ion-input class="input" type="password" placeholder="" [(ngModel)]="password" name="password"></ion-input>\n    </ion-item>\n  </form>\n  <button class="bottone" id="page-button2" ion-button color="positive" block (click)="postRequest()">\n    Login\n  </button>\n</ion-content>\n\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/login/login.html"*/,
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__app_app_config__["b" /* MY_CONFIG_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* MY_CONFIG */] }],
        styleUrls: ['/login.scss']
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_app_config__["b" /* MY_CONFIG_TOKEN */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], Object, __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pannelloDiControllo_pannelloDiControllo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pianoDiStudi_pianoDiStudi__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__riepilogoEsami_riepilogo__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagamenti_pagamenti__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libretto_libretto__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var MainPage = (function () {
    function MainPage(navCtrl, http, navParams, config) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.config = config;
        this.matricola = this.navParams.get("mat");
        this.password = this.navParams.get("pass");
        this.url = this.config.serverUrl;
    }
    MainPage.prototype.piano_di_studi = function () {
        var _this = this;
        /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
        var postParams = {
            matricola: this.matricola,
            password: this.password
        };
        //Effettuiamo la post;
        this.http.post(this.url + "piano", postParams).subscribe(function (data) {
            _this.items = data.json();
            console.log(_this.items);
            if (_this.items.isEmpty) {
                alert("Errore");
            }
            else {
                alert("Ok");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pianoDiStudi_pianoDiStudi__["a" /* pianoDiStudi */], { item: _this.items });
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    MainPage.prototype.pannello = function () {
        var _this = this;
        /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
        var postParams = {
            matricola: this.matricola,
            password: this.password
        };
        //Effettuiamo la post;
        this.http.post(this.url + "pannello", postParams).subscribe(function (data) {
            _this.items = data.json();
            //console.log(this.items);
            if (_this.items.isEmpty) {
                alert("Errore");
            }
            else {
                alert("Ok");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pannelloDiControllo_pannelloDiControllo__["a" /* pannelloDiControllo */], { item: _this.items });
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    MainPage.prototype.riepilogo_esami = function () {
        var _this = this;
        /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
        var postParams = {
            matricola: this.matricola,
            password: this.password
        };
        //Effettuiamo la post;
        this.http.post(this.url + "riepilogo", postParams).subscribe(function (data) {
            _this.items = data.json();
            console.log(_this.items);
            if (_this.items.isEmpty) {
                alert("Errore");
            }
            else {
                alert("Ok");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__riepilogoEsami_riepilogo__["a" /* riepilogo */], { item: _this.items });
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    MainPage.prototype.pagamenti = function () {
        var _this = this;
        /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
        var postParams = {
            matricola: this.matricola,
            password: this.password
        };
        //Effettuiamo la post;
        this.http.post(this.url + "pagamenti", postParams).subscribe(function (data) {
            _this.items = data.json();
            console.log(_this.items);
            if (_this.items.isEmpty) {
                alert("Errore");
            }
            else {
                alert("Ok");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pagamenti_pagamenti__["a" /* pagamenti */], { item: _this.items });
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    MainPage.prototype.libretto = function () {
        var _this = this;
        /* Per ogni post c'è bisongo di specificare la matricola e la password.Quindi creiamo un oggetto postParams che contiene questi valori; */
        var postParams = {
            matricola: this.matricola,
            password: this.password
        };
        //Effettuiamo la post;
        this.http.post(this.url + "libretto", postParams).subscribe(function (data) {
            _this.items = data.json();
            console.log(_this.items);
            if (_this.items.isEmpty) {
                alert("Errore");
            }
            else {
                alert("Ok");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__libretto_libretto__["a" /* libretto */], { item: _this.items });
            }
        }, function (error2) {
            console.log(error2);
        });
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mainPage',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/mainPage/mainPage.html"*/'<ion-header class="header"  >\n  <ion-title class="titolo">Main Page</ion-title>\n</ion-header>\n\n<ion-content (ionScroll)="false">\n<ion-grid class="griglia" >\n\n  <ion-row class="riga">\n\n    <ion-col class="colonna" >\n      <img class="immagine" src="/android_asset/www/assets/img/computer.png"  (click)="pannello()">\n      <h4 class="sub-img">Pannello di Controllo</h4>\n    </ion-col>\n\n    <ion-col class="colonna">\n      <img class="immagine" src="/android_asset/www/assets/img/occhiali.png" (click)="piano_di_studi()">\n      <h4 class="sub-img">Piano di Studi</h4>\n    </ion-col>\n\n    <ion-col class="colonna" >\n      <img class="immagine" src="/android_asset/www/assets/img/lista.png" (click)="riepilogo_esami()">\n      <h4 class="sub-img">Riepilogo Esami</h4>\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="riga">\n\n    <ion-col class="colonna">\n      <img class="immagine" src="/android_asset/www/assets/img/pollicione.png" (click)="pagamenti()">\n      <h4 class="sub-img">Pagamenti</h4>\n    </ion-col>\n\n    <ion-col class="colonna">\n      <img class="immagine" src="/android_asset/www/assets/img/rubrica.png" (click)="libretto()">\n      <h4 class="sub-img">Libretto</h4>\n    </ion-col>\n\n    <ion-col class="colonna">\n    </ion-col>\n\n  </ion-row>\n\n\n</ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/mainPage/mainPage.html"*/,
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_8__app_app_config__["b" /* MY_CONFIG_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* MY_CONFIG */] }],
        styleUrls: ['/mainPage.scss']
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__app_app_config__["b" /* MY_CONFIG_TOKEN */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], Object])
], MainPage);

//# sourceMappingURL=mainPage.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pannelloDiControllo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pannelloDiControllo = (function () {
    function pannelloDiControllo(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.params = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
        this.diz = JSON.parse(this.params); //In questo modo lo convertiamo a dizionario;
        this.dizf = this.diz["pannello_di_controllo"]; //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;
        this.arrayOfKeys = Object.keys(this.dizf); //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
        console.log(this.dizf);
    }
    return pannelloDiControllo;
}());
pannelloDiControllo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pannello',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/pannelloDiControllo/pannelloDiControllo.html"*/'<ion-header class="header">\n  <ion-title class="titolo">Visualizza Pannello</ion-title>\n  <ion-navbar >\n    <ion-title >\n      Main Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content (ionScroll)="false">\n    <table class="tabella">\n\n        <tr class="riga" *ngFor="let x of  arrayOfKeys">\n\n          <td *ngIf=" x == \'Appelli disponibili\' " >\n            <b>{{x}}: </b> {{dizf[x]}}\n          </td>\n\n          <td *ngIf=" x == \'Iscrizioni appelli\' ">\n            <b>{{x}}: </b>{{dizf[x]}}\n          </td>\n\n          <td *ngIf=" x == \'Piano carriera\' ">\n            <b>{{x}}: </b> {{dizf[x]}}\n          </td>\n\n          <td *ngIf=" x == \'Tasse\' ">\n            <b>{{x}}: </b> {{dizf[x]}}\n          </td>\n\n        </tr>\n\n    </table>\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/pannelloDiControllo/pannelloDiControllo.html"*/,
        styleUrls: ['/pannelloDiControllo.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], pannelloDiControllo);

//# sourceMappingURL=pannelloDiControllo.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pianoDiStudi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pianoDiStudi = (function () {
    function pianoDiStudi(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.params = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
        this.diz = JSON.parse(this.params); //In questo modo lo convertiamo a dizionario;
        this.dizf = this.diz["piano"]; //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;
        //console.log(this.dizf)
        this.arrayOfKeys = Object.keys(this.dizf); //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
    }
    return pianoDiStudi;
}());
pianoDiStudi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pianoPage',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/pianoDiStudi/pianoDiStudi.html"*/'<ion-header class="header">\n  <ion-title class="titolo">Piano di Studi</ion-title>\n  <ion-navbar >\n    <ion-title >\n      Main Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content (ionScroll)="false">\n<table class="tabella" *ngFor="let x of  arrayOfKeys">\n\n\n  <div *ngIf="x==0">\n    <b>Anno 1</b>\n    <tr class="riga">\n    <td>\n        <b>{{dizf[x].ARC12}} </b>\n    </td>\n  </tr>\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].FISIC6}}</b>\n      </td>\n    </tr>\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].GI68}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].INFO03}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].MAT9}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].PROGR9}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n       <b>{{dizf[x].PROGR12}}</b>\n      </td>\n    </tr>\n  </div>\n\n  <div *ngIf="x==1">\n    <b>Anno 2</b>\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].ALGSTD12}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].BSDLBSD9}}</b>\n      </td>\n    </tr>\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].CALCN6}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].MATII9}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].SISOPL12}}</b>\n      </td>\n    </tr>\n  </div>\n\n\n  <div *ngIf="x==2">\n    <b >Anno 3</b>\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].TMOB}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].CPD6}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].EDI6}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].PFIN}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].PRGRIII9}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].RCLRC9}}</b>\n      </td>\n    </tr>\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].SIC}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].SISGIS1}}</b>\n      </td>\n    </tr>\n\n\n    <tr class="riga">\n      <td>\n        <b>{{dizf[x].TW6}}</b>\n      </td>\n    </tr>\n  </div>\n\n</table>\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/pianoDiStudi/pianoDiStudi.html"*/,
        styleUrls: ['/pianoDiStudi.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], pianoDiStudi);

//# sourceMappingURL=pianoDiStudi.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return riepilogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var riepilogo = (function () {
    function riepilogo(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.params = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
        this.diz = JSON.parse(this.params); //In questo modo lo convertiamo a dizionario;
        this.dizf = this.diz["riepilogo_esami"]; //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;
        this.arrayOfKeys = Object.keys(this.dizf); //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
    }
    return riepilogo;
}());
riepilogo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'riepilogo',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/riepilogoEsami/riepilogo.html"*/'<ion-header class="header">\n  <ion-title class="titolo">Riepilogo Esami</ion-title>\n  <ion-navbar >\n    <ion-title >\n      Main Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content (ionScroll)="false">\n<table class="tabella">\n\n  <tr class="riga" *ngFor="let x of  arrayOfKeys">\n\n    <td *ngIf=" x == \'cfu_conseguiti\' " >\n      <b>cfu conseguiti: </b>  {{dizf[x]}}\n    </td>\n\n    <td *ngIf=" x == \'esami_registrati\' ">\n      <b>esami registrati: </b>{{dizf[x]}}\n    </td>\n\n    <td *ngIf=" x == \'media_aritmetica_degli_esami\' ">\n      <b>media aritmetica degli esami: </b> {{dizf[x]}}\n    </td>\n\n    <td *ngIf=" x == \'media_aritmetica_di_laurea\' ">\n      <b>media aritmetica di laurea: </b> {{dizf[x]}}\n    </td>\n\n\n    <td *ngIf=" x == \'media_ponderata_degli_esami\' ">\n      <b>media ponderata degli esami: </b> {{dizf[x]}}\n    </td>\n\n\n    <td *ngIf=" x == \'media_ponderata_di_laurea\' ">\n      <b>media ponderata di laurea: </b> {{dizf[x]}}\n    </td>\n\n\n    <td *ngIf=" x == \'progressione_cfu\' ">\n      <b>progressione cfu: </b> {{dizf[x]}}\n    </td>\n\n  </tr>\n\n</table>\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/riepilogoEsami/riepilogo.html"*/,
        styleUrls: ['/riepilogo.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], riepilogo);

//# sourceMappingURL=riepilogo.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pagamenti; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pagamenti = (function () {
    function pagamenti(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.params = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
        this.diz = JSON.parse(this.params); //In questo modo lo convertiamo a dizionario;
        this.dizf = this.diz["pagamenti"]; //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;
        this.arrayOfKeys = Object.keys(this.dizf); //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
    }
    return pagamenti;
}());
pagamenti = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pagamenti',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/pagamenti/pagamenti.html"*/'<ion-header class="header">\n  <ion-title class="titolo">Pagamenti</ion-title>\n  <ion-navbar >\n    <ion-title >\n      Main Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content (ionScroll)="false">\n<table class="tabella">\n\n  <tr class="riga" *ngFor="let x of  arrayOfKeys">\n\n    <td *ngIf=" x >= \'0\' " >\n      <b>Tassa n°{{x}}: </b>  {{dizf[x]}}\n    </td>\n  </tr>\n\n</table>\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/pagamenti/pagamenti.html"*/,
        styleUrls: ['/pagamenti.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], pagamenti);

//# sourceMappingURL=pagamenti.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return libretto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var libretto = (function () {
    function libretto(navController, navParams) {
        this.navController = navController;
        this.navParams = navParams;
        this.params = navParams.get("item"); //Il valore passato da una pagina all'altra è una stringa;
        this.diz = JSON.parse(this.params); //In questo modo lo convertiamo a dizionario;
        this.dizf = this.diz["libretto"]; //Dato che diz è un dizionario di dizionario preleviamo il dizionario interno e lo mettiamo in dizf;
        this.arrayOfKeys = Object.keys(this.dizf); //Creiamo un array di chiavi dell'oggetto(dizionario) in modo da poterci iterare su;
    }
    return libretto;
}());
libretto = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'libretto',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/libretto/libretto.html"*/'<ion-header class="header" >\n  <ion-title  class="titolo" >Libretto</ion-title>\n  <ion-navbar >\n    <ion-title >\n      Main Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content (ionScroll)="false" >\n<table class="tabella">\n\n  <tr  class="riga" *ngFor="let x of  arrayOfKeys">\n\n    <td class="colonna"  *ngIf=" x >= \'0\' " >\n      <b>Esame:</b> {{dizf[x].attivita}},{{dizf[x].stato}}, <b>Voto:</b> {{dizf[x].voto}}, <b>Anno di Corso:</b> {{dizf[x].anno_di_corso}}\n    </td>\n\n  </tr>\n\n</table>\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/libretto/libretto.html"*/,
        styleUrls: ['/libretto.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], libretto);

//# sourceMappingURL=libretto.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MY_CONFIG_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var MY_CONFIG = {
    appName: 'My new App',
    serverUrl: 'http://193.205.230.8:5000/'
};
var MY_CONFIG_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('config');
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mainPage_mainPage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Welcome_welcome__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pannelloDiControllo_pannelloDiControllo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pianoDiStudi_pianoDiStudi__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_riepilogoEsami_riepilogo__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pagamenti_pagamenti__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_libretto_libretto__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_Welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mainPage_mainPage__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pianoDiStudi_pianoDiStudi__["a" /* pianoDiStudi */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pannelloDiControllo_pannelloDiControllo__["a" /* pannelloDiControllo */],
            __WEBPACK_IMPORTED_MODULE_14__pages_riepilogoEsami_riepilogo__["a" /* riepilogo */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pagamenti_pagamenti__["a" /* pagamenti */],
            __WEBPACK_IMPORTED_MODULE_16__pages_libretto_libretto__["a" /* libretto */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_Welcome_welcome__["a" /* Welcome */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mainPage_mainPage__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pianoDiStudi_pianoDiStudi__["a" /* pianoDiStudi */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pannelloDiControllo_pannelloDiControllo__["a" /* pannelloDiControllo */],
            __WEBPACK_IMPORTED_MODULE_14__pages_riepilogoEsami_riepilogo__["a" /* riepilogo */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pagamenti_pagamenti__["a" /* pagamenti */],
            __WEBPACK_IMPORTED_MODULE_16__pages_libretto_libretto__["a" /* libretto */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Welcome_welcome__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/giuseppe/GUI/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/giuseppe/GUI/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/giuseppe/GUI/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map