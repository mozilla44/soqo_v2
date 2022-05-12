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
import { RoughNotation } from "react-rough-notation"
import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

export const HEADER_HEIGHT = "120px"

const MenuLink = (
  props: LinkProps & { href: string; isActive?: boolean; scroll?: boolean }
) => {
  const { children, isActive, scroll, ...rest } = props
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
      fontStyle={isActive ? "italic" : "initial"}
      fontSize="30px"
      {...rest}
    >
      <RoughNotation
        color="#FFE32D"
        show={(isActive && isVisible) || isHovered}
        type="highlight"
      >
        {children}
      </RoughNotation>
    </CustomLink>
  )
}

const Header = () => {
  const { pathname } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile: boolean | undefined = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Box height={HEADER_HEIGHT}>
      <Container
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        py={6}
        px={10}
        backgroundColor="transparent"
        maxWidth="container.xl"
      >
        <CustomLink href="/">
          <Image mt={2} alt="Soqo" width="120px" src="/assets/logo.png" />
        </CustomLink>
        {!isMobile && (
          <HStack spacing={10}>
            <MenuLink isActive={pathname === "/adn"} href="/adn">
              adn
            </MenuLink>
            <MenuLink
              isActive={pathname.startsWith("/projets")}
              href="/projets"
            >
              projets
            </MenuLink>
            <MenuLink isActive={pathname === "/services"} href="/services">
              services
            </MenuLink>
            <MenuLink isActive={pathname === "/ecosysteme"} href="/ecosysteme">
              écosystème
            </MenuLink>

            <MenuLink scroll={false} href="#parlons-nous">
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
                <MenuLink isActive={pathname === "/adn"} href="/adn">
                  adn
                </MenuLink>
                <MenuLink
                  isActive={pathname.startsWith("/projets")}
                  href="/projets"
                >
                  projets
                </MenuLink>
                <MenuLink isActive={pathname === "/services"} href="/services">
                  services
                </MenuLink>
                <MenuLink
                  isActive={pathname === "/ecosysteme"}
                  href="/ecosysteme"
                >
                  écosystème
                </MenuLink>

                <MenuLink scroll={false} href="#parlons-nous">
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
