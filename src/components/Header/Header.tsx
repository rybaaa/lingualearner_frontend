import { Flex, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/routes";

export const Header = () => {
  return (
    <Flex
      style={{ position: "absolute", top: 0, width: "100%" }}
      mih={50}
      bg="rgba(128, 120, 122, .3)"
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Link to={PATH.MAIN}>
        <Text>Home</Text>
      </Link>
      <Link to={PATH.APP}>
        <Text>Get Started</Text>
      </Link>
      <Link to={PATH.LOGIN}>
        <Text>Sign Up</Text>
      </Link>
    </Flex>
  );
};
