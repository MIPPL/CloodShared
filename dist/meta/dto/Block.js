"use strict";
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBlockResponseDto = exports.UpdateBlockRequestDto = exports.CreateFileBlockResponseDto = exports.CreateFileBlockRequestDto = exports.FileBlockRecordDto = exports.BlockRecordDto = void 0;
var class_validator_1 = require("class-validator");
var BlockRecordDto = (function () {
    function BlockRecordDto() {
    }
    return BlockRecordDto;
}());
exports.BlockRecordDto = BlockRecordDto;
var FileBlockRecordDto = (function (_super) {
    __extends(FileBlockRecordDto, _super);
    function FileBlockRecordDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileBlockRecordDto;
}(BlockRecordDto));
exports.FileBlockRecordDto = FileBlockRecordDto;
var CreateFileBlockRequestDto = (function () {
    function CreateFileBlockRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateFileBlockRequestDto.prototype, "id_file", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateFileBlockRequestDto.prototype, "order", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateFileBlockRequestDto.prototype, "size_bytes", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateFileBlockRequestDto.prototype, "hash", void 0);
    return CreateFileBlockRequestDto;
}());
exports.CreateFileBlockRequestDto = CreateFileBlockRequestDto;
var CreateFileBlockResponseDto = (function () {
    function CreateFileBlockResponseDto() {
    }
    return CreateFileBlockResponseDto;
}());
exports.CreateFileBlockResponseDto = CreateFileBlockResponseDto;
var UpdateBlockRequestDto = (function () {
    function UpdateBlockRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], UpdateBlockRequestDto.prototype, "id_block", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], UpdateBlockRequestDto.prototype, "uploaded_bytes", void 0);
    return UpdateBlockRequestDto;
}());
exports.UpdateBlockRequestDto = UpdateBlockRequestDto;
var ActionBlockResponseDto = (function () {
    function ActionBlockResponseDto() {
    }
    return ActionBlockResponseDto;
}());
exports.ActionBlockResponseDto = ActionBlockResponseDto;
