import { zodResolver } from "@hookform/resolvers/zod";
import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconLock } from "@tabler/icons-react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { auth } from "../../../../../firebaseConfig";
import classes from "./SignInForm.module.css";

const SignInFormSchema = z.object({
  email: z.string().email({ message: "Provide valid email" }),
  password: z.string().trim().min(1, {
    message: "Provide valid password",
  }),
});

type ISignInFormSchema = z.infer<typeof SignInFormSchema>;

const SignInForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignInFormSchema>({
    resolver: zodResolver(SignInFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignInFormSchema> = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        if (res?.user) {
          notifications.show({
            title: "Success",
            message: "Loading dashboard",
            color: "green",
          });
          navigate("/dashboard");
        } else {
          notifications.show({
            title: "Error",
            message: "Provide valid credentials",
            color: "red",
          });
          setError("password", { message: "Provide valid credentials" });
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
    <>
      <Stack>
        <IconLock size={36} className={classes.lockIcon} />
        <Title ta={"center"} order={1}>
          Quick notes
        </Title>
        <Title ta={"center"} order={2} c="dimmed" fz={"xl"}>
          Sign in to continue
        </Title>
        {/* // eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter email here"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter password here"
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <Button mt="sm" type="submit" loading={loading}>
              Sign in
            </Button>
          </Stack>
        </form>
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
