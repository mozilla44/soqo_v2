import React from "react";
import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import { LinkProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Color } from "styles/theme";

export const HEADER_HEIGHT = "120px";

interface MenuLinkProps extends LinkProps {
  href: string;
  isActive?: boolean;
  scroll?: boolean;
  linkColor?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  children,
  isActive,
  scroll,
  linkColor,
  ...rest
}) => {
  return (
    <CustomLink
      fontStyle={isActive ? "italic" : "initial"}
      fontSize="xl"
      color={linkColor}
      {...rest}
    >
      {children}
    </CustomLink>
  );
};

interface DropdownMenuLinkProps {
  label: string;
  links: { label: string; href: string }[];
  linkColor?: string;
}

const DropdownMenuLink: React.FC<DropdownMenuLinkProps> = ({
  label,
  links,
  linkColor,
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box position="relative" py="10px" role="group">
      <Box
        display="flex"
        alignItems="center"
        px="-10px"
        as={isMobile ? "button" : "div"}
        onClick={isMobile ? handleToggle : undefined}
        _hover={{ cursor: "pointer" }}
      >
        <Box fontSize="xl" color={linkColor}>
          {label}
        </Box>
        <ChevronDownIcon ml="5px" />
      </Box>

      <Box
        position={isMobile ? "relative" : "absolute"}
        bg={Color.BEIGE}
        mt="4px"
        shadow="md"
        borderRadius="md"
        zIndex="dropdown"
        width="14rem"
        display={isMobile ? (isOpen ? "block" : "none") : "none"}
        _groupHover={
          !isMobile
            ? {
                display: "block",
              }
            : undefined
        }
      >
        {links.map((link) => (
          <CustomLink
            key={link.href}
            href={link.href}
            display="block"
            p="10px"
            fontSize={"lg"}
            _hover={{ bg: Color.BLUE, borderRadius: "md" }}
          >
            {link.label}
          </CustomLink>
        ))}
      </Box>
    </Box>
  );
};

interface MobileMenuContentProps {
  linkColor: string;
  pathname: string;
}

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({
  linkColor,
  pathname,
}) => (
  <VStack spacing={6}>
    <CustomLink href="/">
      <Image alt="Soqo" width="130px" src="/assets/logo.png" />
    </CustomLink>
    <DropdownMenuLink
      label="Services"
      linkColor={linkColor}
      links={[
        { label: "Projets à impact", href: "/projets_impact" },
        { label: "Événements durables", href: "/events" },
      ]}
    />
    <DropdownMenuLink
      label="Projets"
      linkColor={linkColor}
      links={[
        { label: "Projets à impact", href: "/" },
        { label: "Événements responsables", href: "/" },
      ]}
    />
    <MenuLink isActive={pathname === "/adn"} href="/adn" linkColor={linkColor}>
      Qui sommes-nous
    </MenuLink>
    <DropdownMenuLink
      label="Ressources"
      linkColor={linkColor}
      links={[
        { label: "Projets à impact", href: "/projets_impact" },
        { label: "Événements responsables", href: "/events" },
      ]}
    />
    <MenuLink scroll={false} href="#parlons-nous" linkColor={linkColor}>
      Contact
    </MenuLink>
    <CustomLink
      href="http://leqlub.soqo.fr/"
      px="2rem"
      py="0.3rem"
      fontSize="xl"
      fontFamily="Minion Pro"
      color={Color.BEIGE}
      bg={Color.KAKI}
      borderRadius="md"
      _hover={{ textDecoration: "none", opacity: 0.9 }}
    >
      Le Qlub&#x2a;
    </CustomLink>
  </VStack>
);

interface HeaderProps {
  headerBgColor?: string;
  linkColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  headerBgColor = "transparent",
  linkColor = "initial",
}) => {
  const { pathname } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box height="6rem">
      <Container
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        py={6}
        /* px={10} */
        backgroundColor={headerBgColor}
        maxWidth="container.xl"
        height="100%"
        minW={"100%"}
      >
        <CustomLink href="/">
          <Image
            mt={2}
            alt="Soqo"
            width="120px"
            src="/assets/logo.png"
            ml={"7rem"}
          />
        </CustomLink>
        {/* Desktop Navigation */}
        <HStack spacing={10} display={{ base: "none", lg: "flex" }} ml={"20%"}>
          <DropdownMenuLink
            label="Services"
            linkColor={linkColor}
            links={[
              { label: "Projets à impact", href: "/projets_impact" },
              { label: "Événements durables", href: "/events" },
            ]}
          />
          <DropdownMenuLink
            label="Projets"
            linkColor={linkColor}
            links={[
              { label: "Projets à impact", href: "/" },
              { label: "Événements responsables", href: "/" },
            ]}
          />
          <MenuLink
            isActive={pathname === "/adn"}
            href="/adn"
            linkColor={linkColor}
          >
            Qui sommes-nous
          </MenuLink>
          <DropdownMenuLink
            label="Ressources"
            linkColor={linkColor}
            links={[
              { label: "Projets à impact", href: "/projets_impact" },
              { label: "Événements responsables", href: "/events" },
            ]}
          />
          <MenuLink scroll={false} href="#parlons-nous" linkColor={linkColor}>
            Contact
          </MenuLink>
          <CustomLink
            href="http://leqlub.soqo.fr/"
            px="2rem"
            py="0.3rem"
            fontSize="xl"
            fontFamily="Minion Pro"
            color={Color.BEIGE}
            bg={Color.KAKI}
            borderRadius="md"
            _hover={{ textDecoration: "none", opacity: 0.9 }}
          >
            Le Qlub&#x2a;
          </CustomLink>
        </HStack>
        {/* Mobile Menu Icon */}
        <IconButton
          onClick={onOpen}
          fontSize="3xl"
          variant="ghost"
          display="block"
          visibility={{ base: "visible", lg: "hidden" }}
          aria-label="Menu"
          icon={<HamburgerIcon />}
        />
        {/* Mobile Drawer */}
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
              {/* Mobile Menu Content */}
              <MobileMenuContent linkColor={linkColor} pathname={pathname} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
      {/* Hidden Mobile Menu Content for ConveyThis =>> STILL NOT WORKING */}
      <Box
        display={{ base: "none", lg: "block" }}
        style={{
          position: "absolute",
          left: "-9999px",
          height: 0,
          overflow: "hidden",
        }}
      >
        {/* Render all mobile dropdown links here to ensure translation =>> STILL NOT WORKING */}
        <VStack spacing={6} display="none" aria-hidden="true">
          <DropdownMenuLink
            label="Services"
            linkColor={linkColor}
            links={[
              { label: "Projets à impact", href: "/projets_impact" },
              { label: "Événements durables", href: "/events" },
            ]}
          />
          <DropdownMenuLink
            label="Projets"
            linkColor={linkColor}
            links={[
              { label: "Projets à impact", href: "/" },
              { label: "Événements responsables", href: "/" },
            ]}
          />
          <DropdownMenuLink
            label="Ressources"
            linkColor={linkColor}
            links={[
              { label: "Projets à impact", href: "/projets_impact" },
              { label: "Événements responsables", href: "/events" },
            ]}
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Header;
