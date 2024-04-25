import {
  IsString,
  IsNotEmpty,
  IsStrongPassword,
  IsStrongPasswordOptions,
  ValidateIf,
} from "class-validator";
import { UserBaseRecord } from "./BaseUser";

const strongPasswordOptions = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
} as IsStrongPasswordOptions;

class CreateUserRequestDto extends UserBaseRecord {
  @IsStrongPassword(strongPasswordOptions)
  @IsNotEmpty()
  @IsString()
  password: string;

  @ValidateIf((o) => o.password === o.confirm_password)
  @IsNotEmpty()
  @IsString()
  confirm_password: string;
}

class CreateUserResponseDto {
  userId: number;
  error_code: string;
  error_message: string;
}

export { CreateUserRequestDto, CreateUserResponseDto };
