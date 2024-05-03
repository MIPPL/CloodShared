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
exports.SingleNodeRequestDto = exports.UpdateNodeRequestDto = exports.ActionNodeResponseDto = exports.CreateNodeRequestDto = exports.NodeRecordDto = void 0;
var class_validator_1 = require("class-validator");
var NodeRecordDto = (function () {
    function NodeRecordDto() {
    }
    return NodeRecordDto;
}());
exports.NodeRecordDto = NodeRecordDto;
var CreateNodeRequestDto = (function () {
    function CreateNodeRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], CreateNodeRequestDto.prototype, "parent_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateNodeRequestDto.prototype, "owner_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateNodeRequestDto.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], CreateNodeRequestDto.prototype, "auto_rename", void 0);
    return CreateNodeRequestDto;
}());
exports.CreateNodeRequestDto = CreateNodeRequestDto;
var UpdateNodeRequestDto = (function () {
    function UpdateNodeRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], UpdateNodeRequestDto.prototype, "folder_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], UpdateNodeRequestDto.prototype, "parent_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], UpdateNodeRequestDto.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], UpdateNodeRequestDto.prototype, "auto_rename", void 0);
    return UpdateNodeRequestDto;
}());
exports.UpdateNodeRequestDto = UpdateNodeRequestDto;
var ActionNodeResponseDto = (function () {
    function ActionNodeResponseDto() {
    }
    return ActionNodeResponseDto;
}());
exports.ActionNodeResponseDto = ActionNodeResponseDto;
var SingleNodeRequestDto = (function () {
    function SingleNodeRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], SingleNodeRequestDto.prototype, "id_folder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], SingleNodeRequestDto.prototype, "recursive", void 0);
    return SingleNodeRequestDto;
}());
exports.SingleNodeRequestDto = SingleNodeRequestDto;
