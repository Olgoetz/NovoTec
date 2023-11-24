import { createClient } from "contentful";
import { NextResponse } from "next/server";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
export async function GET(request: Request) {
  try {
    const response = await client.getEntries({
      content_type: "job",
    });

    return NextResponse.json(response.items, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
