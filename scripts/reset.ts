import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import * as schema from "../database/schema";

const connection = neon(process.env.DATABASE_URL!);
const db = drizzle(connection, { schema });

const main = async () => {
  try {
    console.log("Resetting Db");

    // Delete entries from tables
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.userProgress);
    await db.delete(schema.courses);

    // Reset sequences using Drizzle's SQL helper
    await db.execute(sql`ALTER SEQUENCE courses_id_seq RESTART WITH 1`);
    await db.execute(sql`ALTER SEQUENCE units_id_seq RESTART WITH 1`);
    await db.execute(sql`ALTER SEQUENCE lessons_id_seq RESTART WITH 1`);
    await db.execute(sql`ALTER SEQUENCE challenges_id_seq RESTART WITH 1`);
    await db.execute(
      sql`ALTER SEQUENCE challenge_options_id_seq RESTART WITH 1`,
    );
    await db.execute(
      sql`ALTER SEQUENCE challenge_progress_id_seq RESTART WITH 1`,
    );

    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset the db");
  }
};

main();
