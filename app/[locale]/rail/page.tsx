import { BaseColumn } from "@/app/blocks/base-column";
import { CopyIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import "./page.css";

export default function Railroads() {
  return (
    <>
      <Section pt={"15vh"}>
        <BaseColumn>
          <Heading size={"8"} weight={"medium"}>
            smart <span className="rails-heading">Railroads</span>
          </Heading>
          <Flex style={{ transform: "translateY(30px)" }}>
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
          <Box mt="5" maxWidth={"600px"}>
            <Text>
              solutions for cars, godolas, fitting platforms crafted by high
              class mathematicians, data-scientists and logistitians from
            </Text>
            <Button
              mt="2"
              size={"2"}
              className="cta"
              radius={"medium"}
              variant="outline"
            >
              <p>info@smartmachines.pro</p>
              <CopyIcon width={20} height={20} />
            </Button>
          </Box>
          <Text size="1">Click and copy the address. Let's cooperate</Text>
        </BaseColumn>
      </Section>
      <Section pt={"20vh"}>
        <Grid columns={"2"} gapX={"6"}>
          <Box>
            <Text>variety of services</Text>
            <Grid columns={"2"}>
              <Box>
                <Heading>to increase profits</Heading>
                <Text>8% to coefficient of fleet usage</Text>
                <Text>decrease to 9% an empty fleet joutney ratio</Text>
              </Box>
              <Box>
                <Heading>to cover risks</Heading>
                <Text>cargo suppliers ranking</Text>
                <Text>calculate transportation cost</Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Section>
      <Section>
        <Grid columns={"3"} gapX={"6"}>
          <Box>
            <Text weight={"medium"}>
              one of a kind solution. minds all features of domain to maximise
              profits
            </Text>
            <Text asChild>
              <ol>
                <li>large dataset with 40.000 cars and 5.000 platforms</li>
                <li>liquids, substances - all possible cargo types</li>
                <li>full scale cars and gondolas</li>
                <li>public tarification and pricing</li>
                <li>(un)load shift duration</li>
                <li>fleet dislocation and status</li>
              </ol>
            </Text>
          </Box>
          <Box>
            <Text weight={"medium"}>from specialists to specialists.</Text>
            <Text asChild>
              <ul>
                <li>top class mathematicians and DS specialists</li>
                <li>~ 10 years of experience</li>
                <li>~ 5s calculation time - get results near instant</li>
              </ul>
            </Text>
          </Box>
        </Grid>
      </Section>
    </>
  );
}
