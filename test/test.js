"use strict";
/**
 * 클래스
 * : 단 몇줄만으로 구현 가능
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//클래스
var Parent = /** @class */ (function () {
    function Parent() {
        //접근제한자
        this.one = 10;
        this.two = 20;
        this.three = 30;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super.call(this) || this;
        _this.one;
        _this.two;
        return _this;
        //this.three;
    }
    return Child;
}(Parent));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return App;
}(Parent));
var kim;
var numbering;
var Car = /** @class */ (function () {
    function Car(age) {
        this.age = age;
        this.age = age;
    }
    return Car;
}());
var car = new Car(10);
car.age = 10;
console.log(car.age);
/**
 * 데코레이터
 * */
function Component(constructorfn) {
    return constructorfn;
}
// @ts-ignore
var AppComponet = /** @class */ (function () {
    function AppComponet() {
    }
    AppComponet = __decorate([
        Component()
    ], AppComponet);
    return AppComponet;
}());
