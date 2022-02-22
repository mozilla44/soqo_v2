import { Text, TextProps } from "@chakra-ui/react"
import React from "react"

const Title = (props: TextProps) => (
  <Text
    as="h1"
    fontSize={{ base: "5xl", sm: "6xl", md: "8xl" }}
    lineHeight={{ base: "3rem", sm: "4rem", md: "6rem" }}
    fontWeight="700"
    color="kaki.500"
    mb={8}
    {...props}
  />
)

export default Title
