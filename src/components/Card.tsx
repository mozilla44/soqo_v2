import { Box, BoxProps, Text, TextProps } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import { Color } from "styles/theme";

export const Card = (props: BoxProps) => {
  const { children, ...rest } = props;

  return (
    <Box
      width={{ base: "90%", sm: "23%" }}
      height="15rem"
      display="flex"
      flexDirection={{ base: "column" }}
      alignItems="center"
      justifyContent="center"
      backgroundColor={Color.BEIGE}
      p={{ base: "10%", sm: "2%" }}
      borderRadius="10px"
      fontWeight="bold"
      transitionDuration="300ms"
      boxShadow="0.2rem 0.2rem 1rem grey"
    >
      {children}
    </Box>
  );
};

export const CardText = (props: TextProps) => {
  const { children, ...rest } = props;
  return (
    <Text
      fontSize="xl"
      height="100%"
      display="flex"
      alignItems="center"
      textAlign="center"
    >
      {children}
    </Text>
  );
};

export const Emoji = (props: TextProps) => {
  const { children, ...rest } = props;
  return (
    <Text fontSize="xl" fontWeight="bold">
      {children}
    </Text>
  );
};
