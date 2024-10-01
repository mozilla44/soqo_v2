import { createClient } from "contentful";

const SPACE_ID = "a79r4ev0d3on"; // Ensure this is the correct space ID
const ACCESS_TOKEN = "zty4_VAKl1zPFH8HN3GzrjRBr5cFvmXEVqjV91d-Lkc"; // Ensure this is the correct access token

// Create a client to connect to Contentful
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export const Services = () => {
  return <>
  
  </>;
};
