import React from "react";
import {
  Box,
  Collapse,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import AltCover from "components/AltCover_bak";
import Cover from "components/Cover";
import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import LogosSlideshow from "components/LogosSlideshow";
import Marker from "components/Marker";
import ReverseCover from "components/ReverseCover";
import VerbatimCards from "components/VerbatimQlub";
import client from "core/client";
import { BsArrowDown } from "react-icons/bs";
import { Color } from "styles/theme";
const titleProps = { fontSize: "xl" };
import {
  IVerbatimQlubFields,
  IVerbatimQlub,
  IVerbatimImpactFields,
  IVerbatimImpact,
  ICarrouseQlub,
  ICarrouseQlubFields,
} from "types/generated/contentful";
import CoverNoModal from "components/CoverNoModal";

interface QlubProps {
  logos: { name: string; imageUrl: string }[];
  verbatimEntries: IVerbatimImpact[];
}

const Item: React.FC<{ label: string }> = ({ label, children }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      cursor="pointer"
      onClick={onToggle}
      py={4}
      width="100%"
      borderBottom="3px solid"
      borderBottomColor="kaki.500"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text maxWidth="90%" fontSize={{ base: "2xl", md: "3xl" }}> {/* Reduced font sizes */}
          {label}
        </Text>
        <Box
          fontSize="4xl"
          as={BsArrowDown}
          transform={isOpen ? "rotate(180deg)" : ""}
          transition="transform 0.4s"
        />
      </Flex>
      <Collapse in={isOpen}>
        <Box borderRadius="lg" p={6} backgroundColor={Color.BLUE} my={6}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

const Qlub: React.FC<QlubProps> = ({ logos, verbatimEntries }) => {
  return (
    <Layout>
      <Box backgroundColor={Color.BLUE}>
        <Header
          headerBgColor={Color.BLUE}
          mobileLinkColor={Color.KAKI}
          logosrc={"/assets/logo.png"}
        />

        {/* <Cover
          btnText={"Découvrir le Qlub"}
          buttonLink={"https://cal.com/laura_duboc"}
          btnTextColor={Color.BEIGE}
          btnBgColor={Color.KAKI}
          btnMarginTop={"2rem"}
          borderColor={Color.KAKI}
          bgColor={Color.BLUE}
          textColor={Color.KAKI}
          mobileHeight={"30vh"}
          btnBorderColor=""
          imageSrc={"/assets/soil.png"}
          title={"Un réseau d’associations engagées à nos côtés"}
          content={
            "Le Qlub, reflet de notre travail de terrain, fédère des associations engagées pour répondre aux besoins sociaux et environnementaux actuels."
          }
        /> */}
        <CoverNoModal
          btnText={"Découvrir le Qlub"}
          buttonLink={"https://leqlub.soqo.fr/"}
          btnTextColor={Color.BEIGE}
          btnBgColor={Color.KAKI}
          btnMarginTop={"2rem"}
          borderColor={Color.KAKI}
          bgColor={Color.BLUE}
          textColor={Color.KAKI}
          mobileHeight={"30vh"}
          btnBorderColor=""
          imageSrc={"/assets/soil.png"}
          title={"Un réseau d’associations engagées à nos côtés"}
          content={
            "Le Qlub, reflet de notre travail de terrain, fédère des associations engagées pour répondre aux besoins sociaux et environnementaux actuels."
          }
        />


        <LogosSlideshow items={logos} bgColor={Color.BEIGE} />

        <ReverseCover
          btnText={"Prendre rendez-vous avec Laura"}
          buttonLink={"https://cal.com/laura-duboc"}
          btnTextColor={Color.KAKI}
          btnBorderColor={Color.KAKI}
          btnBgColor='transparent'
          btnMarginTop={"2rem"}
          borderColor={Color.KAKI}
          bgColor={Color.BLUE}
          textColor={Color.KAKI}
          mobileHeight={"30vh"}
          imageSrc={"/assets/basket_fauteuil.jpg"}
          title={"Le Qlub, notre atout coeur chez Soqo*"}
          content={
            "Parce que soutenir l’écosystème associatif est au cœur de nos actions, nous vous connectons à notre réseau d'associations lorsque cela est pertinent. Une manière d’accompagner leur développement tout en maximisant l’impact de vos projets."
          }
        />

<Text
  fontFamily="Minion Pro"
  fontSize="4xl"
  mt="4rem"
  px={{ base: "7", md: "6" }} 
  mx="auto" // Centers the text horizontally
  maxWidth={{ base: "90%", md: "70%" }} 
>
  Pourquoi les associations rejoignent Le Qlub ?
</Text>

        <VStack
          width={"80%"}
          mt={10}
          mx={"auto"}
          bgColor={Color.BLUE}
          mb={"4rem"}
        >
          <Item label="1. &nbsp;&nbsp;Intégrer une communauté engagée">
            <Text {...titleProps}>
              En devenant Membre du Qlub, les associations s&apos;engagent dans
              un réseau de soutien mutuel, partageant bonnes pratiques et
              collaborant sur des projets à impact.
            </Text>
          </Item>
          <Item label="2. &nbsp;&nbsp;Développer leurs compétences">
            <Text {...titleProps}>
              Grâce à une boîte à outils complète et de nombreuses ressources,
              les associations peuvent renforcer leurs compétences, notamment en
              matière de recherche de mécénat.
            </Text>
          </Item>
          <Item label="3. &nbsp;&nbsp;S’appuyer sur des experts ">
            <Text {...titleProps}>
              Les membres du Qlub peuvent solliciter les experts Soqo* pour les
              accompagner dans la mise en place de leurs projets avec des
              entreprises. Nous avons aussi développé la première intelligence
              artificielle experte du monde associatif – un assistant 2.0 – qui
              aide les associations à traiter efficacement les dossiers
              complexes.
            </Text>
          </Item>
          <Item label="4. &nbsp;&nbsp;Gagner en visibilité auprès des entreprises ">
            <Text {...titleProps}>
              Le Qlub offre aux associations des opportunités pour rencontrer
              des entreprises lors d’événements, webinaires et autres occasions,
              afin de développer leur réseau et accroître leur visibilité.
            </Text>
          </Item>
        </VStack>
        <VerbatimCards verbatimEntries={verbatimEntries} />

        <Footer
          bgColor={Color.BLUE}
          textColor={Color.KAKI}
          imageSrc={"/assets/tampon_vert.png"}
          dividerColor={Color.KAKI}
          iconColor={""}
          iconBgColor={""}
        />
      </Box>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const entries = await client.getEntries();

  const logoEntries = await client.getEntries<ICarrouseQlubFields>({
    content_type: "carrouseQlub",
  });

  const logos = logoEntries.items.map((entry) => ({
    name: entry.fields.name,
    imageUrl: entry.fields.image.fields.file.url,
  }));
  const verbatimEntriesResponse = await client.getEntries<IVerbatimQlubFields>({
    content_type: "verbatimQlub",
  });

  const verbatimEntries: IVerbatimQlub[] =
    verbatimEntriesResponse.items as IVerbatimQlub[];
  return {
    props: {
      logos,
      verbatimEntries,
    },
    revalidate: 10,
  };
};

export default Qlub;
