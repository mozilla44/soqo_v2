import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import "focus-visible/dist/focus-visible"
import { AnimatePresence } from "framer-motion"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import "styles/globals.css"
import { sokoTheme } from "styles/theme"

type NextPageWithLayout = NextPage & {
  backgroundColor?: string
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => (
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
    <Global
      styles={{
        "html,body": {
          backgroundColor: Component.backgroundColor || "#EFE6D4",
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
)

export default MyApp
