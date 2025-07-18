import { Badge, Box, Card, Heading, Text } from "@radix-ui/themes";
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
  pro?: boolean;
  children?: React.ReactElement;
}

export const FeatureCard = ({
  title,
  description,
  pro = false,
  children,
}: FeatureProps) => {
  return (
    <Card>
      <Heading size={"2"} weight={"medium"}>
        {title} {pro && <Badge color="cyan">Про</Badge>}
      </Heading>
      <Box maxWidth={"220px"} mt="2" mb="4">
        <Text size={"2"}>{description}</Text>
      </Box>
      {children}
    </Card>
  );
};
