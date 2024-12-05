import db from "@/database/drizzle";
import { challengeOptions } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { eq, param } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, params.challengeOptionId),
  });
  return NextResponse.json(data);
};
export const PUT = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const body = await req.json();
  const data = await db
    .update(challengeOptions)
    .set({
      ...body,
    })
    .where(eq(challengeOptions.id, params.challengeOptionId))
    .returning();
  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } },
) => {
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  try {
    const data = await db
      .delete(challengeOptions)
      .where(eq(challengeOptions.id, params.challengeOptionId))
      .returning();
    console.log("data recieved in params is", params.challengeOptionId);
    if (!data[0]) {
      // Return a 404 if the challenge option doesn't exist
      return NextResponse.json(
        { error: "Challenge option not found" },
        { status: 404 },
      );
    }
    // Return the deleted item as a JSON response
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error deleting challenge option:", error);
    // Return a 500 response for any unexpected errors
    return NextResponse.json(
      { error: "Failed to delete challenge option" },
      { status: 500 },
    );
  }
};
