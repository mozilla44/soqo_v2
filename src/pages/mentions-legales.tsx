import { Box, Heading, Text, Flex, Link, VStack } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import { Color } from "styles/theme";
const LegalMentions = () => {
  return (
    <Layout>
      <Box bg={Color.BEIGE}>
        <Header headerBgColor={Color.BEIGE} logosrc={"/assets/logo.png"} />
        <Box
          bg={Color.BEIGE}
          p={10}
          fontFamily="Minion Pro"
          mt={"3rem"}
          color={Color.KAKI}
        >
          <VStack align="left" spacing={8} maxW="1200px" mx="auto">
            <Heading
              as="h1"
              fontSize="3xl"
              fontWeight="bold"
              fontFamily="Minion Pro"
            >
              Mentions Légales
            </Heading>

            <VStack align="left" spacing={4}>
              <Text>
                <strong>Propriétaire et Éditeur</strong>: SOQO SAS
              </Text>
              <Text>
                <strong>Raison Sociale</strong> : SOQO
              </Text>
              <Text>
                <strong>Capital Social</strong>: 5 000 €
              </Text>
              <Text>
                <strong>Adresse du siège social</strong>: 21 rue titon 75011
                Paris
              </Text>
              <Text>
                <strong>Directeur de la publication</strong>: Najma Sourouque &
                Victor Coeur
              </Text>
              <Text>
                <strong>Email de contact</strong>:{" "}
                <Link href="mailto:bonjour@soqo.fr">bonjour@soqo.fr</Link>
              </Text>
              <Text>
                <strong>Registre du Commerce</strong> : 907 511 737
              </Text>

              <Text>
                <strong>Hébergeur</strong> : Le site Soqo* est hébergé par
                Vercel Inc.
                <br />
                440 N Barranca Avenue #4133 Covina, CA 91723 <br />
                United States
              </Text>

              <Text fontWeight="bold">Limitations de responsabilité</Text>
              <Text>
                Malgré toute l&apos;attention apportée sur la qualité des
                informations, fonctionnalités et contenus disponibles sur notre
                site Internet, Soqo* ne saurait être tenu responsable des
                imprécisions, erreurs, absences de disponibilité des
                fonctionnalités et/ou du contenu.
              </Text>

              <Text fontWeight="bold">Droits de propriété intellectuelle</Text>
              <Text>
                Soqo* se réserve tous les droits de propriété intellectuelle sur
                ce site Internet ainsi que sur les informations mises à
                disposition.
              </Text>

              <Text fontWeight="bold">
                Protection des données à caractère personnel
              </Text>
              <Text>
                Les données reçues de votre part sont reprises dans les fichiers
                de Soqo* et servent uniquement à répondre à la demande
                d&#39;informations.
              </Text>

              <Text fontWeight="bold">
                Cookies et Politique de Confidentialité
              </Text>
              <Text>
                Les cookies sont des fichiers textes placés sur votre terminal,
                ils permettent de vous reconnaître lors de vos visites sur notre
                site.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Footer
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={Color.KAKI}
        iconBgColor={Color.BEIGE}
      />
    </Layout>
  );
};

export default LegalMentions;
