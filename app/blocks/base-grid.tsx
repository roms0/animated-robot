import { Grid } from "@radix-ui/themes"
import React from "react"

export const BaseGrid = ({ children }: {children: React.ReactNode}) => {
    return <Grid columns={{ initial: "1", sm: '2', lg: "4"}} gap={"6"}>{children}</Grid>
}