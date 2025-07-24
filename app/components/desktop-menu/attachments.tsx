"use client";
import { Box, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import React from "react";

const materials = {
  en: [
    { name: "way.pro auto", path: "/en/way_pro_auto.pdf" },
    { name: "way.pro auto docs", path: "/en/way_pro_auto_docs.pdf" },
  ],
  ru: [
    { name: "путь.про авто", path: "/ru/way_pro_auto_ru.pdf" },
    { name: "путь.про жд", path: "/ru/way_pro_rail_ru.pdf" },
  ],
} as const;

export const Attachments = () => {
  const locale = useLocale();
  return (
    <Grid mt="4" gapX={"2"} columns={"40px 300px"} align={"center"}>
      {materials[locale as "ru" | "en"].map((m) => {
        return (
          <React.Fragment key={m.name}>
            <Box>
              <Image
                alt="small-cargo"
                src={"/pdf-icon.png"}
                width={38}
                height={38}
              />
            </Box>
            <Link target="_blank" rel="noopener noreferrer" href={m.path}>
              <Heading size={"2"} weight={"medium"}>
                {m.name}
              </Heading>
            </Link>
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
