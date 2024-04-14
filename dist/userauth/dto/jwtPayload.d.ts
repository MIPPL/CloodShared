import { JwtPayload } from "jsonwebtoken";
export interface _jwtPayload extends JwtPayload {
    id: number;
    name: string;
    version?: string;
    expires_on?: string;
    scopes?: string[];
}
