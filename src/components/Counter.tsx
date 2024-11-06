import { Text } from "@chakra-ui/react"
import React from "react"
import SunIcon from "./SunIcon"

const Counter = () => {
  return (
    <>
      <SunIcon />{" "}
      <Text ml={2} mt={1}>
        Site éco conçu
      </Text>
    </>
  )
}

export default Counter
