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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleFolderRequestDto = exports.UpdateFolderRequestDto = exports.ActionFolderResponseDto = exports.CreateFolderRequestDto = exports.FolderRecordDto = void 0;
var Node_1 = require("./Node");
var FolderRecordDto = (function (_super) {
    __extends(FolderRecordDto, _super);
    function FolderRecordDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FolderRecordDto;
}(Node_1.NodeRecordDto));
exports.FolderRecordDto = FolderRecordDto;
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
