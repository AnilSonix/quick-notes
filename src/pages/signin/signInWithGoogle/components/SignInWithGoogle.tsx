import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../../firebaseConfig";

const SignInWithGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const onSubmit = () => {
    signInWithGoogle()
      .then((res) => {
        if (res?.user) {
          notifications.show({
            title: "Success",
            message: "Loading dashboard",
          });
          navigate("/dashboard");
        } else {
          notifications.show({
            title: "Error",
            message: "Something went wrong",
            color: "red",
          });
        }
      })
      .catch(() => {
        notifications.show({
          title: "Error",
          message: "Something went wrong",
          color: "red",
        });
      });
  };
  return (
    <Button
      leftSection={<IconBrandGoogleFilled />}
      variant="outline"
      onClick={onSubmit}
    >
      Continue with Google
    </Button>
  );
};

export default SignInWithGoogle;
