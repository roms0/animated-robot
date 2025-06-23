import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { RobustBasics } from "./robust-basics";
import { RobustAdvaced } from "./robust-advanced";

export const ProductKeyPointsRobust = () => {
  return (
    <Section>
      <Heading align={"center"} size={"4"} weight={"medium"}>
        гибкость и масштабируемость
      </Heading>
      <Grid mt="6" columns={{ initial: "1fr", md: "1fr 1fr" }} gap={"6"}>
        <RobustBasics />
        <RobustAdvaced />
      </Grid>
    </Section>
  );
};
