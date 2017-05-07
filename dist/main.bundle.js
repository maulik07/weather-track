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
                    console.log(result);
                    _this.tempratureConfigs.push(result);
                });
            });
        });
        this._appConfigSvc.getAvailableCities().subscribe(function (availableCities) {
            _this.availableCities = availableCities;
        });
    };
    AppComponent.prototype.onSelectionChanged = function (data) {
        console.log(this.selectedCity);
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
                _this._weatherSvc.getTempratureConfig([new __WEBPACK_IMPORTED_MODULE_3__models_weather_conf__["a" /* WeatherConf */](id_1)]).subscribe(function (results) {
                    results.forEach(function (result) {
                        console.log(result);
                        _this.tempratureConfigs.push(result);
                    });
                });
            });
        }
    };
    AppComponent.prototype.stopTrackingCity = function (tempConfig) {
        var _this = this;
        console.log(tempConfig);
        this._appConfigSvc.stopTrackingCity(tempConfig.id).subscribe(function (res) {
            _this.availableCities.push(new __WEBPACK_IMPORTED_MODULE_3__models_weather_conf__["a" /* WeatherConf */](tempConfig.id, tempConfig.name));
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m6 l4\" *ngFor=\"let tempConfig of tempratureConfigs\">\n    <div class=\"card horizontal\">\n      <div class=\"card-image\">\n        <img src=\"http://ssl.gstatic.com/onebox/weather/128/sunny.png\">\n      </div>\n      <div class=\"card-stacked\">\n        <div class=\"card-content\">\n          <h4>{{tempConfig.name}}</h4>\n          <h5>{{tempConfig.currentTemp}}</h5>\n          <h6 class=\"grey-text\">Max: {{tempConfig.maxTemp}} | Min: {{tempConfig.minTemp}} </h6>\n        </div>\n        <div class=\"card-action\">\n          <a class=\"btn-floating right waves-effect waves-light pink\" (click)=\"stopTrackingCity(tempConfig)\"><i class=\"material-icons\">delete</i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"fixed-action-btn\">\n    <a class=\"btn-floating btn-large waves-effect waves-light pink modal-trigger\" (click)=\"openModal()\"><i class=\"material-icons\">add</i></a>\n  </div>\n\n  <!-- Add Config Modal -->\n  <div id=\"addConfig\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalActions\">\n      <div *ngIf=\"availableCities.length > 0;then showSelection else displayMessage\"></div>\n    \n      <ng-template #showSelection>\n        <div class=\"modal-content\">\n          <h4>Track weather of another city?</h4>\n          <select [(ngModel)]=\"selectedCityId\"  materialize=\"material_select\" [(materializeSelectOptions)]=\"availableCities\">\n            <option *ngFor=\"let option of availableCities, let i = index\" [value]=\"option.id\" [selected]=\"i==1\">{{option.name}}</option>\n          </select>\n        </div>\n        \n        <div class=\"modal-footer\">\n          <a (click)=\"startTrackingNewCity()\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Track now</a>\n        </div>\n      </ng-template>\n\n      <ng-template #displayMessage>\n        <div class=\"modal-content\">\n          <p class=\"grey-text\"> Ahh!! Seems like there are no more cities available to track </p>\n        </div>\n        <div class=\"modal-footer\">\n          <a class=\"modal-action modal-close waves-effect waves-green btn-flat\">Dismiss</a>\n        </div>\n      </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ 490:
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

},[490]);
//# sourceMappingURL=main.bundle.js.map