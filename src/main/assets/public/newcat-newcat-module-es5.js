(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newcat-newcat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/newcat/newcat.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/newcat/newcat.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesNewcatNewcatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-back-button></ion-back-button>\n      <ion-title>Добавить категорию</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\">\n    <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)='onSubmit()'>\n      <div class=\"input-field\">\n        <ion-item>\n          <ion-label position=\"floating\">Название</ion-label>\n          <ion-input id=\"name\" type=\"text\" formControlName=\"name\" [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\"></ion-input>\n        </ion-item>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n            <span *ngIf=\"form.get('name').hasError('required')\">Имя категории не может быть пустым</span>\n        </span>\n      </div>\n  \n      <!-- <div>\n        <input type=\"file\" class=\"display-none\" #input (change)=\"onFileUpload($event)\">\n        <button (click)=\"triggerClick()\" [disabled]=\"form.disabled\" class=\"waves-effect waves-light btn orange lighten-2 mb2\" type=\"button\">\n          <i class=\"material-icons left\">backup</i>\n          Загрузить изображение\n        </button>\n      </div> -->\n      <div class=\"ion-margin\">\n        <ion-button color=\"primary\" type=\"submit\" [disabled]='form.invalid || form.disabled'>\n          <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n          Сохранить изменения\n        </ion-button>\n      </div>\n  </form>\n  \n    <!-- <div class=\"col s12 l4 center\">\n      <img class=\"responsive-img h200\" [src]='imagePreview' *ngIf=\"imagePreview\">\n    </div> -->\n  </div>\n  \n</ion-content>\n\n\n  <!-- <div class=\"page-title\">\n    <h4>\n      <a [routerLink]=\"['/categories']\">Категории</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{isNew ? 'Добавить': 'Редактировать'}} категорию\n    </h4>\n    <span>\n     \n    </span>\n  </div> -->\n\n\n";
      /***/
    },

    /***/
    "./src/app/categories/newcat/newcat-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/categories/newcat/newcat-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: NewcatPageRoutingModule */

    /***/
    function srcAppCategoriesNewcatNewcatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewcatPageRoutingModule", function () {
        return NewcatPageRoutingModule;
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


      var _newcat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newcat.page */
      "./src/app/categories/newcat/newcat.page.ts");

      var routes = [{
        path: '',
        component: _newcat_page__WEBPACK_IMPORTED_MODULE_3__["NewcatPage"]
      }];

      var NewcatPageRoutingModule = function NewcatPageRoutingModule() {
        _classCallCheck(this, NewcatPageRoutingModule);
      };

      NewcatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewcatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/categories/newcat/newcat.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/categories/newcat/newcat.module.ts ***!
      \****************************************************/

    /*! exports provided: NewcatPageModule */

    /***/
    function srcAppCategoriesNewcatNewcatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewcatPageModule", function () {
        return NewcatPageModule;
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


      var _newcat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newcat-routing.module */
      "./src/app/categories/newcat/newcat-routing.module.ts");
      /* harmony import */


      var _newcat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newcat.page */
      "./src/app/categories/newcat/newcat.page.ts");

      var NewcatPageModule = function NewcatPageModule() {
        _classCallCheck(this, NewcatPageModule);
      };

      NewcatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newcat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewcatPageRoutingModule"]],
        declarations: [_newcat_page__WEBPACK_IMPORTED_MODULE_6__["NewcatPage"]]
      })], NewcatPageModule);
      /***/
    },

    /***/
    "./src/app/categories/newcat/newcat.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/categories/newcat/newcat.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesNewcatNewcatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvbmV3Y2F0L25ld2NhdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/categories/newcat/newcat.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/categories/newcat/newcat.page.ts ***!
      \**************************************************/

    /*! exports provided: NewcatPage */

    /***/
    function srcAppCategoriesNewcatNewcatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewcatPage", function () {
        return NewcatPage;
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


      var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/categories.service */
      "./src/app/shared/services/categories.service.ts");

      var NewcatPage = /*#__PURE__*/function () {
        function NewcatPage(categoriesService, router) {
          _classCallCheck(this, NewcatPage);

          this.categoriesService = categoriesService;
          this.router = router;
          this.isNew = true;
          this.imagePreview = '';
        }

        _createClass(NewcatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            var obs$;
            this.form.disable();
            obs$ = this.categoriesService.create(this.form.value.name, this.image);
            obs$.subscribe(function (category) {
              _this.category = category;
              console.log('Изменения сохранены');

              _this.form.enable();
            }, function (error) {
              console.log(error.error.message);

              _this.form.enable();
            });
          }
        }]);

        return NewcatPage;
      }();

      NewcatPage.ctorParameters = function () {
        return [{
          type: src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      NewcatPage.propDecorators = {
        inputRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input', {
            "static": false
          }]
        }]
      };
      NewcatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newcat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./newcat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/newcat/newcat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./newcat.page.scss */
        "./src/app/categories/newcat/newcat.page.scss"))["default"]]
      })], NewcatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=newcat-newcat-module-es5.js.map