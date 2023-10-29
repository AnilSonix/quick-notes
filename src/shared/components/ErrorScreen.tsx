import { Center, Container, Loader, Stack, Text } from "@mantine/core";
import { PropsWithChildren } from "react";

interface ErrorScreenProps {
  title?: string;
  subtitle?: string;
}

const ErrorScreen = ({
  title = "Something went wrong",
  subtitle = "Try again later",
  children,
}: PropsWithChildren<ErrorScreenProps>) => {
  return (
    <>
      <Container h="100%">
        <Center h="100%">
          <Stack gap={"xs"}>
            <Loader style={{ margin: "0 auto" }} />
            <Text ta={"center"} fz="xl" mt="lg">
              {title}
            </Text>
            <Text ta="center" c="dimmed">
              {subtitle}
            </Text>
            {children}
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default ErrorScreen;
