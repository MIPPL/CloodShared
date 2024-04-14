import { UserBaseRecord } from "./BaseUser";
declare class CreateUserRequestDto extends UserBaseRecord {
    password: string;
}
declare class CreateUserResponseDto {
    userId: number;
    error_code: string;
    error_message: string;
}
export { CreateUserRequestDto, CreateUserResponseDto };
