import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsNumberString,
  IsNotEmpty,
} from "class-validator";

class UserBaseRecord {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;
}

class InputUserRequestDto {
  @IsNumberString()
  id: string;
}

export { InputUserRequestDto, UserBaseRecord };
