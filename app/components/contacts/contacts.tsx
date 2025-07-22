"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";

export const Contacts = () => {
  return (
    <Flex
      direction={"column"}
      align={"start"}
      m="auto"
      width={"min-content"}
      gap={"2"}
    >
      <Button
        variant="ghost"
        m="auto"
        onClick={() => {
          navigator.clipboard.writeText("info@smartmachines.pro");
        }}
      >
        <CopyIcon />
        info@smartmachines.pro
      </Button>
      <Button
        variant="ghost"
        m="auto"
        onClick={() => {
          navigator.clipboard.writeText("+7 (977) 103-48-88");
        }}
      >
        <CopyIcon />
        +7 (977) 103-48-88
      </Button>
    </Flex>
  );
};
