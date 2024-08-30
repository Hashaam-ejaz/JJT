import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Db");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "English",
        imageSrc: "englishUK.svg",
      },
      {
        id: 2,
        title: "Urdu",
        imageSrc: "urduPakistan.svg",
      },
      {
        id: 3,
        title: "Maths",
        imageSrc: "maths.svg",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the db");
  }
};

main();
