import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"

const Section = (props: BoxProps) => {
  const { children, ...rest } = props

  return (
    <Box p={{ base: 0, md: 10 }} as="section" {...rest}>
      <Box p={{ base: 6, md: 10 }} maxWidth="container.xl" marginX="auto">
        {children}
      </Box>
    </Box>
  )
}

export default Section
