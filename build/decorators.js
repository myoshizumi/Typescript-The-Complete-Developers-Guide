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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let Boat = class Boat {
    constructor() {
        this.color = "red";
    }
    get formattedColor() {
        return `This boats color is ${this.color}`;
    }
    pilot(speed, generateWake) {
        if (speed === "fast") {
            console.log("swish");
        }
        else {
            console.log("nothing");
        }
    }
};
__decorate([
    testDecorator,
    __metadata("design:type", String)
], Boat.prototype, "color", void 0);
__decorate([
    testDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Boat.prototype, "formattedColor", null);
__decorate([
    logError("Oops! Something went bad!"),
    __param(0, parameterDecorator),
    __param(1, parameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Boat.prototype, "pilot", null);
Boat = __decorate([
    classDecorator
], Boat);
function classDecorator(constructor) {
    console.log(constructor);
}
function parameterDecorator(target, key, index) {
    console.log(key, index);
}
function testDecorator(target, key) {
    console.log(key);
}
function logError(errorMessage) {
    return function (target, key, desc) {
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
