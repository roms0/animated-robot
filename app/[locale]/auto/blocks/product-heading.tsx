import { CopyIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { Magic } from "../icons/magic";

export const ProductHeading = () => {
  return (
    <Section id="index" pt={{ initial: "10vh", md: "15vh" }}>
      <Flex
        wrap={"wrap"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={"4"}
        m="auto"
      >
        <Box maxWidth={"600px"}>
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
            {/* <span className="magic-accent">
              ml <Magic size={16} />
            </span>{" "} */}
            оптимизация <span className="farfetch">автомобильной</span>{" "}
            логистики
          </Heading>
        </Box>
        <Box maxWidth={"400px"}>
          <Text align={"center"} weight={"light"} color="gray">
            Опишите параметры и допустимые ограничения, мы подберем самое
            оптимальное решение.
          </Text>
        </Box>
        <Button variant="surface" color="cyan" className="actions">
          <CopyIcon /> info@smartmachines.pro
        </Button>
      </Flex>
      <Flex mt="9" gap={"4"} justify={"center"}>
        <Box>
          <Heading align={"center"} weight={"medium"}>
            30+
          </Heading>
          <Heading align={"center"} weight={"light"} size={"1"}>
            параметров
          </Heading>
        </Box>
        <Box>
          <Heading align={"center"} weight={"medium"}>
            12~
          </Heading>
          <Heading align={"center"} weight={"light"} size={"1"}>
            секунд на решение
          </Heading>
        </Box>
      </Flex>
    </Section>
  );
};
