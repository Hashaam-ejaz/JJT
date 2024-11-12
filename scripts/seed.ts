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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //English
        title: "Unit 1",
        description: "Learn the basics of English",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, //Unit 1 learn basics eng
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, //Unit 1 learn basics eng
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, //Unit 1 learn basics eng
        order: 3,
        title: "Nouns 2",
      },
      {
        id: 4,
        unitId: 1, //Unit 1 learn basics eng
        order: 4,
        title: "Verbs 2",
      },
      {
        id: 5,
        unitId: 1, //Unit 1 learn basics eng
        order: 5,
        title: "Nouns 3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is a "Man" ?',
      },
      {
        id: 2,
        lessonId: 1, //Nouns
        type: "ASSIST",
        order: 2,
        question: '"Man"',
      },
      {
        id: 3,
        lessonId: 1, //Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is a "Robot" ?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, //Which one of these is a man
        imageSrc: "/man.svg",
        correct: true,
        text: "Man",
        audioSrc: "/eng_man.mp3",
      },
      {
        challengeId: 1, //Which one of these is a man
        imageSrc: "/woman.svg",
        correct: false,
        text: "Woman",
        audioSrc: "/eng_woman.mp3",
      },
      {
        challengeId: 1, //Which one of these is a man
        imageSrc: "/robot.svg",
        correct: false,
        text: "Robot",
        audioSrc: "/eng_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "man"
        correct: true,
        text: "Man",
        audioSrc: "/eng_man.mp3",
      },
      {
        challengeId: 2, // "man"
        correct: false,
        text: "Woman",
        audioSrc: "/eng_woman.mp3",
      },
      {
        challengeId: 2, // "man"
        correct: false,
        text: "Robot",
        audioSrc: "/eng_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, //Which one of these is robot
        imageSrc: "/man.svg",
        correct: false,
        text: "Man",
        audioSrc: "/eng_man.mp3",
      },
      {
        challengeId: 3, //Which one of these is robot
        imageSrc: "/woman.svg",
        correct: false,
        text: "Woman",
        audioSrc: "/eng_woman.mp3",
      },
      {
        challengeId: 3, //Which one of these is robot
        imageSrc: "/robot.svg",
        correct: true,
        text: "Robot",
        audioSrc: "/eng_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, //Verbs
        type: "SELECT",
        order: 1,
        question: 'Which one of these is a "Man" ?',
      },
      {
        id: 5,
        lessonId: 2, //Verbs
        type: "ASSIST",
        order: 2,
        question: '"Man"',
      },
      {
        id: 6,
        lessonId: 2, //Verbs
        type: "SELECT",
        order: 3,
        question: 'Which one of these is a "Robot" ?',
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the db");
  }
};

main();
