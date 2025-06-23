import { CopyIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductHeading = () => {
  return (
    <Section pt={"15vh"}>
      <Flex justify={"center"}>
        <Box maxWidth={"380px"}>
          <Heading size={"3"} align={"center"} weight={"medium"} color="gray">
            Путь.Про авто
          </Heading>
          <Heading size={"5"} align={"center"}>
            сервисы для задач <span className="farfetch">дорожной сети</span>
          </Heading>
        </Box>
      </Flex>
      <Flex mt="9" justify={"center"}>
        <Button variant="soft">
          <CopyIcon /> info@smartmachines.pro
        </Button>
      </Flex>
    </Section>
  );
};
