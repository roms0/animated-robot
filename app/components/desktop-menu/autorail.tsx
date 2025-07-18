"use client";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { HashLink } from "../hash-link/hash-link";
import Image from "next/image";
import Link from "next/link";

export const Autorail = () => {
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
              src={"/small-cargo-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href="/auto?view=mile">
            <Heading size={"2"} weight={"medium"}>
              первая и последняя мили
            </Heading>
          </Link>
          <Box>
            <Image
              style={{ transform: "rotate(-5deg)" }}
              alt="huge-cargo"
              src={"/huge-cargo-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href="/auto?view=highway">
            <Heading size={"2"} weight={"medium"}>
              магистральные перевозки
            </Heading>
          </Link>
          <Box>
            <Image
              alt="huge-cargo"
              src={"/store-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href="/auto?view=store">
            <Heading size={"2"} weight={"medium"}>
              зонирование складов
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
              src={"/closed-container-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href={"/rail?view=invoice"}>
            <Heading size={"2"} weight={"medium"}>
              план перевозок и работа с заявками
            </Heading>
          </Link>
          <Box>
            <Image
              alt="huge-cargo"
              src={"/pc-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href={"/rail?view=dashboard"}>
            <Heading size={"2"} weight={"medium"}>
              аналитика и личный кабинет
            </Heading>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};
