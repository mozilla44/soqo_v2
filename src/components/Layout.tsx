import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Script from "next/script"
import React from "react"
import Header from "./Header"

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const MotionBox = motion(Box)

const Layout: React.FC = ({ children }) => {
  console.log("Google Analytics ID:", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      {/* <Script
          src="//cdn.conveythis.com/javascript/conveythis.js?api_key=pub_fc8de8d7941e7002b92fea3c72ed815f"
          async
        ></Script>  */}
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
/* test */