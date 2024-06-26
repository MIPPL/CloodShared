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
exports.UpdateUserRequestDto = void 0;
var class_validator_1 = require("class-validator");
var match_1 = require("../../decorator/match");
var UpdateUserRequestDto = (function () {
    function UpdateUserRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumberString)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsPhoneNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "firstname", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "lastname", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "password", void 0);
    __decorate([
        (0, match_1.Match)("password"),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UpdateUserRequestDto.prototype, "confirm_password", void 0);
    return UpdateUserRequestDto;
}());
exports.UpdateUserRequestDto = UpdateUserRequestDto;
