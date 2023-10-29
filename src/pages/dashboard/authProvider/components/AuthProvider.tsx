import { ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../../../../firebaseConfig";
import ErrorScreen from "../../../../shared/components/ErrorScreen";
import LoadingScreen from "../../../../shared/components/LoadingScreen";
import { AuthContext } from "../contexts/authContext";

interface AuthProviderProps {
  children?: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (!user) {
    return <Navigate to={"/signin"} replace />;
  }

  const value = { user: user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
