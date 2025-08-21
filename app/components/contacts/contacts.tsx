"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRef, useState } from "react";
import classes from "./contacts.module.css";
import { useTranslations } from "next-intl";

const states = ["", classes.success, classes.failure];

const Copy = ({ content }: { content: string }) => {
  const [state, setState] = useState(0);
  let tm = useRef<number>(0);
  const handleCopy = async () => {
    clearTimeout(tm.current);
    try {
      await navigator.clipboard.writeText(content);
      setState(1);
      tm.current = setTimeout(() => {
        setState(0);
      }, 500) as unknown as number;
    } catch {
      setState(2);
      tm.current = setTimeout(() => {
        setState(0);
      }, 500) as unknown as number;
    }
  };
  return (
    <Button
      className={states[state]}
      variant="ghost"
      m="auto"
      onClick={handleCopy}
    >
      {state === 1 ? <CheckIcon /> : <CopyIcon />}
      {content}
    </Button>
  );
};

export const Contacts = () => {
  const t = useTranslations();
  return (
    <Flex
      m="auto"
      minWidth={"320px"}
      width={"min-content"}
      direction={"column"}
      align={"start"}
      gap={"2"}
    >
      <Text size={"2"}>{t("title_contact_us")}</Text>
      <Copy content="support@smartmachines.pro" />
      <Copy content="+7 (977) 103-48-88" />
    </Flex>
  );
};
