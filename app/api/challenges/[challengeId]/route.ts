import db from "@/database/drizzle";
import { challenges } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { eq, param } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { challengeId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, params.challengeId),
  });
  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { challengeId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const body = await req.json();
  const data = await db
    .update(challenges)
    .set({
      ...body,
    })
    .where(eq(challenges.id, params.challengeId))
    .returning();
  return NextResponse.json(data[0]);
};

// export const DELETE = async (
//   req: Request,
//   { params }: { params: { challengeId: number } },
// ) => {
//   if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
//   const body = await req.json();
//   const data = await db
//     .delete(challenges)
//     .where(eq(challenges.id, params.challengeId))
//     .returning();
//   return NextResponse.json(data[0]);
// };
export const DELETE = async (
  req: Request,
  { params }: { params: { challengeId: number } },
) => {
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  try {
    const data = await db
      .delete(challenges)
      .where(eq(challenges.id, params.challengeId))
      .returning();

    if (!data[0]) {
      // Return a 404 if the challenge doesn't exist
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 },
      );
    }

    // Return the deleted item as a JSON response
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error deleting challenge:", error);
    // Return a 500 response for any unexpected errors
    return NextResponse.json(
      { error: "Failed to delete challenge" },
      { status: 500 },
    );
  }
};
