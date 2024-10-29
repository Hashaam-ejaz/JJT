import db from "@/database/drizzle";
import { courses } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { eq, param } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, params.courseId),
  });
  return NextResponse.json(data);
};
export const PUT = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const body = await req.json();
  const data = await db
    .update(courses)
    .set({
      ...body,
    })
    .where(eq(courses.id, params.courseId))
    .returning();
  return NextResponse.json(data);
};
export const DELETE = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
  const body = await req.json();
  const data = await db
    .delete(courses)
    .where(eq(courses.id, params.courseId))
    .returning();
  return NextResponse.json(data[0]);
};
