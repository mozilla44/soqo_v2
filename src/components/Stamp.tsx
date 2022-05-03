import { Box, BoxProps } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import stamp from "../../public/assets/tampon.png"

const Stamp = (props: BoxProps) => (
  <Box zIndex={100} position="absolute" bottom={0} right="-5rem" {...props}>
    <Image
      src={stamp}
      width="140px"
      height="140px"
      alt="Stamp"
      placeholder="blur"
    />
  </Box>
)

export default Stamp
