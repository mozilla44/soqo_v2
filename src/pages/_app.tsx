import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import "styles/globals.css";
import { sokoTheme } from "styles/theme";

type NextPageWithLayout = NextPage & {
  backgroundColor?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  React.useLayoutEffect = React.useEffect;

  return (
    <ChakraProvider theme={sokoTheme}>
      <Head>
        <title>Soqo</title>
        <meta name="description" content="Soqo" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, min-scale=1, max-scale=1"
        />
       {/*  <script
          src="//cdn.conveythis.com/javascript/conveythis.js?api_key=pub_fc8de8d7941e7002b92fea3c72ed815f"
          async
        ></script>  */}
      </Head>
      <Global
        styles={{
          "html,body": {
            backgroundColor: Component.backgroundColor || "transparent",
          },
        }}
      />
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
};

export default MyApp;
