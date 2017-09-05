webpackJsonp([13],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joborderdetails_joborderdetails__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the QuotationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var QuotationPage = (function () {
    function QuotationPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
    }
    QuotationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotationPage');
    };
    QuotationPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    QuotationPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__joborderdetails_joborderdetails__["a" /* JoborderdetailsPage */]);
    };
    QuotationPage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'ADD QUOTE DETAIL',
            cssClass: 'promptcss',
            inputs: [
                {
                    name: 'SERVICE:',
                    placeholder: 'SERVICE'
                },
                {
                    name: 'DESCRIPTION:',
                    placeholder: 'DESCRIPTION'
                },
                {
                    name: 'PRICE:',
                    placeholder: 'PRICE'
                }
            ],
            buttons: [
                {
                    text: 'ADD',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Add clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return QuotationPage;
}());
QuotationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quotation',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/quotation/quotation.html"*/'\n\n<!-- <ion-header>\n\n  <ion-navbar color="custom-color">\n		<button  ion-button menuToggle class="menu-color">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>QUOTATION</ion-title>\n		<ion-icon class= "back-icon" name="arrow-back" (click)="goBack()"></ion-icon>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">QUOTATION</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  	\n<!-- header -->\n<div class="quote-header">\n	<table class="table table-quote ltr table-color">\n	<tr>\n		<td class="no-border"> <b>Vendor/Technician:</b> Khalid</td>\n		<td class="no-border"> 04-05-2017</td>\n	</tr>\n	<tr>\n		<td class="no-border" > <b>User Name:</b> Ahmed</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Title:</b> Electrical</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Order ID:</b> 65218</td>\n		<td class="no-border"> </td>\n	</tr>\n	</table>\n\n	<div class="quote ltr"> \n		<h4 class="color-red">SAR 100</h4>\n	</div>\n</div>\n<!-- header --> \n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr class="quotation-details">\n				<td><b> Services</b></td>\n				<td><b> Description</b></td>\n				<td><b> Price</b></td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>		\n		</tbody>\n	</table>\n	<div class="col-xs-12" style="text-align:center">\n		<button class="btn-gray" data-toggle="modal" data-target="#add" style="text-align:center" (click)="presentPrompt()">ADD</button>\n	</div>\n</div>\n<!-- table -->\n\n<!-- Title -->\n<div class="col-xs-12 title-ltr bg-dark-gray">\n	<div class="col-xs-12">\n		<h4 class="color-white title-heading">Material & Installation</h4>\n	</div>\n</div>\n<!-- Title -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr class="quotation-details">\n				<td><b> Description</b></td>\n				<td><b> Quantity</b></td>\n				<td><b> Price</b></td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr>\n				<td>Wire</td>\n				<td>02</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire</td>\n				<td>05</td>\n				<td>SAR 100</td>\n			</tr>		\n		</tbody>\n	</table>\n	<div class="col-xs-12" style="text-align:center">\n		<button class="btn-gray" data-toggle="modal" data-target="#add" (click)="presentPrompt()">ADD</button>\n	</div>\n</div>\n<!-- table -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-total ltr">\n		<thead>\n			<tr class="quotation-price">\n				<td><b> TOTAL</b></td>\n				<td style="float:right"><b> SAR 100</b></td>\n			</tr>	\n		</thead>\n		<tbody>		\n		</tbody>\n	</table>\n	<div class="col-xs-12 button-box">\n		<button class="btn-yellow lg">Submit Quote</button>\n	</div>\n</div>\n<!-- table -->\n\n\n\n\n<!-- Modal -->\n\n <!-- <div id="add" class="modal fade" role="dialog">\n  <div class="modal-dialog">\n\n    \n    <div class="modal-content" style="border-radius: 10px !important; overflow: hidden !important;">\n      <div class="modal-header" style="background: #cc4d50">\n        <button type="button" class="close" data-dismiss="modal">&times;</button>\n        <h4 class="color-white modal-title">ADD QUOTE DETAIL</h4>\n      </div>\n      <div class="modal-body" style="padding: 40px;">\n        <h4 class="label-text">SERVICE:</h4>\n        <br>\n        <input type="text" placeholder="Type Here.." class="modal-text-box">\n\n        <br><br>\n        <h4 class="label-text">DESCRIPTION:</h4>\n        <br>\n        <input type="text" placeholder="Type Here.." class="modal-text-box">\n\n        <br><br>\n        <h4 class="label-text">PRICE:</h4>\n        <br>\n        <input type="text" placeholder="Type Here.." class="modal-text-box">\n      </div>\n      <div class="modal-footer" style="text-align: center;">\n        <button type="button" class="btn btn-gray lg" data-dismiss="modal">ADD</button>\n      </div>\n    </div>\n\n  </div>\n</div>  -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/quotation/quotation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], QuotationPage);

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(menu, navCtrl, navParams, auth, loadingCtrl, alertCtrl, viewCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loginCredentials = { username: '', password: '' };
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header-language">\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- container -->\n<div class="container">\n		<div class="logo-box sm">\n			<img src="assets/logo.png" class="img-logo sm">\n		</div>\n		<div class="login-box" style="margin-top: 40px;">\n			<ion-input type="text" class="input-box-ltr email" placeholder="Email Address"></ion-input>\n			<br>\n			<ion-input  type="password" class="input-box-ltr password" placeholder="Password"></ion-input>\n			<br><br><br><br>\n			<button class="btn-yellow lg" (click)="goToHome()">Login</button>\n		</div>\n</div>\n<!-- container --> \n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _g || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LanguagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LanguagePage = (function () {
    function LanguagePage(menu, navCtrl, navParams) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LanguagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LanguagePage');
    };
    LanguagePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return LanguagePage;
}());
LanguagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-language',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/language/language.html"*/'<ion-header class="header-language">\n  <ion-navbar>\n  <!-- <ion-title class="title-language">Technician App</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class="splash-box">\n	<div class="splash-box-inner">\n		<div class="logo-box-language">\n			<img src="assets/logo.png" class="img-logo">\n			<p style="text-align:center;color:#C02124"><b>Technician</b></p>\n		</div>\n		<div class="button-box">\n			<button class="btn-yellow"  (click)="goToLogin()">العربية</button>\n			&nbsp;\n			<button class="btn-yellow" (click)="goToLogin()">English</button>\n		</div>\n	</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/language/language.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object])
], LanguagePage);

var _a, _b, _c;
//# sourceMappingURL=language.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReQuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_bill__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReQuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReQuotePage = (function () {
    function ReQuotePage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
    }
    ReQuotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReQuotePage');
    };
    ReQuotePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ReQuotePage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bill_bill__["a" /* BillPage */]);
    };
    ReQuotePage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'ADD QUOTE DETAIL',
            cssClass: 'promptcss',
            inputs: [
                {
                    name: 'SERVICE:',
                    placeholder: 'SERVICE'
                },
                {
                    name: 'DESCRIPTION:',
                    placeholder: 'DESCRIPTION'
                },
                {
                    name: 'PRICE:',
                    placeholder: 'PRICE'
                }
            ],
            buttons: [
                {
                    text: 'ADD',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Add clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return ReQuotePage;
}());
ReQuotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-re-quote',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/re-quote/re-quote.html"*/'\n\n<!-- <ion-header>\n\n  <ion-navbar color="custom-color">\n		<button  ion-button menuToggle class="menu-color">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>QUOTATION</ion-title>\n		<ion-icon class= "back-icon" name="arrow-back" (click)="goBack()"></ion-icon>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">QUOTATION</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  	\n<!-- header -->\n<div class="quote-header">\n	<table class="table table-quote ltr table-color">\n	<tr>\n		<td class="no-border"> <b>Vendor/Technician:</b> Khalid</td>\n		<td class="no-border"> 04-05-2017</td>\n	</tr>\n	<tr>\n		<td class="no-border" > <b>User Name:</b> Ahmed</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Title:</b> Electrical</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Order ID:</b> 65218</td>\n		<td class="no-border"> </td>\n	</tr>\n	</table>\n\n	<div class="quote ltr"> \n		<h4 class="color-red">SAR 100</h4>\n	</div>\n</div>\n<!-- header --> \n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr class="quotation-details">\n				<td> Services</td>\n				<td> Description</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>		\n		</tbody>\n	</table>\n	<div class="col-xs-12" style="text-align:center">\n		<button class="btn-gray" data-toggle="modal" data-target="#add" (click)="presentPrompt()">ADD</button>\n	</div>\n</div>\n<!-- table -->\n\n<!-- Title -->\n<div class="col-xs-12 title-ltr bg-dark-gray">\n	<div class="col-xs-12">\n		<h4 class="color-white title-heading">Material & Installation</h4>\n	</div>\n</div>\n<!-- Title -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr class="quotation-details">\n				<td> Description</td>\n				<td> Quantity</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr>\n				<td>Wire</td>\n				<td>02</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire</td>\n				<td>05</td>\n				<td>SAR 100</td>\n			</tr>		\n		</tbody>\n	</table>\n	<div class="col-xs-12" style="text-align:center">\n		<button class="btn-gray" data-toggle="modal" data-target="#add" (click)="presentPrompt()">ADD</button>\n	</div>\n</div>\n<!-- table -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-total ltr">\n		<thead>\n			<tr class="quotation-price">\n				<td> TOTAL</td>\n				<td> SAR 100</td>\n			</tr>	\n		</thead>\n		<tbody>		\n		</tbody>\n	</table>\n	<div class="col-xs-12 button-box">\n		<button class="btn-yellow lg">Submit Re-Quote</button>\n	</div>\n</div>\n<!-- table -->\n\n\n\n\n<!-- Modal -->\n<!-- \n <div id="add" class="modal fade" role="dialog">\n  <div class="modal-dialog">\n\n    \n    <div class="modal-content" style="border-radius: 10px !important; overflow: hidden !important;">\n      <div class="modal-header" style="background: #cc4d50">\n        <button type="button" class="close" data-dismiss="modal">&times;</button>\n        <h4 class="color-white modal-title">ADD QUOTE DETAIL</h4>\n      </div>\n      <div class="modal-body" style="padding: 40px;">\n        <h4 class="label-text">SERVICE:</h4>\n        <br>\n        <input type="text" placeholder="Type Here.." class="modal-text-box">\n\n        <br><br>\n        <h4 class="label-text">DESCRIPTION:</h4>\n        <br>\n        <input type="text" placeholder="Type Here.." class="modal-text-box">\n\n        <br><br>\n        <h4 class="label-text">PRICE:</h4>\n        <br>\n        <input type="text" placeholder="Type Here.." class="modal-text-box">\n      </div>\n      <div class="modal-footer" style="text-align: center;">\n        <button type="button" class="btn-gray lg" data-dismiss="modal">ADD</button>\n      </div>\n    </div>\n\n  </div>\n</div>  -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/re-quote/re-quote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ReQuotePage);

//# sourceMappingURL=re-quote.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assignedjob_assignedjob__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViewjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewjobPage = (function () {
    function ViewjobPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ViewjobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewjobPage');
    };
    ViewjobPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ViewjobPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assignedjob_assignedjob__["a" /* AssignedjobPage */]);
    };
    return ViewjobPage;
}());
ViewjobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewjob',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/viewjob/viewjob.html"*/'\n\n<!-- <ion-header>\n  <ion-navbar color="custom-color">\n		<button  ion-button menuToggle class="menu-color">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	<ion-title>QUOTATION</ion-title>\n	<ion-icon class= "back-icon" name="arrow-back" (click)="goBack()"></ion-icon>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">QUOTATION</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  	\n<!-- header -->\n<div class="quote-header">\n	<table class="table table-quote ltr  table-color">\n	<tr>\n		<td class="no-border"> <b>User Name:</b> Ahmed</td>\n		<td class="no-border"> 04-05-2017</td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Vendor/Technician:</b> Khalid</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>quote ID</b> 002</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Title:</b> Electrical</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Order ID:</b> 65218</td>\n		<td class="no-border"> </td>\n	</tr>\n	</table>\n\n	<div class="quote ltr"> \n		<h4 class="color-red">SAR 100</h4>\n	</div>\n</div>\n<!-- header --> \n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr>\n				<td> Services</td>\n				<td> Description</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr class="price-box">\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>		\n		</tbody>\n	</table>\n\n</div>\n<!-- table -->\n\n<!-- Title -->\n<div class="col-xs-12 title-ltr bg-dark-gray">\n	<div class="col-xs-12">\n		<h4 class="color-white title-heading">Material & Installation</h4>\n	</div>\n</div>\n<!-- Title -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr>\n				<td> Description</td>\n				<td> Quantity</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr class="price-box">\n				<td>Wire</td>\n				<td>02</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire</td>\n				<td>05</td>\n				<td>SAR 100</td>\n			</tr>		\n		</tbody>\n	</table>\n</div>\n<!-- table -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-total price-box ltr">\n		<thead>\n			<tr>\n				<td><b> TOTAL</b></td>\n				<td style="float:right"><b> SAR 100</b></td>\n			</tr>	\n		</thead>\n		<tbody>		\n		</tbody>\n	</table>\n\n</div>\n<!-- table -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/viewjob/viewjob.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], ViewjobPage);

//# sourceMappingURL=viewjob.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCompletionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_bill__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the JobCompletionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JobCompletionPage = (function () {
    function JobCompletionPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    JobCompletionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobCompletionPage');
    };
    JobCompletionPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    JobCompletionPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bill_bill__["a" /* BillPage */]);
    };
    return JobCompletionPage;
}());
JobCompletionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-job-completion',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/job-completion/job-completion.html"*/'<!--\n  Generated template for the JobCompletionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n   <ion-navbar  color="custom-color">\n           <button light ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="header-name">JOB COMPLETION</ion-title>\n    <ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back" (click)="goBack()"></ion-icon>\n\n\n   </ion-navbar>  \n\n</ion-header> -->\n\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">JOB COMPLETION</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  	\n<!-- container -->\n<div class="col-xs-12 center">\n\n	<div class="detail-box-outer">\n	    <div class="col-xs-12 detail-box-full">	    	\n	        <div class="col-xs-12 text-left ltr">\n	        	<h4 class="light-gray"><b>Attach picture as proof of completion:</b></h4>	        	\n	        	<img src="assets/img_01.png" class="img-upload img-lg">\n	        	<img src="assets/img_01.png" class="img-upload img-lg">\n	        	<img src="assets/img_01.png" class="img-upload img-lg">\n	        	<br>\n	        	<div class="row col-xs-12" style="padding: 14px 11px;">\n	        		<input type="checkbox" class="checkbox pull-left" step="margin: 12px 0 0;">\n	        		<h5 class="light-gray pull-left">No proof of completion possible.</h5>\n	        	</div>\n\n	        </div>	        \n	        	\n	    </div>    	    \n	</div>\n\n	   \n\n</div>\n<div class="col-xs-12" style="text-align:center">\n  <button class="btn-yellow lg">Completed</button> \n</div>\n<!-- container --> \n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/job-completion/job-completion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], JobCompletionPage);

//# sourceMappingURL=job-completion.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claimjob_claimjob__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClaimdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClaimdetailsPage = (function () {
    function ClaimdetailsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ClaimdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClaimdetailsPage');
    };
    ClaimdetailsPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ClaimdetailsPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__claimjob_claimjob__["a" /* ClaimjobPage */]);
    };
    return ClaimdetailsPage;
}());
ClaimdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-claimdetails',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/claimdetails/claimdetails.html"*/'<!--\n  Generated template for the ClaimdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n   <ion-navbar  color="custom-color">\n           <button light ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n		<ion-title class="header-name">CLAIM DETAILS</ion-title>\n		<ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back" (click)="goBack()"></ion-icon>\n\n\n   </ion-navbar>  \n\n</ion-header> -->\n\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">CLAIM DETAILS</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- container -->\n<div class="col-xs-12 center">\n\n	<div class="detail-box-outer">\n	    <div class="col-xs-12 detail-box-full">	    	\n	        <div class="col-xs-12 text-left ltr">\n	        	<table class="table table-home table-job-detail ltr">\n			        <tr>\n			        	<td class="no-border "><i class="fa fa-angle-right table-bullet-ltr" aria-hidden="true"></i> User Name:</td> \n			        	<td class="no-border right-claimDetails">Ahmed</td>\n			        </tr>\n\n			        <tr>\n			        	<td class="no-border"><i class="fa fa-angle-right table-bullet-ltr" aria-hidden="true"></i> Claim ID:</td> \n			        	<td class="no-border right-claimDetails">002</td>\n			        </tr>\n\n			        <tr>\n			        	<td class="no-border"><i class="fa fa-angle-right table-bullet-ltr" aria-hidden="true"></i> Job Title:</td> \n			        	<td class="no-border right-claimDetails">Electrical</td>\n			        </tr>\n\n			        <tr>\n			        	<td class="no-border"><i class="fa fa-angle-right table-bullet-ltr" aria-hidden="true"></i> Job Order ID:</td> \n			        	<td class="no-border right-claimDetails">65219</td>\n			        </tr>\n\n			        <tr>\n			        	<td class="no-border"><i class="fa fa-angle-right table-bullet-ltr" aria-hidden="true"></i> Job Completion Date:</td> \n			        	<td class="no-border right-claimDetails">Fri, Apr-17-2017</td>\n			        </tr>\n			        	        \n			        <tr>	        	\n			        	<td class="no-border"><i class="fa fa-angle-right table-bullet-ltr" aria-hidden="true"></i> Vendor/Technician:</td> \n			        	<td class="no-border right-claimDetails">Khalid</td>\n			        </tr>        	\n		       \n		        </table>	        	\n\n	        </div>	    	        	  \n	        	\n	    </div>    	    \n	    <div class="col-xs-12" style="text-align: left; padding-left: 6px !important; padding-bottom: 20px;">\n		    <h4 class="light-gray">User problem:</h4>\n		    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h5>\n\n		    <h4 class="light-gray">Images:</h4>\n        	<img src="assets/img_01.png" class="img-upload img-lg">\n        	<img src="assets/img_01.png" class="img-upload img-lg">\n        	<img src="assets/img_01.png" class="img-upload img-lg">\n        </div>\n\n	</div>\n  <div style="text-align:center">\n    <br>\n		<button class="btn-yellow">Call</button>\n		&nbsp;\n    <button class="btn-gray-two">Navigate</button>\n    <br><br>\n  </div>\n  \n	    \n  \n</div>\n\n<div class="col-xs-12" style="text-align:center">\n	<button class="btn-yellow lg">Completed</button>\n</div>\n<!-- container --> \n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/claimdetails/claimdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], ClaimdetailsPage);

//# sourceMappingURL=claimdetails.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assignedjob/assignedjob.module": [
		287,
		30
	],
	"../pages/bill/bill.module": [
		285,
		29
	],
	"../pages/claimdetails/claimdetails.module": [
		288,
		12
	],
	"../pages/claimjob/claimjob.module": [
		289,
		11
	],
	"../pages/job-completion/job-completion.module": [
		284,
		10
	],
	"../pages/joborder/joborder.module": [
		282,
		9
	],
	"../pages/joborderdetails/joborderdetails.module": [
		278,
		8
	],
	"../pages/joborderdetailsview/joborderdetailsview.module": [
		292,
		0
	],
	"../pages/language/language.module": [
		281,
		7
	],
	"../pages/login/login.module": [
		280,
		6
	],
	"../pages/quotation/quotation.module": [
		277,
		5
	],
	"../pages/quotationview/quotationview.module": [
		279,
		4
	],
	"../pages/re-quote/re-quote.module": [
		283,
		3
	],
	"../pages/selectservice/selectservice.module": [
		290,
		2
	],
	"../pages/viewjob/viewjob.module": [
		286,
		1
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [String, String])
], User);

var AuthServiceProvider = (function () {
    function AuthServiceProvider() {
    }
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoborderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JoborderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JoborderPage = (function () {
    function JoborderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoborderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoborderPage');
    };
    return JoborderPage;
}());
JoborderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-joborder',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/joborder/joborder.html"*/'<!--\n  Generated template for the JoborderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>joborder</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <!-- Segment in content -->\n  <ion-segment [(ngModel)]="relationship" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="incoming">\n      Incoming\n    </ion-segment-button>\n    <ion-segment-button value="quoted">\n      Quoted\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Segment in a form -->\n  <form [formGroup]="myForm">\n    <ion-segment formControlName="mapStyle" color="danger">\n      <ion-segment-button value="standard">\n        Standard\n      </ion-segment-button>\n      <ion-segment-button value="hybrid">\n        Hybrid\n      </ion-segment-button>\n      <ion-segment-button value="sat">\n        Satellite\n      </ion-segment-button>\n    </ion-segment>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/joborder/joborder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], JoborderPage);

//# sourceMappingURL=joborder.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_language_language__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_joborder_joborder__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_joborderdetails_joborderdetails__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_quotation_quotation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quotationview_quotationview__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_assignedjob_assignedjob__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_claimjob_claimjob__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_claimdetails_claimdetails__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_bill_bill__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_re_quote_re_quote__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_job_completion_job_completion__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_viewjob_viewjob__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_selectservice_selectservice__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_joborderdetailsview_joborderdetailsview__ = __webpack_require__(293);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_language_language__["a" /* LanguagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_joborder_joborder__["a" /* JoborderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_joborderdetails_joborderdetails__["a" /* JoborderdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_quotation_quotation__["a" /* QuotationPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_quotationview_quotationview__["a" /* QuotationviewPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_assignedjob_assignedjob__["a" /* AssignedjobPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_claimjob_claimjob__["a" /* ClaimjobPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_claimdetails_claimdetails__["a" /* ClaimdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_bill_bill__["a" /* BillPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_re_quote_re_quote__["a" /* ReQuotePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_job_completion_job_completion__["a" /* JobCompletionPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_viewjob_viewjob__["a" /* ViewjobPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_selectservice_selectservice__["a" /* SelectservicePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_joborderdetailsview_joborderdetailsview__["a" /* JoborderdetailsviewPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/quotation/quotation.module#QuotationPageModule', name: 'QuotationPage', segment: 'quotation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/joborderdetails/joborderdetails.module#JoborderdetailsPageModule', name: 'JoborderdetailsPage', segment: 'joborderdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/quotationview/quotationview.module#QuotationviewPageModule', name: 'QuotationviewPage', segment: 'quotationview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/joborder/joborder.module#JoborderPageModule', name: 'JoborderPage', segment: 'joborder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/re-quote/re-quote.module#ReQuotePageModule', name: 'ReQuotePage', segment: 're-quote', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job-completion/job-completion.module#JobCompletionPageModule', name: 'JobCompletionPage', segment: 'job-completion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bill/bill.module#BillPageModule', name: 'BillPage', segment: 'bill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewjob/viewjob.module#ViewjobPageModule', name: 'ViewjobPage', segment: 'viewjob', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/assignedjob/assignedjob.module#AssignedjobPageModule', name: 'AssignedjobPage', segment: 'assignedjob', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/claimdetails/claimdetails.module#ClaimdetailsPageModule', name: 'ClaimdetailsPage', segment: 'claimdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/claimjob/claimjob.module#ClaimjobPageModule', name: 'ClaimjobPage', segment: 'claimjob', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectservice/selectservice.module#SelectservicePageModule', name: 'SelectservicePage', segment: 'selectservice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/joborderdetailsview/joborderdetailsview.module#JoborderdetailsviewPageModule', name: 'JoborderdetailsviewPage', segment: 'joborderdetailsview', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_language_language__["a" /* LanguagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_joborder_joborder__["a" /* JoborderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_joborderdetails_joborderdetails__["a" /* JoborderdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_quotation_quotation__["a" /* QuotationPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_quotationview_quotationview__["a" /* QuotationviewPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_assignedjob_assignedjob__["a" /* AssignedjobPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_claimjob_claimjob__["a" /* ClaimjobPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_claimdetails_claimdetails__["a" /* ClaimdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_bill_bill__["a" /* BillPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_re_quote_re_quote__["a" /* ReQuotePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_job_completion_job_completion__["a" /* JobCompletionPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_viewjob_viewjob__["a" /* ViewjobPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_selectservice_selectservice__["a" /* SelectservicePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_joborderdetailsview_joborderdetailsview__["a" /* JoborderdetailsviewPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_assignedjob_assignedjob__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_claimjob_claimjob__ = __webpack_require__(54);
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
    function MyApp(menu, platform, statusBar, splashScreen) {
        this.menu = menu;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Job Order', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], class: 'class1', img: 'assets/job_icon@2x-2.png' },
            { title: 'Quotes', component: __WEBPACK_IMPORTED_MODULE_6__pages_assignedjob_assignedjob__["a" /* AssignedjobPage */], class: 'class2', img: 'assets/quotes@2x-2.png' },
            { title: 'Re-Quotes', component: __WEBPACK_IMPORTED_MODULE_7__pages_claimjob_claimjob__["a" /* ClaimjobPage */], class: 'class3', img: 'assets/re-quotes@2x-2.png' },
            { title: 'Claims', component: __WEBPACK_IMPORTED_MODULE_7__pages_claimjob_claimjob__["a" /* ClaimjobPage */], class: 'class3', img: 'assets/claims@3x.png' }
        ];
        this.ActivePage = this.pages[0];
    }
    MyApp.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.ActivePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.ActivePage;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/app/app.html"*/'<ion-menu side="left" [content]="content" persistent="true">\n  <!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content class="custom">\n    \n    \n    \n    <ion-list style="height: 87%;">\n      <br>\n      <button menuClose ion-item *ngFor="let p of pages" [class.activeHighlight]="checkActive(p)" (click)="openPage(p)">\n        <ion-thumbnail item-start class="class1">\n          <img src="{{p.img}}" class="menu-img-size">\n        </ion-thumbnail>\n        <span class="menu_item_icon" [innerHTML]="p.icon"></span>\n        <span class="menu_item_title">\n        {{p.title}}\n        </span>\n        \n\n\n\n      </button>\n    </ion-list>\n    <div class="col-xs-12">\n      <ion-thumbnail item-start style="position:absolute">\n        <img src="assets/logout@3x.png" class="logout-img-size">\n          </ion-thumbnail>\n            <span class="menu_item_title logout">\n              Logout\n            </span> \n    </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joborderdetails_joborderdetails__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SelectservicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelectservicePage = (function () {
    function SelectservicePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SelectservicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectservicePage');
    };
    SelectservicePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    SelectservicePage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__joborderdetails_joborderdetails__["a" /* JoborderdetailsPage */]);
    };
    return SelectservicePage;
}());
SelectservicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-selectservice',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/selectservice/selectservice.html"*/'<!--\n  Generated template for the SelectservicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="header-home">\n    <ion-navbar color="custom-color">\n  \n    <button  ion-button menuToggle class="menu-color">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title class="header-name">SELECT SERVICE PROVIDER</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	\n<!-- container -->\n<div class="col-xs-12 service-provider-box-main no-p" style="text-align:center">\n    \n    \n      <div class="col-xs-12 service-provider-box no-p ">\n        <div class="col-xs-1 select-box ltr">\n          <input type="checkbox" class="checkbox-select first">\n        </div>\n          <div class="col-xs-10 dropdown-box no-p">	\n              <ion-label>Sort by City</ion-label>        \n              <ion-select class="dropdown-sort" interface="popover" style="max-width:100%">\n                <ion-option value="city">Sort By City</ion-option>\n                <ion-option value="name">City Name</ion-option>\n                <ion-option value="value">City Name</ion-option>\n              </ion-select>	\n          </div>    \n      </div>\n    \n      <div class="col-xs-12 service-provider-box no-p">\n        <div class="col-xs-1 select-box ltr">\n          <input type="checkbox" class="checkbox-select">\n        </div>\n          <div class="col-xs-10 detail-box">\n              <table class="table table-home table-service ltr">\n                <tr>\n                  <td>Service Provider:</td> \n                  <td>XY Electronics</td>\n                </tr>\n                <tr>\n                  <td>Category:</td> \n                  <td>Electrical</td>\n                </tr>\n                <tr>\n                  <td>City:</td> \n                  <td>Riyadh</td>\n                </tr>        \n              </table>\n                \n          </div>    \n      </div>\n    \n      <div class="col-xs-12 service-provider-box no-p">\n        <div class="col-xs-1 select-box ltr">\n          <input type="checkbox" class="checkbox-select">\n        </div>\n          <div class="col-xs-10 detail-box">\n              <table class="table table-home table-service ltr">\n                <tr>\n                  <td>Service Provider:</td> \n                  <td>XY Electronics</td>\n                </tr>\n                <tr>\n                  <td>Category:</td> \n                  <td>Electrical</td>\n                </tr>\n                <tr>\n                  <td>City:</td> \n                  <td>Riyadh</td>\n                </tr>        \n              </table>\n                \n          </div>    \n      </div>\n    \n      <div class="col-xs-12 service-provider-box no-p">\n        <div class="col-xs-1 select-box ltr">\n          <input type="checkbox" class="checkbox-select">\n        </div>\n          <div class="col-xs-10 detail-box">\n              <table class="table table-home table-service ltr">\n                <tr>\n                  <td>Service Provider:</td> \n                  <td>XY Electronics</td>\n                </tr>\n                <tr>\n                  <td>Category:</td> \n                  <td>Electrical</td>\n                </tr>\n                <tr>\n                  <td>City:</td> \n                  <td>Riyadh</td>\n                </tr>        \n              </table>\n                \n          </div>    \n      </div>\n    \n      <div class="col-xs-12 service-provider-box no-p">\n        <div class="col-xs-1 select-box ltr">\n          <input type="checkbox" class="checkbox-select">\n        </div>\n          <div class="col-xs-10 detail-box">\n              <table class="table table-home table-service ltr">\n                <tr>\n                  <td>Service Provider:</td> \n                  <td>XY Electronics</td>\n                </tr>\n                <tr>\n                  <td>Category:</td> \n                  <td>Electrical</td>\n                </tr>\n                <tr>\n                  <td>City:</td> \n                  <td>Riyadh</td>\n                </tr>        \n              </table>\n                \n          </div>    \n      </div>\n    \n      <button class="btn btn-yellow lg">Send for quote</button>    \n    \n    </div>\n    <!-- container --> \n    \n    \n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/selectservice/selectservice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], SelectservicePage);

//# sourceMappingURL=selectservice.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoborderdetailsviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the JoborderdetailsviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JoborderdetailsviewPage = (function () {
    function JoborderdetailsviewPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    JoborderdetailsviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoborderdetailsviewPage');
    };
    JoborderdetailsviewPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    JoborderdetailsviewPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    return JoborderdetailsviewPage;
}());
JoborderdetailsviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-joborderdetailsview',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/joborderdetailsview/joborderdetailsview.html"*/'\n<ion-header class="header-home">\n    <ion-navbar color="custom-color">\n  \n    <button  ion-button menuToggle class="menu-color">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title class="header-name">JOB ORDER DETAILS</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n  <!-- container -->\n  <div class="col-xs-12">\n  \n    <div class="detail-box-outer">\n        <div class="col-xs-12 detail-box-full">	    	\n            <table class="table table-home table-job-detail ltr">\n              <tr>\n                <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> User Name:</b></td> \n                <td class="no-border">Ahmed</td>\n              </tr>\n  \n              <tr>\n                <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Job Title:</b></td> \n                <td class="no-border">Electrical</td>\n              </tr>\n  \n              <tr>\n                <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Job Order ID:</b></td> \n                <td class="no-border">65219</td>\n              </tr>\n                        \n              <tr class="price-box">	        	\n                <td><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Job Summary:</b></td> \n                <td></td>\n              </tr>        	\n           \n            </table>\n            <div class="col-xs-12 text-left ltr" style="padding: 0px 0px 5px 30px">\n              <h4 class="light-gray"><b>Description</b></h4>\n              <span class="font-light">Need electrical installation services for my house.</span>\n              <br>\n              <h4 class="light-gray"><b>Images</b></h4>\n              <img src="assets/img_01.png" class="img-upload">\n              <img src="assets/img_01.png" class="img-upload">\n              <img src="assets/img_01.png" class="img-upload">\n            </div>\n  \n            <table class="table table-home table-job-detail ltr">\n            <tr>\n              <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Installation Charges:</b></td> \n              <td class="no-border">Yes</td>\n            </tr>\n  \n            <tr class="price-box">\n              <td><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b>  Date:</b></td> \n              <td>04-05-2017</td>\n            </tr>\n            <tr>\n              <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b>  Time</b></td> \n              <td class="no-border">4:30 pm</td>\n            </tr>\n            <tr>\n                <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b>  User Location:</b></td> \n                <td class="no-border">Riyadh Saudia</td>\n              </tr>\n\n            </table>\n  \n            <table class="table table-home table-job-detail ltr">\n       	        <tr>\n                  <td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Quote Limits:</b></td> \n                  <td class="no-border" style="text-align: center;">SAR 5 <br>Min</td>\n                  <td class="no-border" style="text-align: center;">SAR 5 <br>Max</td>\n                </tr>	 \n           \n            </table>\n              \n        </div>    	    \n    </div>\n  \n      \n  \n  </div>\n  <!-- container --> \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/joborderdetailsview/joborderdetailsview.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _c || Object])
], JoborderdetailsviewPage);

var _a, _b, _c;
//# sourceMappingURL=joborderdetailsview.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joborderdetails_joborderdetails__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotationview_quotationview__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__joborderdetailsview_joborderdetailsview__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, viewCtrl, app, menu) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.requests = "incoming";
        menu.enable(true);
    }
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("entered");
        this.viewCtrl.showBackButton(false);
    };
    HomePage.prototype.viewDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__joborderdetails_joborderdetails__["a" /* JoborderdetailsPage */]);
    };
    HomePage.prototype.goToQuotationView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quotationview_quotationview__["a" /* QuotationviewPage */]);
    };
    HomePage.prototype.goToJobOrderDetailsView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__joborderdetailsview_joborderdetailsview__["a" /* JoborderdetailsviewPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/home/home.html"*/'<ion-header class="header-home">\n\n\n   <ion-navbar  color="custom-color">\n           <button light ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="header-name">JOB ORDER REQUEST</ion-title>\n\n\n   </ion-navbar>  \n\n</ion-header>\n\n\n\n\n<ion-content>\n\n   <!-- <button ion-button secondary menuToggle>Toggle Menu</button>  -->\n\n  <div>\n  <ion-segment [(ngModel)]="requests" class="segment-color">\n    <ion-segment-button value="incoming">\n     Incoming \n    </ion-segment-button>\n    <ion-segment-button value="quote">\n     Sent for Quote\n	</ion-segment-button>\n	<ion-segment-button value="completed">\n	 Completed\n	</ion-segment-button>\n  </ion-segment>\n</div>\n\n<div class="col-xs-12">\n<div [ngSwitch]="requests">\n  <ion-list *ngSwitchCase="\'incoming\'" >\n    \n<!-- tabs -->\n<div class="tabs-header-home">\n\n        \n      \n      <!-- Incoming -->\n      <div class="tab-pane fade in active home-tabs-box">\n      \n	      	<div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>	\n\n	        <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n					<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n					<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="viewDetails()"></ion-icon> -->\n					<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="viewDetails()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border"><b>Job Title:</b></td> \n			        	<td class="no-border"> Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>User Name:</b></td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Job Order ID:</b></td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Date & Time:</b></td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n					</tr>\n			        </table>\n			        	\n				</div> \n				<div class="col-xs-12 no-p">\n		        	<button class="btn-yellow-curve half pull-left" (click)="viewDetails()"> View</button>    \n		        	<button class="btn-gray-curve half pull-right">Call</button>    \n		        </div>   \n				<!-- <button class="btn-yellow-curve" (click)="viewDetails()">View</button>     -->\n        </div>\n              \n        <div class="row title-ltr">\n	      	<div class="col-xs-12">\n	          <h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      	</div>\n	    </div> \n			\n		    <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n					<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n					<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="viewDetails()"></ion-icon> -->\n					<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="viewDetails()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border"><b>Job Title:</b></td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>User Name:</b></td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Job Order ID:</b></td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Date & Time:</b></td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n			        </table>\n			        	\n				</div> \n				<div class="col-xs-12 no-p">\n		        	<button class="btn-yellow-curve half pull-left" (click)="viewDetails()">View</button>    \n		        	<button class="btn-gray-curve half pull-right">Call</button>    \n		        </div>    \n				<!-- <button class="btn-yellow-curve" (click)="viewDetails()">View</button>     -->\n		    </div>\n\n\n\n\n	        <div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>\n\n	        <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n					<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n					<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="viewDetails()"></ion-icon> -->\n					<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="viewDetails()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border"><b>Job Title:</b></td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>User Name:</b></td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Job Order ID:</b></td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Date & Time:</b></td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n			        </table>\n			        	\n				</div> \n				<div class="col-xs-12 no-p">\n		        	<button class="btn-yellow-curve half pull-left" (click)="viewDetails()">View</button>    \n		        	<button class="btn-gray-curve half pull-right">Call</button>    \n		        </div>    \n		        <!-- <button class="btn-yellow-curve" (click)="viewDetails()">View</button>     -->\n		    </div>\n\n      </div>\n      <!-- Incoming end -->\n</div>\n\n\n  </ion-list>\n\n<!--Quoted Segment-->\n\n  <ion-list *ngSwitchCase="\'quote\'">\n\n    <!-- tabs -->\n<div class="tabs-header-home">\n\n\n    <!-- Quoted -->\n      <div class="tab-pane fade in active home-tabs-box">\n			\n			<div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>\n\n	        <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n					<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n					<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToQuotationView()"></ion-icon> -->\n					<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToQuotationView()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border"><b>Job Title:</b></td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>User Name:</b></td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Job Order ID:</b></td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Date & Time:</b></td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n			        </table>\n			        	\n		        </div>    \n		        <button class="btn-yellow-curve" (click)="goToJobOrderDetailsView()">View</button>    \n        </div>  \n              \n        <div class="row title-ltr">\n	      	<div class="col-xs-12">\n	      		<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      	</div>\n	    </div>\n\n		    <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n					<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n					<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToQuotationView()"></ion-icon> -->\n					<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToQuotationView()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border"><b>Job Title:</b></td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>User Name:</b></td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Job Order ID:</b></td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Date & Time:</b></td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n\n			        </table>\n			        	\n		        </div>    \n		        <button class="btn-yellow-curve" (click)="goToJobOrderDetailsView()">View</button>    \n        </div> \n              \n        <div class="row title-ltr">\n	      	<div class="col-xs-12">\n	      		<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      	</div>\n	      </div>\n\n		    <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n					<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n					<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToQuotationView()"></ion-icon> -->\n					<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToQuotationView()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border"><b>Job Title:</b></td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>User Name:</b></td>  \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Job Order ID:</b></td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"><b>Date & Time:</b></td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n\n\n			        </table>\n			        	\n		        </div>    \n		        <button class="btn-yellow-curve" (click)="goToJobOrderDetailsView()">View</button>    \n		    </div> \n\n      </div>\n      <!-- Quoted end -->\n\n</div>\n   \n  </ion-list>\n\n\n<!--Quoted Segment-->\n\n<ion-list *ngSwitchCase="\'completed\'">\n	\n		<!-- tabs -->\n	<div class="tabs-header-home">\n	\n	\n		<!-- Completed -->\n		  <div class="tab-pane fade in active home-tabs-box">\n				\n				<div class="row title-ltr">\n					  <div class="col-xs-12">\n						  <h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n					  </div>\n				</div>\n	\n				<div class="detail-box-outer">\n					<div class="col-xs-12 detail-box">\n						<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n						<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToQuotationView()"></ion-icon> -->\n						<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToQuotationView()">\n						<table class="table table-home ltr">\n						<tr>\n							<td class="no-border"><b>Job Title:</b></td> \n							<td class="no-border">Electrical</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>User Name:</b></td> \n							<td class="no-border">Ahmed</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>Job Order ID:</b></td> \n							<td class="no-border">65218</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>Date & Time:</b></td> \n							<td class="no-border">04-05-2017, 05:30pm</td>\n						</tr>\n						<tr class="price-box">\n							<td><b>Quote Amount:</b></td> \n							<td class="text-right ltr" style="padding-right: 10px;"><b>SAR 100</b></td>\n						</tr>\n	\n						</table>\n							\n					</div>    \n					<button class="btn-yellow-curve" (click)="goToQuotationView()">View</button>    \n			</div>  \n				  \n			<div class="row title-ltr">\n				  <div class="col-xs-12">\n					  <h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n				  </div>\n			  </div>\n	\n				<div class="detail-box-outer">\n					<div class="col-xs-12 detail-box">\n						<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n						<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToQuotationView()"></ion-icon> -->\n						<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToQuotationView()">\n						<table class="table table-home ltr">\n						<tr>\n							<td class="no-border"><b>Job Title:</b></td> \n							<td class="no-border">Electrical</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>User Name:</b></td> \n							<td class="no-border">Ahmed</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>Job Order ID:</b></td> \n							<td class="no-border">65218</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>Date & Time:</b></td> \n							<td class="no-border">04-05-2017, 05:30pm</td>\n						</tr>\n						<tr class="price-box">\n							<td class="quote-amount"><b>Quote Amount:</b></td> \n							<td class="text-right ltr" style="padding-right: 10px;"><b>SAR 100</b></td>\n						</tr>\n	\n						</table>\n							\n					</div>    \n					<button class="btn-yellow-curve" (click)="goToQuotationView()">View</button>    \n			</div> \n				  \n			<div class="row title-ltr">\n				  <div class="col-xs-12">\n					  <h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n				  </div>\n			  </div>\n	\n				<div class="detail-box-outer">\n					<div class="col-xs-12 detail-box">\n						<i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n						<!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToQuotationView()"></ion-icon> -->\n						<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToQuotationView()">\n						<table class="table table-home ltr">\n						<tr>\n							<td class="no-border"><b>Job Title:</b></td> \n							<td class="no-border">Electrical</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>User Name:</b></td>  \n							<td class="no-border">Ahmed</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>Job Order ID:</b></td> \n							<td class="no-border">65218</td>\n						</tr>\n						<tr>\n							<td class="no-border"><b>Date & Time:</b></td> \n							<td class="no-border">04-05-2017, 05:30pm</td>\n						</tr>\n						<tr class="price-box">\n							<td class="quote-amount"><b>Quote Amount:</b></td> \n							<td class="text-right ltr" style="padding-right: 10px;"><b>SAR 100</b></td>\n						</tr>\n	\n						</table>\n							\n					</div>    \n					<button class="btn-yellow-curve" (click)="goToQuotationView()">View</button>    \n				</div> \n	\n		  </div>\n		  <!-- Completed end -->\n	\n	</div>\n	   \n	  </ion-list>\n	\n\n\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assignedjob_assignedjob__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__re_quote_re_quote__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_completion_job_completion__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BillPage = (function () {
    function BillPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillPage');
    };
    BillPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assignedjob_assignedjob__["a" /* AssignedjobPage */]);
    };
    BillPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    BillPage.prototype.goToReQuote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__re_quote_re_quote__["a" /* ReQuotePage */]);
    };
    BillPage.prototype.goToJobCompletion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__job_completion_job_completion__["a" /* JobCompletionPage */]);
    };
    return BillPage;
}());
BillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bill',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/bill/bill.html"*/'<!--\n  Generated template for the BillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar color="custom-color">\n		<button  ion-button menuToggle class="menu-color">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>QUOTATION</ion-title>\n		<ion-icon class= "back-icon" name="arrow-back" (click)="goBack()"></ion-icon>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">QUOTATION</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- header -->\n<div class="quote-header">\n	<table class="table table-quote ltr" style="color:white">\n	<tr>\n		<td class="no-border"> <b>User Name:</b> Ahmed</td>\n		<td class="no-border"> 04-05-2017</td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Vendor/Technician:</b> Khalid</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Quote ID:</b> 002</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Title:</b> Electrical</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Order ID:</b> 65218</td>\n		<td class="no-border"> </td>\n	</tr>\n	</table>\n\n	<div class="quote ltr"> \n		<h4 class="color-red">SAR 100</h4>\n	</div>\n</div>\n<!-- header --> \n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr>\n				<td> Services</td>\n				<td> Description</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>		\n		</tbody>\n	</table>\n</div>\n\n\n<!-- table -->\n\n<!-- Title -->\n<div class="col-xs-12 title-ltr bg-dark-gray">\n	<div class="col-xs-12">\n		<h4 class="color-white title-heading">Material & Installation</h4>\n	</div>\n</div>\n<!-- Title -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr>\n				<td> Description</td>\n				<td> Quantity</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr >\n				<td>Wire</td>\n				<td>02</td>\n				<td>SAR 50</td>\n			</tr>\n			<tr>\n				<td>Wire</td>\n				<td>05</td>\n				<td>SAR 100</td>\n			</tr>		\n		</tbody>\n	</table>\n</div>\n<!-- table -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-total price-box ltr">\n		<thead>\n			<tr>\n				<td><b> TOTAL</b></td>\n				<td style="text-align:right"><b> SAR 100</b></td>\n			</tr>	\n		</thead>\n		<tbody>		\n		</tbody>\n	</table>\n</div>\n<!-- table -->\n\n<div class="col-xs-12 ltr" style="text-align:center">\n	<button class="btn-yellow" (click)="goToReQuote()">Re-Quote</button>\n	<button class="btn-gray-two" (click)="goToJobCompletion()">Completed</button>\n	<br><br>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/bill/bill.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], BillPage);

//# sourceMappingURL=bill.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignedjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_bill__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotationview_quotationview__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewjob_viewjob__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AssignedjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AssignedjobPage = (function () {
    function AssignedjobPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.assignedJobs = "current";
    }
    AssignedjobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignedjobPage');
    };
    AssignedjobPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    AssignedjobPage.prototype.goToBill = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bill_bill__["a" /* BillPage */]);
    };
    AssignedjobPage.prototype.goToReQuote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quotationview_quotationview__["a" /* QuotationviewPage */]);
    };
    AssignedjobPage.prototype.goToViewJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewjob_viewjob__["a" /* ViewjobPage */]);
    };
    return AssignedjobPage;
}());
AssignedjobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-assignedjob',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/assignedjob/assignedjob.html"*/'<ion-header class="header-home">\n\n\n   <ion-navbar  color="custom-color">\n           <button light ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="header-name">ASSIGNED JOBS</ion-title>\n\n\n   </ion-navbar>  \n\n</ion-header>\n\n\n\n\n<ion-content>\n  <div>\n    <ion-segment [(ngModel)]="assignedJobs" class="segment-color">\n      <ion-segment-button value="current">\n      Current \n      </ion-segment-button>\n      <ion-segment-button value="completed">\n      Completed\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n<div class="col-xs-12">\n<div [ngSwitch]="assignedJobs">\n  <ion-list *ngSwitchCase="\'current\'">\n\n          <!-- Current -->\n      <div class="tab-pane fade in active home-tabs-box">\n      \n	      	<div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>	\n\n	        <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n              <i class="fa fa-angle-right fa-3x icon-arrow-ltr center-arrow" aria-hidden="true"></i>\n			  <!-- <ion-icon class= "forward-icon" name="arrow-forward" (click)="goToBill()"></ion-icon> -->\n			  <img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToBill()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border">Job Title:</td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">User Name:</td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Job Order ID:</td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Date & Time:</td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Quote ID:</td> \n			        	<td class="no-border">002</td>\n			        </tr>\n			        <tr>\n			        	<td  class="no-border" style="font-size: 16px;"><b>Assigned By Dispatcher</b></td> \n			        	<td  class="no-border"></td>\n			        </tr>\n			        <tr style="border-top: solid 1px #494949;">\n			        	<td style="font-size: 17px;">Quote Amount:</td> \n			        	<td style="font-size: 17px; text-align: right;"><b>SAR 100</b></td>\n			        </tr>\n			        </table>\n			        	\n		        </div>    \n		    </div>\n	    	<div class="col-xs-12 no-p">\n	        	<button class="btn-yellow-curve half pull-left">Navigate</button>    \n	        	<button class="btn-gray-curve half pull-right">Call</button>    \n	        </div>\n\n\n      </div>\n      <!-- Current end -->\n\n\n  </ion-list>\n\n<!--Completed Segment-->\n\n  <ion-list *ngSwitchCase="\'completed\'">\n\n          <!-- Completed -->\n      <div id="quoted" class="tab-pane fade in active home-tabs-box">\n			\n			  <div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>	\n\n	        <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n              <i class="fa fa-angle-right fa-3x icon-arrow-ltr center-arrow" aria-hidden="true"></i>\n			  <!-- <ion-icon class= "forward-icon" name="arrow-forward" ></ion-icon> -->\n			  <img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToViewJob()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border">Job Title:</td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">User Name:</td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Job Order ID:</td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Date & Time:</td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border"></td> \n			        	<td class="no-border"></td>\n			        </tr>\n\n			        <tr style="border-top: solid 1px #494949;">\n			        	<td style="font-size: 17px;">Quote Amount:</td> \n			        	<td style="font-size: 17px; text-align: right; padding-right: 5px;"><b>SAR 100</b></td>\n			        </tr>\n			        </table>\n			        	\n		        </div>    \n		    </div>\n	    	<div class="col-xs-12 no-p">\n	        	<button class="btn-Claimyellow-curve" (click)="goToViewJob()">View</button>  \n	        </div>    \n\n      </div>\n      <!-- Completed end -->\n\n  \n  </ion-list>\n\n\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/assignedjob/assignedjob.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AssignedjobPage);

//# sourceMappingURL=assignedjob.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoborderdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_quotation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectservice_selectservice__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the JoborderdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JoborderdetailsPage = (function () {
    function JoborderdetailsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    JoborderdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoborderdetailsPage');
    };
    JoborderdetailsPage.prototype.goToQuotation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quotation_quotation__["a" /* QuotationPage */]);
    };
    JoborderdetailsPage.prototype.goToSelectService = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__selectservice_selectservice__["a" /* SelectservicePage */]);
    };
    JoborderdetailsPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    JoborderdetailsPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return JoborderdetailsPage;
}());
JoborderdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-joborderdetails',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/joborderdetails/joborderdetails.html"*/'\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">JOB ORDER DETAILS</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<!-- container -->\n<div class="col-xs-12">\n\n	<div class="detail-box-outer">\n	    <div class="col-xs-12 detail-box-full">\n					<div class="buttons-box-contact-ltr">\n							<img src="assets/icon_call.png" class="img-icon-contact">\n							<img src="assets/icon_edit.png" class="img-icon-contact">\n						</div>	    	\n	        <table class="table table-home table-job-detail ltr">\n		        <tr>\n		        	<td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> User Name:</b></td> \n		        	<td class="no-border">Ahmed</td>\n		        </tr>\n\n		        <tr>\n		        	<td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Job Title:</b></td> \n		        	<td class="no-border">Electrical</td>\n		        </tr>\n\n		        <tr>\n		        	<td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Job Order ID:</b></td> \n		        	<td class="no-border">65219</td>\n		        </tr>\n		        	        \n		        <tr class="price-box">	        	\n		        	<td><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Job Summary:</b></td> \n		        	<td></td>\n		        </tr>        	\n	       \n	        </table>\n	        <div class="col-xs-12 text-left ltr" style="padding: 0px 0px 5px 30px">\n	        	<h4 class="light-gray"><b>Description</b></h4>\n	        	<span class="font-light">Need electrical installation services for my house.</span>\n	        	<br>\n	        	<h4 class="light-gray"><b>Images</b></h4>\n	        	<img src="assets/img_01.png" class="img-upload">\n	        	<img src="assets/img_01.png" class="img-upload">\n	        	<img src="assets/img_01.png" class="img-upload">\n	        </div>\n\n	        <table class="table table-home table-job-detail ltr">\n	        <tr>\n	        	<td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Installation Charges:</b></td> \n	        	<td class="no-border">Yes</td>\n	        </tr>\n\n	        <tr class="price-box">\n	        	<td><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b>  Date:</b></td> \n	        	<td>04-05-2017</td>\n			</tr>\n			<tr>\n	        	<td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b>  Time</b></td> \n	        	<td class="no-border">4:30 pm</td>\n	        </tr>\n	        </table>\n\n	        <table class="table table-home table-job-detail ltr">\n	        <tr>\n	        	<td class="no-border"><img src="assets/fwd_arrow@2x-2.png" class="small-arrow">&nbsp; &nbsp;<b> Quote Limits:</b></td> \n	        	<td class="no-border" style="text-align: center;">SAR 5 <br>Min</td>\n	        	<td class="no-border" style="text-align: center;">SAR 5 <br>Min</td>\n	        </tr>	        	       \n	       \n	        </table>\n	        	\n	    </div>    	    \n	</div>\n\n	  \n\n</div>\n<div class="col-xs-12" style="text-align:center">\n	<button style="text-align:center" class=" btn-yellow lg" (click)="goToSelectService()">Proceed</button>  \n</div>\n<!-- container --> \n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/joborderdetails/joborderdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], JoborderdetailsPage);

//# sourceMappingURL=joborderdetails.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the QuotationviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var QuotationviewPage = (function () {
    function QuotationviewPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    QuotationviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotationviewPage');
    };
    QuotationviewPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    QuotationviewPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return QuotationviewPage;
}());
QuotationviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quotationview',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/quotationview/quotationview.html"*/'\n\n<!-- <ion-header>\n  <ion-navbar color="custom-color">\n		<button  ion-button menuToggle class="menu-color">\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	<ion-title>QUOTATION</ion-title>\n	<ion-icon class= "back-icon" name="arrow-back" (click)="goBack()"></ion-icon>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header class="header-home">\n  <ion-navbar color="custom-color">\n\n	<button  ion-button menuToggle class="menu-color">\n    	<ion-icon name="menu"></ion-icon>\n  	</button>\n\n    <ion-title class="header-name">BILL</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goBack()"><ion-icon class= "back-icon" ios="ios-arrow-back" md="ios-arrow-back"  ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  	\n<!-- header -->\n<div class="quote-header">\n	<table class="table table-quote ltr  table-color">\n	<tr>\n		<td class="no-border"> <b>User Name:</b> Ahmed</td>\n		<td class="no-border"> 04-05-2017</td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Vendor/Technician:</b> Khalid</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>quote ID</b> 002</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Title:</b> Electrical</td>\n		<td class="no-border"> </td>\n	</tr>\n	<tr>\n		<td class="no-border"> <b>Job Order ID:</b> 65218</td>\n		<td class="no-border"> </td>\n	</tr>\n	</table>\n\n	<div class="quote ltr"> \n		<h4 class="color-red">SAR 100</h4>\n	</div>\n</div>\n<!-- header --> \n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr>\n				<td> Services</td>\n				<td> Description</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr class="price-box">\n				<td>Wire Installation</td>\n				<td>Need electrical installation services for my house.</td>\n				<td>SAR 50</td>\n			</tr>\n		\n		</tbody>\n	</table>\n\n</div>\n<!-- table -->\n\n<!-- Title -->\n<div class="col-xs-12 title-ltr bg-dark-gray">\n	<div class="col-xs-12">\n		<h4 class="color-white title-heading">Material & Installation</h4>\n	</div>\n</div>\n<!-- Title -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-detail ltr">\n		<thead>\n			<tr>\n				<td> Description</td>\n				<td> Quantity</td>\n				<td> Price</td>\n			</tr>	\n		</thead>\n		<tbody>\n			<tr class="price-box">\n				<td>Wire</td>\n				<td>02</td>\n				<td>SAR 50</td>\n			</tr>\n		\n		</tbody>\n	</table>\n</div>\n<!-- table -->\n\n<!-- table -->	 \n<div class="col-xs-12 table-box">\n	<table class="table table-box-total price-box ltr">\n		<thead>\n			<tr>\n				<td><b> TOTAL</b></td>\n				<td style="float:right"><b> SAR 100</b></td>\n			</tr>	\n		</thead>\n		<tbody>		\n		</tbody>\n	</table>\n\n</div>\n\n<div class="col-xs-12 text-left job-detail-desc ltr">\n		<h4 class="light-gray"><b>Proof of job completion:</b></h4>\n		<img src="assets/img_01.png" class="img-upload">\n		<img src="assets/img_01.png" class="img-upload">\n		<img src="assets/img_01.png" class="img-upload">\n		<br>\n		<h4 class="light-gray"><input type="checkbox"> <b>Acknowledged by user</b>  </h4>\n	</div>\n<!-- table -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/quotationview/quotationview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], QuotationviewPage);

//# sourceMappingURL=quotationview.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claimdetails_claimdetails__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClaimjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClaimjobPage = (function () {
    function ClaimjobPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.claimJobs = "current";
    }
    ClaimjobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClaimjobPage');
    };
    ClaimjobPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ClaimjobPage.prototype.goToClaimDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__claimdetails_claimdetails__["a" /* ClaimdetailsPage */]);
    };
    return ClaimjobPage;
}());
ClaimjobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-claimjob',template:/*ion-inline-start:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/claimjob/claimjob.html"*/'<ion-header class="header-home">\n\n\n   <ion-navbar  color="custom-color">\n           <button light ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="header-name">CLAIM JOBS</ion-title>\n\n\n   </ion-navbar>  \n\n</ion-header>\n\n\n\n\n<ion-content>\n  <div>\n    <ion-segment [(ngModel)]="claimJobs" class="segment-color">\n      <ion-segment-button value="current">\n      Current \n      </ion-segment-button>\n      <ion-segment-button value="completed">\n      Completed\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n<div class="col-xs-12">\n<div [ngSwitch]="claimJobs">\n  <ion-list *ngSwitchCase="\'current\'">\n\n          <!-- Current -->\n      <div id="incoming" class="tab-pane fade in active home-tabs-box">\n      \n	      	<div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>	\n\n	        <div class="detail-box-outer">\n		        <div class="col-xs-12 detail-box">\n              <i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n							<!-- <ion-icon class= "forward-icon" name="arrow-forward" ></ion-icon> -->\n							<img src="assets/fwd_arrow@2x-2.png" class="forward-icon" (click)="goToClaimDetails()">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border">Job Title:</td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">User Name:</td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Claim ID:</td> \n			        	<td class="no-border">65218</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Date & Time:</td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n\n			        </table>\n			        	\n		        </div>    \n		    </div>\n	    	<div class="col-xs-12 no-p">\n	        	<button class="btn-Claimyellow-curve" (click)="goToClaimDetails()">View Details</button>  \n	        </div>  \n\n\n      </div>\n      <!-- Current end -->\n\n\n  </ion-list>\n\n<!--Completed Segment-->\n\n  <ion-list *ngSwitchCase="\'completed\'">\n\n    <!-- Completed -->\n      <div id="quoted" class="tab-pane fade in active home-tabs-box">\n			\n			<div class="row title-ltr">\n	      		<div class="col-xs-12">\n	      			<h4 class="light-gray title-heading">Mon, Apr-25-2017</h4>\n	      		</div>\n	        </div>	\n\n	        <div class="detail-box-outer">\n\n		        <div class="col-xs-12 detail-box margin-top">\n              <i class="fa fa-angle-right fa-3x icon-arrow-ltr" aria-hidden="true"></i>\n							<!-- <ion-icon class= "forward-icon" name="arrow-forward" ></ion-icon> -->\n							<img src="assets/fwd_arrow@2x-2.png" class="forward-icon">\n			        <table class="table table-home ltr">\n			        <tr>\n			        	<td class="no-border">Job Title:</td> \n			        	<td class="no-border">Electrical</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">User Name:</td> \n			        	<td class="no-border">Ahmed</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Claim ID:</td> \n			        	<td class="no-border">65218</td>\n			        </tr>			        \n			        <tr>\n			        	<td class="no-border">Date & Time:</td> \n			        	<td class="no-border">04-05-2017, 05:30pm</td>\n			        </tr>\n			        <tr>\n			        	<td class="no-border">Claim Job Completion:</td> \n			        	<td class="no-border">20-06-2017</td>\n			        </tr>\n			        </table>			     \n		        </div> \n		    </div> \n\n      </div>\n      <!-- Completed end -->\n  \n  </ion-list>\n\n\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ubaid/Desktop/sandooq_dispatcher/src/pages/claimjob/claimjob.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], ClaimjobPage);

//# sourceMappingURL=claimjob.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map