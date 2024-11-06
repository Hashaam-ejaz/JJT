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

    // Delete User Progress entries from tables
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeProgress);

    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset User Progress");
  }
};

main();
