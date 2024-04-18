import { IsString } from "class-validator";
import { UserBaseRecord } from "./BaseUser";

class CreateUserRequestDto extends UserBaseRecord {
  @IsString()
  password: string;
}

class CreateUserResponseDto {
  userId: number;
  error_code: string;
  error_message: string;
}

export { CreateUserRequestDto, CreateUserResponseDto };
