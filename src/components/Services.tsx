import React, { useEffect, useState } from "react";
import { createClient, Entry } from "contentful";
import { Box, Flex, Heading, Text, Wrap, WrapItem, Badge } from "@chakra-ui/react";
import { Color } from "styles/theme";

// Your Contentful space ID and access token
const SPACE_ID = "a79r4ev0d3on"; // Ensure this is the correct space ID
const ACCESS_TOKEN = "zty4_VAKl1zPFH8HN3GzrjRBr5cFvmXEVqjV91d-Lkc"; // Ensure this is the correct access token

// Create a client to connect to Contentful
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// Define the type for a Service
interface Service {
  id: string;
  title?: string; // Title can be undefined
}

// Define the type for the fields in the Contentful entry
interface ServiceFields {
  name: string;
}

// Type annotation for the Contentful API response
interface ContentfulResponse {
  items: Entry<ServiceFields>[];
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Fetch entries from Contentful
    client
      .getEntries<ServiceFields>({
        content_type: "service", // Ensure this matches the content type ID in Contentful
      })
      .then((response) => {
        // Type assertion to specify the response structure
        const fetchedServices: Service[] = (response as ContentfulResponse).items.map((entry) => ({
          id: entry.sys.id,
          title: entry.fields.name,
        }));
        setServices(fetchedServices);
      })
      .catch((err) => {
        console.error("Error fetching entries from Contentful:", err);
      });
  }, []);

  return (
    <Box bg={Color.KAKI} p={10} borderRadius="md" textAlign="center">
      <Flex alignItems={"flex-start"} justifyContent="center" mb={8}>
        <Heading as="h2" size="lg" color="white" alignSelf={"flex-start"}>
          Nos services
        </Heading>
      </Flex>

      {/* Service Buttons */}
      <Wrap spacing={4} justify="center" maxWidth="800px" mx="auto">
        {services.map((service) => (
          <WrapItem key={service.id}>
            <Badge
              variant="outline"
              borderRadius="full"
              px={4}
              py={2}
              borderColor="white"
              color="white"
              fontSize="md"
            >
              {service.title}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Services;
