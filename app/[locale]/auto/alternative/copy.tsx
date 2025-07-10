import { Button, Flex, Section } from "@radix-ui/themes";
import classes from "./copy.module.css";
import { CopyIcon } from "@radix-ui/react-icons";

export const Copy = () => {
  return (
    <Section>
      <Flex className={classes.copy} justify={"center"}>
        <Button size={"2"} variant="surface">
          <CopyIcon width={20} height={20} />
          info@smartmachines.pro
        </Button>
      </Flex>
    </Section>
  );
};
