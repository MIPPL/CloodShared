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
exports.UserBaseRecord = exports.InputUserRequestDto = void 0;
var class_validator_1 = require("class-validator");
var UserBaseRecord = (function () {
    function UserBaseRecord() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UserBaseRecord.prototype, "username", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], UserBaseRecord.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsPhoneNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], UserBaseRecord.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserBaseRecord.prototype, "firstname", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserBaseRecord.prototype, "lastname", void 0);
    return UserBaseRecord;
}());
exports.UserBaseRecord = UserBaseRecord;
var InputUserRequestDto = (function () {
    function InputUserRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumberString)(),
        __metadata("design:type", String)
    ], InputUserRequestDto.prototype, "id", void 0);
    return InputUserRequestDto;
}());
exports.InputUserRequestDto = InputUserRequestDto;
