import { Text, TextProps } from "@chakra-ui/react"
import React from "react"

const Title = (props: TextProps) => (
  <Text
    as="h1"
    fontSize={{ base: "5xl", md: "6xl" }}
    lineHeight={{ base: "3rem", md: "4rem" }}
    fontWeight="700"
    color="kaki.500"
    mb={8}
    {...props}
  />
)

export default Title
