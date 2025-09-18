import React, { useState } from "react";
import {
  Box,
  Grid,
  Text,
  Heading,
  Image,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Cover from "components/Cover";
import Header from "components/Header";
import client from "core/client";
import { Color } from "styles/theme";
import { IProjetImpact, IProjetImpactFields } from "types/generated/contentful";
import Layout from "components/Layout";
import Footer from "components/Footer";
import AltCover from "components/AltCover_bak";

interface ImpactProjectsProps {
  impactEntries: IProjetImpact[];
}

const ImpactProjects: React.FC<ImpactProjectsProps> = ({ impactEntries }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEntry, setSelectedEntry] = useState<IProjetImpact | null>(null);
  const handleOpenModal = (entry: IProjetImpact) => {
    setSelectedEntry(entry);
    onOpen();
  };
  return (
    <Layout>
      <Header
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        mobileLinkColor={Color.KAKI}
        logosrc={"/assets/logo.png"}
      />
      <Cover
        btnText={"Prendre rendez-vous avec Victor"}
        buttonLink={"https://cal.com/victorcoeur"}
        btnTextColor={Color.BEIGE}
        btnBgColor={Color.KAKI}
        btnMarginTop={"3rem"}
        borderColor={Color.KAKI}
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        mobileHeight={"30vh"}
        btnBorderColor=""
        imageSrc={"/assets/hoola.png"}
        title={"Les entreprises\ns'engagent avec Soqo*"}
        content={(
          <>
            Découvrez les derniers<br />
            projets menés et leur impact.
          </>
        )}
      />

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={8}
        pb={6}
        pt={20}
        pl="5%"
        pr="5%"
        bg={Color.BEIGE}
      >
        {impactEntries.map((entry) => (
          <Box
            as="article"
            key={entry.sys.id}
            borderWidth="0px"
            borderRadius="none"
            overflow="hidden"
            bg={Color.BEIGE}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)"
            padding={6}
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.01)" }}
          >
            <Box mb={4}>
              <Heading
                size="xl"
                mb={2}
                fontFamily={"Minion Pro"}
                color={Color.KAKI}
              >
                {entry.fields.name}
              </Heading>
              <Box>
                {entry.metadata.tags.map((tag) => (
                  <Tag
                    pt={"1"}
                    paddingX={2}
                    fontSize={"sm"}
                    fontFamily={"Minion Pro"}
                    key={tag.sys.id}
                    bg={Color.BEIGE}
                    color={Color.KAKI}
                    border={`1px solid ${Color.KAKI}`}
                    mr={2}
                    mb={2}
                    borderRadius="full"
                  >
                    {tag.sys.id.toUpperCase()}
                  </Tag>
                ))}
              </Box>
            </Box>

            <Box
              flexShrink={0}
              position="relative"
              width="100%"
              paddingBottom="100%"
              mb={4}
              mx="auto"
            >
              <Image
                src={entry.fields.image.fields.file.url}
                alt={entry.fields.name}
                objectFit="cover"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                borderRadius="none"
              />
            </Box>

            <Text
              p={1}
              fontSize="xl"
              color={Color.KAKI}
              fontFamily={"Minion Pro"}
              flexGrow={1}
            >
              {entry.fields.description}
            </Text>
            <Button
              justifyContent={"left"}
              mt={4}
              fontSize={"xl"}
              color={Color.KAKI}
              fontWeight="bold"
              variant="link"
              textDecoration={"underline"}
              onClick={() => handleOpenModal(entry)}
            >
              Téléchargez le cas client
            </Button>
   

          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent background="transparent" boxShadow="none" border="none">
          <ModalCloseButton color="white" mr={4} />
          <ModalBody>
            {selectedEntry && (
              <iframe
                src={selectedEntry.fields.tally}
                width="100%"
                height="600px"
                style={{ border: "none" }}
                title={selectedEntry.fields.name}
              ></iframe>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

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

export const getStaticProps = async () => {
  const impactEntriesResponse = await client.getEntries<IProjetImpactFields>({
    content_type: "projetImpact",
    order: "sys.createdAt",
  });
  const impactEntries: IProjetImpact[] =
    impactEntriesResponse.items as IProjetImpact[];

  return {
    props: {
      impactEntries,
    },
    revalidate: 10,
  };
};

export default ImpactProjects;
