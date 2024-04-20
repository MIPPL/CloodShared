import { UserBaseRecord } from "./BaseUser";

class UserResponseDto {
  userId: number;
  error_code: string;
  error_message: string;
}

class UserDataResponseDto extends UserBaseRecord {
  userId: number;
  createTime: string;
  lastLoginTime: string;
  lastLoginIp: string;
}

export { UserResponseDto, UserDataResponseDto };
