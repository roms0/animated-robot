'use client'

import { Box, Heading } from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props"
import { useTranslations } from "use-intl";
import { motion } from "motion/react";
import './shine-heading.css'

export const ShineHeading = () => {
    const main = useTranslations('main');
    const t = useTranslations();
    const headingScale: Responsive<"5" | "6" | "8" | "9" | "1" | "2" | "3" | "4" | "7"> | undefined = t('long') === '1' ? { initial: '7', lg: '8' } : { initial: '7', lg: '8'}
    return (
        <Box>
            <Heading asChild size={headingScale} weight={'medium'}>
                <motion.h1 
                initial={{ transform: "translateX(-300px)", opacity: 0 }}
                animate={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "tween" }}
                >{main('catch.first')}</motion.h1>
            </Heading>
            <Heading asChild size={headingScale} weight={'medium'}>
                <motion.h1 
                initial={{ transform: "translateX(300px)", opacity: 0 }}
                animate={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "tween", delay: 0.3 }}
                >
                {main('catch.union')} <span className="accent">{main('catch.target')} </span>
                </motion.h1>
            </Heading>
        </Box>
    )
}