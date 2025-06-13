import { Box, Grid } from "@radix-ui/themes"
import { Slot } from "radix-ui"
import React from "react"

export const BaseStack = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid columns={'1'} rows={'1'} style={{ placeItems: 'center'}}>
            {children}
        </Grid>
    )
}

export const BaseStage = ({ asChild, stage, children, ...props }: { stage: number, children: React.ReactNode, asChild?: boolean}) => {
	const Component = asChild ? Slot.Root : Box
	return <Component gridRowStart={'1'} gridRowEnd={'2'} gridColumnStart={'1'} gridColumnEnd={'2'}  style={{ zIndex: stage }} {...props}>{children}</Component>;
}

export const BS = ({ children }: { children: React.ReactNode }) => {
    return <Box gridRowStart={'1'} gridRowEnd={'2'} gridColumnStart={'1'} gridColumnEnd={'2'} style={{ zIndex: '-1'}}>{children}</Box>
}