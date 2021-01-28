(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-layout-main-layout-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/main-layout/main-layout.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-layout/main-layout.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMainLayoutMainLayoutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title>Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-menu-toggle>\r\n        <ion-item routerLink=\"/dash/history\">История заказов</ion-item>\r\n      </ion-menu-toggle>\r\n      <ion-menu-toggle>\r\n        <ion-item routerLink=\"/dash/addorder\">Добавить заказ</ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet>\r\n";
      /***/
    },

    /***/
    "./src/app/main-layout/main-layout-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/main-layout/main-layout-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MainLayoutPageRoutingModule */

    /***/
    function srcAppMainLayoutMainLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLayoutPageRoutingModule", function () {
        return MainLayoutPageRoutingModule;
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


      var _main_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-layout.page */
      "./src/app/main-layout/main-layout.page.ts");

      var routes = [{
        path: '',
        component: _main_layout_page__WEBPACK_IMPORTED_MODULE_3__["MainLayoutPage"],
        children: [{
          path: 'history',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | history-history-module */
            "history-history-module").then(__webpack_require__.bind(null,
            /*! ../history/history.module */
            "./src/app/history/history.module.ts")).then(function (m) {
              return m.HistoryPageModule;
            });
          }
        }, {
          path: 'addorder',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | addorder-addorder-module */
            "addorder-addorder-module").then(__webpack_require__.bind(null,
            /*! ../addorder/addorder.module */
            "./src/app/addorder/addorder.module.ts")).then(function (m) {
              return m.AddorderPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/dash/history'
      }];

      var MainLayoutPageRoutingModule = function MainLayoutPageRoutingModule() {
        _classCallCheck(this, MainLayoutPageRoutingModule);
      };

      MainLayoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MainLayoutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/main-layout/main-layout.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/main-layout/main-layout.module.ts ***!
      \***************************************************/

    /*! exports provided: MainLayoutPageModule */

    /***/
    function srcAppMainLayoutMainLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLayoutPageModule", function () {
        return MainLayoutPageModule;
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


      var _main_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main-layout-routing.module */
      "./src/app/main-layout/main-layout-routing.module.ts");
      /* harmony import */


      var _main_layout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./main-layout.page */
      "./src/app/main-layout/main-layout.page.ts");

      var MainLayoutPageModule = function MainLayoutPageModule() {
        _classCallCheck(this, MainLayoutPageModule);
      };

      MainLayoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainLayoutPageRoutingModule"]],
        declarations: [_main_layout_page__WEBPACK_IMPORTED_MODULE_6__["MainLayoutPage"]]
      })], MainLayoutPageModule);
      /***/
    },

    /***/
    "./src/app/main-layout/main-layout.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/main-layout/main-layout.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppMainLayoutMainLayoutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbGF5b3V0L21haW4tbGF5b3V0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/main-layout/main-layout.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/main-layout/main-layout.page.ts ***!
      \*************************************************/

    /*! exports provided: MainLayoutPage */

    /***/
    function srcAppMainLayoutMainLayoutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLayoutPage", function () {
        return MainLayoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MainLayoutPage = /*#__PURE__*/function () {
        function MainLayoutPage() {
          _classCallCheck(this, MainLayoutPage);
        }

        _createClass(MainLayoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainLayoutPage;
      }();

      MainLayoutPage.ctorParameters = function () {
        return [];
      };

      MainLayoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./main-layout.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/main-layout/main-layout.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./main-layout.page.scss */
        "./src/app/main-layout/main-layout.page.scss"))["default"]]
      })], MainLayoutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-layout-main-layout-module-es5.js.map