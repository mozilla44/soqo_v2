import { Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"

const CustomLink = (props: LinkProps & { href: string }) => {
  const { children, href, ...rest } = props

  return (
    <NextLink passHref href={href}>
      <ChakraLink _hover={{ textDecoration: "none" }} zIndex={1} {...rest}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default CustomLink
