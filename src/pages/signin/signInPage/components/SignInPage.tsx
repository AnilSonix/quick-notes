import { Center, Container, Divider, Stack } from "@mantine/core";
import AuthorFooter from "../../../../shared/components/AuthorFooter";
import SignInForm from "../../signInForm/components/SignInForm";
import SignInWithGoogle from "../../signInWithGoogle/components/SignInWithGoogle";

const SignInPage = () => {
  return (
    <>
      <Container h="100%">
        <Center h="100%">
          <Stack style={{ flexBasis: "20rem" }}>
            <SignInForm />
            <Divider my="xs" label="Or" labelPosition="center" />
            <SignInWithGoogle />
            <AuthorFooter />
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default SignInPage;
