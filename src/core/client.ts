import { createClient } from "contentful"

const client = createClient({
  accessToken: process.env.CONTENTFUL_API_KEY!,
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment:process.env.CONTENTFUL_ENVIRONMENT!,
})

export default client
