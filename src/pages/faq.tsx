import React from "react";
import {
  VStack,
  Box,
  useDisclosure,
  Collapse,
  List,
  ListItem,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import { Color } from "styles/theme";
import Layout from "components/Layout";
import Header from "components/Header";
import Cover from "components/Cover";
import Footer from "components/Footer";

const titleProps = { fontSize: "xl" };

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
        <Text maxWidth="90%" fontSize={{ base: "2xl", md: "3xl" }}> {/* Adjusted font sizes here */}
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
        <Box borderRadius="lg" p={6} backgroundColor={Color.BEIGE} my={6}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

const FAQ = () => {
  return (
    <Layout>
      <Box bgColor={Color.BEIGE}>
        <Header
          headerBgColor={Color.BEIGE}
          mobileLinkColor={Color.KAKI}
          logosrc={"/assets/logo.png"}
        />

        <Cover
          btnText="Je souhaite en savoir plus"
          buttonLink={"https://cal.com/victorcoeur"}
          borderColor={Color.KAKI}
          btnBorderColor=""
          bgColor={Color.BEIGE}
          textColor={Color.KAKI}
          mobileHeight={"30vh"}
          imageSrc={"/assets/faq.png"}
          title={"Questions fréquentes"}
          content={(
            <>
              Vous avez une question ?<br />
              Nous pouvons y répondre!
            </>
          )}
        />

        <VStack
          width={"80%"}
          mt={20}
          mx={"auto"}
          bgColor={Color.BEIGE}
          mb={"4rem"}
        >
          <Item label="Est-ce que Soqo* est une association ?">
            <Text {...titleProps}>
             Soqo* n&apos;est pas une association, mais une société commerciale
              à mission de l&apos;Économie Sociale et Solidaire (ESS) sous statut
              juridique SAS. Contrairement aux associations, nous ne sommes pas
              éligibles aux dispositifs de défiscalisation pour les dons (qui
              sont possibles pour les associations), mais nous poursuivons une
              mission sociale et environnementale aussi ambitieuse.
            </Text>
          </Item>
          <Item label="Qu'est-ce qu'une société à mission ?">
            <Text {...titleProps}>
              Une société à mission est une entreprise qui, en plus de ses
              objectifs financiers, s&apos;engage dans des actions concrètes pour des
              objectifs sociaux et environnementaux, intégrés dans ses statuts.
              Chez Soqo*, nous avons formalisé cet engagement pour maximiser
              notre impact positif dans la société.
            </Text>
          </Item>
          <Item label="Où sont situés les bureaux de Soqo* ?">
            <Text {...titleProps}>
              Nous sommes installés à Césure, un tiers-lieu situé dans le 5ème
              arrondissement de Paris, qui regroupe plus de 150 structures
              engagées dans l&apos;ESS, majoritairement des associations. Cet
              environnement nous permet d&apos;être au plus près des besoins du
              secteur associatif, facilitant la co-construction de projets à
              impact et renforçant nos synergies avec les acteurs locaux.
            </Text>
          </Item>
          <Item label="Comment Soqo* choisit ses partenaires ?">
            <Text {...titleProps}>
              Nous choisissons nos partenaires en fonction de leur engagement
              pour des valeurs communes, de leur potentiel d&apos;impact et de leur
              volonté de s&apos;engager durablement pour le changement. Nous
              recherchons des partenaires motivés, prêts à collaborer pour
              atteindre des objectifs concrets et positifs.
            </Text>
          </Item>
          <Item label="Soqo* accompagne-t-il uniquement de grandes entreprises ?">
            <Text {...titleProps}>
              Soqo* accompagne aussi bien les grandes entreprises que les
              PME et TPE. Notre objectif est de permettre à toute entreprise
              désireuse de s&apos;engager dans une démarche de responsabilité sociale
              de bénéficier d&apos;un accompagnement adapté, quels que soient sa
              taille et son secteur.
            </Text>
          </Item>
          <Item label="Est-ce que Soqo* est une agence événementielle ?">
            <Text {...titleProps}>
              Soqo* n&#39;est pas une agence événementielle (ni une agence
              de communication). Nous ne produisons pas d&apos;événements, mais nous
              accompagnons les entreprises et leurs agences pour rendre leurs
              événements plus responsables, en intégrant des pratiques
              socialement et environnementalement durables sur le terrain.
            </Text>
          </Item>
          <Item label="Comment Soqo* évalue l'efficacité de ses actions ?">
            <Text {...titleProps}>
              Nous mesurons l&apos;efficacité de nos actions à travers des
              indicateurs de performance, des évaluations régulières et les
              retours d&apos;expérience de nos partenaires et bénéficiaires. Dans la
              mesure du possible, nous menons aussi des analyses d&apos;impact en
              collaboration avec notre partenaire Impact Track pour offrir des
              résultats plus précis et quantifiables.
            </Text>
          </Item>
          <Item label="Quelles sont les valeurs qui guident Soqo* dans ses missions ?">
            <Text {...titleProps}>
              Chez Soqo*, nous croyons en l&#39;innovation sociale, la
              solidarité et la durabilité. Nos actions sont guidées par la
              volonté de créer un impact positif, en travaillant en partenariat
              avec des associations et des entreprises pour construire des
              projets porteurs de sens et de valeurs partagées.
            </Text>
          </Item>
          <Item label="Comment Soqo* intègre l'impact social dans ses projets ?">
            <Text {...titleProps}>
              L’impact social est au cœur de notre approche. En travaillant
              directement avec les associations via notre réseau Le Qlub et en
              intégrant des objectifs sociaux dans les projets que nous
              accompagnons, nous veillons à ce que chaque projet réponde aux
              besoins réels des communautés locales et favorise des changements
              positifs durables.
            </Text>
          </Item>
          <Item label="Les projets de Soqo* se déroulent-ils uniquement en France ?">
            <Text {...titleProps}>
              Soqo* est une entreprise française, et la majorité de nos projets
              se déroulent sur le territoire national. Cependant, nous
              accompagnons également les entreprises dans leurs projets à
              l&apos;international. Grâce à un réseau de partenaires développés au
              fil des années, nous pouvons intervenir dans toutes les régions du
              monde.
            </Text>
          </Item>
        </VStack>
        <Footer
          bgColor={Color.BEIGE}
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

export default FAQ;
