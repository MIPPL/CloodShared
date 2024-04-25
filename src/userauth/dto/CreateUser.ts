import { IsString, IsNotEmpty } from "class-validator";
import { UserBaseRecord } from "./BaseUser";

class CreateUserRequestDto extends UserBaseRecord {
  @IsNotEmpty()
  @IsString()
  password: string;
}

class CreateUserResponseDto {
  userId: number;
  error_code: string;
  error_message: string;
}

export { CreateUserRequestDto, CreateUserResponseDto };
