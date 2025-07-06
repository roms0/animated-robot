import type { Metadata } from "next";
import "./globals.css";
import { DesktopNavigation, MobileNavigation } from "../components/navigation";
import { Container, Reset, Text, Theme } from "@radix-ui/themes";
import { NextIntlClientProvider } from "next-intl";
import { Golos_Text } from "next/font/google";
import { ThemeProvider } from "next-themes";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-golos",
});

export const metadata: Metadata = {
  title: "machines",
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
            <Theme accentColor="sky" hasBackground={false}>
              <DesktopNavigation />
              <Reset>{children}</Reset>
              <MobileNavigation />
            </Theme>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
