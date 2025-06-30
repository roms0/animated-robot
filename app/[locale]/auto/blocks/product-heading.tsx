import { CopyIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Heading, Section } from "@radix-ui/themes";
import { Magic } from "../icons/magic";

export const ProductHeading = () => {
  return (
    <Section pt={"15vh"}>
      <Flex
        wrap={"wrap"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={"6"}
        m="auto"
      >
        <Box maxWidth={"400px"}>
          <Heading
            align={"center"}
            mb="2"
            size={"1"}
            weight={"medium"}
            color="gray"
          >
            Путь.Про авто
          </Heading>
          <Heading align={"center"} size={"8"}>
            <span className="magic-accent">
              ml <Magic size={22} />
            </span>{" "}
            сервисы для задач <span className="farfetch">дорожной сети</span>
          </Heading>
        </Box>
        <Box maxWidth={"500px"}>
          <Heading align={"center"} size={"2"} weight={"light"} color="gray">
            Решайте сложные задачи логистики быстро и точно. Опишите свои
            данные, установите параметры и допустимые ограничения, а мы подберем
            самое оптимальное решение.
          </Heading>
        </Box>
        <Button className="actions">
          <CopyIcon /> info@smartmachines.pro
        </Button>
      </Flex>
    </Section>
  );
};
