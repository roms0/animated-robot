import { Box, Grid, Heading, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Railroads() {
    return (
        <>
            <Section>
                <Heading>railroads</Heading>
            </Section>
            <Image alt="truck" width={200} style={{ objectFit: 'cover'}} height={100} src={'/smart-railroad-trans.png'} />
            <Section>
                <Grid columns={'3'} gapX={'6'}>
                    <Box>
                        <Text weight={'medium'}>one of a kind solution. minds all features of domain to maximise profits</Text>
                        <Text asChild>
                            <ol>
                                <li>large dataset with 40.000 cars and 5.000 platforms</li>
                                <li>liquids, substances - all possible cargo types</li>
                                <li>full scale cars and gondolas</li>
                                <li>public tarification and pricing</li>
                                <li>(un)load shift duration</li>
                                <li>fleet location and status</li>
                            </ol>
                        </Text>
                    </Box>
                    <Box>
                        <Text weight={'medium'}>from specialists to specialists.</Text>
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
    )
}