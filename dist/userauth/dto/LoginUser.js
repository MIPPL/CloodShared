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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserResponseDto = exports.LoginUserRequestDto = void 0;
var class_validator_1 = require("class-validator");
var LoginUserRequestDto = (function () {
    function LoginUserRequestDto() {
    }
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return o.email === null || o.email === undefined; }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], LoginUserRequestDto.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return o.username === null || o.username === undefined; }),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], LoginUserRequestDto.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], LoginUserRequestDto.prototype, "password", void 0);
    return LoginUserRequestDto;
}());
exports.LoginUserRequestDto = LoginUserRequestDto;
var LoginUserResponseDto = (function () {
    function LoginUserResponseDto() {
    }
    return LoginUserResponseDto;
}());
exports.LoginUserResponseDto = LoginUserResponseDto;
