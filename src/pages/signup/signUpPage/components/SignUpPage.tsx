import { Center, Container, Stack } from "@mantine/core";
import AuthorFooter from "../../../../shared/components/AuthorFooter";
import SignUpForm from "../../signUpForm/components/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Container h="100%">
        <Center h="100%">
          <Stack style={{ flexBasis: "20rem" }}>
            <SignUpForm />
            <AuthorFooter />
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default SignUpPage;
