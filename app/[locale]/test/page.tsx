import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import "./page.css";
import Image from "next/image";
import { Cinema } from "./cinema";

export default function Railroads() {
  return (
    <>
      <Section pt={"15vh"}>
        <Flex gap={"2"} direction={"column"} align={"center"}>
          <Heading size={"7"} weight={"medium"} align={"center"}>
            smart railroads
          </Heading>
          <Heading weight={"medium"} size={"2"} align={"center"}>
            ml solutions for railroads crafted and maintained by
          </Heading>
          <Button
            className="smartmachines-copy-button"
            radius={"medium"}
            variant="outline"
          >
            <p>info@smartmachines.pro</p>
          </Button>
        </Flex>
      </Section>
      <Section>
        <Heading weight={"medium"} align={"center"} mb="5">
          path
        </Heading>
        <Flex gap={"6"} wrap={"wrap"} justify={"center"}>
          <Box>
            <Heading weight={"medium"} size={"2"}>
              your logistics produce
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              data .csv .xls
            </Heading>
          </Box>
          <Box>
            <Heading weight={"medium"} size={"2"}>
              our services consumes it
            </Heading>
          </Box>
          <Box>
            <Heading weight={"medium"} size={"2"}>
              and output insights for you
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              to increase fleet efficiency
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              to automate routines
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              to answer risks
            </Heading>
          </Box>
          <Box>
            <Heading weight={"medium"} size={"2"}>
              as you fleet is utilized more efficient
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              your costs on empty journeys goes down
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              your cargo suppliers are charted
            </Heading>
            <Heading weight={"medium"} size={"2"}>
              and your journeys
            </Heading>
          </Box>
        </Flex>
      </Section>

      <Section pt="15vh">
        <Heading weight={"medium"} align={"center"} mb="5">
          services to get results
        </Heading>
        <Flex justify={"center"} gap={"6"} wrap={"wrap"}>
          <Box>
            <Heading mb="1" size={"2"} weight={"medium"}>
              <span className="attention-words--sky">
                8% to fleet efficiency
              </span>
            </Heading>
            <Text>use services to achieve results</Text>
            <Flex mt="4" direction={"column"} gap={"6"}>
              <Flex gap={"4"}>
                <Image
                  style={{
                    borderRadius: "var(--radius-5)",
                    filter: "saturate(0.7)",
                  }}
                  alt="collab"
                  width={50}
                  height={50}
                  src="/logistics.jpg"
                />
                <Box>
                  <Heading size={"2"} weight={"medium"}>
                    cargo broker
                  </Heading>
                  <Text mt="4">to balance you fleet capacity</Text>
                </Box>
              </Flex>
              <Flex gap={"4"}>
                <Image
                  style={{
                    borderRadius: "var(--radius-5)",
                    filter: "saturate(0.7)",
                  }}
                  alt="collab"
                  width={50}
                  height={50}
                  src="/logistics.jpg"
                />
                <Box>
                  <Heading size={"2"} weight={"medium"}>
                    trip calculator
                  </Heading>
                  <Text mt="4">to be precise at costs</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Heading mb="1" size={"2"} weight={"medium"}>
              <span className="attention-words--lilo">risk management</span>
            </Heading>
            <Text>aimed to automate routines and operate fast</Text>
            <Flex mt="4" direction={"column"} gap={"8"}>
              <Flex gap={"4"}>
                <Image
                  style={{
                    borderRadius: "var(--radius-5)",
                    filter: "saturate(0.7)",
                  }}
                  alt="collab"
                  width={50}
                  height={50}
                  src="/logistics.jpg"
                />
                <Box>
                  <Heading size={"2"} weight={"medium"}>
                    supplier ranker
                  </Heading>
                  <Text mt="4">to know who's cargo most suitable</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Section>

      <Section pt="15vh">
        <Heading weight={"medium"} align={"center"} mb="5">
          battle tested
        </Heading>
        <Flex gap={"6"} wrap={"wrap"}>
          <Box>
            <Text mt="4">
              fleet 40.000 carriages (69.5 and 75 tones) + 5.000 plarforms (40
              and 80 ft) with average on 100.000 trips
            </Text>
          </Box>
          <Image
            alt="truck"
            width={80}
            style={{ objectFit: "cover" }}
            height={30}
            src={"/smart-railroad-trans.png"}
          />
          <Image
            alt="coal"
            width={80}
            style={{ objectFit: "cover" }}
            height={30}
            src={"/coal-transparent.png"}
          />
          <Image
            alt="fitting"
            width={80}
            style={{ objectFit: "cover", transform: "translateY(15px)" }}
            height={30}
            src={"/fitting-transparent.png"}
          />
        </Flex>
      </Section>

      <Section pt="20vh">
        <Flex justify={"center"} gap={"9"}>
          <Heading>М ГРУПП</Heading>
          <Heading>Complitech</Heading>
        </Flex>
      </Section>
    </>
  );
}
