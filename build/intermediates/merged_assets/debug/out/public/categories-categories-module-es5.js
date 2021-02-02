(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-menu-button></ion-menu-button>\n      <ion-title>Ассортимент</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button routerLink=\"new\" routerLinkActive=\"router-link-active\" class=\"ion-margin\" expand=\"block\">Добавить категорию</ion-button>\n  <div class=\"row\" *ngIf=\"categories$ | async as categories; else loader\">\n      <div class=\"collection\" *ngIf=\"categories.length!==0; else empty\" >\n        <ion-item [routerLink]=\"[category._id]\" routerLinkActive=\"router-link-active\"  class=\"collection-item\" *ngFor=\"let category of categories\">\n          {{category.name}}\n        </ion-item>\n      </div>\n  </div>\n</ion-content>\n\n\n\n<ng-template #loader>\n  Loading\n</ng-template>\n\n<ng-template #empty>\n    <div class=\"center\"> У вас нет ни одной категори</div>\n</ng-template>\n";
      /***/
    },

    /***/
    "./src/app/categories/categories-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/categories/categories-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CategoriesPageRoutingModule */

    /***/
    function srcAppCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
        return CategoriesPageRoutingModule;
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


      var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories.page */
      "./src/app/categories/categories.page.ts");

      var routes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"],
        children: [{
          path: '/cat',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | category-category-module */
            "category-category-module").then(__webpack_require__.bind(null,
            /*! ./category/category.module */
            "./src/app/categories/category/category.module.ts")).then(function (m) {
              return m.CategoryPageModule;
            });
          }
        }]
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | category-category-module */
          "category-category-module").then(__webpack_require__.bind(null,
          /*! ./category/category.module */
          "./src/app/categories/category/category.module.ts")).then(function (m) {
            return m.CategoryPageModule;
          });
        }
      }, {
        path: '/new',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | newcat-newcat-module */
          "newcat-newcat-module").then(__webpack_require__.bind(null,
          /*! ./newcat/newcat.module */
          "./src/app/categories/newcat/newcat.module.ts")).then(function (m) {
            return m.NewcatPageModule;
          });
        }
      }];

      var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
        _classCallCheck(this, CategoriesPageRoutingModule);
      };

      CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/categories/categories.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.module.ts ***!
      \*************************************************/

    /*! exports provided: CategoriesPageModule */

    /***/
    function srcAppCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
        return CategoriesPageModule;
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


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categories-routing.module */
      "./src/app/categories/categories-routing.module.ts");
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categories.page */
      "./src/app/categories/categories.page.ts");

      var CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
      })], CategoriesPageModule);
      /***/
    },

    /***/
    "./src/app/categories/categories.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/categories/categories.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/categories/categories.page.ts ***!
      \***********************************************/

    /*! exports provided: CategoriesPage */

    /***/
    function srcAppCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
        return CategoriesPage;
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


      var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/categories.service */
      "./src/app/shared/services/categories.service.ts");

      var CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage(categoriesService) {
          _classCallCheck(this, CategoriesPage);

          this.categoriesService = categoriesService;
        }

        _createClass(CategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categories$ = this.categoriesService.fetch();
          }
        }]);

        return CategoriesPage;
      }();

      CategoriesPage.ctorParameters = function () {
        return [{
          type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
        }];
      };

      CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./categories.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./categories.page.scss */
        "./src/app/categories/categories.page.scss"))["default"]]
      })], CategoriesPage);
      /***/
    },

    /***/
    "./src/app/shared/services/categories.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/categories.service.ts ***!
      \*******************************************************/

    /*! exports provided: CategoriesService */

    /***/
    function srcAppSharedServicesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
        return CategoriesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CategoriesService = /*#__PURE__*/function () {
        function CategoriesService(http) {
          _classCallCheck(this, CategoriesService);

          this.http = http;
          this.basea = 'https://salty-cove-68792.herokuapp.com';
        }

        _createClass(CategoriesService, [{
          key: "fetch",
          value: function fetch() {
            return this.http.get(this.basea + '/api/category');
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get(this.basea + "/api/category/".concat(id));
          }
        }, {
          key: "create",
          value: function create(name, image) {
            var fd = new FormData();

            if (image) {
              fd.append('image', image, image.name);
            }

            fd.append('name', name);
            return this.http.post(this.basea + '/api/category', fd);
          }
        }, {
          key: "update",
          value: function update(id, name, image) {
            var fd = new FormData();

            if (image) {
              fd.append('image', image, image.name);
            }

            fd.append('name', name);
            return this.http.patch(this.basea + "/api/category/".concat(id), fd);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.basea + "/api/category/".concat(id));
          }
        }]);

        return CategoriesService;
      }();

      CategoriesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CategoriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], CategoriesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=categories-categories-module-es5.js.map