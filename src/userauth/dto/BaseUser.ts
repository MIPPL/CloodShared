import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsNumberString,
} from "class-validator";

class UserBaseRecord {
  

@IsString()
@IsOptional()
username: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  @IsOptional()
  phone: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  setAsEmpty(): void {
    this.username = "";
    this.email = "";
    this.phone = "";
    this.firstname = "";
    this.lastname = "";
  }
}

class InputUserRequestDto {

  @IsNumberString()
  id: string;
}

export { InputUserRequestDto, UserBaseRecord };
