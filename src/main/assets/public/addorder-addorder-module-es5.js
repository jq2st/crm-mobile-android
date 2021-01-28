(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addorder-addorder-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddorderAddorderPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-item>\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-title>Добавить заказ</ion-title>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/addorder/addorder-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/addorder/addorder-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddorderPageRoutingModule */

    /***/
    function srcAppAddorderAddorderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddorderPageRoutingModule", function () {
        return AddorderPageRoutingModule;
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


      var _addorder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addorder.page */
      "./src/app/addorder/addorder.page.ts");

      var routes = [{
        path: '',
        component: _addorder_page__WEBPACK_IMPORTED_MODULE_3__["AddorderPage"]
      }];

      var AddorderPageRoutingModule = function AddorderPageRoutingModule() {
        _classCallCheck(this, AddorderPageRoutingModule);
      };

      AddorderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddorderPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/addorder/addorder.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/addorder/addorder.module.ts ***!
      \*********************************************/

    /*! exports provided: AddorderPageModule */

    /***/
    function srcAppAddorderAddorderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddorderPageModule", function () {
        return AddorderPageModule;
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


      var _addorder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addorder-routing.module */
      "./src/app/addorder/addorder-routing.module.ts");
      /* harmony import */


      var _addorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addorder.page */
      "./src/app/addorder/addorder.page.ts");

      var AddorderPageModule = function AddorderPageModule() {
        _classCallCheck(this, AddorderPageModule);
      };

      AddorderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addorder_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddorderPageRoutingModule"]],
        declarations: [_addorder_page__WEBPACK_IMPORTED_MODULE_6__["AddorderPage"]]
      })], AddorderPageModule);
      /***/
    },

    /***/
    "./src/app/addorder/addorder.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/addorder/addorder.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddorderAddorderPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG9yZGVyL2FkZG9yZGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/addorder/addorder.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/addorder/addorder.page.ts ***!
      \*******************************************/

    /*! exports provided: AddorderPage */

    /***/
    function srcAppAddorderAddorderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddorderPage", function () {
        return AddorderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddorderPage = /*#__PURE__*/function () {
        function AddorderPage() {
          _classCallCheck(this, AddorderPage);
        }

        _createClass(AddorderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddorderPage;
      }();

      AddorderPage.ctorParameters = function () {
        return [];
      };

      AddorderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addorder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addorder.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/addorder/addorder.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addorder.page.scss */
        "./src/app/addorder/addorder.page.scss"))["default"]]
      })], AddorderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addorder-addorder-module-es5.js.map