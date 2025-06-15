import { Flex } from "@radix-ui/themes"
import React from "react"

export const BaseColumn = ({ children }: {children: React.ReactNode }) => {
    return <Flex style={{textAlign: 'center'}} height={'100%'} justify={'center'} direction={'column'} align={'center'} gap={{ initial: '3', lg: '6'}}>{children}</Flex>
}