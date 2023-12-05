import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const contentType = body.sys.contentType.sys.id;
  switch (contentType) {
    case "reference":
      revalidatePath("/referenzen");
      console.log("[REVALIDATE_PATH] /referenzen: ", "✅ references updated");
      break;
    case "job":
      revalidatePath("/jobs");
      console.log("[REVALIDATE_PATH] /jobs: ", "✅ jobs updated");
      break;
  }

  return NextResponse.json({ message: "Content updated!" }, { status: 200 });
}
