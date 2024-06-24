import { createClient } from "contentful";

let contentfulPromise: any;
const getContentful = () => {
  if (!contentfulPromise) {
    contentfulPromise = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      environment: process.env.CONTENTFUL_ENVIRONMENT as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });
  }

  return contentfulPromise;
};

export default getContentful;
