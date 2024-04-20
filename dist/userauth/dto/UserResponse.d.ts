import { UserBaseRecord } from "./BaseUser";
declare class UserResponseDto {
    userId: number;
    error_code: string;
    error_message: string;
}
declare class UserDataResponseDto extends UserBaseRecord {
    userId: number;
    createTime: string;
    lastLoginTime: string;
    lastLoginIp: string;
}
export { UserResponseDto, UserDataResponseDto };
