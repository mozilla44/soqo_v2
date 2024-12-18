import React, { ReactNode } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

interface TestProps {
  buttonLink: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  btnTextColor?: string;
  btnBgColor?: string;
  btnMarginTop?: string;
  imageSrc: string;
  title: ReactNode;
  content: string;
  btnText?: string;
  mobileHeight?: string;
  btnBorderColor:string
}

const ReverseCover: React.FC<TestProps> = ({
  buttonLink,
  borderColor,
  bgColor,
  textColor,
  btnBgColor,
  btnTextColor,
  btnMarginTop,
  imageSrc,
  title,
  content,
  btnText,
  mobileHeight,
  btnBorderColor,

}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isButtonVisible =
    buttonLink && btnTextColor && btnBgColor && btnMarginTop && btnText;

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight={{ base: mobileHeight ? mobileHeight : "80vh", md: "auto" }}
      borderBottom={`1px solid ${borderColor}`}
      borderTop={`1px solid ${borderColor}`}
    >
      {/* Left side with image */}
      <Box
        flex="1.1" // Increase this value to make the image part wider
        display={{ base: "none", md: "block" }} // Hide on mobile, show on desktop
        bgImage={`url(${imageSrc})`}
        bgSize="cover"
        bgPosition="center"
        borderRight={`1px solid ${borderColor}`}
      />

      {/* Right side with text */}
      <Box
        bgColor={bgColor}
        flex="1.1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingX={{md:"4.5rem", base: "3rem" }}
        paddingY="5rem"
      >
        <Heading
          as="h2"
          fontFamily="Minion Pro"
          fontWeight="thin"
          fontSize={{ base: "4xl", md: "5xl" }}
          mb={4}
          color={textColor}
          textAlign="left"
          ml={{ md: "8%", base: "0%" }}
          width={{ md: "70%", base: "100%" }}
          lineHeight="110%"
        >
          {title}
        </Heading>
        <Text
          color={textColor}
          textAlign="left"
          ml={{ md: "8%", base: "0%" }}
          fontSize={{ base: "2xl", md: "2xl" }}
          width={{ md: "70%", base: "100%" }}
          lineHeight="110%"
        >
          {content}
        </Text>
        {isButtonVisible && (
         <Button
         as={"a"}
         ml={{md:"8%", base:""}}
         cursor="pointer"
         _hover={{
           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
           transform: "translateY(-0.09rem)",
         }}
         
         fontSize={{ base: "md", md: "1.6rem" }}
         color={btnTextColor}
         backgroundColor={btnBgColor}
         fontFamily="Minion Pro"
         mt={btnMarginTop}
         fontWeight="500"
         padding={{ base: "", md: "1.5rem" }}
         border={`1px solid ${btnBorderColor || 'transparent'}`}
         width="fit-content"
         href='/le-qlub'
       >
         {btnText}
       </Button>
        )}
      </Box>

      {/* Modal for additional information */}
     
    </Box>
  );
};

export default ReverseCover;
