import React from "react"
import {
  VStack,
  Box,
  useDisclosure,
  Collapse,
  List,
  ListItem,
  Text,
  Flex,
} from "@chakra-ui/react"
import { BsArrowDown } from "react-icons/bs"

const listProps = { ml: 10, fontSize: "xl", listStyleType: "", mt: 2 }
const titleProps = { fontSize: "2xl", fontWeight: "bold" }

const Item: React.FC<{ label: string }> = ({ label, children }) => {
  const { isOpen, onToggle } = useDisclosure()

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
        <Text maxWidth="90%" fontSize={{ base: "3xl", md: "4xl" }}>
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
        <Box borderRadius="lg" p={6} backgroundColor="beige.400" my={6}>
          {children}
        </Box>
      </Collapse>
    </Box>
  )
}

const ServiceAccordion = () => {
  return (
    <VStack>
      <Item label="Définition de la stratégie d’engagement de votre entreprise">
        <Text {...titleProps}>
          Cadrer les besoins et fixer les objectifs RSE au service de
          l’innovation sociale
        </Text>
        <List {...listProps}>
          <ListItem>
            Analyse de l’environnement et du contexte, diagnostic RSE
          </ListItem>
          <ListItem>
            Étude de la stratégie et des besoins des parties prenantes
            (affirmation des valeurs, engagement des collaborateurs…)
          </ListItem>
          <ListItem>
            Diagnostic des partenariats déjà existants avec des associations
          </ListItem>
          <ListItem>
            Formalisation des objectifs et modalités d’actions
          </ListItem>
        </List>
      </Item>
      <Item label="Identification de projets associatifs & mise en oeuvre du partenariat">
        <Text {...titleProps}>
          Sélectionner les associations et bâtir le partenariat pour donner du
          sens à la collaboration
        </Text>
        <List {...listProps}>
          <ListItem>
            Proposition de projets associatifs sociaux et/ou environnementaux
            (cartographie, benchmark)
          </ListItem>
          <ListItem>
            Co-construction de la collaboration alignant les enjeux communs
          </ListItem>
          <ListItem>
            Accompagnement dans la définition du cadre budgétaire
          </ListItem>
          <ListItem>
            Rédaction des conventions de partenariat / mécénat
          </ListItem>
        </List>
      </Item>
      <Item label="Pilotage du partenariat & engagement des collaborateurs">
        <Text {...titleProps}>
          {`Mettre en oeuvre les modalités d'actions et suivi du partenariat`}
        </Text>
        <List {...listProps}>
          <ListItem>Suivi du plan d’action et du budget</ListItem>
          <ListItem>Diagnostic et efficacité</ListItem>
          <ListItem>{`Mise à disposition d'outils de suivi (dashboard)`}</ListItem>
          <ListItem>
            Mise en œuvre des principaux moteurs de l’engagement des
            collaborateurs
          </ListItem>
          <ListItem>Monitoring et reporting</ListItem>
        </List>
      </Item>
      <Item label="Accompagnement à la communication">
        <Text {...titleProps}>
          Valoriser les engagements de manière transparente et mobiliser autour
          des causes soutenues
        </Text>
        <List {...listProps}>
          <ListItem>Accompagnement à la communication du partenariat</ListItem>
          <ListItem>Stratégie de récits et d’influence</ListItem>
          <ListItem>
            Création de contenus et valorisation de la collaboration
          </ListItem>
          <ListItem>Amplification (interne / B2B / B2C)</ListItem>
        </List>
      </Item>
      <Item label="Mesure d’impact">
        <Text {...titleProps}>
          Mesurer concrètement l’impact social et environnemental du partenariat
        </Text>
        <List {...listProps}>
          <ListItem>
            Définition de la méthodologie et du périmètre de mesure
          </ListItem>
          <ListItem>
            Consolidation des résultats quantitatifs et qualitatifs
          </ListItem>
          <ListItem>
            Élaboration de documents stratégiques pour alimenter les rapports
            RSE (diagnostics, SROI…)
          </ListItem>
          <ListItem>
            Mobilisation des parties prenantes à la démarche d’évaluation de
            l’impact social et/ou environnemental
          </ListItem>
        </List>
      </Item>
    </VStack>
  )
}

export default ServiceAccordion
