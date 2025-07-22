import type { Metadata } from "next";
import "./globals.css";
import { Box, Reset, Theme } from "@radix-ui/themes";
import { NextIntlClientProvider } from "next-intl";
import { Golos_Text } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MobileMenu } from "../components/mobile-menu/mobile-menu";
import { DesktopMenu } from "../components/desktop-menu/desktop-menu-fresh";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-golos",
});

export const metadata: Metadata = {
  title: "smart machines",
  description: "smart machines products page",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      className={`${golos.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider attribute={"class"}>
            <Theme accentColor="cyan">
              <DesktopMenu />
              <Reset>{children}</Reset>
              <MobileMenu />
            </Theme>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
