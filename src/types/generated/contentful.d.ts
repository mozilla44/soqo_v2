// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogPostFields {
  /** Titre */
  titre: string;

  /** URL */
  slug: string;

  /** chapeau */
  chapeau: Document;

  /** article */
  article: string;

  /** cover */
  cover: Asset;

  /** image 1 */
  image: Asset;

  /** image 2 */
  image2: Asset;
}

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICarrouselEventsFields {
  /** name */
  name: string;

  /** image */
  image: Asset;
}

export interface ICarrouselEvents extends Entry<ICarrouselEventsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "carrouselEvents";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICarrousePartnersFields {
  /** name */
  name: string;

  /** image */
  image: Asset;
}

export interface ICarrousePartners extends Entry<ICarrousePartnersFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "carrousePartners";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICarrouseQlubFields {
  /** name */
  name: string;

  /** image */
  image: Asset;
}

/** logos défilants sur la page du Qlub */

export interface ICarrouseQlub extends Entry<ICarrouseQlubFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "carrouseQlub";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEcosystemFields {
  /** images */
  images?: Asset[] | undefined;

  /** type */
  type: "associations" | "societies" | "partners";
}

export interface IEcosystem extends Entry<IEcosystemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "ecosystem";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFriendFields {
  /** Prénom/Nom */
  name: string;

  /** Job */
  title: string;

  /** Photo */
  photo: Asset;

  /** position */
  position?: number | undefined;
}

export interface IFriend extends Entry<IFriendFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "friend";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILogoAdnFields {
  /** name */
  name: string;

  /** image */
  image: Asset;
}

/** logos des partenaires sur la page adn */

export interface ILogoAdn extends Entry<ILogoAdnFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "logoAdn";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILogoCarrouselHomepageFields {
  /** nom */
  name: string;

  /** logo */
  logo: Asset;
}

/** logo du bandeau défilant sur la homepage */

export interface ILogoCarrouselHomepage
  extends Entry<ILogoCarrouselHomepageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "logoCarrouselHomepage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILogosImpactFields {
  /** name */
  name: string;

  /** image */
  image: Asset;
}

/** logos du carrousel sur la page services=> projets à impact */

export interface ILogosImpact extends Entry<ILogosImpactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "logosImpact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectFields {
  /** Titre */
  title: string;

  /** Image */
  cover?: Asset | undefined;

  /** Vignette */
  thumbnail?: Asset | undefined;

  /** Galerie */
  photos?: Asset[] | undefined;

  /** Url */
  slug: string;

  /** Entreprise */
  society?: string | undefined;

  /** Entreprise texte */
  societyText?: string | undefined;

  /** Association */
  organization?: string | undefined;

  /** Association texte */
  organizationText?: string | undefined;

  /** Chiffres */
  metrics?: string[] | undefined;

  /** Contenu */
  content?: string | undefined;

  /** Citation */
  quote?: string | undefined;

  /** Citation auteur */
  quoteAuthor?: string | undefined;

  /** Position */
  position?: number | undefined;

  /** Couleur tag */
  colorTag?: string | undefined;

  /** Tag */
  tag?: string | undefined;

  /** Lien Instagram */
  instagramUrl?: string | undefined;

  /** Lien Facebook */
  facebookUrl?: string | undefined;

  /** YouTube ID */
  videoId?: string | undefined;
}

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjetEventFields {
  /** name */
  name: string;

  /** description */
  description: string;

  /** image */
  image: Asset;
}

export interface IProjetEvent extends Entry<IProjetEventFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "projetEvent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjetImpactFields {
  /** name */
  name: string;

  /** description */
  description: string;

  /** image */
  image: Asset;

  /** tally */
  tally: string;
}

export interface IProjetImpact extends Entry<IProjetImpactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "projetImpact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceFields {
  /** nom */
  name?: string | undefined;
}

/** Les services du bandeau Services */

export interface IService extends Entry<IServiceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "service";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITeamFields {
  /** name */
  name: string;

  /** image */
  image: Asset;

  /** role */
  role: string;

  /** birthplace */
  birthplace: string;

  /** quote */
  quote: string;
}

export interface ITeam extends Entry<ITeamFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "team";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IVerbatimHomeFields {
  /** quote */
  quote: Document;

  /** photo */
  photo: Asset;

  /** nom */
  name: string;

  /** position */
  position: string;

  /** entreprise */
  entreprise: string;
}

/** Verbatims de la homepage */

export interface IVerbatimHome extends Entry<IVerbatimHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "verbatimHome";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IVerbatimImpactFields {
  /** quote */
  quote: Document;

  /** photo */
  photo: Asset;

  /** nom */
  nom: string;

  /** position */
  position: string;

  /** entreprise */
  entreprise: string;
}

export interface IVerbatimImpact extends Entry<IVerbatimImpactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "verbatimImpact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IVerbatimQlubFields {
  /** quote */
  quote: Document;

  /** photo */
  photo: Asset;

  /** nom */
  nom: string;

  /** position */
  position: string;

  /** entreprise */
  entreprise: string;
}

/** Verbatims sur la page de présentation du Qlub */

export interface IVerbatimQlub extends Entry<IVerbatimQlubFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "verbatimQlub";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "blogPost"
  | "carrouselEvents"
  | "carrousePartners"
  | "carrouseQlub"
  | "ecosystem"
  | "friend"
  | "logoAdn"
  | "logoCarrouselHomepage"
  | "logosImpact"
  | "project"
  | "projetEvent"
  | "projetImpact"
  | "service"
  | "team"
  | "verbatimHome"
  | "verbatimImpact"
  | "verbatimQlub";

export type LOCALE_CODE = "en-US" | "fr";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
