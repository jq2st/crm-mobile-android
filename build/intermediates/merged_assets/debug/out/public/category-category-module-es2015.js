(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category/category.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category/category.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-back-button></ion-back-button>\n      <ion-title *ngIf=\"category\">{{category.name}}</ion-title>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\">\n    <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)='onSubmit()'>\n      <div class=\"input-field\">\n        <ion-item>\n          <ion-label position=\"floating\">Название</ion-label>\n          <ion-input id=\"name\" type=\"text\" formControlName=\"name\" [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\"></ion-input>\n        </ion-item>\n        <span class=\"helper-text red-text\" *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n            <span *ngIf=\"form.get('name').hasError('required')\">Имя категории не может быть пустым</span>\n        </span>\n      </div>\n  \n      <!-- <div>\n        <input type=\"file\" class=\"display-none\" #input (change)=\"onFileUpload($event)\">\n        <button (click)=\"triggerClick()\" [disabled]=\"form.disabled\" class=\"waves-effect waves-light btn orange lighten-2 mb2\" type=\"button\">\n          <i class=\"material-icons left\">backup</i>\n          Загрузить изображение\n        </button>\n      </div> -->\n      <div class=\"ion-margin\">\n        <ion-button color=\"primary\" type=\"submit\" [disabled]='form.invalid || form.disabled'>\n          <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n          Сохранить изменения\n        </ion-button>\n        <ion-button color=\"danger\" (click)=\"deleteCategory()\" *ngIf=\"!isNew\">\n          <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n          Удалить\n        </ion-button>\n      </div>\n  </form>\n  \n    <!-- <div class=\"col s12 l4 center\">\n      <img class=\"responsive-img h200\" [src]='imagePreview' *ngIf=\"imagePreview\">\n    </div> -->\n  </div>\n  \n  <app-positons *ngIf=\"category?._id\" [categoryId]='category._id'></app-positons>\n</ion-content>\n\n\n  <!-- <div class=\"page-title\">\n    <h4>\n      <a [routerLink]=\"['/categories']\">Категории</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{isNew ? 'Добавить': 'Редактировать'}} категорию\n    </h4>\n    <span>\n     \n    </span>\n  </div> -->\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category/positons/positons.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category/positons/positons.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-card class=\"modal\" #modal>\n      <form [formGroup]=\"form\" (ngSubmit)='onSubmit()'>\n        <ion-card-header>\n          <ion-card-title>Позиция</ion-card-title>\n        </ion-card-header>\n      <ion-item>\n        <ion-label for=\"pos-name\" position=\"floating\">Название</ion-label>\n        <ion-input id=\"pos-name\" type=\"text\" formControlName=\"name\"\n        [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\"></ion-input>\n        <span class=\"helper-text red-text\" \n        *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n            Название не должно быть пустым</span>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Цена</ion-label>\n        <ion-input id=\"pos-cost\" type=\"number\" min=\"1\" [ngClass]=\"{'invalid': form.get('cost').invalid && form.get('cost').touched}\" formControlName=\"cost\"></ion-input>\n        <span class=\"helper-text red-text\" \n        *ngIf=\"form.get('cost').invalid && form.get('cost').touched\">\n            Введите корректную цену. Минимальное значение 1</span>\n      </ion-item>\n      <!-- <button type=\"button\" class=\"modal-action waves-effect waves-black btn-flat\" \n      (click)=\"onCancel()\">Отмена</button> -->\n      <ion-button type=\"submit\" [disabled]=\"form.invalid || form.disabled\" class=\"ion-margin\">\n          Сохранить</ion-button>\n  </form>\n</ion-card>\n    \n    <ion-card class=\"page-subtitle\">\n      <ion-card-header>\n        <ion-card-title>Позиции</ion-card-title>\n        <!-- <ion-button class=\"waves-effect waves-light btn grey darken-1 btn-small\"\n        (click)=\"onAddPosition()\"\n        >\n          Добавить позицию\n        </ion-button> -->\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngIf=\"!loading; else loader\">\n          <ion-list class=\"collection\" *ngIf=\"positions.length!==0; else empty\">\n            <ion-item class=\"collection-item collection-item-icon\" *ngFor=\"let position of positions\" (click)=\"onSelectPosition(position)\">\n              <ion-label>\n                {{position.name}} <strong>{{position.cost}} руб.</strong>\n              </ion-label>\n              <ion-icon slot=\"end\" name=\"close-outline\" (click)=\"onDeletePosition($event, position)\"></ion-icon>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ng-template #empty>\n        <div class=\"center\">В категории позиций нет</div>\n    </ng-template>\n    <ng-template #loader>\n        Loading\n    </ng-template>\n\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/categories/category/category-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/categories/category/category-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/categories/category/category.page.ts");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/categories/category/category.module.ts":
/*!********************************************************!*\
  !*** ./src/app/categories/category/category.module.ts ***!
  \********************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/categories/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/categories/category/category.page.ts");
/* harmony import */ var _positons_positons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./positons/positons.component */ "./src/app/categories/category/positons/positons.component.ts");








let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"], _positons_positons_component__WEBPACK_IMPORTED_MODULE_7__["PositonsComponent"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/categories/category/category.page.scss":
/*!********************************************************!*\
  !*** ./src/app/categories/category/category.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcnkvY2F0ZWdvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/categories/category/category.page.ts":
/*!******************************************************!*\
  !*** ./src/app/categories/category/category.page.ts ***!
  \******************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");







let CategoryPage = class CategoryPage {
    constructor(route, categoriesService, router) {
        this.route = route;
        this.categoriesService = categoriesService;
        this.router = router;
        this.isNew = true;
        this.imagePreview = '';
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.form.disable();
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => {
            if (params['id']) {
                this.isNew = false;
                return this.categoriesService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }))
            .subscribe((category) => {
            if (category) {
                this.category = category;
                this.form.patchValue({
                    name: category.name
                });
                this.imagePreview = category.imageSrc;
                console.log(this.imagePreview + "prev");
                console.log(this.category.imageSrc + 'src');
            }
            this.form.enable();
        }, error => console.log(error.error.message));
    }
    triggerClick() {
        this.inputRef.nativeElement.click();
    }
    onFileUpload(event) {
        const file = event.target.files[0];
        this.image = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    deleteCategory() {
        const desigion = window.confirm(`Вы уверены, что хотите удалить категорию ${this.category.name}`);
        if (desigion) {
            this.categoriesService.delete(this.category._id).subscribe(response => { console.log(response.message); }, error => { console.log(error.error.message); }, () => this.router.navigate(['/categories']));
        }
    }
    onSubmit() {
        let obs$;
        console.log(this.image);
        this.form.disable();
        if (this.isNew) {
            //create
            obs$ = this.categoriesService.create(this.form.value.name, this.image);
        }
        else {
            obs$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image);
        }
        obs$.subscribe(category => {
            this.category = category;
            console.log('Изменения сохранены');
            this.form.enable();
        }, error => {
            console.log(error.error.message);
            this.form.enable();
        });
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CategoryPage.propDecorators = {
    inputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input', { static: false },] }]
};
CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category/category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.page.scss */ "./src/app/categories/category/category.page.scss")).default]
    })
], CategoryPage);



/***/ }),

/***/ "./src/app/categories/category/positons/positons.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/categories/category/positons/positons.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcnkvcG9zaXRvbnMvcG9zaXRvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/categories/category/positons/positons.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/categories/category/positons/positons.component.ts ***!
  \********************************************************************/
/*! exports provided: PositonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositonsComponent", function() { return PositonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/positions.service */ "./src/app/shared/services/positions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




let PositonsComponent = class PositonsComponent {
    constructor(positionService) {
        this.positionService = positionService;
        this.positions = [];
        this.loading = false;
        this.positonId = null;
    }
    ngOnInit() {
        this.loading = true;
        this.positionService.fetch(this.categoryId).subscribe(positions => {
            this.positions = positions;
            this.loading = false;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)])
        });
    }
    ngOnDestroy() {
    }
    ngAfterViewInit() {
    }
    onSelectPosition(position) {
        this.positonId = position._id;
        this.form.patchValue({
            name: position.name,
            cost: position.cost
        });
    }
    onAddPosition() {
        this.positonId = null;
        this.form.reset({
            name: null,
            cost: 1
        });
    }
    onCancel() {
    }
    onSubmit() {
        this.form.disable();
        const newPosition = {
            name: this.form.value.name,
            cost: this.form.value.cost,
            category: this.categoryId
        };
        const complited = () => {
            this.form.reset({ name: '', cost: 1 });
            this.form.enable();
        };
        if (this.positonId) {
            newPosition._id = this.positonId;
            this.positionService.update(newPosition).subscribe(pos => {
                const ind = this.positions.findIndex(p => p._id === pos._id);
                this.positions[ind] = pos;
            }, error => {
            }, () => { complited(); });
        }
        else {
            this.positionService.create(newPosition).subscribe(pos => {
                this.positions.push(pos);
            }, error => {
            }, () => { complited(); });
        }
    }
    onDeletePosition(event, position) {
        event.stopPropagation();
        this.positionService.delete(position).subscribe(response => {
            const indx = this.positions.findIndex(p => p._id === position._id);
            this.positions.splice(indx, 1);
        });
    }
};
PositonsComponent.ctorParameters = () => [
    { type: _shared_services_positions_service__WEBPACK_IMPORTED_MODULE_1__["PositionService"] }
];
PositonsComponent.propDecorators = {
    categoryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['categoryId',] }],
    modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modal', { static: false },] }]
};
PositonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-positons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./positons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/category/positons/positons.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./positons.component.scss */ "./src/app/categories/category/positons/positons.component.scss")).default]
    })
], PositonsComponent);



/***/ }),

/***/ "./src/app/shared/services/positions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/positions.service.ts ***!
  \******************************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let PositionService = class PositionService {
    constructor(http) {
        this.http = http;
        this.basea = 'https://salty-cove-68792.herokuapp.com';
    }
    fetch(categoryId) {
        return this.http.get(this.basea + `/api/position/${categoryId}`);
    }
    create(position) {
        return this.http.post(this.basea + '/api/position', position);
    }
    update(position) {
        return this.http.patch(this.basea + `/api/position/${position._id}`, position);
    }
    delete(position) {
        return this.http.delete(this.basea + `/api/position/${position._id}`);
    }
};
PositionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PositionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PositionService);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map