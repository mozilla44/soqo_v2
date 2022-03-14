import { Box, LinkProps } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import CustomLink from "./CustomLink"

const Button = (props: LinkProps & { hoverColor?: string; href: string }) => {
  const [isHover, setHover] = useState(false)
  const { children, hoverColor, ...rest } = props

  return (
    <CustomLink
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      overflow="hidden"
      position="relative"
      display="inline-flex"
      justifyContent="space-between"
      alignItems="center"
      fontFamily="arial"
      backgroundColor="transparent"
      borderRadius="full"
      border="3px solid"
      borderColor="currentColor"
      color="currentColor"
      fontSize="3xl"
      px={9}
      _before={{
        content: `""`,
        position: "absolute",
        height: isHover ? "100%" : "0%",
        zIndex: 1,
        width: "100%",
        bottom: 0,
        left: 0,
        right: 0,
        transition: "all 0.4s ease",
        backgroundColor: "currentColor",
      }}
      {...rest}
    >
      <Box
        pointerEvents="none"
        transition="all 0.4s ease"
        color={isHover ? hoverColor : "currentColor"}
        zIndex={2}
      >
        {children}
      </Box>
      <Box
        pointerEvents="none"
        transition="all 0.4s ease"
        color={isHover ? hoverColor : "currentColor"}
        zIndex={2}
        as={BsArrowRight}
        ml={2}
        mt={1}
      />
    </CustomLink>
  )
}

export default Button
