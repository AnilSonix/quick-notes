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
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <>
      <Stack>
        <IconLock size={36} className={classes.lockIcon} />
        <Title ta={"center"} order={1}>
          Quick notes
        </Title>
        <Title ta={"center"} order={2} c="dimmed" fz={"xl"}>
          Provide below details
        </Title>
        <TextInput label="Email" placeholder="Enter email here" type="email" />
        <PasswordInput
          label="Password"
          placeholder="Enter password here"
          type="password"
        />
        <Button mt="sm">Sign up</Button>
        <Text ta={"center"}>
          Back to{" "}
          <Anchor component={Link} to="/signin">
            sign in
          </Anchor>
        </Text>
      </Stack>
    </>
  );
};

export default SignUpForm;
