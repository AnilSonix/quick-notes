import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboardPage/components/DashboardPage";
import SignInPage from "./pages/signin/signInPage/components/SignInPage";
import SignUpPage from "./pages/signup/signUpPage/components/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="recover" element={<SignUpPage />} />

      <Route path="dashboard" element={<DashboardPage />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <MantineProvider>
      <Notifications />
      <ModalsProvider>
        <RouterProvider router={router} />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
