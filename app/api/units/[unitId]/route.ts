import db from "@/database/drizzle";
import { units } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { eq, param } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const data = await db.query.units.findFirst({
    where: eq(units.id, params.unitId),
  });
  return NextResponse.json(data);
};
export const PUT = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const body = await req.json();
  const data = await db
    .update(units)
    .set({
      ...body,
    })
    .where(eq(units.id, params.unitId))
    .returning();
  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  try {
    const data = await db
      .delete(units)
      .where(eq(units.id, params.unitId))
      .returning();

    if (!data[0]) {
      // Return a 404 if the unit doesn't exist
      return NextResponse.json({ error: "Unit not found" }, { status: 404 });
    }

    // Return the deleted item as a JSON response
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error deleting unit:", error);
    // Return a 500 response for any unexpected errors
    return NextResponse.json(
      { error: "Failed to delete unit" },
      { status: 500 },
    );
  }
};
