import { UserBaseRecord } from "./BaseUser";

class UserResponseDto {
  constructor(
    userId: number = 0,
    error_code: string = "",
    error_message: string = "",
  ) {
    this.userId = userId;
    this.error_code = error_code;
    this.error_message = error_message;
  }

  userId: number;
  error_code: string;
  error_message: string;
}

class UserDataResponseDto extends UserBaseRecord {
  userId: number;
  createTime: string;
  lastLoginTime: string;
  lastLoginIp: string;

  constructor() {
    super();
    this.userId = 0;
    this.createTime = "";
    this.lastLoginTime = "";
  }
}

export { UserResponseDto, UserDataResponseDto };
