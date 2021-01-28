(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-item>\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-title>История заказов</ion-title>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-item *ngFor=\"let order of orders\">\r\n    {{order.date}}\r\n  </ion-item>\r\n\r\n  <!-- <div class=\"page-title\">\r\n    <button (click)=\"isFilterVisible=!isFilterVisible\" class=\"btn btn-small\" [ngClass]=\"{'active': isFilterVisible, \r\n  'red':isFiltered()}\"\r\n      data-tooltip=\"Открыть фильтр\" data-position=\"left\" #tooltip>\r\n      <i class=\"material-icons\">filter_list</i>\r\n    </button>\r\n  </div>\r\n  \r\n  \r\n  <app-history-filter (onFilter)=\"applyFilter($event)\" *ngIf=\"isFilterVisible\"></app-history-filter>\r\n-->\r\n  <!-- <div *ngIf=\"!reloading; else reloadingBlock\">\r\n    <div *ngIf=\"orders.length!==0; else empty\">\r\n      <table class=\"highlight mb2\">\r\n        <thead>\r\n        <tr>\r\n            <th>№</th>\r\n            <th>Дата</th>\r\n            <th>Время</th>\r\n            <th>Сумма</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n    \r\n        <tbody>\r\n        \r\n        <tr *ngFor=\"let order of orders\">\r\n            <td>{{order.order}}</td>\r\n            <td>{{order.date | date: 'dd.MM.yyyy'}}</td>\r\n            <td>{{order.date | date:'HH:mm'}}</td>\r\n            <td>{{computePrice(order)}} руб.</td>\r\n            <td>\r\n                <button (click)='selectOrder(order)' class=\"btn btn-small grey darken-1\"><i class=\"material-icons\">open_in_new</i></button>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    <div id=\"order-list\" class=\"modal modal-fixed-footer\" #modal>\r\n        <div class=\"modal-content\" *ngIf=\"selectedOrder\">\r\n            <h4 class=\"mb1\">Заказ №{{selectedOrder.order}}</h4>\r\n            <table class=\"highlight\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Название</th>\r\n                    <th>Количество</th>\r\n                    <th>Цена</th>\r\n                </tr>\r\n                </thead>\r\n    \r\n                <tbody>\r\n                <tr  *ngFor=\"let item of selectedOrder.list\">\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.quantity}}</td>\r\n                    <td>{{item.cost}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"order-summary\">\r\n                <p>Общая стоимость <strong>{{computePrice(selectedOrder)}} руб.</strong></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button (click)=\"closeModal()\" class=\"modal-action waves-effect waves-black btn-flat\">Закрыть</button>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <div class=\"center mb2\" *ngIf=\"!noMoreOrders\">\r\n      <button class=\"btn waves-effect grey darken-1 btn-small\" (click)=\"loadMore()\"\r\n        *ngIf=\"!loading; else loader\">Загрузить еще</button> -->\r\n      <ng-template #loader>\r\n        <!-- loader -->\r\n      </ng-template>\r\n  \r\n    <!-- </div>\r\n  </div> \r\n   -->\r\n  <ng-template #empty>\r\n    <div class=\"center\">У вас пока нет заказов</div>\r\n  </ng-template>\r\n  \r\n  <!-- </div> -->\r\n  \r\n  <ng-template #reloadingBlock>\r\n    <!-- loader -->\r\n  </ng-template>\r\n  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/history/history-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/history/history-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HistoryPageRoutingModule */

    /***/
    function srcAppHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
        return HistoryPageRoutingModule;
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


      var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./history.page */
      "./src/app/history/history.page.ts");

      var routes = [{
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
      }];

      var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
        _classCallCheck(this, HistoryPageRoutingModule);
      };

      HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/history/history.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/history/history.module.ts ***!
      \*******************************************/

    /*! exports provided: HistoryPageModule */

    /***/
    function srcAppHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
        return HistoryPageModule;
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


      var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./history-routing.module */
      "./src/app/history/history-routing.module.ts");
      /* harmony import */


      var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./history.page */
      "./src/app/history/history.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/classes/token.interceptor */
      "./src/app/shared/classes/token.interceptor.ts");

      var HistoryPageModule = function HistoryPageModule() {
        _classCallCheck(this, HistoryPageModule);
      };

      HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          multi: true,
          useClass: _shared_classes_token_interceptor__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptor"]
        }],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
      })], HistoryPageModule);
      /***/
    },

    /***/
    "./src/app/history/history.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/history/history.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/history/history.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/history/history.page.ts ***!
      \*****************************************/

    /*! exports provided: HistoryPage */

    /***/
    function srcAppHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
        return HistoryPage;
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


      var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/orders.service */
      "./src/app/shared/services/orders.service.ts");

      var HistoryPage = /*#__PURE__*/function () {
        // filter: Filter = {}
        function HistoryPage(ordersService) {
          _classCallCheck(this, HistoryPage);

          this.ordersService = ordersService; // @ViewChild('tooltip', { static: false }) tooltipRef: ElementRef

          this.STEP = 15; // tooltip: MaterialInstance

          this.isFilterVisible = false;
          this.offset = 0;
          this.limit = 2;
          this.orders = [];
          this.loading = false;
          this.reloading = false;
          this.noMoreOrders = false;
        }

        _createClass(HistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloading = true;
            this.fetch();
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this = this;

            // const params = Object.assign({}, this.filter, {
            //   offset: this.offset,
            //   limit: this.STEP
            // })
            this.oSub = this.ordersService.fetch().subscribe(function (orders) {
              _this.orders = _this.orders.concat(orders);
              _this.noMoreOrders = orders.length < _this.STEP;
              _this.loading = false;
              _this.reloading = false;
            });
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.offset += this.STEP;
            this.loading = true;
            this.fetch();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // this.tooltip.destroy()
            this.oSub.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// this.tooltip = MaterialService.initTooltip(this.tooltipRef)
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(filter) {
            this.orders = [];
            this.offset = 0; // this.filter = filter

            this.reloading = true;
            this.fetch();
          }
        }, {
          key: "isFiltered",
          value: function isFiltered() {// return Object.keys(this.filter).length !== 0
          }
        }]);

        return HistoryPage;
      }();

      HistoryPage.ctorParameters = function () {
        return [{
          type: _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
        }];
      };

      HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./history.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./history.page.scss */
        "./src/app/history/history.page.scss"))["default"]]
      })], HistoryPage);
      /***/
    },

    /***/
    "./src/app/shared/services/orders.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/orders.service.ts ***!
      \***************************************************/

    /*! exports provided: OrdersService */

    /***/
    function srcAppSharedServicesOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
        return OrdersService;
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import { Order } from '../interfaces';


      var OrdersService = /*#__PURE__*/function () {
        function OrdersService(http) {
          _classCallCheck(this, OrdersService);

          this.http = http;
          this.basea = 'https://salty-cove-68792.herokuapp.com';
        }

        _createClass(OrdersService, [{
          key: "create",
          value: function create(order) {
            return this.http.post(this.basea + '/api/order', order);
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get(this.basea + '/api/order', {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: params
              })
            });
          }
        }]);

        return OrdersService;
      }();

      OrdersService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      OrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], OrdersService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=history-history-module-es5.js.map