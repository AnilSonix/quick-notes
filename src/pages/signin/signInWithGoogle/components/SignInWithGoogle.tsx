import { Button } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

const SignInWithGoogle = () => {
  return (
    <Button leftSection={<IconBrandGoogleFilled />} variant="outline">
      Continue with Google
    </Button>
  );
};

export default SignInWithGoogle;
