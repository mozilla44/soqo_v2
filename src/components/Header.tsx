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
    <CustomLink fontSize="xl" color={linkColor} {...rest}>
      {children}
    </CustomLink>
  );
};

interface DropdownMenuLinkProps {
  label: string;
  links: { label: string; href: string }[];
  linkColor?: string;
  dropdownBgColor?: string;
  dropdownTextColor?: string;
  dropdownHoverBgColor?: string;
  chevronIconColor?: string;
}

const DropdownMenuLink: React.FC<DropdownMenuLinkProps> = ({
  label,
  links,
  linkColor,
  dropdownBgColor = Color.BEIGE,
  dropdownTextColor = "#163A2C",
  dropdownHoverBgColor = Color.BLUE,
  chevronIconColor = "#163A2C",
}) => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
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
        <ChevronDownIcon ml="5px" color={chevronIconColor} />
      </Box>

      <Box
        position={isMobile ? "relative" : "absolute"}
        bg={dropdownBgColor}
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
            color={dropdownTextColor}
            display="block"
            p="10px"
            fontSize={""}
            _hover={{ bg: dropdownHoverBgColor, borderRadius: "md" }}
          >
            {link.label}
          </CustomLink>
        ))}
      </Box>
    </Box>
  );
};

interface MobileMenuContentProps {
  mobileLinkColor: string;
  pathname: string;
  dropdownBgColor?: string;
  dropdownTextColor?: string;
  dropdownHoverBgColor?: string;
  chevronIconColor?: string;
}

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({
  mobileLinkColor,
  pathname,
  dropdownBgColor,
  dropdownTextColor,
  dropdownHoverBgColor,
  chevronIconColor,
}) => (
  <VStack spacing={6}>
    <CustomLink href="/">
      <Image alt="Soqo" width="130px" src="/assets/logo.png" />
    </CustomLink>
    <DropdownMenuLink
      label="Services"
      linkColor={mobileLinkColor}
      chevronIconColor={chevronIconColor}
      links={[
        { label: "Projets à impact", href: "/services_projets" },
        { label: "Événements responsables", href: "/services_evenements" },
      ]}
      dropdownBgColor={dropdownBgColor}
      dropdownTextColor={dropdownTextColor}
      dropdownHoverBgColor={dropdownHoverBgColor}
    />
    <DropdownMenuLink
      label="Projets"
      linkColor={mobileLinkColor}
      chevronIconColor={chevronIconColor}
      links={[
        { label: "Projets à impact", href: "/projets" },
        { label: "Événements responsables", href: "/projets_evenements" },
      ]}
      dropdownBgColor={dropdownBgColor}
      dropdownTextColor={dropdownTextColor}
      dropdownHoverBgColor={dropdownHoverBgColor}
    />
    <MenuLink
      isActive={pathname === "/adn"}
      href="/adn"
      linkColor={mobileLinkColor}
    >
      Qui sommes-nous
    </MenuLink>
    <DropdownMenuLink
      label="Ressources"
      linkColor={mobileLinkColor}
      chevronIconColor={chevronIconColor}
      links={[
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
        { label: "Newsletter", href: "/newsletter" },
        { label: "Livre Blanc", href: "/livre-blanc" },
      ]}
      dropdownBgColor={dropdownBgColor}
      dropdownTextColor={dropdownTextColor}
      dropdownHoverBgColor={dropdownHoverBgColor}
    />
    <MenuLink scroll={false} href="/parlons_nous" linkColor={mobileLinkColor}>
      Contact
    </MenuLink>
    <CustomLink
      href="/le-qlub"
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
  mobileLinkColor?: string;
  dropdownBgColor?: string;
  dropdownTextColor?: string;
  dropdownHoverBgColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  hamburgerIconColor?: string;
  desktopChevronColor?: string; // New prop for desktop chevron color
  mobileChevronColor?: string; // New prop for mobile chevron color
  logosrc: string;
}

const Header: React.FC<HeaderProps> = ({
  headerBgColor = "transparent",
  linkColor = "initial",
  mobileLinkColor = "initial",
  dropdownBgColor = Color.BEIGE,
  dropdownTextColor = "#163A2C",
  dropdownHoverBgColor = Color.BLUE,
  buttonTextColor = Color.BEIGE,
  buttonBgColor = Color.KAKI,
  hamburgerIconColor = "black",
  desktopChevronColor = "#163A2C", // Default desktop chevron color
  mobileChevronColor = "#163A2C", // Default mobile chevron color
  logosrc,
}) => {
  const { pathname } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box height="6rem">
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        py={6}
        px={5}
        backgroundColor={headerBgColor}
        maxWidth="container.xl"
        height="100%"
        minW={"100%"}
        pr={0}
      >
        <CustomLink href="/">
          <Image
            mt={2}
            alt="Soqo"
            width="120px"
            src={logosrc}
            ml={{ md: "7rem", base: "20%" }}
          />
        </CustomLink>
        {/* Desktop Navigation */}
        <HStack
          spacing={10}
          display={{ base: "none", xl: "flex" }}
          ml="auto"
          pr={0}
        >
          <DropdownMenuLink
            label="Services"
            linkColor={linkColor}
            chevronIconColor={desktopChevronColor} // Use desktop chevron color
            links={[
              { label: "Projets à impact", href: "/services_projets" },
              {
                label: "Événements responsables",
                href: "/services_evenements",
              },
            ]}
            dropdownBgColor={dropdownBgColor}
            dropdownTextColor={dropdownTextColor}
            dropdownHoverBgColor={dropdownHoverBgColor}
          />
          <DropdownMenuLink
            label="Projets"
            linkColor={linkColor}
            chevronIconColor={desktopChevronColor} // Use desktop chevron color
            links={[
              { label: "Projets à impact", href: "/projets" },
              { label: "Événements responsables", href: "/projets_evenements" },
            ]}
            dropdownBgColor={dropdownBgColor}
            dropdownTextColor={dropdownTextColor}
            dropdownHoverBgColor={dropdownHoverBgColor}
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
            chevronIconColor={desktopChevronColor} // Use desktop chevron color
            links={[
              { label: "Blog", href: "/blog" },
              { label: "FAQ", href: "/faq" },
              { label: "Newsletter", href: "/newsletter" },
              { label: "Livre Blanc", href: "/livre-blanc" },
            ]}
            dropdownBgColor={dropdownBgColor}
            dropdownTextColor={dropdownTextColor}
            dropdownHoverBgColor={dropdownHoverBgColor}
          />
          <MenuLink scroll={false} href="/parlons_nous" linkColor={linkColor}>
            Contact
          </MenuLink>
          <CustomLink
            href="/le-qlub"
            px="2rem"
            py="0.3rem"
            fontSize="xl"
            fontFamily="Minion Pro"
            color={buttonTextColor}
            bg={buttonBgColor}
            borderRadius="md"
            _hover={{ textDecoration: "none", opacity: 0.9 }}
          >
            Le Qlub&#x2a;
          </CustomLink>
        </HStack>
        <IconButton
          pr={"2rem"}
          onClick={onOpen}
          fontSize="3xl"
          variant="ghost"
          display="block"
          visibility={{ base: "visible", xl: "hidden" }}
          aria-label="Menu"
          icon={<HamburgerIcon color={hamburgerIconColor} />}
          _hover={{ bg: "transparent" }} // Remove hover background
          _focus={{ boxShadow: "none" }}
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
            <DrawerCloseButton
              fontSize="xl"
              _hover={{ bg: "transparent" }} // Remove hover background
              _focus={{ boxShadow: "none" }}
            />
            <DrawerBody
              display="flex"
              pt="4rem"
              justifyContent="center"
              backgroundColor="beige.500"
              color="kaki.500"
            >
              <MobileMenuContent
                mobileLinkColor={mobileLinkColor}
                pathname={pathname}
                dropdownBgColor={dropdownBgColor}
                dropdownTextColor={dropdownTextColor}
                dropdownHoverBgColor={dropdownHoverBgColor}
                chevronIconColor={mobileChevronColor} // Use mobile chevron color
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Header;
