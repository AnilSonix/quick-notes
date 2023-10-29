import { Center, Container, Loader, Stack, Text } from "@mantine/core";
import { PropsWithChildren } from "react";

interface LoadingScreenProps {
  title?: string;
  subtitle?: string;
}

const LoadingScreen = ({
  title = "Loading",
  subtitle = "Just a sec",
  children,
}: PropsWithChildren<LoadingScreenProps>) => {
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

export default LoadingScreen;
