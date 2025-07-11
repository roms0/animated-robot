import { Badge, Box, Card, Heading, Text } from "@radix-ui/themes";

interface FeatureProps {
  title: string;
  description: string;
  pro?: boolean;
}

export const FeatureCard = ({
  title,
  description,
  pro = false,
}: FeatureProps) => {
  return (
    <Card>
      <Heading size={"2"} weight={"medium"}>
        {title} {pro && <Badge color="cyan">Про</Badge>}
      </Heading>
      <Box mt="4">
        <Text size={"2"} color="gray">
          {description}
        </Text>
      </Box>
    </Card>
  );
};
