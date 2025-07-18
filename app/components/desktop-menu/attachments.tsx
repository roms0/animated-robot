"use client";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { HashLink } from "../hash-link/hash-link";
import Image from "next/image";
import Link from "next/link";

export const Attachments = () => {
  return (
    <Grid width={"550px"} gapX={"6"} pt="6" columns={"2"} p="4">
      <Box>
        <Heading size={"1"} weight={"bold"}>
          автомобильная логистика
        </Heading>
        <Grid mt="4" gapX={"2"} columns={"40px 200px"} align={"center"}>
          <Box>
            <Image
              alt="small-cargo"
              src={"/pdf-icon.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/smart machines auto.pdf"}
          >
            <Heading size={"2"} weight={"medium"}>
              презентация
            </Heading>
          </Link>
        </Grid>
      </Box>
      <Box>
        <Heading size={"1"} weight={"bold"}>
          железнодорожная логистика
        </Heading>
        <Grid mt="4" gapX={"2"} columns={"40px 200px"} align={"center"}>
          <Box>
            <Image
              alt="small-cargo"
              src={"/pdf-icon.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/smart machines railroads.pdf"}
          >
            <Heading size={"2"} weight={"medium"}>
              презентация
            </Heading>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};
