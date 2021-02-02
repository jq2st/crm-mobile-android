(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reg-reg-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegRegPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Регистрация</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form\n      class=\"card\"\n      [formGroup]=\"form\"\n      (ngSubmit)=\"onSubmit()\"\n    >\n    <div class=\"card-content\">\n      <ion-card-header>\n        <ion-card-subtitle>CRM</ion-card-subtitle>\n        <ion-card-title>Заполните поля для регистрации</ion-card-title>\n      </ion-card-header>\n      <div class=\"input-field\">\n        <ion-item>\n          <ion-label position=\"floating\">E-mail</ion-label>\n          <ion-input\n            formControlName=\"email\"\n            id=\"email\"\n            type=\"email\">\n          </ion-input>\n        </ion-item>\n        <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n        >\n          <span *ngIf=\"form.get('email').errors['required']\">Email не должен быть пустым</span>\n          <span *ngIf=\"form.get('email').errors['email']\">Введите корректный email адрес</span>\n        </span>\n      </div>\n      <div class=\"input-field\">\n        <ion-item>\n          <ion-label position=\"floating\">Пароль</ion-label>\n          <ion-input\n            formControlName=\"password\"\n            type=\"password\">\n          </ion-input>\n        </ion-item>\n        <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n        >\n          <span *ngIf=\"form.get('password').errors['required']\">Пароль не должен быть пустым</span>\n          <span *ngIf=\"form.get('password').errors['minlength'] && form.get('password').errors['minlength']['requiredLength']\">\n            Пароль должен быть больше {{form.get('password').errors['minlength']['requiredLength']}} символов.\n            Сейчас {{form.get('password').errors['minlength']['actualLength']}}\n          </span>\n        </span>\n      </div>\n    </div>\n    <div class=\"card-action\">\n      <ion-button\n        type=\"submit\"\n        class=\"ion-margin\"\n        [disabled]=\"form.invalid || form.disabled\"\n      >\n        Зарегистрироваться\n      </ion-button>\n    </div>\n  </form>\n  </ion-card>\n   <ion-button\n        type=\"submit\"\n        class=\"ion-margin\"\n        routerLink=\"/login\"\n        expand=\"block\"\n        color=\"dark\"\n  >\n        Авторизация\n  </ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/reg/reg-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/reg/reg-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: RegPageRoutingModule */

    /***/
    function srcAppRegRegRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegPageRoutingModule", function () {
        return RegPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _reg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reg.page */
      "./src/app/reg/reg.page.ts");

      var routes = [{
        path: '',
        component: _reg_page__WEBPACK_IMPORTED_MODULE_3__["RegPage"]
      }];

      var RegPageRoutingModule = function RegPageRoutingModule() {
        _classCallCheck(this, RegPageRoutingModule);
      };

      RegPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/reg/reg.module.ts":
    /*!***********************************!*\
      !*** ./src/app/reg/reg.module.ts ***!
      \***********************************/

    /*! exports provided: RegPageModule */

    /***/
    function srcAppRegRegModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegPageModule", function () {
        return RegPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _reg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reg-routing.module */
      "./src/app/reg/reg-routing.module.ts");
      /* harmony import */


      var _reg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reg.page */
      "./src/app/reg/reg.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var RegPageModule = function RegPageModule() {
        _classCallCheck(this, RegPageModule);
      };

      RegPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reg_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegPageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_reg_page__WEBPACK_IMPORTED_MODULE_6__["RegPage"]]
      })], RegPageModule);
      /***/
    },

    /***/
    "./src/app/reg/reg.page.scss":
    /*!***********************************!*\
      !*** ./src/app/reg/reg.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppRegRegPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZy9yZWcucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/reg/reg.page.ts":
    /*!*********************************!*\
      !*** ./src/app/reg/reg.page.ts ***!
      \*********************************/

    /*! exports provided: RegPage */

    /***/
    function srcAppRegRegPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegPage", function () {
        return RegPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/auth.service */
      "./src/app/shared/services/auth.service.ts");

      var RegPage = /*#__PURE__*/function () {
        function RegPage(auth, router, route, alertController) {
          _classCallCheck(this, RegPage);

          this.auth = auth;
          this.router = router;
          this.route = route;
          this.alertController = alertController;
        }

        _createClass(RegPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
            });
            this.route.queryParams.subscribe(function (params) {
              if (params['registered']) {
                console.log('Теперь вы можете зайти в систему используя свои данные');
              } else if (params['accessDenied']) {
                console.log('Для начала авторизуйтесь в системе');
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.aSub) {
              this.aSub.unsubscribe();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.form.disable();
            this.aSub = this.auth.register(this.form.value).subscribe(function () {
              return _this.router.navigate(['/login']);
            }, function (error) {
              _this.presentAlert();

              _this.form.enable();
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Ошибка',
                        subHeader: '',
                        message: 'Неверный логин или пароль.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return RegPage;
      }();

      RegPage.ctorParameters = function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      RegPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reg',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reg.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reg.page.scss */
        "./src/app/reg/reg.page.scss"))["default"]]
      })], RegPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reg-reg-module-es5.js.map