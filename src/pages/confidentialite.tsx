import { Box, Heading, Text, Flex, Link, VStack } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import { Color } from "styles/theme";

const Privacy = () => {
  return (
    <Box bg={Color.BEIGE}>
      <Header headerBgColor={Color.BEIGE} logosrc={"/assets/logo.png"} />
      <Box bg={Color.BEIGE} p={10} color={Color.KAKI} mt={"3rem"}>
        <VStack
          align="left"
          spacing={8}
          maxW="1200px"
          mx="auto"
          fontFamily="Minion Pro"
        >
          <Heading as="h1" fontSize="3xl" fontFamily="Minion Pro">
            Politique de Confidentialité
          </Heading>

          <Text fontStyle="italic" fontSize="lg" fontFamily="Minion Pro">
            Date de dernière mise à jour: 02.11.2024
          </Text>

          <VStack align="left" spacing={6} fontFamily="Minion Pro">
            <Text>
              Cette politique de confidentialité est destinée à vous indiquer
              comment les données à caractère personnel vous concernant (les
              «Données Personnelles») sont collectées, traitées et stockées par
              la société SOQO.ntuelles nouvelles pratiques.
            </Text>

            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Minion Pro"
            >
              1. Données collectées, finalités et bases juridiques
            </Heading>
            <Text>
              SOQO vous informe que dans le cadre de votre interaction avec le
              Site, vos Données Personnelles sont collectées directement auprès
              de vous lorsque vous remplissez un formulaire en ligne ou lorsque
              vous faites le choix de nous les communiquer par email.
            </Text>

            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Minion Pro"
            >
              2. Destinataires des données personnelles et transferts
            </Heading>
            <Text>
              SOQO ne transmettra vos Données Personnelles à aucun tiers à
              l&#39;exception de tout prestataire qui pourrait intervenir en
              qualité de sous-traitant.
            </Text>

            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Minion Pro"
            >
              3. Conservation des données personnelles
            </Heading>
            <Text>
              SOQO conserve vos Données Personnelles uniquement pour la durée
              nécessaire à l&#39;atteinte des finalités pour lesquelles elles
              ont été collectées et traitées.
            </Text>

            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Minion Pro"
            >
              6. Cookies
            </Heading>
            <Text>
              Dans le cadre de l&#39;exploitation du Site, SOQO utilise des
              cookies. Un cookie est un petit fichier texte envoyé à votre
              navigateur par le site internet consulté, et stocké dans votre
              équipement terminal.
            </Text>

            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Minion Pro"
            >
              7. Modification de la politique
            </Heading>
            <Text>
              SOQO pourra mettre à jour cette Politique de Confidentialité à
              tout moment pour l&#39;adapter à d&#39;éventuelles nouvelles
              pratiques...
            </Text>
          </VStack>

          <Flex
            align="center"
            justify="space-between"
            w="100%"
            borderTop="1px solid"
            borderColor="#1A1F2C"
            pt={10}
          >
            <VStack align="left" spacing={2} fontFamily="Minion Pro">
              <Text fontWeight="bold">Conception du Site Internet</Text>
              <Text>Antoine Declercq</Text>
            </VStack>
          </Flex>
        </VStack>
      </Box>
      <Footer
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={Color.KAKI}
        iconBgColor={Color.BEIGE}
      />
    </Box>
  );
};

export default Privacy;
