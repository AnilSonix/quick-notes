import AuthProvider from "../../authProvider/components/AuthProvider";
import { MyAppShell } from "./appShell";

const DashboardPage = () => {
  return (
    <AuthProvider>
      <MyAppShell />
    </AuthProvider>
  );
};

export default DashboardPage;
