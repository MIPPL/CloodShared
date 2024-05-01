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
exports.SingleFolderRequestDto = exports.UpdateFolderRequestDto = exports.ActionFolderResponseDto = exports.CreateFolderRequestDto = exports.FolderRecordDto = void 0;
var class_validator_1 = require("class-validator");
var FolderRecordDto = (function () {
    function FolderRecordDto() {
    }
    return FolderRecordDto;
}());
exports.FolderRecordDto = FolderRecordDto;
var CreateFolderRequestDto = (function () {
    function CreateFolderRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], CreateFolderRequestDto.prototype, "parent_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateFolderRequestDto.prototype, "owner_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateFolderRequestDto.prototype, "name", void 0);
    return CreateFolderRequestDto;
}());
exports.CreateFolderRequestDto = CreateFolderRequestDto;
var UpdateFolderRequestDto = (function () {
    function UpdateFolderRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], UpdateFolderRequestDto.prototype, "folder_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], UpdateFolderRequestDto.prototype, "parent_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], UpdateFolderRequestDto.prototype, "name", void 0);
    return UpdateFolderRequestDto;
}());
exports.UpdateFolderRequestDto = UpdateFolderRequestDto;
var ActionFolderResponseDto = (function () {
    function ActionFolderResponseDto() {
    }
    return ActionFolderResponseDto;
}());
exports.ActionFolderResponseDto = ActionFolderResponseDto;
var SingleFolderRequestDto = (function () {
    function SingleFolderRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], SingleFolderRequestDto.prototype, "folder_id", void 0);
    return SingleFolderRequestDto;
}());
exports.SingleFolderRequestDto = SingleFolderRequestDto;
