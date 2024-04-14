declare class LoginUserRequestDto {
    email: string;
    password: string;
}
declare class LoginUserResponseDto {
    token: string;
    error_code: string;
    error_message: string;
}
export { LoginUserRequestDto, LoginUserResponseDto };
