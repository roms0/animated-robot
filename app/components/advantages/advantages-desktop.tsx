"use client";

import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import Image from "next/image";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import "./advantages.css";
import { BaseStack, BaseStage } from "@/app/blocks/base-stack";

export const AdvantagesDesktop = () => {
  return (
    <Flex gap={"4"} justify={"center"}>
      <Flex flexBasis={"30%"} align={"center"}>
        <Image
          style={{ borderRadius: "var(--radius-5)", filter: "saturate(0.7)" }}
          alt="collab"
          width={120}
          height={120}
          src="/logistics.jpg"
        />
        <Heading
          style={{
            backgroundColor: "white",
            transform: "translateX(-40px)",
            borderRadius: "6px",
            padding: "3px",
          }}
          size={"3"}
          weight={"medium"}
        >
          multimodal products that gain results
        </Heading>
      </Flex>
      <Flex flexBasis={"70%"} justify={"center"} gap={"9"}>
        <Flex flexBasis={"50%"} gap={"4"}>
          <Flex direction={"column"} gap={"4"}>
            <Box>
              <Box>
                <Heading className="upscale" weight={"medium"}>
                  + <MetricsUp value={11} />%
                </Heading>
              </Box>
              <Text align={"center"}>
                to revenue cutting transportation costs for autumobile logistics
              </Text>
            </Box>
            <Image
              alt="truck"
              width={100}
              style={{ objectFit: "cover" }}
              height={50}
              src={"/smart-truck-trans.png"}
            />
            <Box>
              <Button variant="surface" size={"1"} color="cyan">
                see Machines Auto <ExternalLinkIcon />
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex flexBasis={"50%"} gap={"4"}>
          <Flex direction={"column"} gap={"4"}>
            <Box>
              <Heading className="upscale" weight={"medium"}>
                + <MetricsUp value={8} />%
              </Heading>
              <Text align={"center"}>
                to utilization rate of cargo cars for railroad operators
              </Text>
            </Box>
            <Image
              alt="truck"
              width={100}
              style={{ objectFit: "cover" }}
              height={50}
              src={"/smart-railroad-trans.png"}
            />
            <Box>
              <Button variant="surface" size={"1"} color="blue">
                see Machines Railroad <ExternalLinkIcon />
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
