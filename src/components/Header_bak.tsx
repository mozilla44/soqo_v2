import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import React, { useState } from "react"
import CustomLink from "./CustomLink"
import { LinkProps } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { Color } from "styles/theme"
import Marker from "./Marker"

export const HEADER_HEIGHT = "120px"

const MenuLink = (
  props: LinkProps & { href: string; isActive?: boolean; scroll?: boolean; linkColor?: string }
) => {
  const { children, isActive, scroll, linkColor, ...rest } = props
  const [isVisible, setVisible] = useState(false)
  const [isHovered, setHovered] = useState(false)
  const isMobile: boolean | undefined = useBreakpointValue({
    base: true,
    lg: false,
  })

  setTimeout(
    () => {
      setVisible(true)
    },
    isMobile ? 500 : 100
  )

  return (
    <CustomLink
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      fontStyle={isActive ? "normal" : "initial"}
      fontSize="30px"
      color={linkColor}
      {...rest}
    >
      <Marker
        color={Color.YELLOW}
        isVisible={(isActive && isVisible) || isHovered}
      >
        {children}
      </Marker>
    </CustomLink>
  )
}

const Header = ({ headerBgColor = "transparent", linkColor = "initial" }) => {
  const { pathname } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile: boolean | undefined = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Box height="6rem">
      <Container
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        py={6}
        px={10}
        backgroundColor={headerBgColor}
        maxWidth="container.xl"
        height="100%"
        minW={"100%"}
      >
        <CustomLink href="/">
          <Image mt={2} alt="Soqo" width="120px" src="/assets/logo.png" ml={"5.5rem"} />
        </CustomLink>
        {!isMobile && (
          <HStack spacing={10}>
            <MenuLink isActive={pathname === "/adn"} href="/adn" linkColor={linkColor}>
              adn
            </MenuLink>
            <MenuLink
              isActive={pathname.startsWith("/projets")}
              href="/projets"
              linkColor={linkColor}
            >
              projets
            </MenuLink>
            <MenuLink isActive={pathname === "/services"} href="/services" linkColor={linkColor}>
              services
            </MenuLink>
            <MenuLink isActive={pathname === "/ecosysteme"} href="/ecosysteme" linkColor={linkColor}>
              écosystème
            </MenuLink>

            <MenuLink scroll={false} href="#parlons-nous" linkColor={linkColor}>
              parlons-nous
            </MenuLink>
          </HStack>
        )}
        <IconButton
          onClick={onOpen}
          fontSize="3xl"
          variant="ghost"
          display={{ base: "block", lg: "none" }}
          aria-label="Menu"
          icon={<HamburgerIcon />}
        />
        <Drawer
          returnFocusOnClose={false}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton fontSize="xl" />
            <DrawerBody
              display="flex"
              pt="4rem"
              justifyContent="center"
              backgroundColor="beige.500"
              color="kaki.500"
            >
              <VStack spacing={6}>
                <CustomLink href="/">
                  <Image alt="Soqo" width="130px" src="/assets/logo.png" />
                </CustomLink>
                <MenuLink isActive={pathname === "/adn"} href="/adn" linkColor={linkColor}>
                  adn
                </MenuLink>
                <MenuLink
                  isActive={pathname.startsWith("/projets")}
                  href="/projets"
                  linkColor={linkColor}
                >
                  projets
                </MenuLink>
                <MenuLink isActive={pathname === "/services"} href="/services" linkColor={linkColor}>
                  services
                </MenuLink>
                <MenuLink isActive={pathname === "/ecosysteme"} href="/ecosysteme" linkColor={linkColor}>
                  écosystème
                </MenuLink>

                <MenuLink scroll={false} href="#parlons-nous" linkColor={linkColor}>
                  parlons-nous
                </MenuLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  )
}

export default Header
