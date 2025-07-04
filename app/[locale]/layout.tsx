import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "../components/navigation";
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
              <Container
                position={"relative"}
                overflowX={"hidden"}
                pl="6"
                pr="6"
                size={"4"}
              >
                <Navigation />
                <Reset>{children}</Reset>
              </Container>
            </Theme>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
