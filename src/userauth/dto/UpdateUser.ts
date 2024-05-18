import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsNumberString,
} from "class-validator";
import { Match } from "../../decorator/match";

class UpdateUserRequestDto {
  @IsNumberString()
  id: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsPhoneNumber()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  password: string;

  @Match("password")
  @IsOptional()
  @IsString()
  confirm_password: string;
}

export { UpdateUserRequestDto };
