import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import stamp from "../../public/assets/tampon.png";

const Stamp: React.FC<BoxProps> = (props) => (
  <Box
    pointerEvents="none"
    zIndex={100}
    position="absolute"
    top={"90%"}
    left="50%"
    transform="translateX(-50%)" 
    {...props}
  >
    <Image
      src={"/public/assets/tampon.png"}
      width={140} 
      height={140} 
      alt="Stamp"
    />
  </Box>
);

export default Stamp;
