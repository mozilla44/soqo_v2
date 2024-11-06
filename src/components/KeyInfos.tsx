import { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Color } from "styles/theme";

export const KeyInfos = (props: BoxProps) => {
  const { children, ...rest } = props;
  return (
    <Box
      fontWeight=" bold"
      color={Color.KAKI}
      p="0.3rem"
      alignItems=" center"
      backgroundColor={Color.BEIGE}
      borderRadius="10px"
    >
      {children}
    </Box>
  );
};
