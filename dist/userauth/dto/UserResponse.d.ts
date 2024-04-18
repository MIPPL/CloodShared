import { UserBaseRecord } from "./BaseUser";
declare class UserResponseDto {
    constructor(userId?: number, error_code?: string, error_message?: string);
    userId: number;
    error_code: string;
    error_message: string;
}
declare class UserDataResponseDto extends UserBaseRecord {
    userId: number;
    createTime: string;
    lastLoginTime: string;
    lastLoginIp: string;
    constructor();
}
export { UserResponseDto, UserDataResponseDto };
