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
      <Grid
        justify={"center"}
        mt="4"
        columns={{ initial: "1fr", md: "800px" }}
        gap={"6"}
      >
        <RobustBasics />
      </Grid>
    </Section>
  );
};
