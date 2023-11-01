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
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import isStrongPassword from "validator/lib/isStrongPassword";
import { z } from "zod";
import { auth } from "../../../../../firebaseConfig";
import classes from "./SignUpForm.module.css";

const SignUpFormSchema = z.object({
  email: z.string().email({ message: "Provide valid email" }),
  password: z
    .string()
    .trim()
    .refine(
      (password) =>
        isStrongPassword(password, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        }),
      {
        message: "Provide strong password",
      }
    ),
});

type ISignUpFormSchema = z.infer<typeof SignUpFormSchema>;

const SignUpForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUpFormSchema>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.log({ error });

      if (error.code.startsWith("auth/email-already-in-use")) {
        notifications.show({
          title: "Error",
          message: "You're already signed up with this email",
          color: "red",
        });
        setError("email", { message: "Email already in use" });

        return;
      }
      if (error.code?.startsWith("auth/invalid-password")) {
        notifications.show({
          title: "Error",
          message: "Provide a strong password",
          color: "red",
        });
        return;
      }
    }
  }, [error, setError]);

  const onSubmit: SubmitHandler<ISignUpFormSchema> = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        if (res?.user) {
          notifications.show({
            title: "Success",
            message: "Welcome aboard",
            color: "green",
          });
          navigate("/dashboard");
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
          Provide below details
        </Title>
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
              description={
                "Password should be atleast 8 character ( containing a uppercase , lowercase , digit and symbol )"
              }
              type="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <Button mt="sm" type="submit" loading={loading}>
              Sign up
            </Button>
          </Stack>
        </form>
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
