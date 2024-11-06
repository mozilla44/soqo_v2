import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Stack,
  Image,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import CustomLink from "./CustomLink";
import { Color } from "styles/theme";

interface HeaderProps {
  headerBgColor: string;
  topLinkColor: string;
  logosrc: string;
  btnBackgroundColor: string;
  btnTextColor: string;
  burgerColor: string;
  chevronColor: string;
}

const Header: React.FC<HeaderProps> = ({
  headerBgColor,
  topLinkColor,
  logosrc,
  btnTextColor,
  btnBackgroundColor,
  burgerColor,
  chevronColor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // Adjust delay time as needed
  };

  const links = [
    {
      label: "Services",
      subLinks: [
        { label: "Projets à impact", href: "/services_projets" },
        { label: "Evénements durables", href: "/services_evenements" },
      ],
    },
    {
      label: "Projets",
      subLinks: [
        { label: "Projets à impact", href: "/projets" },
        { label: "Evénements responsables", href: "/projets_evenements" },
      ],
    },
    {
      label: "Qui sommes-nous",
      href: "/qui-sommes-nous",
      subLinks: [],
    },
    {
      label: "Resources",
      subLinks: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Faq", href: "/resources/faq" },
        { label: "Newsletter", href: "/resources/newsletter" },
        { label: "Livre Blanc", href: "/resources/livre-blanc" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      subLinks: [],
    },
  ];

  return (
    <Box bg={headerBgColor} px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx={0}>
        <Box
          display={{ base: "flex", md: "none" }}
          flexGrow={1}
          justifyContent="center"
        >
          <CustomLink href="/">
            <Image alt="Soqo" width="130px" src={logosrc} />
          </CustomLink>
        </Box>

        <Box ml={"7%"} display={{ base: "none", md: "block" }}>
          <CustomLink href="/">
            <Image alt="Soqo" width="130px" src={logosrc} />
          </CustomLink>
        </Box>

        <Flex
          pr={"2.8%"}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          gap={5}
        >
          {links.map((link) =>
            link.subLinks.length > 0 ? (
              <Box
                key={link.label}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
                position="relative"
              >
                <Menu isOpen={openMenu === link.label}>
                  <MenuButton
                    as={Button}
                    variant="link"
                    fontSize="xl"
                    fontFamily="Minion Pro"
                    fontWeight="thin"
                    color={topLinkColor}
                    rightIcon={
                      <ChevronDownIcon
                        display={{ base: "none", md: "inline" }}
                      />
                    }
                    mx={2}
                    _hover={{ textDecoration: "none" }}
                  >
                    {link.label}
                  </MenuButton>
                  <MenuList bg={Color.BEIGE} py={0}>
                    {link.subLinks.map((subLink) => (
                      <MenuItem
                        key={subLink.label}
                        fontWeight="thin"
                        color={Color.KAKI}
                        _hover={{ bg: "#E3F1FD", color: "#163A2C" }}
                        px={6}
                      >
                        <Link
                          href={subLink.href}
                          fontWeight="thin"
                          _hover={{ textDecoration: "none" }}
                          color={Color.KAKI}
                        >
                          {subLink.label}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                fontSize="xl"
                fontFamily="Minion Pro"
                fontWeight="thin"
                color={topLinkColor}
                _hover={{ textDecoration: "none", opacity: 0.8 }}
                mx={2}
              >
                {link.label}
              </Link>
            )
          )}

          <CustomLink
            href="http://leqlub.soqo.fr/"
            px="2rem"
            py="0.3rem"
            fontSize="xl"
            fontFamily="Minion Pro"
            fontWeight="thin"
            color={btnTextColor}
            bg={btnBackgroundColor}
            borderRadius="md"
            _hover={{ textDecoration: "none", opacity: 0.9 }}
            mx={2}
          >
            Le Qlub&#x2a;
          </CustomLink>
        </Flex>

        <IconButton
          bgColor={"transparent"}
          color={burgerColor}
          mr={"2.8%"}
          fontSize="3xl"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay 
          style={{
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)', // for Safari support
          }}
        />
        <DrawerContent bg={Color.BEIGE}>
          <DrawerCloseButton fontSize="lg" mt={1} />

          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent="center"
            mt={"4rem"}
          >
            <CustomLink href="/">
              <Image alt="Soqo" width="8rem" height="auto" src={logosrc} />
            </CustomLink>
          </Box>

          <DrawerBody>
            <Stack
              spacing={4}
              mt={4}
              bgColor={Color.BEIGE}
              fontFamily={"Minion Pro"}
            >
              {links.map((link) => (
                <Box key={link.label}>
                  <Box
                    fontSize={"xl"}
                    fontWeight="thin"
                    py={2}
                    display="flex"
                    alignItems="center"
                  >
                    {link.href ? (
                      <Link
                        fontSize={"2xl"}
                        href={link.href}
                        fontWeight="thin"
                        _hover={{ textDecoration: "none" }}
                        color={Color.KAKI}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Box fontSize={"2xl"} color={Color.KAKI}>
                        {link.label}
                      </Box>
                    )}
                    {link.subLinks.length > 0 && (
                      <ChevronDownIcon
                        ml={2}
                        display={{ base: "none", md: "inline" }}
                      />
                    )}
                  </Box>
                  {link.subLinks.length > 0 && (
                    <Stack pl={4} spacing={2}>
                      {link.subLinks.map((subLink) => (
                        <Link
                          fontSize={"lg"}
                          key={subLink.label}
                          href={subLink.href}
                          fontWeight="thin"
                          _hover={{ textDecoration: "none" }}
                          color={Color.KAKI}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </Stack>
                  )}
                </Box>
              ))}
              <Box display="flex" justifyContent="center">
                <Button colorScheme="green" width="50%" variant="solid">
                  Le Qlub*
                </Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
