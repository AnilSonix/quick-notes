import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <>
      <Stack>
        <IconLock size={36} className={classes.lockIcon} />
        <Title ta={"center"} order={1}>
          Quick notes
        </Title>
        <Title ta={"center"} order={2} c="dimmed" fz={"xl"}>
          Sign in to continue
        </Title>
        <TextInput label="Email" placeholder="Enter email here" type="email" />
        <PasswordInput
          label="Password"
          placeholder="Enter password here"
          type="password"
        />
        <Button mt="sm">Sign in</Button>
        <Text ta={"center"}>
          Don&apos;t have an account{" "}
          <Anchor component={Link} to="/signup">
            Sign up
          </Anchor>
        </Text>
      </Stack>
    </>
  );
};

export default SignInForm;
