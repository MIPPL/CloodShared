declare class UserBaseRecord {
    username: string;
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
    constructor();
}
declare class InputUserRequestDto {
    id: string;
}
export { InputUserRequestDto, UserBaseRecord };
