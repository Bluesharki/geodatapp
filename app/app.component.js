"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var AppComponent = (function () {
    function AppComponent(af) {
        var _this = this;
        this.googleMapCoordinates = {};
        this.coordinateCollection = [];
        this.items = af.database.list("coordinates");
        this.items.subscribe(function (val) { return _this.updateMap(_this.latestCoordinate(val), _this.allCoordinates(val)); });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.latestCoordinate = function (val) {
        return { lat: val[val.length - 1].latitude, lng: val[val.length - 1].longitude };
    };
    AppComponent.prototype.allCoordinates = function (val) {
        var _this = this;
        val.forEach(function (element) { return _this.coordinateCollection.push({ lat: element.latitude, lng: element.longitude }); });
        return this.coordinateCollection;
    };
    AppComponent.prototype.updateMap = function (googleMapCoordinates, polylineCoordinates) {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: googleMapCoordinates
        });
        var marker = new google.maps.Marker({
            position: googleMapCoordinates,
            map: map
        });
        var flightPath = new google.maps.Polyline({
            path: polylineCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [angularfire2_1.AngularFire])
], AppComponent);
exports.AppComponent = AppComponent;
