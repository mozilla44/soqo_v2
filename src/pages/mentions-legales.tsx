import { Box } from "@chakra-ui/react"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Title from "components/Title"
import Head from "next/head"
import React from "react"
import ReactMarkdown from "react-markdown"

const Terms = () => {
  return (
    <Layout>
      <Head>
        <title>Mentions Légales - Soqo</title>
      </Head>
      <Section
        marginX="auto"
        maxWidth="container.lg"
        backgroundColor="blue.500"
      >
        <Title>Mentions Légales</Title>
        <Box className="markdown-terms">
          <ReactMarkdown>{`

**Propriétaire et Éditeur** : Dénomination Sociale : SOQO

Raison Sociale : SAS de l&#39;ESS (Economie Sociale et Solidaire)

Capital Social : 5 000 €

Adresse du siège social : 21 rue titon 75011

Directeur de la publication : Najma Souroque &amp; Victor Coeur

Email de contact : bonjour@soqo.fr

Registre du Commerce : 907 511 737

----------

**Hébergeur** : Vercel

**Limitations de responsabilité**

Malgré toute l&#39;attention apportée sur la qualité des informations, fonctionnalités et contenus disponibles sur notre site Internet, Soqo\* ne saurait être tenu pour responsable des imprécisions, erreurs, absences de disponibilité des fonctionnalités et / ou du contenu. Soqo\* ne pourra être tenu pour responsable d&#39;aucun dommage causé par l&#39;utilisation de son site Internet. Si vous constatez un défaut, merci de nous le signaler par courriel.


### INFORMATIONS

Soqo\* décline toute responsabilité pour les dommages pouvant résulter de l&#39;utilisation des informations de ce site Internet. Par conséquent, vous êtes entièrement responsable de l&#39;utilisation que vous faites de ces informations.

### LIENS ET RENVOIS

Ce site Internet contient des liens hypertextes vers d&#39;autres sites ainsi que des renvois à d&#39;autres sources d&#39;information. Ces liens et sources d&#39;information sont mis à votre disposition à titre indicatif uniquement. Soqo\* décline toute responsabilité pour les dommages pouvant résulter de la consultation des informations présentes sur les autres sites ou dans d&#39;autres sources d&#39;information en général, et auxquelles renvoie ce site.

### DROITS DE PROPRIÉTÉ INTELLECTUELLE

Soqo\* se réserve tous les droits de propriété intellectuelle sur ce site Internet ainsi que sur les informations mises à disposition.

Conformément aux dispositions sur la protection des droits d&#39;auteur, toute reproduction même partielle d&#39;éléments graphiques, de la structure du site ou de contenu est strictement interdite sans autorisation préalable de l&#39;éditeur.

Les demandes de reproductions et/ou d&#39;exploitation au travers d&#39;autres médias peuvent toutefois être formulées à l&#39;aide du formulaire de contact mis à votre disposition ci-dessous.

### PROTECTION DES DONNÉES À CARACTÈRE PERSONNEL

Les données reçues de votre part sont reprises dans les fichiers de Soqo\* et servent uniquement à répondre à la demande d&#39;informations que vous avez introduite.

Conformément à la loi informatique et libertés du 6 janvier 1978 (art.34), vous disposez d&#39;un droit d&#39;accès, de modification, de rectification et de suppression des données qui vous concernent. Pour l&#39;exercer, merci de nous contacter à l&#39;adresse suivante : bonjour@soqo.fr


### COOKIES ET POLITIQUE DE CONFIDENTIALITÉ

#### A. DÉFINITION

Un cookie est un fichier texte de petite taille, stocké sur le terminal de l&#39;internaute lors de la consultation d&#39;un site internet. Le cookie a pour but de collecter des informations relatives à votre navigation et permet d&#39;adresser des services adaptés à votre terminal et de personnaliser les annonces présentes sur notre site. La suppression des cookies peut affecter des services ou fonctionnalités du site. Les cookies ont un rôle important pour votre expérience de navigation.

Les cookies sont gérés par votre navigateur internet et sont anonymes, nous ne collectons pas de données personnelles.

#### B. UTILISATION

#### Les usages des cookies sont les suivants :

#### IInformation statistiques sur le site

Accès préférentiel sur les terminaux mobiles

Personnaliser les contenus publicitaires qui vous sont présentées

#### C. LES CHOIX QUI VOUS SONT OFFERTS PAR VOTRE LOGICIEL DE NAVIGATION

Vous pouvez configurer votre logiciel de navigation de manière à ce que des cookies soient enregistrés dans votre terminal ou, au contraire, qu&#39;ils soient rejetés, soit systématiquement, soit selon leur émetteur. Vous pouvez également configurer votre logiciel de navigation de manière à ce que l&#39;acceptation ou le refus des cookies vous soient proposés ponctuellement, avant qu&#39;un cookie soit susceptible d&#39;être enregistré dans votre terminal.

**C.1 – L&#39;accord sur les cookies**

L&#39;enregistrement d&#39;un cookie dans un terminal est essentiellement subordonné à la volonté de l&#39;utilisateur du terminal, que celui-ci peut exprimer et modifier à tout moment et gratuitement à travers les choix qui lui sont offerts par son logiciel de navigation.

Si vous avez accepté dans votre logiciel de navigation l&#39;enregistrement de cookies dans votre terminal, les cookies intégrés dans les pages et contenus que vous avez consultés pourront être stockés temporairement dans un espace dédié de votre terminal. Ils y seront lisibles uniquement par leur émetteur.

**C.2 – Le refus des cookies**

Si vous refusez l&#39;enregistrement de cookies dans votre terminal, ou si vous supprimez ceux qui y sont enregistrés, cela peut affecter un certain nombre de fonctionnalités de notre site.

Le cas échéant, nous déclinons toute responsabilité pour les conséquences liées au fonctionnement dégradé de notre site résultant de l&#39;impossibilité pour nous d&#39;enregistrer ou de consulter les cookies nécessaires à son fonctionnement et que vous auriez refusés ou supprimés.

**C.3 – Comment exercer vos choix, selon le navigateur que vous utilisez ?**

Pour la gestion des cookies et de vos choix, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d&#39;aide de votre navigateur, qui vous permettra de savoir de quelle manière modifier vos souhaits en matière de cookies.


### **CRÉDITS**
--------
Conception du Site Internet : **Baptiste Adrien**

Direction artistique 2021 : **Gilbert Wilson Studio**

Maquettes Site internet : **Amélie Warnault**

Photographies : -
          `}</ReactMarkdown>
        </Box>
      </Section>
      <Footer />
    </Layout>
  )
}

Terms.backgroundColor = "#E3F1FD"

export default Terms
