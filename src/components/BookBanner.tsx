import { Box, Text, Link } from "@chakra-ui/react";

const BookBanner = () => {
  return (
    <Box as="section" top="0" position="sticky" zIndex="10">
      <Box
        borderBottomWidth="1px"
        bg="#FFE32C"
        minHeight="3rem"
        w="100vw"
        display="flex"
        p="0.3rem"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="black" fontSize="1.2rem" fontFamily="Minion Pro">
          Notre Livre Blanc sur les relations associations-entreprises est
          disponible,&nbsp;
          <Link
            href="/livre-blanc"
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            cliquez-ci
          </Link>
          &nbsp;pour le télécharger !
        </Text>
      </Box>
    </Box>
  );
};

export default BookBanner;
