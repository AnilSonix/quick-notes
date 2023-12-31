import {
  Avatar,
  Group,
  Menu,
  Stack,
  Text,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  IconMessageCircle,
  IconMoon,
  IconPhoto,
  IconPower,
  IconSearch,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../../../firebaseConfig";
import useAuthUser from "../../authProvider/hooks/useAuthUser";

export function ProfileSection() {
  const { user } = useAuthUser();
  const [signOut] = useSignOut(auth);
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  function onSignOut() {
    modals.openConfirmModal({
      title: "Sign out ?",
      centered: true,
      children: <Text size="sm">Are you sure you want to sign out ?</Text>,
      labels: { confirm: "Sign out", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: signOut,
    });
  }

  function toggleTheme() {
    if (colorScheme === "light" || colorScheme === "auto") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Group>
          <Avatar
            src={user.photoURL}
            alt="profile pic"
            style={{ cursor: "pointer" }}
          />
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Stack gap={0} ml={"sm"}>
          <Text>{user.displayName}</Text>
          <Text c="dimmed" fz="xs">
            {user.email}
          </Text>
        </Stack>
        <Menu.Divider />

        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSearch style={{ width: rem(14), height: rem(14) }} />
          }
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
        <Menu.Item
          leftSection={
            colorScheme === "dark" ? (
              <IconSun style={{ width: rem(14), height: rem(14) }} />
            ) : (
              <IconMoon style={{ width: rem(14), height: rem(14) }} />
            )
          }
          onClick={toggleTheme}
        >
          Turn on{" "}
          {colorScheme === "light" || colorScheme === "auto" ? "dark" : "light"}{" "}
          theme
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={
            <IconPower style={{ width: rem(14), height: rem(14) }} />
          }
          onClick={onSignOut}
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
