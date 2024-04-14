declare class ValidateUserRequestDto {
    username: string;
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
}
declare class ValidateUserResponseDto {
    validate: boolean;
    field: string;
    token: string;
}
export { ValidateUserRequestDto, ValidateUserResponseDto };
