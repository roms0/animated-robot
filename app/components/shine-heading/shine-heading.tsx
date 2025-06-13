'use client'

import { Box, Heading } from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props"
import { useTranslations } from "use-intl";
import './shine-heading.css'

export const ShineHeading = () => {
    const main = useTranslations('main');
    const t = useTranslations();
    const headingScale: Responsive<"5" | "6" | "8" | "9" | "1" | "2" | "3" | "4" | "7"> | undefined = t('long') === '1' ? { initial: '7', lg: '8' } : { initial: '7', lg: '8'}
    return (
        <Box>
            <Heading align={'center'} size={headingScale} weight={'medium'}>{main('catch.first')}</Heading>
            <Heading align={'center'} size={headingScale} weight={'medium'}>{main('catch.union')} <span className="accent">{main('catch.target')}</span></Heading>
        </Box>
    )
}