"use client";
import { Heading, SegmentedControl } from "@radix-ui/themes";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const Language = () => {
  const locale = useLocale();
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  const handleChangeLocale = (locale: string) => {
    // Убираем текущую локаль из pathname и добавляем новую
    const segments = path.split("/");
    segments[1] = locale; // заменяем текущую локаль на новую
    const newPath = segments.join("/");

    router.replace(newPath + `?${params.toString()}`);
  };
  return (
    <SegmentedControl.Root
      onValueChange={handleChangeLocale}
      ml="6"
      mt="1"
      mr="2"
      value={locale}
    >
      <SegmentedControl.Item value="ru">
        <Heading size={"4"}>🇷🇺</Heading>
      </SegmentedControl.Item>
      <SegmentedControl.Item value="en">
        <Heading size={"4"}>🇺🇸</Heading>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
