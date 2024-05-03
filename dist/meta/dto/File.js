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
exports.SingleFileRequestDto = exports.UpdateFileRequestDto = exports.CreateFileRequestDto = exports.FileRecordDto = void 0;
var class_validator_1 = require("class-validator");
var Node_1 = require("./Node");
var FileRecordDto = (function (_super) {
    __extends(FileRecordDto, _super);
    function FileRecordDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileRecordDto;
}(Node_1.NodeRecordDto));
exports.FileRecordDto = FileRecordDto;
var CreateFileRequestDto = (function (_super) {
    __extends(CreateFileRequestDto, _super);
    function CreateFileRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateFileRequestDto.prototype, "extension", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CreateFileRequestDto.prototype, "size_bytes", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CreateFileRequestDto.prototype, "hash", void 0);
    return CreateFileRequestDto;
}(Node_1.CreateNodeRequestDto));
exports.CreateFileRequestDto = CreateFileRequestDto;
var UpdateFileRequestDto = (function (_super) {
    __extends(UpdateFileRequestDto, _super);
    function UpdateFileRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateFileRequestDto;
}(Node_1.UpdateNodeRequestDto));
exports.UpdateFileRequestDto = UpdateFileRequestDto;
var SingleFileRequestDto = (function (_super) {
    __extends(SingleFileRequestDto, _super);
    function SingleFileRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SingleFileRequestDto;
}(Node_1.SingleNodeRequestDto));
exports.SingleFileRequestDto = SingleFileRequestDto;
