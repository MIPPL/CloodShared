declare class UserBaseRecord {
    username: string;
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
    setAsEmpty(): void;
}
declare class InputUserRequestDto {
    id: string;
}
export { InputUserRequestDto, UserBaseRecord };
