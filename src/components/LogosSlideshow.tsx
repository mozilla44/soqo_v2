import React, { useEffect, useState } from 'react';
import { Asset, createClient, Entry } from 'contentful';
import { Image } from '@chakra-ui/react';
import  Carousel  from 'nuka-carousel';

// Your Contentful space ID and access token
const SPACE_ID = 'a79r4ev0d3on'; // Ensure this is the correct space ID
const ACCESS_TOKEN = 'zty4_VAKl1zPFH8HN3GzrjRBr5cFvmXEVqjV91d-Lkc'; // Ensure this is the correct access token

// Create a client to connect to Contentful
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

interface ILogoCarrouselHomepageFields {
  /** nom */
  name: string;

  /** logo */
  logo: Asset;
}

/** logo du bandeau défilant sur la homepage */
interface ILogoCarrouselHomepage extends Entry<ILogoCarrouselHomepageFields> {
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

// React Component
const LogoCarrouselNames: React.FC = () => {
  const [items, setItems] = useState<{ name: string; imageUrl: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch entries from Contentful
    client
      .getEntries<ILogoCarrouselHomepageFields>({
        content_type: 'logoCarrouselHomepage', // Ensure this matches the content type ID in Contentful
      })
      .then((response) => {
        console.log(response)
        // Extract the 'name' and 'logo' fields from each entry
        const fetchedItems = response.items.map((entry) => ({
          name: entry.fields.name,
          imageUrl: entry.fields.logo.fields.file.url,
        }));
        setItems(fetchedItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching entries from Contentful:', err);
        setError('Failed to load entries.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Carousel 
    wrapAround
    heightMode="max"
    autoplay={true} autoplayInterval={1000} 
    renderBottomCenterControls={null}
    renderCenterLeftControls={null}
    initialSlideHeight={200}>
      {items.map((item, index) => (
        <div key={index}>
          <Image src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
          {/* <p>{item.name}</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default LogoCarrouselNames;
