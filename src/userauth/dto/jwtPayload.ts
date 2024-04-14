import { JwtPayload } from "jsonwebtoken";

export interface _jwtPayload extends JwtPayload {
  id: number;
  name: string;
  version: number;
  roles: string[];
  expires: string;
}