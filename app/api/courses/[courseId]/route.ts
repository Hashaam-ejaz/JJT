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
// export const DELETE = async (
//   req: Request,
//   { params }: { params: { courseId: number } },
// ) => {
//   if (!isAdmin) return new NextResponse("Untauthorized", { status: 403 });
//   const body = await req.json();
//   const data = await db
//     .delete(courses)
//     .where(eq(courses.id, params.courseId))
//     .returning();
//   return NextResponse.json(data[0]);
// };

export const DELETE = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  try {
    const data = await db
      .delete(courses)
      .where(eq(courses.id, params.courseId))
      .returning();

    if (!data[0]) {
      // Return a 404 if the course doesn't exist
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    // Return the deleted item as a JSON response
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error deleting course:", error);
    // Return a 500 response for any unexpected errors
    return NextResponse.json(
      { error: "Failed to delete course" },
      { status: 500 },
    );
  }
};
