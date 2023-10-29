import { User } from "firebase/auth";
import { createContext } from "react";

interface IAuthContext {
  user: User;
}

export const AuthContext = createContext<IAuthContext>(
  null as unknown as IAuthContext
);
