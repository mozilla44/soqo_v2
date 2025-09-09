import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Weglot) {
      // Restore last chosen language from localStorage
      const lang = localStorage.getItem("wlang");
      if (lang) {
        (window as any).Weglot.switchTo(lang);
      }

      // Keep `wlang` in sync when the user changes language
      (window as any).Weglot.on("languageChanged", (newLang: string) => {
        localStorage.setItem("wlang", newLang);
      });
    }
  }, []);

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

      {/* ✅ Weglot Script (initialize only once) */}
      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Weglot) {
            if (!(window as any).Weglot.initialized) {
              (window as any).Weglot.initialize({
                api_key: "wg_d7a5b927790fbf4e341f54e26afdfd574",
              });
              (window as any).Weglot.initialized = true;
            }
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
