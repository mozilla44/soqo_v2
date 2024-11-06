import { Box, Flex } from "@chakra-ui/react";
import Header from "components/Header";
import Layout from "components/Layout";
import LogosSlideshow from "components/LogosSlideshow";
import Map from "components/Map";
import Marker from "components/Marker";
import OurProjects from "components/OurProjects";
import Cover2 from "../components/ReverseCover_bak";
import Services from "components/Services";
import StatisticBanner from "components/StatisticBanner";
import client from "core/client";
import Head from "next/head";
import { Color } from "styles/theme";
import {
  IProject,
  ILogoCarrouselHomepageFields,
  IVerbatimHome,
  IVerbatimHomeFields,
} from "types/generated/contentful";
import VerbatimCards from "../components/VerbatimHome";

import partenariat from "../../public/assets/partenaires/partenariat.png";
import hand from "/public/assets/hand.jpg";
import Founders from "components/Founders";
import Footer from "components/Footer";
import Header2 from "components/AltHeader";
import AltCover from "components/AltCover_bak";
import Cover from "components/Cover";
import ReverseCover from "components/ReverseCover";
import AltReverseCover from "components/AltReverseCover";
import TeamComponent from "components/Founders";

interface HomeProps {
  projects: IProject[];
  logos: { name: string; imageUrl: string }[];
  services: any[];
  verbatimEntries: IVerbatimHome[];
}

const Home: React.FC<HomeProps> = ({
  projects,
  logos,
  services,
  verbatimEntries,
}) => (
  <Layout>
    <Head>
      <title>Accueil - Soqo</title>
    </Head>

    <Header
      headerBgColor={Color.BEIGE}
      linkColor={Color.KAKI}
      mobileLinkColor={Color.KAKI}
      logosrc={"/assets/logo.png"}
    />

    <Flex position="relative" flexDirection="column">
      {/*  <AltCover
        title={
          <>
            Nous sommes un
            <br />
            bureau de création
            <br />
            de <Marker color={Color.BLUE}>projets à impact</Marker>
          </>
        }
        content={`Nous accompagnons les entreprises\ndans leurs engagements responsables`}
        imageSrc={"/assets/hand2.jpg"}
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        borderColor={Color.KAKI}
        lineHeight={"110%"}
        marginTop={"1rem"}
        BtnMarginTop={"2rem"}
        buttonText={"Je souhaite en savoir plus"}
        buttonLink={"https://cal.com/victorcoeur"}
        btnBackground={Color.KAKI}
        btnColor={Color.BEIGE}
      /> */}
      <Cover
        btnText="Je souhaite en savoir plus"
        buttonLink={"https://cal.com/victorcoeur"}
        btnTextColor={Color.BEIGE}
        btnBgColor={Color.KAKI}
        btnMarginTop={"2rem"}
        borderColor={Color.KAKI}
        btnBorderColor=""
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        mobileHeight={"30vh"}
        imageSrc={"/assets/hand2.jpg"}
        title={
          <>
            Nous sommes un
            <br />
            bureau de création
            <br />
            de <Marker color={Color.BLUE}>projets à impact</Marker>
          </>
        }
        content={
          "Nous accompagnons les entreprises dans leurs engagements responsables."
        }
      />

      <LogosSlideshow items={logos} bgColor={Color.BEIGE} />

      <Services services={services} />

      <OurProjects />

      {/*  <Cover2
        title={
          <>
            Le Qlub, notre atout coeur chez Soqo* : un réseau
            d&apos;associations engagées à nos côtés
          </>
        }
        content={`Au fil des années, nous nous sommes constitués un réseau d'associations en France et à l'étranger. Une expertise du terrain qui nous permet de donner un impact concret à vos actions.`}
        imageSrc={"/assets/veggies.png"}
        buttonText="En savoir plus"
        buttonLink="/"
        btnColor={Color.KAKI}
        buttonBorderColor={Color.KAKI}
        btnBackground={Color.BLUE}
        bgColor={Color.BLUE}
        textColor={Color.KAKI}
        borderColor={""}
        lineHeight={"110%"}
        marginTop={"1rem"}
        BtnMarginTop={"2rem"}
      /> */}
     
       <AltReverseCover
        btnText="En savoir plus"
        buttonLink={"www.google.fr"}
        btnTextColor={Color.KAKI}
        btnBorderColor={Color.KAKI}
        btnBgColor="transparent"
        btnMarginTop={"2rem"}
        borderColor={Color.KAKI}
        bgColor={Color.BLUE}
        textColor={Color.KAKI}
        mobileHeight={"30vh"}
        imageSrc={"/assets/veggies.png"}
        title={
          <>
            Le Qlub, notre atout coeur chez Soqo* : un réseau
            d&apos;associations engagées à nos côtés
          </>
        }
        content={`Au fil des années, nous nous sommes constitués un réseau d'associations en France et à l'étranger. Une expertise du terrain qui nous permet de donner un impact concret à vos actions.`}
      />
      
      <Map />
      <StatisticBanner />
      {/* <VerbatimCards verbatimEntries={verbatimEntries} /> */}
      {/* <Founders /> */}
      <Founders/>
    </Flex>
    <Footer
      bgColor={Color.KAKI}
      textColor={Color.BEIGE}
      imageSrc={"/assets/tampon_creme.png"}
      dividerColor={Color.BEIGE}
      iconColor={""}
      iconBgColor={""}
    />
  </Layout>
);

export const getStaticProps = async () => {
  const entries = await client.getEntries();
  const projects = entries.items.filter(
    (item) => item.sys.contentType.sys.id === "project"
  );

  const logoEntries = await client.getEntries<ILogoCarrouselHomepageFields>({
    content_type: "logoCarrouselHomepage",
  });

  const serviceEntries = await client.getEntries<any>({
    content_type: "service",
  });

  const verbatimEntriesResponse = await client.getEntries<IVerbatimHomeFields>({
    content_type: "verbatimHome",
  });
  const verbatimEntries: IVerbatimHome[] =
    verbatimEntriesResponse.items as IVerbatimHome[];

  const services: any[] = serviceEntries.items
    .map((entry) => ({
      id: entry.sys.id,
      title: entry.fields.name,
    }))
    .reverse();

  const logos = logoEntries.items.map((entry) => ({
    name: entry.fields.name,
    imageUrl: entry.fields.logo.fields.file.url,
  }));

  return {
    props: {
      projects,
      logos,
      services,
      verbatimEntries,
    },
    revalidate: 10,
  };
};

export default Home;
