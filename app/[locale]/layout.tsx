import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Theme } from "@radix-ui/themes";
import { NextIntlClientProvider } from "next-intl";
import { Golos_Text } from 'next/font/google'
 
const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: "--font-golos"
})


export const metadata: Metadata = {
  title: "machines",
  description: "smart machines products page",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  return (
    <html lang={locale} className={golos.variable}>
        <body>
          <NextIntlClientProvider>
            <Theme hasBackground={false}>
              {/* <Navigation /> */}
              {children}
            </Theme>
          </NextIntlClientProvider>
        </body>
    </html>
  );
}
