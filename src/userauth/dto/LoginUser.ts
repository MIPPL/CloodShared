import { IsString, IsEmail, ValidateIf } from "class-validator";

class LoginUserRequestDto {
  @ValidateIf((o) => o.email === null || o.email === undefined)
  @IsString()
  username?: string;

  @ValidateIf((o) => o.username === null || o.username === undefined)
  @IsEmail()
  email?: string;

  @IsString()
  password: string;
}

class LoginUserResponseDto {
  token: string;
  error_code: string;
  error_message: string;
}

export { LoginUserRequestDto, LoginUserResponseDto };
