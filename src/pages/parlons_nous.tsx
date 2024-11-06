import { Box, Link, Text } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { useEffect } from "react";
import { Color } from "styles/theme";
import Header2 from "components/AltHeader";

const Newsletter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        mobileLinkColor={Color.KAKI}
        logosrc={"/assets/logo.png"}
      />

      <Box
        bg={Color.BEIGE}
        height={"100vh"}
        pt={"3rem"}
        borderTop={"1px solid"}
      >
        <Text
          ml={{md:"10%", base:"5%"}}
          fontSize={{md:"5xl", base:"3xl"}}
          color={Color.KAKI}
          fontFamily={"Minion Pro"}
          lineHeight={"110%"}
        >
          Vous êtes au bon endroit 💌
        </Text>
        <Text
        mt={"2rem"}
          ml={{md:"10%", base:"5%"}}
          width={{md:"40%", base:""}}
          fontSize={{md:"3xl", base:"xl"}}
          color={Color.KAKI}
          fontFamily={"Minion Pro"}
          lineHeight={"110%"}
        >
          Pour lancer un projet, refaire le monde, ou tout simplement discuter
          autour d’un café, nous vous invitons à compléter le formulaire ci-dessous.
        </Text>

        <Box pt={"2rem"} width={"80vw"} margin="auto">
          <iframe
            data-tally-src="https://tally.so/embed/3yE7O0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="310"
            frameBorder="0"
            title="Tally Form"
          ></iframe>
        </Box>
      </Box>
      <Footer
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={""}
        iconBgColor={""}
      />
    </>
  );
};

export default Newsletter;
