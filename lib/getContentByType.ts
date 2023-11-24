import getContentful from "@/lib/getContentful";

const client = getContentful();
const getContentByType = async (contentType: string) => {
  try {
    const response = await client.getEntries({
      content_type: contentType,
    });
    return response.items;
  } catch (error) {
    console.log(error);

    return { message: "[CONTENFUL_ERROR] Internal error", status: 500 };
  }
};

export default getContentByType;
