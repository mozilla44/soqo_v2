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
  // Prevent SSR warnings with useLayoutEffect
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
      </Head>

      {/* ✅ Weglot Script */}
      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Weglot) {
            (window as any).Weglot.initialize({
              api_key: "wg_d7a5b927790fbf4e341f54e26afdfd574",
            });
          }
        }}
      />

      <Global
        styles={{
          "html, body": {
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

