import { Badge, Box, Heading } from "@radix-ui/themes";
import React from "react";

interface TableItemProps {
  title: string;
  children: React.ReactNode;
}

export const TableItem = ({ title, children }: TableItemProps) => {
  return (
    <Box className="elevated-card">
      <Heading mb="2" size={"2"} weight={"medium"}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
