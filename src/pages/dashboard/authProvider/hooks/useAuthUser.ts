import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuthUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthUser should be wrapped in AuthProvider");
  }
  return context;
};

export default useAuthUser;
