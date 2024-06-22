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
exports.DeleteFolderRequestDto = exports.ReadFolderRequestDto = exports.SingleFolderRequestDto = exports.UpdateFolderRequestDto = exports.ActionFolderResponseDto = exports.CreateFolderRequestDto = exports.FolderRecordDto = void 0;
var Node_1 = require("./Node");
var class_validator_1 = require("class-validator");
var FolderRecordDto = (function (_super) {
    __extends(FolderRecordDto, _super);
    function FolderRecordDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FolderRecordDto;
}(Node_1.NodeRecordDto));
exports.FolderRecordDto = FolderRecordDto;
var ReadFolderRequestDto = (function (_super) {
    __extends(ReadFolderRequestDto, _super);
    function ReadFolderRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsHexadecimal)(),
        __metadata("design:type", String)
    ], ReadFolderRequestDto.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsBooleanString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], ReadFolderRequestDto.prototype, "recursive", void 0);
    return ReadFolderRequestDto;
}(Node_1.SeachNodeRequestDto));
exports.ReadFolderRequestDto = ReadFolderRequestDto;
var CreateFolderRequestDto = (function (_super) {
    __extends(CreateFolderRequestDto, _super);
    function CreateFolderRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateFolderRequestDto;
}(Node_1.CreateNodeRequestDto));
exports.CreateFolderRequestDto = CreateFolderRequestDto;
var UpdateFolderRequestDto = (function (_super) {
    __extends(UpdateFolderRequestDto, _super);
    function UpdateFolderRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateFolderRequestDto;
}(Node_1.UpdateNodeRequestDto));
exports.UpdateFolderRequestDto = UpdateFolderRequestDto;
var ActionFolderResponseDto = (function (_super) {
    __extends(ActionFolderResponseDto, _super);
    function ActionFolderResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ActionFolderResponseDto;
}(Node_1.ActionNodeResponseDto));
exports.ActionFolderResponseDto = ActionFolderResponseDto;
var SingleFolderRequestDto = (function (_super) {
    __extends(SingleFolderRequestDto, _super);
    function SingleFolderRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SingleFolderRequestDto;
}(Node_1.SingleNodeRequestDto));
exports.SingleFolderRequestDto = SingleFolderRequestDto;
var DeleteFolderRequestDto = (function () {
    function DeleteFolderRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsHexadecimal)(),
        __metadata("design:type", String)
    ], DeleteFolderRequestDto.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsBooleanString)(),
        __metadata("design:type", Boolean)
    ], DeleteFolderRequestDto.prototype, "trash_only", void 0);
    return DeleteFolderRequestDto;
}());
exports.DeleteFolderRequestDto = DeleteFolderRequestDto;
