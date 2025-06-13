'use client'

import { Heading } from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props"
import { useTranslations } from "use-intl";
import './shine-heading.css'

export const ShineHeading = () => {
    const main = useTranslations('main');
    const t = useTranslations();
    const headingScale: Responsive<"5" | "6" | "8" | "9" | "1" | "2" | "3" | "4" | "7"> | undefined = t('long') === '1' ? { initial: '7', lg: '8' } : { initial: '8', lg: '9'}
    return (
        <>
            <Heading size={headingScale} weight={'medium'}>{main('catch.first')}</Heading>
            <Heading style={{display: 'inline'}} size={headingScale} weight={'medium'}>{main('catch.union')} </Heading>
            <Heading style={{display: 'inline'}}  wrap={'pretty'} size={headingScale} className={"accent"}>{main('catch.target')}</Heading>
        </>
    )
}