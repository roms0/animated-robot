import { Flex } from "@radix-ui/themes"
import React from "react"

export const BaseColumn = ({ children }: {children: React.ReactNode }) => {
    return <Flex height={'100%'} justify={'center'} direction={'column'} align={'center'} gap={'6'}>{children}</Flex>
}