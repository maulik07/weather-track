webpackJsonp([2,5],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 134;


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(87);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_weather_conf__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_appConfigSvc, _weatherSvc) {
        this._appConfigSvc = _appConfigSvc;
        this._weatherSvc = _weatherSvc;
        this.tempratureConfigs = [];
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.availableCities = [];
    }
    AppComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    AppComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._appConfigSvc.readConfiguration().subscribe(function (configs) {
            _this.configs = configs;
            _this._weatherSvc.getTempratureConfig(configs).subscribe(function (results) {
                results.forEach(function (result) {
                    _this.tempratureConfigs.push(result);
                });
            });
        });
        this._appConfigSvc.getAvailableCities().subscribe(function (availableCities) {
            _this.availableCities = availableCities;
            _this._resetDefaultSelectedCity();
        });
    };
    AppComponent.prototype._resetDefaultSelectedCity = function () {
        this.selectedCityId = this.availableCities.length > 0 ? this.availableCities[0].id : undefined;
    };
    AppComponent.prototype.onSelectionChanged = function (data) {
        this.selectedCityId = data;
    };
    AppComponent.prototype.startTrackingNewCity = function () {
        var _this = this;
        if (this.selectedCityId !== undefined) {
            var id_1 = this.selectedCityId;
            this._appConfigSvc.startTrackingNewCity(id_1).subscribe(function (res) {
                _this.availableCities = _this.availableCities.filter(function (value) {
                    return value.id != id_1;
                });
                _this._resetDefaultSelectedCity();
                _this._weatherSvc.getTempratureConfig([new __WEBPACK_IMPORTED_MODULE_3__models_weather_conf__["a" /* WeatherConf */](id_1)]).subscribe(function (results) {
                    results.forEach(function (result) {
                        _this.tempratureConfigs.push(result);
                    });
                });
            });
        }
    };
    AppComponent.prototype.stopTrackingCity = function (tempConfig) {
        var _this = this;
        this._appConfigSvc.stopTrackingCity(tempConfig.id).subscribe(function (res) {
            _this._appConfigSvc.getAvailableCities().subscribe(function (availableCities) {
                _this.availableCities = availableCities;
                _this._resetDefaultSelectedCity();
            });
            _this.tempratureConfigs = _this.tempratureConfigs.filter(function (config) { return config.id != tempConfig.id; });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(206),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config_service__["a" /* AppConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config_service__["a" /* AppConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_7__app_config_service__["a" /* AppConfigService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureConf; });
var TemperatureConf = (function () {
    function TemperatureConf() {
    }
    return TemperatureConf;
}());

//# sourceMappingURL=temperature-conf.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)(false);
// imports


// module
exports.push([module.i, ".cold-image {\r\n   background-image: url(" + __webpack_require__(489) + ");\r\n   background-repeat: no-repeat;\r\n   height: 128px;\r\n   width: 128px;\r\n}\r\n\r\n.hot-image {\r\n   background-image: url(" + __webpack_require__(490) + ");\r\n   background-repeat: no-repeat;\r\n   height: 128px;\r\n   width: 128px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m6 l4\" *ngFor=\"let tempConfig of tempratureConfigs\">\n    <div class=\"card horizontal\">\n      <div class=\"card-image\">        \n        <div [ngClass]=\"{'cold-image': tempConfig.currentTemp <= 23.00, 'hot-image': tempConfig.currentTemp > 23.00}\"></div>\n      </div>\n      <div class=\"card-stacked\">\n        <div class=\"card-content\">\n          <h4>{{tempConfig.name}}</h4>\n          <h5>{{tempConfig.currentTemp}}</h5>\n          <h6 class=\"grey-text\">Max: {{tempConfig.maxTemp}} | Min: {{tempConfig.minTemp}} </h6>\n        </div>\n        <div class=\"card-action\">\n          <a materialize=\"tooltip\" class=\"btn-floating right waves-effect waves-light pink tooltipped\" (click)=\"stopTrackingCity(tempConfig)\" data-position=\"left\" data-delay=\"50\" data-tooltip=\"Not interested anymore!\">\n            <i class=\"material-icons\">delete</i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fixed-action-btn\">\n    <a class=\"btn-floating btn-large waves-effect waves-light pink modal-trigger\" (click)=\"openModal()\"><i class=\"material-icons\">add</i></a>\n  </div>\n\n  <!-- Add Config Modal -->\n  <div id=\"addConfig\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalActions\">\n      <div *ngIf=\"availableCities.length > 0;then showSelection else displayMessage\"></div>\n    \n      <ng-template #showSelection>\n        <div class=\"modal-content\">\n          <h4>Track weather of another city?</h4>\n          <select [(ngModel)]=\"selectedCityId\"  materialize=\"material_select\">\n            <option *ngFor=\"let option of availableCities\" [value]=\"option.id\">{{option.name}}</option>\n          </select>\n        </div>\n        \n        <div class=\"modal-footer\">\n          <a (click)=\"startTrackingNewCity()\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Track now</a>\n        </div>\n      </ng-template>\n\n      <ng-template #displayMessage>\n        <div class=\"modal-content\">\n          <p class=\"grey-text\"> Ahh!! Seems like there are no more cities available to track </p>\n        </div>\n        <div class=\"modal-footer\">\n          <a class=\"modal-action modal-close waves-effect waves-green btn-flat\">Dismiss</a>\n        </div>\n      </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hot.c6c7d2b84300e32d518d.png";

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_weather_conf__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppConfigService = (function () {
    function AppConfigService(http) {
        this.http = http;
        this.baseApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseApiUrl;
    }
    AppConfigService.prototype.readConfiguration = function () {
        return this.makeApiCallAndFetchCities('/get-selected-cities');
    };
    AppConfigService.prototype.getAvailableCities = function () {
        return this.makeApiCallAndFetchCities('/get-cities');
    };
    AppConfigService.prototype.makeApiCallAndFetchCities = function (route) {
        var weatherConfs = [];
        return this.http.get(this.baseApiUrl + route).map(function (res) {
            var data = res.json();
            data.forEach(function (element) {
                var weatherConf = new __WEBPACK_IMPORTED_MODULE_2__models_weather_conf__["a" /* WeatherConf */]();
                weatherConf.id = element._id;
                weatherConf.name = element.name;
                weatherConfs.push(weatherConf);
            });
            return weatherConfs;
        });
    };
    AppConfigService.prototype.startTrackingNewCity = function (id) {
        return this.http.get(this.baseApiUrl + '/track-city/' + id).map(function (res) { return res.json(); });
    };
    AppConfigService.prototype.stopTrackingCity = function (id) {
        return this.http.get(this.baseApiUrl + '/untrack-city/' + id).map(function (res) { return res.json(); });
    };
    return AppConfigService;
}());
AppConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppConfigService);

var _a;
//# sourceMappingURL=app-config.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherConf; });
var WeatherConf = (function () {
    function WeatherConf(id, name) {
        this.id = id;
        this.name = name;
    }
    return WeatherConf;
}());

//# sourceMappingURL=weather-conf.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_temperature_conf__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseURL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=6912a0ee99995b8550c1358af83f08d2&id=";
    }
    WeatherService.prototype.getTempratureConfig = function (weatherConfigs) {
        var _this = this;
        var requests = [];
        weatherConfigs.forEach(function (weatherConfig) {
            requests.push(_this.http.get(_this.baseURL + weatherConfig.id).map(function (res) {
                var data = res.json();
                var tempConfig = new __WEBPACK_IMPORTED_MODULE_3__models_temperature_conf__["a" /* TemperatureConf */]();
                tempConfig.currentTemp = data.main.temp;
                tempConfig.minTemp = data.main.temp_min;
                tempConfig.maxTemp = data.main.temp_max;
                tempConfig.name = data.name;
                tempConfig.id = data.id;
                tempConfig.desc = data.weather[0].description;
                return tempConfig;
            }));
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(requests);
    };
    return WeatherService;
}());
WeatherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseApiUrl: 'http://weathertrack.herokuapp.com/api'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[492]);
//# sourceMappingURL=main.bundle.js.map