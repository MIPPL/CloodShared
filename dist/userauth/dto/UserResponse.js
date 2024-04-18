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
exports.UserDataResponseDto = exports.UserResponseDto = void 0;
var BaseUser_1 = require("./BaseUser");
var UserResponseDto = (function () {
    function UserResponseDto(userId, error_code, error_message) {
        if (userId === void 0) { userId = 0; }
        if (error_code === void 0) { error_code = ""; }
        if (error_message === void 0) { error_message = ""; }
        this.userId = userId;
        this.error_code = error_code;
        this.error_message = error_message;
    }
    return UserResponseDto;
}());
exports.UserResponseDto = UserResponseDto;
var UserDataResponseDto = (function (_super) {
    __extends(UserDataResponseDto, _super);
    function UserDataResponseDto() {
        var _this = _super.call(this) || this;
        _this.userId = 0;
        _this.createTime = "";
        _this.lastLoginTime = "";
        return _this;
    }
    return UserDataResponseDto;
}(BaseUser_1.UserBaseRecord));
exports.UserDataResponseDto = UserDataResponseDto;
