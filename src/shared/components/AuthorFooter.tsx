import { Anchor, Text } from "@mantine/core";

const AuthorFooter = () => {
  return (
    <Text ta={"center"} my="md" fz="xs" c="dimmed">
      Built by{" "}
      <Anchor href="https://twitter.com/anilSonix" target="_blank" fz="xs">
        @anilSonix
      </Anchor>
      {" / "}
      <Anchor href="https://twitter.com/anilSonix" target="_blank" fz="xs">
        Github
      </Anchor>
    </Text>
  );
};

export default AuthorFooter;
