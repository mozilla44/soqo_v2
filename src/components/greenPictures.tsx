import { Box, Flex, Image, Button, Link } from "@chakra-ui/react";
import { Color } from "styles/theme";

interface GreenPicturesProps {
  pic1: string;
  pic2: string;
  pic3: string;
  btnText: string;
  btnLink: string;
}

const GreenPictures: React.FC<GreenPicturesProps> = ({
  pic1,
  pic2,
  pic3,
  btnText,
  btnLink,
}) => {
  return (
    <Flex
      mb={{ md: "8", base: "0" }}
      width="100vw"
      height={{ base: "auto", md: "80vh" }}
      justifyContent="center"
      alignItems="center"
      position="relative"
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        width="100%"
        height={{ base: "auto", md: "100%" }}
        justifyContent={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="stretch" // Ensure images stretch to full height
      >
        {/* Left Image */}
        <Box
          width={{ base: "100%", md: "33.33%" }}
          height={{ base: "auto", md: "100%" }}
          minHeight="100%" // Set minHeight for consistent rendering on Safari
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={pic1}
            alt="Project 1"
            objectFit="cover"
            width="100%"
            height="100%" // Match the container's height
          />
        </Box>

        {/* Middle Image with overlay button */}
        <Box
          width={{ base: "100%", md: "33.33%" }}
          height={{ base: "auto", md: "100%" }}
          minHeight="100%"
          position="relative"
          mb={{ base: 0, md: 0 }}
        >
          <Image
            src={pic2}
            alt="Project 2"
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <Button
            cursor="pointer"
            _hover={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              transform: "translate(-50%, calc(-50% - 0.09rem))",
              textDecoration: "none",
            }}
            position="absolute"
            fontSize={{ base: "md", md: "1.6rem" }}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            backgroundColor={Color.BEIGE}
            color="black"
            padding="2rem"
            borderRadius="10px"
          >
            <Link
              fontFamily="Minion Pro"
              color={Color.KAKI}
              fontWeight="400"
              href={btnLink}
              fontSize="2xl"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              {btnText}
            </Link>
          </Button>
        </Box>

        {/* Right Image */}
        <Box
          width={{ base: "100%", md: "33.33%" }}
          height={{ base: "auto", md: "100%" }}
          minHeight="100%"
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={pic3}
            alt="Project 3"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default GreenPictures;
