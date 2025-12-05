import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export const ProductFeatured = async () => {
  const t = await getTranslations();
  return (
    <Flex wrap={"wrap"} justify={"center"} gap="5" align={"center"}>
      <Box display={{ initial: "none", md: "block" }}>
        <Heading weight={"regular"} color="gray" size="2">
          {t("text_partners")}
        </Heading>
      </Box>
      <Box>
        <Link href={"https://optimalroute.pro/"}>
          <Flex align={"center"} gap={"2"}>
            <Image width={35} height={35} alt="optimal route" src={"/or.png"} />
            <Heading className="featured" weight={"medium"} size="2">
              optimal route
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Box>
        <Link href={"https://cloud.vk.com/"}>
          <Flex align={"center"} gap={"2"}>
            <Image width={25} height={25} alt="cloud" src={"/cloud.png"} />
            <Heading className="featured" weight={"medium"} size="2">
              vk cloud
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Box>
        <Link href={"https://complitech.org/"}>
          <Flex align={"center"} gap={"2"}>
            <Image width={25} height={25} alt="cloud" src={"/complitech.png"} />
            <Heading className="featured" weight={"medium"} size="2">
              complitech
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Box>
        <Link href={"https://m-group.one/"}>
          <Flex align={"center"} gap={"2"}>
            <Image width={25} height={25} alt="cloud" src={"/mgroup.png"} />
            <Heading className="featured" weight={"medium"} size="2">
              м-групп
            </Heading>
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
};
