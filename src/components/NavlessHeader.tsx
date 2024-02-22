import { Box, Container, HStack ,Image} from "@chakra-ui/react";
import CustomLink from "./CustomLink";

const NavlessHeader = () => {
  return (
    <Box  /* border="3px solid red"  */ h="5rem" textAlign="center" /* maxWidth="%" */ margin="auto" display="flex" alignItems="center"  >
    <CustomLink href="/">
      <Image alt="Soqo" width="120px"  marginLeft="9rem "src="/assets/logo.png" />
    </CustomLink>
    </Box>
  );
};

export default NavlessHeader;
