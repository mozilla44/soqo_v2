import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import Header from "./Header"

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const MotionBox = motion(Box)

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MotionBox
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ type: "linear" }}
      >
        {children}
      </MotionBox>
    </>
  )
}

export default Layout
