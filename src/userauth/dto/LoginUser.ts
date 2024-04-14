import { IsString, IsEmail } from "class-validator";

class LoginUserRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

class LoginUserResponseDto {
  
  token: string;
  error_code: string;
  error_message: string;
}

export { LoginUserRequestDto, LoginUserResponseDto };
