import { Box, Flex, Heading, Image, Link, Text, Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Marker from "./Marker";

interface CoverProps {
  title: ReactNode;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  btnColor?: string;
  btnBackground?: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  buttonBorderColor?: string;
  lineHeight: string;
  marginTop: string;
  BtnMarginTop: string;
  imageBoxSize?: string;
  imagePaddingTop?: string;
  imageBorder?: string;
  titleFontSize?: { base: string; md: string }; // New Prop for Title Font Size
  contentFontSize?: { base: string; md: string }; // New Prop for Content Font Size
}

const Cover2: React.FC<CoverProps> = ({
  title,
  content,
  buttonText,
  buttonLink,
  imageSrc,
  btnBackground,
  btnColor,
  bgColor,
  textColor,
  borderColor,
  buttonBorderColor = "transparent",
  lineHeight,
  marginTop,
  BtnMarginTop,
  imageBoxSize = "100%",
  imagePaddingTop = "0",
  imageBorder = "none",
  titleFontSize = { base: "4xl", md: "6xl" }, // Default values
  contentFontSize = { base: "xl", md: "3xl" }, // Default values
}) => {
  return (
    <Flex
      overflow="hidden"
      position="relative"
      backgroundColor={bgColor}
      flex="1"
      flexDirection={{ base: "column", md: "row" }}
      marginX="auto"
      width={{ base: "100%", md: "100vw" }}
      justifyContent="space-between"
      maxHeight={{ base: "auto", md: "80vh" }}
      borderBottom={`1px solid ${borderColor}`}
      borderTop={`1px solid ${borderColor}`}
    >
      <Flex
        justifyContent="center"
        flexDirection="column"
        whiteSpace="pre-wrap"
        width={{ base: "100%", md: "50%" }}
        mr={{ base: 0, md: 4 }}
        mt={{ base: 4, md: 0 }}
        p={{ base: 4, md: 8 }}
      >
        <Box
          maxWidth="40rem"
          fontSize={{ base: "24px", md: "3vw", xl: "40px" }}
          lineHeight={lineHeight}
          mb={10}
          mx={{ base: 4, md: "6rem" }}
        >
          <Heading
            as={"h1"}
            fontFamily={"Minion Pro"}
            fontWeight={"thin"}
            fontSize={titleFontSize}
            lineHeight={lineHeight}
            color={textColor}
            width={{ md: "36rem", base: "80%" }}
          >
            {title}
          </Heading>
          <Text
            marginTop={marginTop}
            fontSize={contentFontSize}
            lineHeight={lineHeight}
            color={textColor}
            width={{ md: "35rem", base: "100%" }}
          >
            {content}
          </Text>
          {buttonText && buttonLink && (
            <Button
              cursor={"pointer"}
              _hover={{
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                transform: "translateY(-0.09rem)",
              }}
              fontSize={{ base: "md", md: "1.6rem" }}
              color={btnColor}
              backgroundColor={btnBackground}
              fontFamily="Minion Pro"
              mt={BtnMarginTop}
              fontWeight="500"
              padding={{ base: "1rem", md: "1.5rem" }}
              border={`1px solid ${buttonBorderColor}`}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href={buttonLink}
              >
                {buttonText}
              </Link>
            </Button>
          )}
        </Box>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        width={{ base: "100%", md: "45%" }}
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          alt="Soqo"
          placeholder="blur"
          boxSize={imageBoxSize}
          src={imageSrc}
          objectFit="cover"
          paddingTop={imagePaddingTop}
          borderLeft={{ base: "none", md: `1px solid ${borderColor}` }}
          border={imageBorder}
        />
      </Flex>
    </Flex>
  );
};

export default Cover2;
