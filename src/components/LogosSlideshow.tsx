import React, { useEffect, useState } from "react";
import { Asset, createClient, Entry } from "contentful";
import { Box, Image } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { Color } from "styles/theme";
import { ILogoCarrouselHomepageFields,ILogoCarrouselHomepage } from "types/generated/contentful";

// Your Contentful space ID and access token
const SPACE_ID = "a79r4ev0d3on"; // Ensure this is the correct space ID
const ACCESS_TOKEN = "zty4_VAKl1zPFH8HN3GzrjRBr5cFvmXEVqjV91d-Lkc"; // Ensure this is the correct access token

// Create a client to connect to Contentful
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});



/** logo du bandeau défilant sur la homepage */


// React Component
const LogoCarrouselNames: React.FC = () => {
  const [items, setItems] = useState<{ name: string; imageUrl: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch entries from Contentful
    client
      .getEntries<ILogoCarrouselHomepageFields>({
        content_type: "logoCarrouselHomepage", // Ensure this matches the content type ID in Contentful
      })
      .then((response) => {
        console.log(response);
        // Extract the 'name' and 'logo' fields from each entry
        const fetchedItems = response.items.map((entry) => ({
          name: entry.fields.name,
          imageUrl: entry.fields.logo.fields.file.url,
        }));
        setItems(fetchedItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching entries from Contentful:", err);
        setError("Failed to load entries.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box
      id="carousel_container"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"} 
      backgroundColor={Color.BEIGE}
    >
      <Carousel
        autoplay
        autoplayInterval={2000}
        wrapAround
        speed={500}
        withoutControls
        pauseOnHover={false}
        slidesToShow={4}
        disableEdgeSwiping
      >
        {items.map((item, index) => (
          <Box
            key={index}
            /* border={"3x solid red"} */
            margin={"auto"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={"8rem"} /* Defined height for consistency */
            width={"150px"} /* Defined width for consistency */
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={"100%"}
              height={"100%"}
              objectFit={"contain"}
              /* border={"3px solid blue"} */ 
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default LogoCarrouselNames;
