import { Box, Flex } from "@chakra-ui/react";
import Cover from "components/Cover";
import Domains from "components/Expertise";
import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import LogosSlideshow from "components/LogosSlideshow";
import Marker from "components/Marker";
import client from "core/client";
import Head from "next/head";
import { Color } from "styles/theme";
import VerbatimCards from "../components/VerbatimImpact";
import Header2 from "components/AltHeader";

import {
  ILogosImpactFields,
  IVerbatimImpact,
  IVerbatimImpactFields,
} from "types/generated/contentful";
import Expertise from "components/Expertise";
import GreenPictures from "components/GreenPictures";
import AltCover from "components/AltCover_bak";

interface ProjectsProps {
  logos: { name: string; imageUrl: string }[];
  verbatimEntries: IVerbatimImpact[];
}

const projets_impact: React.FC<ProjectsProps> = ({
  logos,
  verbatimEntries,
}) => {
  const newsletterProps = {
    inputBorderColor: "red",
    inputColor: "black",
    btnBgColor: "blue",
    btnBorderColor: "red",
    placeholderColor: "#EFE6D4",
  };
  return (
    <Layout>
      <Head>
        <title>Projets à impact</title>
      </Head>

      <Header
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        logosrc={"/assets/logo.png"}
      />

      <Flex position="relative" flexDirection="column" bg={Color.BEIGE}>
        {/*   <Cover
          title={
            <>
              Transformer
              <br />
              <Marker color={Color.BLUE}>l&apos;engagement</Marker> en
              <br />
              <Marker color={Color.BLUE}>action</Marker>
            </>
          }
          content={`Découvrez comment nos stratégies\nsur mesure peuvent amplifier\nl’impact social et environnemental\nde votre entreprise.`}
          imageSrc={"/assets/hoola.png"}
          buttonText="Prendre rendez-vous avec Victor"
          buttonLink="/"
          btnColor={Color.BEIGE}
          btnBackground={Color.KAKI}
          bgColor={Color.BEIGE}
          textColor={Color.KAKI}
          borderColor={Color.KAKI}
          lineHeight="110%"
          marginTop="1rem"
          BtnMarginTop="2rem"
        /> */}
        {/*  <AltCover
          title= {
            <>
              Transformer
              <br />
              <Marker color={Color.BLUE}>l&apos;engagement</Marker> en
              <br />
              action
            </>
          }
          content={`Découvrez comment nos stratégies\nsur mesure peuvent amplifier\nl’impact social et environnemental\nde votre entreprise.`}
          imageSrc={"/assets/hoola.png"}
          bgColor={Color.BEIGE}
          textColor={Color.KAKI}
          borderColor={Color.KAKI}
          lineHeight={"110%"}
          marginTop={"1rem"}
          BtnMarginTop={"2rem"}
          buttonText={"Prendre rendez-vous avec Victor"}
          buttonLink={"https://cal.com/victorcoeur"}
          btnColor={Color.BEIGE}
          btnBackground={Color.KAKI}
        /> */}

        <Cover
          btnText={"Prendre rendez-vous avec Victor"}
          buttonLink={"https://cal.com/victorcoeur"}
          btnTextColor={Color.BEIGE}
          btnBgColor={Color.KAKI}
          btnMarginTop={"2rem"}
          borderColor={Color.KAKI}
          bgColor={Color.BEIGE}
          textColor={Color.KAKI}
          mobileHeight={"30vh"}
          btnBorderColor=""
          imageSrc={"/assets/hoola.png"}
          title={
            <>
              Transformer
              <br />
              <Marker color={Color.BLUE}>l&apos;engagement</Marker> en
              <br />
              action
            </>
          }
          content={`Découvrez comment nos stratégies\nsur mesure peuvent amplifier\nl’impact social et environnemental\nde votre entreprise.`}
        />
        <Expertise
          title={"Nos domaines d’intervention"}
          textItems={[
            "Définition de la stratégie d'engagement RSE",
            "Conception, mise en œuvre et suivi des projets",
            "Identification d'associations et partenaires locaux",
            "Engagement des collaborateurs",
            "Mesure de l’impact",
          ]}
          logosrc={"/assets/star_green.png"}
          bgColor={Color.BEIGE}
          color={Color.KAKI}
          bordercolor={Color.KAKI}
          textcolor={Color.KAKI}
        />
        <Box border={""}>
          <LogosSlideshow
            items={logos}
            bgColor={Color.BEIGE}
            borderBottom={"1px solid"}
          />
        </Box>
        <GreenPictures
          pic1={"/assets/pic4.jpg"}
          pic2={"/assets/pic5.jpg"}
          pic3={"/assets/pic6.jpg"}
          btnText={"Découvrir nos projets"}
          btnLink={"/projets"}
        />

        <VerbatimCards verbatimEntries={verbatimEntries} />
      </Flex>
      <Footer
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={""}
        iconBgColor={""}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const entries = await client.getEntries();

  const logoEntries = await client.getEntries<ILogosImpactFields>({
    content_type: "logosImpact",
  });

  const logos = logoEntries.items.map((entry) => ({
    name: entry.fields.name,
    imageUrl: entry.fields.image.fields.file.url,
  }));

  const verbatimEntriesResponse =
    await client.getEntries<IVerbatimImpactFields>({
      content_type: "verbatimImpact",
    });
  const verbatimEntries: IVerbatimImpact[] =
    verbatimEntriesResponse.items as IVerbatimImpact[];

  return {
    props: {
      logos,
      verbatimEntries,
    },
    revalidate: 10,
  };
};

export default projets_impact;
