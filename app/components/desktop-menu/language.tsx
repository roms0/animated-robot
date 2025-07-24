"use client";
import { Heading, SegmentedControl, Skeleton, Text } from "@radix-ui/themes";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function isWindowsPlatform() {
  //@ts-ignore
  if (navigator?.userAgentData && navigator?.userAgentData?.platform) {
    //@ts-ignore
    return navigator.userAgentData.platform === "Windows";
  }
  if ("platform" in navigator) {
    return navigator.platform === "Win32";
  }
  return true;
}
const eng = isWindowsPlatform() ? "eng" : `🇺🇸`;
const rus = isWindowsPlatform() ? "rus" : `🇷🇺`;

export const Language = () => {
  const locale = useLocale();
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChangeLocale = (locale: string) => {
    // Убираем текущую локаль из pathname и добавляем новую
    const segments = path.split("/");
    segments[1] = locale; // заменяем текущую локаль на новую
    const newPath = segments.join("/");

    router.replace(newPath + `?${params.toString()}`);
  };
  if (!isClient)
    return <Skeleton ml="6" mt="1" mr="2" width={"100px"} height={"30px"} />;
  return (
    <SegmentedControl.Root
      onValueChange={handleChangeLocale}
      ml="6"
      mt="1"
      mr="2"
      value={locale}
    >
      <SegmentedControl.Item value="ru">
        <Text>{rus}</Text>
      </SegmentedControl.Item>
      <SegmentedControl.Item value="en">
        <Text>{eng}</Text>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
