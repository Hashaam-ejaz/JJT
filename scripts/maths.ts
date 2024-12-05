import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Db with maths questions");
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Maths",
        imageSrc: "/maths.svg",
      },
    ]);
    // 4 Units in Course 1 - Maths
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //Maths - change on need basis
        title: "Unit 1",
        description: "Learn the basics of Maths",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, //Maths - change on need basis
        title: "Unit 2",
        description: "Double Digit Maths with introduction of Sequences",
        order: 1,
      },
      {
        id: 3,
        courseId: 1, //Maths - change on need basis
        title: "Unit 3",
        description: "Introduction to Multiplication",
        order: 1,
      },
      {
        id: 4,
        courseId: 1, //Maths - change on need basis
        title: "Unit 4",
        description: "Introduction to Division & Advanced Multiplication",
        order: 1,
      },
    ]);

    // 4 lessons in unit 1 - Basics of maths (Add1, Add2, Sub1, Sub2)
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, //Unit 1 learn basics of Maths
        order: 1,
        title: "Addition 1",
      },
      {
        id: 2,
        unitId: 1, //Unit 1 learn basics of Maths
        order: 2,
        title: "Subtraction 1",
      },
      {
        id: 3,
        unitId: 1, //Unit 1 learn basics Maths
        order: 3,
        title: "Addition 2",
      },
      {
        id: 4,
        unitId: 1, //Unit 1 learn basics Maths
        order: 4,
        title: "Subtraction 2",
      },
    ]);

    // 4 challenges for addition 1
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //Addition 1
        type: "SELECT",
        order: 1,
        question: "What is 1 + 3 ?",
      },
      {
        id: 2,
        lessonId: 1, //Addition 1
        type: "SELECT",
        order: 2,
        question: "What is 7 + 7 ?",
      },
      {
        id: 3,
        lessonId: 1, //Addition 1
        type: "SELECT",
        order: 3,
        question: "What is 3 + 4 ?",
      },
      {
        id: 4,
        lessonId: 1, //Addition 1
        type: "SELECT",
        order: 4,
        question: "What is 9 + 5 ?",
      },
    ]);
    // 16 challenge options for addition 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, //1+3
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 1, //1+3
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 1, //1+3
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 1, //1+3
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "7+7"
        correct: true,
        text: "14",
        audioSrc: "/levels-audio/14.mp3",
        imageSrc: "/levels-images/14.svg",
      },
      {
        challengeId: 2, // "7+7"
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
        imageSrc: "/levels-images/10.svg",
      },
      {
        challengeId: 2, // "7+7"
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
        imageSrc: "/levels-images/5.svg",
      },
      {
        challengeId: 2, // "7+7"
        correct: false,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
        imageSrc: "/levels-images/13.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, //3+4
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 3, //3+4
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 3, //3+4
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
      {
        challengeId: 3, //3+4
        imageSrc: "/levels-images/7.svg",
        correct: true,
        text: "7",
        audioSrc: "/levels-audio/7.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4, //9+5
        imageSrc: "/levels-images/15.svg",
        correct: false,
        text: "15",
        audioSrc: "/levels-audio/15.mp3",
      },
      {
        challengeId: 4, //9+5
        imageSrc: "/levels-images/19.svg",
        correct: false,
        text: "19",
        audioSrc: "/levels-audio/19.mp3",
      },
      {
        challengeId: 4, //9+5
        imageSrc: "/levels-images/14.svg",
        correct: true,
        text: "14",
        audioSrc: "/levels-audio/14.mp3",
      },
      {
        challengeId: 4, //9+5
        imageSrc: "/levels-images/13.svg",
        correct: false,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
      },
    ]);
    // 4 challenges for Subtraction 1
    await db.insert(schema.challenges).values([
      {
        id: 5,
        lessonId: 2, //Subtraction 1
        type: "SELECT",
        order: 1,
        question: "What is 3 - 1 ?",
      },
      {
        id: 6,
        lessonId: 2, //Subtraction 1
        type: "SELECT",
        order: 2,
        question: "What is 7 - 7 ?",
      },
      {
        id: 7,
        lessonId: 2, //Subtraction 1
        type: "SELECT",
        order: 3,
        question: "What is 4 - 2 ?",
      },
      {
        id: 8,
        lessonId: 2, //Subtraction 1
        type: "SELECT",
        order: 4,
        question: "What is 9 - 5 ?",
      },
    ]);
    // 16 challenge options for Subtraction 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5, //3 - 1
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 5, //3 - 1
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 5, //3 - 1
        imageSrc: "/levels-images/2.svg",
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 5, //3 - 1
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6, // "7-7"
        correct: true,
        text: "0",
        audioSrc: "/levels-audio/0.mp3",
        imageSrc: "/levels-images/0.svg",
      },
      {
        challengeId: 6, // "7-7"
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
        imageSrc: "/levels-images/1.svg",
      },
      {
        challengeId: 6, // "7-7"
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
        imageSrc: "/levels-images/5.svg",
      },
      {
        challengeId: 6, // "7-7"
        correct: false,
        text: "7",
        audioSrc: "/levels-audio/7.mp3",
        imageSrc: "/levels-images/7.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 7, //4-2
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 7, //4-2
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 7, //4-2
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 7, //4-2
        imageSrc: "/levels-images/2.svg",
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 8, //9-5
        imageSrc: "/levels-images/15.svg",
        correct: false,
        text: "15",
        audioSrc: "/levels-audio/15.mp3",
      },
      {
        challengeId: 8, //9-5
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 8, //9-5
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 8, //9-5
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
    ]);
    // 4 challenges for addition 2
    await db.insert(schema.challenges).values([
      {
        id: 9,
        lessonId: 3, //Addition 2
        type: "SELECT",
        order: 1,
        question: "What is 10 + 3 ?",
      },
      {
        id: 10,
        lessonId: 3, //Addition 2
        type: "SELECT",
        order: 2,
        question: "What is 13 + 9 ?",
      },
      {
        id: 11,
        lessonId: 3, //Addition 2
        type: "SELECT",
        order: 3,
        question: "What is 56 + 4 ?",
      },
      {
        id: 12,
        lessonId: 3, //Addition 2
        type: "SELECT",
        order: 4,
        question: "What is 92 + 7 ?",
      },
    ]);
    // 16 challenge options for addition 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9, //10 + 3
        imageSrc: "/levels-images/23.svg",
        correct: false,
        text: "23",
        audioSrc: "/levels-audio/23.mp3",
      },
      {
        challengeId: 9, //10 + 3
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 9, //10 + 3
        imageSrc: "/levels-images/13.svg",
        correct: true,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
      },
      {
        challengeId: 9, //10 + 3
        imageSrc: "/levels-images/61.svg",
        correct: false,
        text: "61",
        audioSrc: "/levels-audio/61.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 10, // 13 + 9
        correct: true,
        text: "22",
        audioSrc: "/levels-audio/22.mp3",
        imageSrc: "/levels-images/22.svg",
      },
      {
        challengeId: 10, // 13 + 9
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
        imageSrc: "/levels-images/10.svg",
      },
      {
        challengeId: 10, // 13 + 9
        correct: false,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
        imageSrc: "/levels-images/21.svg",
      },
      {
        challengeId: 10, // 13 + 9
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
        imageSrc: "/levels-images/3.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 11, //56 + 4
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 11, //56 + 4
        imageSrc: "/levels-images/61.svg",
        correct: false,
        text: "61",
        audioSrc: "/levels-audio/61.mp3",
      },
      {
        challengeId: 11, //56 + 4
        imageSrc: "/levels-images/49.svg",
        correct: false,
        text: "49",
        audioSrc: "/levels-audio/49.mp3",
      },
      {
        challengeId: 11, //56 + 4
        imageSrc: "/levels-images/60.svg",
        correct: true,
        text: "60",
        audioSrc: "/levels-audio/60.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 12, //92 + 7
        imageSrc: "/levels-images/89.svg",
        correct: false,
        text: "89",
        audioSrc: "/levels-audio/89.mp3",
      },
      {
        challengeId: 12, //92 + 7
        imageSrc: "/levels-images/19.svg",
        correct: false,
        text: "19",
        audioSrc: "/levels-audio/19.mp3",
      },
      {
        challengeId: 12, //92 + 7
        imageSrc: "/levels-images/99.svg",
        correct: true,
        text: "99",
        audioSrc: "/levels-audio/99.mp3",
      },
      {
        challengeId: 12, //92 + 7
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
    ]);
    // 4 challenges for Subtraction 2
    await db.insert(schema.challenges).values([
      {
        id: 13,
        lessonId: 4, //Subtraction 2
        type: "SELECT",
        order: 1,
        question: "What is 13 - 4 ?",
      },
      {
        id: 14,
        lessonId: 4, //Subtraction 2
        type: "SELECT",
        order: 2,
        question: "What is 74 - 7 ?",
      },
      {
        id: 15,
        lessonId: 4, //Subtraction 2
        type: "SELECT",
        order: 3,
        question: "What is 40 - 2 ?",
      },
      {
        id: 16,
        lessonId: 4, //Subtraction 2
        type: "SELECT",
        order: 4,
        question: "What is 93 - 5 ?",
      },
    ]);
    // 16 challenge options for Subtraction 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 13, //13 - 4
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 13, //13 - 4
        imageSrc: "/levels-images/21.svg",
        correct: false,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
      },
      {
        challengeId: 13, //13 - 4
        imageSrc: "/levels-images/9.svg",
        correct: true,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 13, //13 - 4
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 14, // 74 - 7
        correct: true,
        text: "67",
        audioSrc: "/levels-audio/67.mp3",
        imageSrc: "/levels-images/67.svg",
      },
      {
        challengeId: 14, // 74 - 7
        correct: false,
        text: "64",
        audioSrc: "/levels-audio/64.mp3",
        imageSrc: "/levels-images/64.svg",
      },
      {
        challengeId: 14, // 74 - 7
        correct: false,
        text: "51",
        audioSrc: "/levels-audio/51.mp3",
        imageSrc: "/levels-images/51.svg",
      },
      {
        challengeId: 14, // 74 - 7
        correct: false,
        text: "7",
        audioSrc: "/levels-audio/70.mp3",
        imageSrc: "/levels-images/70.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 15, //40-2
        imageSrc: "/levels-images/43.svg",
        correct: false,
        text: "43",
        audioSrc: "/levels-audio/43.mp3",
      },
      {
        challengeId: 15, //40-2
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 15, //40-2
        imageSrc: "/levels-images/14.svg",
        correct: false,
        text: "14",
        audioSrc: "/levels-audio/14.mp3",
      },
      {
        challengeId: 15, //40-2
        imageSrc: "/levels-images/40.svg",
        correct: true,
        text: "40",
        audioSrc: "/levels-audio/40.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 16, //93 - 5
        imageSrc: "/levels-images/95.svg",
        correct: false,
        text: "95",
        audioSrc: "/levels-audio/95.mp3",
      },
      {
        challengeId: 16, //93 - 5
        imageSrc: "/levels-images/89.svg",
        correct: false,
        text: "89",
        audioSrc: "/levels-audio/89.mp3",
      },
      {
        challengeId: 16, //93 - 5
        imageSrc: "/levels-images/88.svg",
        correct: true,
        text: "88",
        audioSrc: "/levels-audio/88.mp3",
      },
      {
        challengeId: 16, //93 - 5
        imageSrc: "/levels-images/56.svg",
        correct: false,
        text: "56",
        audioSrc: "/levels-audio/56.mp3",
      },
    ]);

    // 7 lessons in unit 2 (Green only - spreadsheet) - (Add3, Add4, Add5, Sub3, Sub4, Sub5, Seq1)
    await db.insert(schema.lessons).values([
      {
        id: 5,
        unitId: 2, //Unit 2
        order: 1,
        title: "Addition 3",
      },
      {
        id: 6,
        unitId: 2, //Unit 2
        order: 2,
        title: "Subtraction 3",
      },
      {
        id: 7,
        unitId: 2, //Unit 2
        order: 3,
        title: "Addition 4",
      },
      {
        id: 8,
        unitId: 2, //Unit 2
        order: 4,
        title: "Subtraction 4",
      },
      {
        id: 9,
        unitId: 2, //Unit 2
        order: 5,
        title: "Addition 5",
      },
      {
        id: 10,
        unitId: 2, //Unit 2
        order: 6,
        title: "Subtraction 5",
      },
      {
        id: 11,
        unitId: 2, //Unit 2
        order: 7,
        title: "Sequence 1",
      },
    ]);
    // 5 challenges for addition 3
    await db.insert(schema.challenges).values([
      {
        id: 17,
        lessonId: 5, //Addition 3
        type: "SELECT",
        order: 1,
        question: "What is 18 + 30 ?",
      },
      {
        id: 18,
        lessonId: 5, //Addition 3
        type: "SELECT",
        order: 2,
        question: "What is 71 + 20 ?",
      },
      {
        id: 19,
        lessonId: 5, //Addition 3
        type: "SELECT",
        order: 3,
        question: "What is 35 + 42 ?",
      },
      {
        id: 20,
        lessonId: 5, //Addition 3
        type: "SELECT",
        order: 4,
        question: "What is 81 + 18 ?",
      },
      {
        id: 21,
        lessonId: 5, //Addition 3
        type: "SELECT",
        order: 5,
        question: "What is 12 + 16 ?",
      },
    ]);
    // 20 challenge options for addition 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 17, //18 + 30
        imageSrc: "/levels-images/38.svg",
        correct: false,
        text: "38",
        audioSrc: "/levels-audio/38.mp3",
      },
      {
        challengeId: 17, //18 + 30
        imageSrc: "/levels-images/44.svg",
        correct: false,
        text: "44",
        audioSrc: "/levels-audio/44.mp3",
      },
      {
        challengeId: 17, //18 + 30
        imageSrc: "/levels-images/48.svg",
        correct: true,
        text: "48",
        audioSrc: "/levels-audio/48.mp3",
      },
      {
        challengeId: 17, //18 + 30
        imageSrc: "/levels-images/52.svg",
        correct: false,
        text: "52",
        audioSrc: "/levels-audio/52.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 18, // 71 + 20
        correct: true,
        text: "91",
        audioSrc: "/levels-audio/91.mp3",
        imageSrc: "/levels-images/91.svg",
      },
      {
        challengeId: 18, // 71 + 20
        correct: false,
        text: "89",
        audioSrc: "/levels-audio/89.mp3",
        imageSrc: "/levels-images/89.svg",
      },
      {
        challengeId: 18, // 71 + 20
        correct: false,
        text: "100",
        audioSrc: "/levels-audio/100.mp3",
        imageSrc: "/levels-images/100.svg",
      },
      {
        challengeId: 18, // 71 + 20
        correct: false,
        text: "95",
        audioSrc: "/levels-audio/95.mp3",
        imageSrc: "/levels-images/95.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 19, //35 + 42
        imageSrc: "/levels-images/70.svg",
        correct: false,
        text: "70",
        audioSrc: "/levels-audio/70.mp3",
      },
      {
        challengeId: 19, //35 + 42
        imageSrc: "/levels-images/79.svg",
        correct: false,
        text: "79",
        audioSrc: "/levels-audio/79.mp3",
      },
      {
        challengeId: 19, //35 + 42
        imageSrc: "/levels-images/31.svg",
        correct: false,
        text: "31",
        audioSrc: "/levels-audio/31.mp3",
      },
      {
        challengeId: 19, //35 + 42
        imageSrc: "/levels-images/77.svg",
        correct: true,
        text: "77",
        audioSrc: "/levels-audio/77.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 20, //81 + 18
        imageSrc: "/levels-images/89.svg",
        correct: false,
        text: "89",
        audioSrc: "/levels-audio/89.mp3",
      },
      {
        challengeId: 20, //81 + 18
        imageSrc: "/levels-images/95.svg",
        correct: false,
        text: "95",
        audioSrc: "/levels-audio/95.mp3",
      },
      {
        challengeId: 20, //81 + 18
        imageSrc: "/levels-images/99.svg",
        correct: true,
        text: "99",
        audioSrc: "/levels-audio/99.mp3",
      },
      {
        challengeId: 20, //81 + 18
        imageSrc: "/levels-images/86.svg",
        correct: false,
        text: "86",
        audioSrc: "/levels-audio/86.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 21, //12 + 16
        imageSrc: "/levels-images/18.svg",
        correct: false,
        text: "18",
        audioSrc: "/levels-audio/18.mp3",
      },
      {
        challengeId: 21, //12 + 16
        imageSrc: "/levels-images/26.svg",
        correct: false,
        text: "26",
        audioSrc: "/levels-audio/26.mp3",
      },
      {
        challengeId: 21, //12 + 16
        imageSrc: "/levels-images/28.svg",
        correct: true,
        text: "28",
        audioSrc: "/levels-audio/28.mp3",
      },
      {
        challengeId: 21, //12 + 16
        imageSrc: "/levels-images/31.svg",
        correct: false,
        text: "31",
        audioSrc: "/levels-audio/31.mp3",
      },
    ]);
    // 5 challenges for Subtraction 3
    await db.insert(schema.challenges).values([
      {
        id: 22,
        lessonId: 6, //Subtraction 3
        type: "SELECT",
        order: 1,
        question: "What is 18 - 10 ?",
      },
      {
        id: 23,
        lessonId: 6, //Subtraction 3
        type: "SELECT",
        order: 2,
        question: "What is 71 - 19 ?",
      },
      {
        id: 24,
        lessonId: 6, //Subtraction 3
        type: "SELECT",
        order: 3,
        question: "What is 35 - 21 ?",
      },
      {
        id: 25,
        lessonId: 6, //Subtraction 3
        type: "SELECT",
        order: 4,
        question: "What is 81 - 36 ?",
      },
      {
        id: 26,
        lessonId: 6, //Subtraction 3
        type: "SELECT",
        order: 5,
        question: "What is 12 - 11 ?",
      },
    ]);
    // 20 challenge options for Subtraction 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 22, //18 - 10
        imageSrc: "/levels-images/12.svg",
        correct: false,
        text: "12",
        audioSrc: "/levels-audio/12.mp3",
      },
      {
        challengeId: 22, //18 - 10
        imageSrc: "/levels-images/16.svg",
        correct: false,
        text: "16",
        audioSrc: "/levels-audio/16.mp3",
      },
      {
        challengeId: 22, //18 - 10
        imageSrc: "/levels-images/8.svg",
        correct: true,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 22, //18 - 10
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 23, // 71 - 19
        correct: true,
        text: "52",
        audioSrc: "/levels-audio/52.mp3",
        imageSrc: "/levels-images/52.svg",
      },
      {
        challengeId: 23, // 71 - 19
        correct: false,
        text: "57",
        audioSrc: "/levels-audio/57.mp3",
        imageSrc: "/levels-images/57.svg",
      },
      {
        challengeId: 23, // 71 - 19
        correct: false,
        text: "50",
        audioSrc: "/levels-audio/50.mp3",
        imageSrc: "/levels-images/50.svg",
      },
      {
        challengeId: 23, // 71 - 19
        correct: false,
        text: "66",
        audioSrc: "/levels-audio/66.mp3",
        imageSrc: "/levels-images/66.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 24, //35 -21
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 24, //35 -21
        imageSrc: "/levels-images/19.svg",
        correct: false,
        text: "19",
        audioSrc: "/levels-audio/19.mp3",
      },
      {
        challengeId: 24, //35 -21
        imageSrc: "/levels-images/24.svg",
        correct: false,
        text: "24",
        audioSrc: "/levels-audio/24.mp3",
      },
      {
        challengeId: 24, //35 -21
        imageSrc: "/levels-images/14.svg",
        correct: true,
        text: "14",
        audioSrc: "/levels-audio/14.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 25, //81 - 36
        imageSrc: "/levels-images/54.svg",
        correct: false,
        text: "54",
        audioSrc: "/levels-audio/54.mp3",
      },
      {
        challengeId: 25, //81 - 36
        imageSrc: "/levels-images/44.svg",
        correct: false,
        text: "44",
        audioSrc: "/levels-audio/44.mp3",
      },
      {
        challengeId: 25, //81 - 36
        imageSrc: "/levels-images/45.svg",
        correct: true,
        text: "45",
        audioSrc: "/levels-audio/45.mp3",
      },
      {
        challengeId: 25, //81 - 36
        imageSrc: "/levels-images/38.svg",
        correct: false,
        text: "38",
        audioSrc: "/levels-audio/38.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 26, //12 - 11
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
      {
        challengeId: 26, //12 - 11
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 26, //12 - 11
        imageSrc: "/levels-images/1.svg",
        correct: true,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 26, //12 - 11
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
    ]);
    // 5 challenges for addition 4
    await db.insert(schema.challenges).values([
      {
        id: 27,
        lessonId: 7, //Addition 4
        type: "SELECT",
        order: 1,
        question: "What is 180 + 30 ?",
      },
      {
        id: 28,
        lessonId: 7, //Addition 4
        type: "SELECT",
        order: 2,
        question: "What is 710 + 23 ?",
      },
      {
        id: 29,
        lessonId: 7, //Addition 4
        type: "SELECT",
        order: 3,
        question: "What is 351 + 42 ?",
      },
      {
        id: 30,
        lessonId: 7, //Addition 4
        type: "SELECT",
        order: 4,
        question: "What is 812 + 12 ?",
      },
      {
        id: 31,
        lessonId: 7, //Addition 4
        type: "SELECT",
        order: 5,
        question: "What is 129 + 16 ?",
      },
    ]);
    // 20 challenge options for addition 4
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 27, //180 + 30
        imageSrc: "/levels-images/200.svg",
        correct: false,
        text: "200",
        audioSrc: "/levels-audio/200.mp3",
      },
      {
        challengeId: 27, //180 + 30
        imageSrc: "/levels-images/310.svg",
        correct: false,
        text: "310",
        audioSrc: "/levels-audio/310.mp3",
      },
      {
        challengeId: 27, //180 + 30
        imageSrc: "/levels-images/210.svg",
        correct: true,
        text: "210",
        audioSrc: "/levels-audio/210.mp3",
      },
      {
        challengeId: 27, //180 + 30
        imageSrc: "/levels-images/100.svg",
        correct: false,
        text: "100",
        audioSrc: "/levels-audio/100.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 28, // 710 + 23
        correct: true,
        text: "733",
        audioSrc: "/levels-audio/733.mp3",
        imageSrc: "/levels-images/733.svg",
      },
      {
        challengeId: 28, // 710 + 23
        correct: false,
        text: "749",
        audioSrc: "/levels-audio/749.mp3",
        imageSrc: "/levels-images/749.svg",
      },
      {
        challengeId: 28, // 710 + 23
        correct: false,
        text: "190",
        audioSrc: "/levels-audio/190.mp3",
        imageSrc: "/levels-images/190.svg",
      },
      {
        challengeId: 28, // 710 + 23
        correct: false,
        text: "740",
        audioSrc: "/levels-audio/740.mp3",
        imageSrc: "/levels-images/740.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 29, //351 + 42
        imageSrc: "/levels-images/721.svg",
        correct: false,
        text: "721",
        audioSrc: "/levels-audio/721.mp3",
      },
      {
        challengeId: 29, //351 + 42
        imageSrc: "/levels-images/290.svg",
        correct: false,
        text: "290",
        audioSrc: "/levels-audio/290.mp3",
      },
      {
        challengeId: 29, //351 + 42
        imageSrc: "/levels-images/390.svg",
        correct: false,
        text: "390",
        audioSrc: "/levels-audio/390.mp3",
      },
      {
        challengeId: 29, //351 + 42
        imageSrc: "/levels-images/393.svg",
        correct: true,
        text: "393",
        audioSrc: "/levels-audio/393.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 30, //812 + 12
        imageSrc: "/levels-images/893.svg",
        correct: false,
        text: "893",
        audioSrc: "/levels-audio/893.mp3",
      },
      {
        challengeId: 30, //812 + 12
        imageSrc: "/levels-images/851.svg",
        correct: false,
        text: "851",
        audioSrc: "/levels-audio/851.mp3",
      },
      {
        challengeId: 30, //812 + 12
        imageSrc: "/levels-images/824.svg",
        correct: true,
        text: "824",
        audioSrc: "/levels-audio/824.mp3",
      },
      {
        challengeId: 30, //812 + 12
        imageSrc: "/levels-images/826.svg",
        correct: false,
        text: "826",
        audioSrc: "/levels-audio/826.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 31, //129 + 16
        imageSrc: "/levels-images/140.svg",
        correct: false,
        text: "140",
        audioSrc: "/levels-audio/140.mp3",
      },
      {
        challengeId: 31, //129 + 16
        imageSrc: "/levels-images/151.svg",
        correct: false,
        text: "151",
        audioSrc: "/levels-audio/151.mp3",
      },
      {
        challengeId: 31, //129 + 16
        imageSrc: "/levels-images/145.svg",
        correct: true,
        text: "145",
        audioSrc: "/levels-audio/145.mp3",
      },
      {
        challengeId: 31, //129 + 16
        imageSrc: "/levels-images/719.svg",
        correct: false,
        text: "719",
        audioSrc: "/levels-audio/719.mp3",
      },
    ]);
    // 5 challenges for Subtraction 4
    await db.insert(schema.challenges).values([
      {
        id: 32,
        lessonId: 8, //Subtraction 4
        type: "SELECT",
        order: 1,
        question: "What is 188 - 13 ?",
      },
      {
        id: 33,
        lessonId: 8, //Subtraction 4
        type: "SELECT",
        order: 2,
        question: "What is 711 - 19 ?",
      },
      {
        id: 34,
        lessonId: 8, //Subtraction 4
        type: "SELECT",
        order: 3,
        question: "What is 353 - 21 ?",
      },
      {
        id: 35,
        lessonId: 8, //Subtraction 4
        type: "SELECT",
        order: 4,
        question: "What is 816 - 36 ?",
      },
      {
        id: 36,
        lessonId: 8, //Subtraction 4
        type: "SELECT",
        order: 5,
        question: "What is 120 - 11 ?",
      },
    ]);
    // 20 challenge options for Subtraction 4
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 32, //188 - 13
        imageSrc: "/levels-images/110.svg",
        correct: false,
        text: "110",
        audioSrc: "/levels-audio/110.mp3",
      },
      {
        challengeId: 32, //188 - 13
        imageSrc: "/levels-images/121.svg",
        correct: false,
        text: "121",
        audioSrc: "/levels-audio/121.mp3",
      },
      {
        challengeId: 32, //188 - 13
        imageSrc: "/levels-images/175.svg",
        correct: true,
        text: "175",
        audioSrc: "/levels-audio/175.mp3",
      },
      {
        challengeId: 32, //188 - 13
        imageSrc: "/levels-images/185.svg",
        correct: false,
        text: "185",
        audioSrc: "/levels-audio/185.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 33, // 711 - 19
        correct: true,
        text: "692",
        audioSrc: "/levels-audio/692.mp3",
        imageSrc: "/levels-images/692.svg",
      },
      {
        challengeId: 33, // 711 - 19
        correct: false,
        text: "670",
        audioSrc: "/levels-audio/670.mp3",
        imageSrc: "/levels-images/670.svg",
      },
      {
        challengeId: 33, // 711 - 19
        correct: false,
        text: "694",
        audioSrc: "/levels-audio/694.mp3",
        imageSrc: "/levels-images/694.svg",
      },
      {
        challengeId: 33, // 711 - 19
        correct: false,
        text: "667",
        audioSrc: "/levels-audio/667.mp3",
        imageSrc: "/levels-images/667.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 34, //353 - 21
        imageSrc: "/levels-images/322.svg",
        correct: false,
        text: "322",
        audioSrc: "/levels-audio/322.mp3",
      },
      {
        challengeId: 34, //353 - 21
        imageSrc: "/levels-images/341.svg",
        correct: false,
        text: "341",
        audioSrc: "/levels-audio/341.mp3",
      },
      {
        challengeId: 34, //353 - 21
        imageSrc: "/levels-images/441.svg",
        correct: false,
        text: "441",
        audioSrc: "/levels-audio/441.mp3",
      },
      {
        challengeId: 34, //353 - 21
        imageSrc: "/levels-images/332.svg",
        correct: true,
        text: "332",
        audioSrc: "/levels-audio/332.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 35, //816 - 36
        imageSrc: "/levels-images/898.svg",
        correct: false,
        text: "898",
        audioSrc: "/levels-audio/898.mp3",
      },
      {
        challengeId: 35, //816 - 36
        imageSrc: "/levels-images/778.svg",
        correct: false,
        text: "778",
        audioSrc: "/levels-audio/778.mp3",
      },
      {
        challengeId: 35, //816 - 36
        imageSrc: "/levels-images/780.svg",
        correct: true,
        text: "780",
        audioSrc: "/levels-audio/780.mp3",
      },
      {
        challengeId: 35, //816 - 36
        imageSrc: "/levels-images/616.svg",
        correct: false,
        text: "616",
        audioSrc: "/levels-audio/616.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 36, //120 - 11
        imageSrc: "/levels-images/111.svg",
        correct: false,
        text: "111",
        audioSrc: "/levels-audio/111.mp3",
      },
      {
        challengeId: 36, //120 - 11
        imageSrc: "/levels-images/210.svg",
        correct: false,
        text: "210",
        audioSrc: "/levels-audio/210.mp3",
      },
      {
        challengeId: 36, //120 - 11
        imageSrc: "/levels-images/109.svg",
        correct: true,
        text: "109",
        audioSrc: "/levels-audio/109.mp3",
      },
      {
        challengeId: 36, //120 - 11
        imageSrc: "/levels-images/410.svg",
        correct: false,
        text: "410",
        audioSrc: "/levels-audio/410.mp3",
      },
    ]);
    // 5 challenges for addition 5
    await db.insert(schema.challenges).values([
      {
        id: 37,
        lessonId: 9, //Addition 5
        type: "SELECT",
        order: 1,
        question: "What is 180 + 130 ?",
      },
      {
        id: 38,
        lessonId: 9, //Addition 5
        type: "SELECT",
        order: 2,
        question: "What is 710 + 223 ?",
      },
      {
        id: 39,
        lessonId: 9, //Addition 5
        type: "SELECT",
        order: 3,
        question: "What is 351 + 242 ?",
      },
      {
        id: 40,
        lessonId: 9, //Addition 5
        type: "SELECT",
        order: 4,
        question: "What is 812 + 112 ?",
      },
      {
        id: 41,
        lessonId: 9, //Addition 5
        type: "SELECT",
        order: 5,
        question: "What is 129 + 816 ?",
      },
    ]);
    // 20 challenge options for addition 5
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 37, //180 + 130
        imageSrc: "/levels-images/300.svg",
        correct: false,
        text: "300",
        audioSrc: "/levels-audio/300.mp3",
      },
      {
        challengeId: 37, //180 + 130
        imageSrc: "/levels-images/210.svg",
        correct: false,
        text: "210",
        audioSrc: "/levels-audio/210.mp3",
      },
      {
        challengeId: 37, //180 + 130
        imageSrc: "/levels-images/310.svg",
        correct: true,
        text: "310",
        audioSrc: "/levels-audio/310.mp3",
      },
      {
        challengeId: 37, //180 + 130
        imageSrc: "/levels-images/300.svg",
        correct: false,
        text: "300",
        audioSrc: "/levels-audio/300.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 38, // 710 + 223
        correct: true,
        text: "933",
        audioSrc: "/levels-audio/933.mp3",
        imageSrc: "/levels-images/933.svg",
      },
      {
        challengeId: 38, // 710 + 223
        correct: false,
        text: "949",
        audioSrc: "/levels-audio/949.mp3",
        imageSrc: "/levels-images/949.svg",
      },
      {
        challengeId: 38, // 710 + 223
        correct: false,
        text: "190",
        audioSrc: "/levels-audio/190.mp3",
        imageSrc: "/levels-images/190.svg",
      },
      {
        challengeId: 38, // 710 + 223
        correct: false,
        text: "840",
        audioSrc: "/levels-audio/840.mp3",
        imageSrc: "/levels-images/840.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 39, //351 + 242
        imageSrc: "/levels-images/590.svg",
        correct: false,
        text: "590",
        audioSrc: "/levels-audio/590.mp3",
      },
      {
        challengeId: 39, //351 + 242
        imageSrc: "/levels-images/600.svg",
        correct: false,
        text: "600",
        audioSrc: "/levels-audio/600.mp3",
      },
      {
        challengeId: 39, //351 + 242
        imageSrc: "/levels-images/612.svg",
        correct: false,
        text: "612",
        audioSrc: "/levels-audio/612.mp3",
      },
      {
        challengeId: 39, //351 + 242
        imageSrc: "/levels-images/593.svg",
        correct: true,
        text: "593",
        audioSrc: "/levels-audio/593.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 40, //812 + 112
        imageSrc: "/levels-images/893.svg",
        correct: false,
        text: "893",
        audioSrc: "/levels-audio/893.mp3",
      },
      {
        challengeId: 40, //812 + 112
        imageSrc: "/levels-images/920.svg",
        correct: false,
        text: "920",
        audioSrc: "/levels-audio/920.mp3",
      },
      {
        challengeId: 40, //812 + 112
        imageSrc: "/levels-images/924.svg",
        correct: true,
        text: "924",
        audioSrc: "/levels-audio/924.mp3",
      },
      {
        challengeId: 40, //812 + 112
        imageSrc: "/levels-images/926.svg",
        correct: false,
        text: "926",
        audioSrc: "/levels-audio/926.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 41, //129 + 816
        imageSrc: "/levels-images/940.svg",
        correct: false,
        text: "940",
        audioSrc: "/levels-audio/940.mp3",
      },
      {
        challengeId: 41, //129 + 816
        imageSrc: "/levels-images/950.svg",
        correct: false,
        text: "950",
        audioSrc: "/levels-audio/950.mp3",
      },
      {
        challengeId: 41, //129 + 816
        imageSrc: "/levels-images/945.svg",
        correct: true,
        text: "945",
        audioSrc: "/levels-audio/945.mp3",
      },
      {
        challengeId: 41, //129 + 816
        imageSrc: "/levels-images/719.svg",
        correct: false,
        text: "719",
        audioSrc: "/levels-audio/719.mp3",
      },
    ]);
    // 5 challenges for Subtraction 5
    await db.insert(schema.challenges).values([
      {
        id: 42,
        lessonId: 10, //Subtraction 5
        type: "SELECT",
        order: 1,
        question: "What is 288 - 113 ?",
      },
      {
        id: 43,
        lessonId: 10, //Subtraction 5
        type: "SELECT",
        order: 2,
        question: "What is 731 - 192 ?",
      },
      {
        id: 44,
        lessonId: 10, //Subtraction 5
        type: "SELECT",
        order: 3,
        question: "What is 553 - 231 ?",
      },
      {
        id: 45,
        lessonId: 10, //Subtraction 5
        type: "SELECT",
        order: 4,
        question: "What is 816 - 360 ?",
      },
      {
        id: 46,
        lessonId: 10, //Subtraction 5
        type: "SELECT",
        order: 5,
        question: "What is 120 - 111 ?",
      },
    ]);
    // 20 challenge options for Subtraction 5
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 42, //288 - 113
        imageSrc: "/levels-images/110.svg",
        correct: false,
        text: "110",
        audioSrc: "/levels-audio/110.mp3",
      },
      {
        challengeId: 42, //288 - 113
        imageSrc: "/levels-images/165.svg",
        correct: false,
        text: "165",
        audioSrc: "/levels-audio/165.mp3",
      },
      {
        challengeId: 42, //288 - 113
        imageSrc: "/levels-images/175.svg",
        correct: true,
        text: "175",
        audioSrc: "/levels-audio/175.mp3",
      },
      {
        challengeId: 42, //288 - 113
        imageSrc: "/levels-images/185.svg",
        correct: false,
        text: "185",
        audioSrc: "/levels-audio/185.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 43, // 731 - 192
        correct: true,
        text: "539",
        audioSrc: "/levels-audio/539.mp3",
        imageSrc: "/levels-images/539.svg",
      },
      {
        challengeId: 43, // 731 - 192
        correct: false,
        text: "549",
        audioSrc: "/levels-audio/549.mp3",
        imageSrc: "/levels-images/549.svg",
      },
      {
        challengeId: 43, // 731 - 192
        correct: false,
        text: "621",
        audioSrc: "/levels-audio/621.mp3",
        imageSrc: "/levels-images/621.svg",
      },
      {
        challengeId: 43, // 731 - 192
        correct: false,
        text: "667",
        audioSrc: "/levels-audio/667.mp3",
        imageSrc: "/levels-images/667.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 44, //553 - 231
        imageSrc: "/levels-images/322.svg",
        correct: true,
        text: "322",
        audioSrc: "/levels-audio/322.mp3",
      },
      {
        challengeId: 44, //553 - 231
        imageSrc: "/levels-images/312.svg",
        correct: false,
        text: "312",
        audioSrc: "/levels-audio/312.mp3",
      },
      {
        challengeId: 44, //553 - 231
        imageSrc: "/levels-images/299.svg",
        correct: false,
        text: "299",
        audioSrc: "/levels-audio/299.mp3",
      },
      {
        challengeId: 44, //553 - 231
        imageSrc: "/levels-images/302.svg",
        correct: false,
        text: "302",
        audioSrc: "/levels-audio/302.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 45, //816 - 360
        imageSrc: "/levels-images/412.svg",
        correct: false,
        text: "412",
        audioSrc: "/levels-audio/412.mp3",
      },
      {
        challengeId: 45, //816 - 360
        imageSrc: "/levels-images/480.svg",
        correct: false,
        text: "480",
        audioSrc: "/levels-audio/480.mp3",
      },
      {
        challengeId: 45, //816 - 360
        imageSrc: "/levels-images/456.svg",
        correct: true,
        text: "456",
        audioSrc: "/levels-audio/456.mp3",
      },
      {
        challengeId: 45, //816 - 360
        imageSrc: "/levels-images/616.svg",
        correct: false,
        text: "616",
        audioSrc: "/levels-audio/616.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 46, //120 - 111
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
      {
        challengeId: 46, //120 - 111
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 46, //120 - 111
        imageSrc: "/levels-images/9.svg",
        correct: true,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 46, //120 - 111
        imageSrc: "/levels-images/40.svg",
        correct: false,
        text: "40",
        audioSrc: "/levels-audio/40.mp3",
      },
    ]);
    // 5 challenges for Sequence 1
    await db.insert(schema.challenges).values([
      {
        id: 47,
        lessonId: 11, //Sequence 1
        type: "SELECT",
        order: 1,
        question: "Fill in the missing numbers: 1, 2, 3, _, 5, 6",
      },
      {
        id: 48,
        lessonId: 11, //Sequence 1
        type: "SELECT",
        order: 2,
        question: "Fill in the missing numbers: 11, 12 ,_ , 14, 15",
      },
      {
        id: 49,
        lessonId: 11, //Sequence 1
        type: "SELECT",
        order: 3,
        question: "Fill in the missing numbers: 17, 16, _, 14, 13",
      },
      {
        id: 50,
        lessonId: 11, //Sequence 1
        type: "SELECT",
        order: 4,
        question: "Fill in the missing numbers: 28, 29, _, 31, 32",
      },
      {
        id: 51,
        lessonId: 11, //Sequence 1
        type: "SELECT",
        order: 5,
        question: "Fill in the missing numbers: 82, 81, _, 79, 78",
      },
    ]);
    // 20 challenge options for Sequence 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 47, //1, 2, 3, _, 5, 6
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 47, //1, 2, 3, _, 5, 6
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
      {
        challengeId: 47, //1, 2, 3, _, 5, 6
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 47, //1, 2, 3, _, 5, 6
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 48, // 11, 12 ,_ , 14, 15
        correct: true,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
        imageSrc: "/levels-images/13.svg",
      },
      {
        challengeId: 48, // 11, 12 ,_ , 14, 15
        correct: false,
        text: "12",
        audioSrc: "/levels-audio/12.mp3",
        imageSrc: "/levels-images/12.svg",
      },
      {
        challengeId: 48, // 11, 12 ,_ , 14, 15
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
        imageSrc: "/levels-images/10.svg",
      },
      {
        challengeId: 48, // 11, 12 ,_ , 14, 15
        correct: false,
        text: "14",
        audioSrc: "/levels-audio/14.mp3",
        imageSrc: "/levels-images/14.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 49, //17, 16, _, 14, 13
        imageSrc: "/levels-images/13.svg",
        correct: false,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
      },
      {
        challengeId: 49, //17, 16, _, 14, 13
        imageSrc: "/levels-images/16.svg",
        correct: false,
        text: "16",
        audioSrc: "/levels-audio/16.mp3",
      },
      {
        challengeId: 49, //17, 16, _, 14, 13
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 49, //17, 16, _, 14, 13
        imageSrc: "/levels-images/15.svg",
        correct: true,
        text: "15",
        audioSrc: "/levels-audio/15.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 50, //28, 29, _, 31, 32
        imageSrc: "/levels-images/21.svg",
        correct: false,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
      },
      {
        challengeId: 50, //28, 29, _, 31, 32
        imageSrc: "/levels-images/29.svg",
        correct: false,
        text: "29",
        audioSrc: "/levels-audio/29.mp3",
      },
      {
        challengeId: 50, //28, 29, _, 31, 32
        imageSrc: "/levels-images/30.svg",
        correct: true,
        text: "30",
        audioSrc: "/levels-audio/30.mp3",
      },
      {
        challengeId: 50, //28, 29, _, 31, 32
        imageSrc: "/levels-images/37.svg",
        correct: false,
        text: "37",
        audioSrc: "/levels-audio/37.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 51, //82, 81, _, 79, 78
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
      {
        challengeId: 51, //82, 81, _, 79, 78
        imageSrc: "/levels-images/81.svg",
        correct: false,
        text: "81",
        audioSrc: "/levels-audio/81.mp3",
      },
      {
        challengeId: 51, //82, 81, _, 79, 78
        imageSrc: "/levels-images/80.svg",
        correct: true,
        text: "80",
        audioSrc: "/levels-audio/80.mp3",
      },
      {
        challengeId: 51, //82, 81, _, 79, 78
        imageSrc: "/levels-images/69.svg",
        correct: false,
        text: "69",
        audioSrc: "/levels-audio/69.mp3",
      },
    ]);

    // 4 lessons in unit 3 (Green only - spreadsheet) - (Add6, Sub6, Mul1, Mul2)
    await db.insert(schema.lessons).values([
      {
        id: 12,
        unitId: 3, //Unit 3
        order: 1,
        title: "Addition 6",
      },
      {
        id: 13,
        unitId: 3, //Unit 3
        order: 2,
        title: "Subtraction 6",
      },
      {
        id: 14,
        unitId: 3, //Unit 3
        order: 3,
        title: "Multiplication 1",
      },
      {
        id: 15,
        unitId: 3, //Unit 3
        order: 4,
        title: "Multiplication 2",
      },
    ]);
    // 6 challenges for addition 6
    await db.insert(schema.challenges).values([
      {
        id: 52,
        lessonId: 12, //Addition 6
        type: "SELECT",
        order: 1,
        question: "What is the missing number: 10 + _ = 34 ?",
      },
      {
        id: 53,
        lessonId: 12, //Addition 6
        type: "SELECT",
        order: 2,
        question: "What is the missing number: _ + 5 = 14 ?",
      },
      {
        id: 54,
        lessonId: 12, //Addition 6
        type: "SELECT",
        order: 3,
        question: "What is the missing number: 190 + _ = 387 ?",
      },
      {
        id: 55,
        lessonId: 12, //Addition 6
        type: "SELECT",
        order: 4,
        question: "What is the missing number: 610 + 78 = _ ?",
      },
      {
        id: 56,
        lessonId: 12, //Addition 6
        type: "SELECT",
        order: 5,
        question: "What is the missing number: _ + 467 = 500 ?",
      },
      {
        id: 57,
        lessonId: 12, //Addition 6
        type: "SELECT",
        order: 6,
        question: "What is the missing number: 111 + _ = 342 ?",
      },
    ]);
    // 24 challenge options for addition 6
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 52, //10 + _ = 34
        imageSrc: "/levels-images/38.svg",
        correct: false,
        text: "38",
        audioSrc: "/levels-audio/38.mp3",
      },
      {
        challengeId: 52, //10 + _ = 34
        imageSrc: "/levels-images/44.svg",
        correct: false,
        text: "44",
        audioSrc: "/levels-audio/44.mp3",
      },
      {
        challengeId: 52, //10 + _ = 34
        imageSrc: "/levels-images/34.svg",
        correct: true,
        text: "34",
        audioSrc: "/levels-audio/34.mp3",
      },
      {
        challengeId: 52, //10 + _ = 34
        imageSrc: "/levels-images/52.svg",
        correct: false,
        text: "52",
        audioSrc: "/levels-audio/52.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 53, //  _ + 5 = 14
        correct: true,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
        imageSrc: "/levels-images/9.svg",
      },
      {
        challengeId: 53, //  _ + 5 = 14
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
        imageSrc: "/levels-images/8.svg",
      },
      {
        challengeId: 53, //  _ + 5 = 14
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
        imageSrc: "/levels-images/10.svg",
      },
      {
        challengeId: 53, //  _ + 5 = 14
        correct: false,
        text: "95",
        audioSrc: "/levels-audio/95.mp3",
        imageSrc: "/levels-images/95.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 54, //190 + _ = 387
        imageSrc: "/levels-images/164.svg",
        correct: false,
        text: "164",
        audioSrc: "/levels-audio/164.mp3",
      },
      {
        challengeId: 54, //190 + _ = 387
        imageSrc: "/levels-images/79.svg",
        correct: false,
        text: "79",
        audioSrc: "/levels-audio/79.mp3",
      },
      {
        challengeId: 54, //190 + _ = 387
        imageSrc: "/levels-images/190.svg",
        correct: false,
        text: "190",
        audioSrc: "/levels-audio/190.mp3",
      },
      {
        challengeId: 54, //190 + _ = 387
        imageSrc: "/levels-images/197.svg",
        correct: true,
        text: "197",
        audioSrc: "/levels-audio/197.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 55, //610 + 78 = _
        imageSrc: "/levels-images/890.svg",
        correct: false,
        text: "890",
        audioSrc: "/levels-audio/890.mp3",
      },
      {
        challengeId: 55, //610 + 78 = _
        imageSrc: "/levels-images/950.svg",
        correct: false,
        text: "950",
        audioSrc: "/levels-audio/950.mp3",
      },
      {
        challengeId: 55, //610 + 78 = _
        imageSrc: "/levels-images/688.svg",
        correct: true,
        text: "688",
        audioSrc: "/levels-audio/688.mp3",
      },
      {
        challengeId: 55, //610 + 78 = _
        imageSrc: "/levels-images/860.svg",
        correct: false,
        text: "860",
        audioSrc: "/levels-audio/860.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 56, //_ + 467 = 500
        imageSrc: "/levels-images/18.svg",
        correct: false,
        text: "18",
        audioSrc: "/levels-audio/18.mp3",
      },
      {
        challengeId: 56, //_ + 467 = 500
        imageSrc: "/levels-images/26.svg",
        correct: false,
        text: "26",
        audioSrc: "/levels-audio/26.mp3",
      },
      {
        challengeId: 56, //_ + 467 = 500
        imageSrc: "/levels-images/33.svg",
        correct: true,
        text: "33",
        audioSrc: "/levels-audio/33.mp3",
      },
      {
        challengeId: 56, //_ + 467 = 500
        imageSrc: "/levels-images/31.svg",
        correct: false,
        text: "31",
        audioSrc: "/levels-audio/31.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 57, //111 + _ = 342
        imageSrc: "/levels-images/189.svg",
        correct: false,
        text: "189",
        audioSrc: "/levels-audio/189.mp3",
      },
      {
        challengeId: 57, //111 + _ = 342
        imageSrc: "/levels-images/260.svg",
        correct: false,
        text: "260",
        audioSrc: "/levels-audio/260.mp3",
      },
      {
        challengeId: 57, //111 + _ = 342
        imageSrc: "/levels-images/231.svg",
        correct: true,
        text: "231",
        audioSrc: "/levels-audio/231.mp3",
      },
      {
        challengeId: 57, //111 + _ = 342
        imageSrc: "/levels-images/31.svg",
        correct: false,
        text: "31",
        audioSrc: "/levels-audio/31.mp3",
      },
    ]);
    // 6 challenges for Subtraction 6
    await db.insert(schema.challenges).values([
      {
        id: 58,
        lessonId: 13, //Subtraction 6
        type: "SELECT",
        order: 1,
        question: "What is the missing number: _ - 467 = 390 ?",
      },
      {
        id: 59,
        lessonId: 13, //Subtraction 6
        type: "SELECT",
        order: 2,
        question: "What is the missing number: _ - 195 = 105 ?",
      },
      {
        id: 60,
        lessonId: 13, //Subtraction 6
        type: "SELECT",
        order: 3,
        question: "What is the missing number: _ - 267 = 500 ?",
      },
      {
        id: 61,
        lessonId: 13, //Subtraction 6
        type: "SELECT",
        order: 4,
        question: "What is the missing number: 167 - 124 = _ ?",
      },
      {
        id: 62,
        lessonId: 13, //Subtraction 6
        type: "SELECT",
        order: 5,
        question: "What is the missing number: 452 - _ = 350 ?",
      },
      {
        id: 63,
        lessonId: 13, //Subtraction 6
        type: "SELECT",
        order: 6,
        question: "What is the missing number: 873 - 467 = _ ?",
      },
    ]);
    // 24 challenge options for Subtraction 6
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 58, //_ - 467 = 390
        imageSrc: "/levels-images/120.svg",
        correct: false,
        text: "120",
        audioSrc: "/levels-audio/120.mp3",
      },
      {
        challengeId: 58, //_ - 467 = 390
        imageSrc: "/levels-images/611.svg",
        correct: false,
        text: "611",
        audioSrc: "/levels-audio/611.mp3",
      },
      {
        challengeId: 58, //_ - 467 = 390
        imageSrc: "/levels-images/857.svg",
        correct: true,
        text: "857",
        audioSrc: "/levels-audio/857.mp3",
      },
      {
        challengeId: 58, //_ - 467 = 390
        imageSrc: "/levels-images/841.svg",
        correct: false,
        text: "841",
        audioSrc: "/levels-audio/841.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 59, // _ - 195 = 105
        correct: true,
        text: "300",
        audioSrc: "/levels-audio/300.mp3",
        imageSrc: "/levels-images/300.svg",
      },
      {
        challengeId: 59, // _ - 195 = 105
        correct: false,
        text: "305",
        audioSrc: "/levels-audio/305.mp3",
        imageSrc: "/levels-images/305.svg",
      },
      {
        challengeId: 59, // _ - 195 = 105
        correct: false,
        text: "500",
        audioSrc: "/levels-audio/500.mp3",
        imageSrc: "/levels-images/500.svg",
      },
      {
        challengeId: 59, // _ - 195 = 105
        correct: false,
        text: "660",
        audioSrc: "/levels-audio/660.mp3",
        imageSrc: "/levels-images/660.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 60, //_ - 267 = 500
        imageSrc: "/levels-images/801.svg",
        correct: false,
        text: "801",
        audioSrc: "/levels-audio/801.mp3",
      },
      {
        challengeId: 60, //_ - 267 = 500
        imageSrc: "/levels-images/199.svg",
        correct: false,
        text: "199",
        audioSrc: "/levels-audio/199.mp3",
      },
      {
        challengeId: 60, //_ - 267 = 500
        imageSrc: "/levels-images/676.svg",
        correct: false,
        text: "676",
        audioSrc: "/levels-audio/676.mp3",
      },
      {
        challengeId: 60, //_ - 267 = 500
        imageSrc: "/levels-images/767.svg",
        correct: true,
        text: "767",
        audioSrc: "/levels-audio/767.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 61, //167 - 124 = _
        imageSrc: "/levels-images/54.svg",
        correct: false,
        text: "54",
        audioSrc: "/levels-audio/54.mp3",
      },
      {
        challengeId: 61, //167 - 124 = _
        imageSrc: "/levels-images/44.svg",
        correct: false,
        text: "44",
        audioSrc: "/levels-audio/44.mp3",
      },
      {
        challengeId: 61, //167 - 124 = _
        imageSrc: "/levels-images/43.svg",
        correct: true,
        text: "43",
        audioSrc: "/levels-audio/43.mp3",
      },
      {
        challengeId: 61, //167 - 124 = _
        imageSrc: "/levels-images/38.svg",
        correct: false,
        text: "38",
        audioSrc: "/levels-audio/38.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 62, //452 - _ = 350
        imageSrc: "/levels-images/111.svg",
        correct: false,
        text: "111",
        audioSrc: "/levels-audio/111.mp3",
      },
      {
        challengeId: 62, //452 - _ = 350
        imageSrc: "/levels-images/200.svg",
        correct: false,
        text: "200",
        audioSrc: "/levels-audio/200.mp3",
      },
      {
        challengeId: 62, //452 - _ = 350
        imageSrc: "/levels-images/102.svg",
        correct: true,
        text: "102",
        audioSrc: "/levels-audio/102.mp3",
      },
      {
        challengeId: 62, //452 - _ = 350
        imageSrc: "/levels-images/410.svg",
        correct: false,
        text: "410",
        audioSrc: "/levels-audio/410.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 63, //873 - 467 = _
        imageSrc: "/levels-images/411.svg",
        correct: false,
        text: "411",
        audioSrc: "/levels-audio/411.mp3",
      },
      {
        challengeId: 63, //873 - 467 = _
        imageSrc: "/levels-images/300.svg",
        correct: false,
        text: "300",
        audioSrc: "/levels-audio/300.mp3",
      },
      {
        challengeId: 63, //873 - 467 = _
        imageSrc: "/levels-images/406.svg",
        correct: true,
        text: "406",
        audioSrc: "/levels-audio/406.mp3",
      },
      {
        challengeId: 63, //452 - _ = 350
        imageSrc: "/levels-images/410.svg",
        correct: false,
        text: "410",
        audioSrc: "/levels-audio/410.mp3",
      },
    ]);
    // 6 challenges for Multiplication 1
    await db.insert(schema.challenges).values([
      {
        id: 64,
        lessonId: 14, //Multiplication 1
        type: "SELECT",
        order: 1,
        question: "What is 2 x 4",
      },
      {
        id: 65,
        lessonId: 14, //Multiplication 1
        type: "SELECT",
        order: 2,
        question: "What is 2 x 8",
      },
      {
        id: 66,
        lessonId: 14, //Multiplication 1
        type: "SELECT",
        order: 3,
        question: "What is 4 x 4",
      },
      {
        id: 67,
        lessonId: 14, //Multiplication 1
        type: "SELECT",
        order: 4,
        question: "What is 9 x 3",
      },
      {
        id: 68,
        lessonId: 14, //Multiplication 1
        type: "SELECT",
        order: 5,
        question: "What is 8 x 5",
      },
      {
        id: 69,
        lessonId: 14, //Multiplication 1
        type: "SELECT",
        order: 6,
        question: "What is 6 x 9",
      },
    ]);
    // 24 challenge options for Multiplication 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 64, //2 x 4
        imageSrc: "/levels-images/12.svg",
        correct: false,
        text: "12",
        audioSrc: "/levels-audio/12.mp3",
      },
      {
        challengeId: 64, //2 x 4
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
      {
        challengeId: 64, //2 x 4
        imageSrc: "/levels-images/8.svg",
        correct: true,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 64, //2 x 4
        imageSrc: "/levels-images/41.svg",
        correct: false,
        text: "41",
        audioSrc: "/levels-audio/41.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 65, //2 x 8
        correct: true,
        text: "30",
        audioSrc: "/levels-audio/30.mp3",
        imageSrc: "/levels-images/30.svg",
      },
      {
        challengeId: 65, //2 x 8
        correct: false,
        text: "35",
        audioSrc: "/levels-audio/35.mp3",
        imageSrc: "/levels-images/35.svg",
      },
      {
        challengeId: 65, //2 x 8
        correct: false,
        text: "18",
        audioSrc: "/levels-audio/18.mp3",
        imageSrc: "/levels-images/18.svg",
      },
      {
        challengeId: 65, //2 x 8
        correct: false,
        text: "16",
        audioSrc: "/levels-audio/16.mp3",
        imageSrc: "/levels-images/16.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 66, //4 x 4
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 66, //4 x 4
        imageSrc: "/levels-images/19.svg",
        correct: false,
        text: "19",
        audioSrc: "/levels-audio/19.mp3",
      },
      {
        challengeId: 66, //4 x 4
        imageSrc: "/levels-images/67.svg",
        correct: false,
        text: "67",
        audioSrc: "/levels-audio/67.mp3",
      },
      {
        challengeId: 66, //4 x 4
        imageSrc: "/levels-images/16.svg",
        correct: true,
        text: "16",
        audioSrc: "/levels-audio/16.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 67, //9 x 3
        imageSrc: "/levels-images/54.svg",
        correct: false,
        text: "54",
        audioSrc: "/levels-audio/54.mp3",
      },
      {
        challengeId: 67, //9 x 3
        imageSrc: "/levels-images/44.svg",
        correct: false,
        text: "44",
        audioSrc: "/levels-audio/44.mp3",
      },
      {
        challengeId: 67, //9 x 3
        imageSrc: "/levels-images/27.svg",
        correct: true,
        text: "27",
        audioSrc: "/levels-audio/27.mp3",
      },
      {
        challengeId: 67, //9 x 3
        imageSrc: "/levels-images/25.svg",
        correct: false,
        text: "25",
        audioSrc: "/levels-audio/25.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 68, //8 x 5
        imageSrc: "/levels-images/50.svg",
        correct: false,
        text: "50",
        audioSrc: "/levels-audio/50.mp3",
      },
      {
        challengeId: 68, //8 x 5
        imageSrc: "/levels-images/44.svg",
        correct: false,
        text: "44",
        audioSrc: "/levels-audio/44.mp3",
      },
      {
        challengeId: 68, //8 x 5
        imageSrc: "/levels-images/40.svg",
        correct: true,
        text: "40",
        audioSrc: "/levels-audio/40.mp3",
      },
      {
        challengeId: 68, //8 x 5
        imageSrc: "/levels-images/36.svg",
        correct: false,
        text: "36",
        audioSrc: "/levels-audio/36.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 69, //6 x 9
        imageSrc: "/levels-images/41.svg",
        correct: false,
        text: "41",
        audioSrc: "/levels-audio/41.mp3",
      },
      {
        challengeId: 69, //6 x 9
        imageSrc: "/levels-images/30.svg",
        correct: false,
        text: "30",
        audioSrc: "/levels-audio/30.mp3",
      },
      {
        challengeId: 69, //6 x 9
        imageSrc: "/levels-images/54.svg",
        correct: true,
        text: "54",
        audioSrc: "/levels-audio/54.mp3",
      },
      {
        challengeId: 69, //6 x 9
        imageSrc: "/levels-images/52.svg",
        correct: false,
        text: "52",
        audioSrc: "/levels-audio/52.mp3",
      },
    ]);
    // 6 challenges for Multiplication 2
    await db.insert(schema.challenges).values([
      {
        id: 70,
        lessonId: 15, //Multiplication 2
        type: "SELECT",
        order: 1,
        question: "What is 2 x 12",
      },
      {
        id: 71,
        lessonId: 15, //Multiplication 2
        type: "SELECT",
        order: 2,
        question: "What is 2 x 23",
      },
      {
        id: 72,
        lessonId: 15, //Multiplication 2
        type: "SELECT",
        order: 3,
        question: "What is 4 x 41",
      },
      {
        id: 73,
        lessonId: 15, //Multiplication 2
        type: "SELECT",
        order: 4,
        question: "What is 6 x 73",
      },
      {
        id: 74,
        lessonId: 15, //Multiplication 2
        type: "SELECT",
        order: 5,
        question: "What is 9 x 11",
      },
      {
        id: 75,
        lessonId: 15, //Multiplication 2
        type: "SELECT",
        order: 6,
        question: "What is 2 x 97",
      },
    ]);
    // 24 challenge options for Multiplication 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 70, //2 x 12
        imageSrc: "/levels-images/12.svg",
        correct: false,
        text: "12",
        audioSrc: "/levels-audio/12.mp3",
      },
      {
        challengeId: 70, //2 x 12
        imageSrc: "/levels-images/61.svg",
        correct: false,
        text: "61",
        audioSrc: "/levels-audio/61.mp3",
      },
      {
        challengeId: 70, //2 x 12
        imageSrc: "/levels-images/24.svg",
        correct: true,
        text: "24",
        audioSrc: "/levels-audio/24.mp3",
      },
      {
        challengeId: 70, //2 x 12
        imageSrc: "/levels-images/26.svg",
        correct: false,
        text: "26",
        audioSrc: "/levels-audio/26.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 71, //2 x 23
        correct: true,
        text: "36",
        audioSrc: "/levels-audio/36.mp3",
        imageSrc: "/levels-images/36.svg",
      },
      {
        challengeId: 71, //2 x 23
        correct: false,
        text: "35",
        audioSrc: "/levels-audio/35.mp3",
        imageSrc: "/levels-images/35.svg",
      },
      {
        challengeId: 71, //2 x 23
        correct: false,
        text: "50",
        audioSrc: "/levels-audio/50.mp3",
        imageSrc: "/levels-images/50.svg",
      },
      {
        challengeId: 71, //2 x 23
        correct: false,
        text: "66",
        audioSrc: "/levels-audio/66.mp3",
        imageSrc: "/levels-images/66.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 72, //4 x 41
        imageSrc: "/levels-images/81.svg",
        correct: false,
        text: "81",
        audioSrc: "/levels-audio/81.mp3",
      },
      {
        challengeId: 72, //4 x 41
        imageSrc: "/levels-images/99.svg",
        correct: false,
        text: "99",
        audioSrc: "/levels-audio/99.mp3",
      },
      {
        challengeId: 72, //4 x 41
        imageSrc: "/levels-images/67.svg",
        correct: false,
        text: "67",
        audioSrc: "/levels-audio/67.mp3",
      },
      {
        challengeId: 72, //4 x 41
        imageSrc: "/levels-images/164.svg",
        correct: true,
        text: "164",
        audioSrc: "/levels-audio/164.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 73, //6 x 73
        imageSrc: "/levels-images/120.svg",
        correct: false,
        text: "120",
        audioSrc: "/levels-audio/120.mp3",
      },
      {
        challengeId: 73, //6 x 73
        imageSrc: "/levels-images/430.svg",
        correct: false,
        text: "430",
        audioSrc: "/levels-audio/430.mp3",
      },
      {
        challengeId: 73, //6 x 73
        imageSrc: "/levels-images/438.svg",
        correct: true,
        text: "438",
        audioSrc: "/levels-audio/438.mp3",
      },
      {
        challengeId: 73, //6 x 73
        imageSrc: "/levels-images/380.svg",
        correct: false,
        text: "380",
        audioSrc: "/levels-audio/380.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 74, //9 x 11
        imageSrc: "/levels-images/111.svg",
        correct: false,
        text: "111",
        audioSrc: "/levels-audio/111.mp3",
      },
      {
        challengeId: 74, //9 x 11
        imageSrc: "/levels-images/21.svg",
        correct: false,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
      },
      {
        challengeId: 74, //9 x 11
        imageSrc: "/levels-images/99.svg",
        correct: true,
        text: "99",
        audioSrc: "/levels-audio/99.mp3",
      },
      {
        challengeId: 74, //9 x 11
        imageSrc: "/levels-images/41.svg",
        correct: false,
        text: "41",
        audioSrc: "/levels-audio/41.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 75, //2 x 97
        imageSrc: "/levels-images/201.svg",
        correct: false,
        text: "201",
        audioSrc: "/levels-audio/201.mp3",
      },
      {
        challengeId: 75, //2 x 97
        imageSrc: "/levels-images/300.svg",
        correct: false,
        text: "300",
        audioSrc: "/levels-audio/300.mp3",
      },
      {
        challengeId: 75, //2 x 97
        imageSrc: "/levels-images/194.svg",
        correct: true,
        text: "194",
        audioSrc: "/levels-audio/194.mp3",
      },
      {
        challengeId: 75, //2 x 97
        imageSrc: "/levels-images/192.svg",
        correct: false,
        text: "192",
        audioSrc: "/levels-audio/192.mp3",
      },
    ]);

    // 6 lessons in unit 4 (Green only - spreadsheet) - (Mul3, Mul4, Div1, Div2, Div3)
    await db.insert(schema.lessons).values([
      {
        id: 16,
        unitId: 4, //Unit 4
        order: 1,
        title: "Multiplication 3",
      },
      {
        id: 17,
        unitId: 4, //Unit 4
        order: 2,
        title: "Multiplication 4",
      },
      {
        id: 18,
        unitId: 4, //Unit 4
        order: 3,
        title: "Division 1",
      },
      {
        id: 19,
        unitId: 4, //Unit 4
        order: 4,
        title: "Division 2",
      },
      {
        id: 20,
        unitId: 4, //Unit 4
        order: 5,
        title: "Division 3",
      },
      {
        id: 21,
        unitId: 4, //Unit 4
        order: 6,
        title: "Division 4",
      },
    ]);
    // 7 challenges for Multiplication 3
    await db.insert(schema.challenges).values([
      {
        id: 76,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 1,
        question: "What is 21 x 12",
      },
      {
        id: 77,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 2,
        question: "What is 22 x 23",
      },
      {
        id: 78,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 3,
        question: "What is 56 x 14",
      },
      {
        id: 79,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 4,
        question: "What is 29 x 11",
      },
      {
        id: 80,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 5,
        question: "What is 74 x 11",
      },
      {
        id: 81,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 6,
        question: "What is 11 x 89",
      },
      {
        id: 82,
        lessonId: 16, //Multiplication 3
        type: "SELECT",
        order: 7,
        question: "What is 41 x 24",
      },
    ]);
    // 28 challenge options for Multiplication 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 76, //21 x 12
        imageSrc: "/levels-images/250.svg",
        correct: false,
        text: "250",
        audioSrc: "/levels-audio/250.mp3",
      },
      {
        challengeId: 76, //21 x 12
        imageSrc: "/levels-images/152.svg",
        correct: false,
        text: "152",
        audioSrc: "/levels-audio/152.mp3",
      },
      {
        challengeId: 76, //21 x 12
        imageSrc: "/levels-images/252.svg",
        correct: true,
        text: "252",
        audioSrc: "/levels-audio/252.mp3",
      },
      {
        challengeId: 76, //21 x 12
        imageSrc: "/levels-images/260.svg",
        correct: false,
        text: "260",
        audioSrc: "/levels-audio/260.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 77, //22 x 23
        correct: true,
        text: "506",
        audioSrc: "/levels-audio/506.mp3",
        imageSrc: "/levels-images/506.svg",
      },
      {
        challengeId: 77, //22 x 23
        correct: false,
        text: "350",
        audioSrc: "/levels-audio/350.mp3",
        imageSrc: "/levels-images/350.svg",
      },
      {
        challengeId: 77, //22 x 23
        correct: false,
        text: "504",
        audioSrc: "/levels-audio/504.mp3",
        imageSrc: "/levels-images/504.svg",
      },
      {
        challengeId: 77, //22 x 23
        correct: false,
        text: "660",
        audioSrc: "/levels-audio/660.mp3",
        imageSrc: "/levels-images/660.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 78, //56 x 14
        imageSrc: "/levels-images/801.svg",
        correct: false,
        text: "801",
        audioSrc: "/levels-audio/801.mp3",
      },
      {
        challengeId: 78, //56 x 14
        imageSrc: "/levels-images/910.svg",
        correct: false,
        text: "910",
        audioSrc: "/levels-audio/910.mp3",
      },
      {
        challengeId: 78, //56 x 14
        imageSrc: "/levels-images/670.svg",
        correct: false,
        text: "670",
        audioSrc: "/levels-audio/670.mp3",
      },
      {
        challengeId: 78, //56 x 14
        imageSrc: "/levels-images/784.svg",
        correct: true,
        text: "784",
        audioSrc: "/levels-audio/784.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 79, //29 x 11
        imageSrc: "/levels-images/310.svg",
        correct: false,
        text: "310",
        audioSrc: "/levels-audio/310.mp3",
      },
      {
        challengeId: 79, //29 x 11
        imageSrc: "/levels-images/320.svg",
        correct: false,
        text: "320",
        audioSrc: "/levels-audio/320.mp3",
      },
      {
        challengeId: 79, //29 x 11
        imageSrc: "/levels-images/319.svg",
        correct: true,
        text: "319",
        audioSrc: "/levels-audio/319.mp3",
      },
      {
        challengeId: 79, //29 x 11
        imageSrc: "/levels-images/380.svg",
        correct: false,
        text: "380",
        audioSrc: "/levels-audio/380.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 80, //74 x 11
        imageSrc: "/levels-images/811.svg",
        correct: false,
        text: "811",
        audioSrc: "/levels-audio/811.mp3",
      },
      {
        challengeId: 80, //74 x 11
        imageSrc: "/levels-images/821.svg",
        correct: false,
        text: "821",
        audioSrc: "/levels-audio/821.mp3",
      },
      {
        challengeId: 80, //74 x 11
        imageSrc: "/levels-images/814.svg",
        correct: true,
        text: "814",
        audioSrc: "/levels-audio/814.mp3",
      },
      {
        challengeId: 80, //74 x 11
        imageSrc: "/levels-images/411.svg",
        correct: false,
        text: "411",
        audioSrc: "/levels-audio/411.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 81, //11 x 89
        imageSrc: "/levels-images/980.svg",
        correct: false,
        text: "980",
        audioSrc: "/levels-audio/980.mp3",
      },
      {
        challengeId: 81, //11 x 89
        imageSrc: "/levels-images/978.svg",
        correct: false,
        text: "978",
        audioSrc: "/levels-audio/978.mp3",
      },
      {
        challengeId: 81, //11 x 89
        imageSrc: "/levels-images/990.svg",
        correct: false,
        text: "990",
        audioSrc: "/levels-audio/990.mp3",
      },
      {
        challengeId: 81, //11 x 89
        imageSrc: "/levels-images/979.svg",
        correct: true,
        text: "979",
        audioSrc: "/levels-audio/979.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 82, //41 x 24
        imageSrc: "/levels-images/980.svg",
        correct: false,
        text: "980",
        audioSrc: "/levels-audio/980.mp3",
      },
      {
        challengeId: 82, //41 x 24
        imageSrc: "/levels-images/978.svg",
        correct: false,
        text: "978",
        audioSrc: "/levels-audio/978.mp3",
      },
      {
        challengeId: 82, //41 x 24
        imageSrc: "/levels-images/964.svg",
        correct: false,
        text: "964",
        audioSrc: "/levels-audio/964.mp3",
      },
      {
        challengeId: 82, //41 x 24
        imageSrc: "/levels-images/984.svg",
        correct: true,
        text: "984",
        audioSrc: "/levels-audio/984.mp3",
      },
    ]);
    // 7 challenges for Multiplication 4
    await db.insert(schema.challenges).values([
      {
        id: 83,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 1,
        question: "What is the missing number: _ x 4 = 16 ?",
      },
      {
        id: 84,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 2,
        question: "What is the missing number: _ x 12 = 24 ?",
      },
      {
        id: 85,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 3,
        question: "What is the missing number: 6 x 46 = _ ?",
      },
      {
        id: 86,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 4,
        question: "What is the missing number: 4 x _ = 40 ?",
      },
      {
        id: 87,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 5,
        question: "What is the missing number: 2 x _ = 376 ?",
      },
      {
        id: 88,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 6,
        question: "What is the missing number: _ x 177 = 177 ?",
      },
      {
        id: 89,
        lessonId: 17, //Multiplication 4
        type: "SELECT",
        order: 7,
        question: "What is the missing number: _ x 467 = 0 ?",
      },
    ]);
    // 28 challenge options for Multiplication 4
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 83, //_ x 4 = 16
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 83, //_ x 4 = 16
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 83, //_ x 4 = 16
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 83, //_ x 4 = 16
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 84, //_ x 12 = 24
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
        imageSrc: "/levels-images/2.svg",
      },
      {
        challengeId: 84, //_ x 12 = 24
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
        imageSrc: "/levels-images/3.svg",
      },
      {
        challengeId: 84, //_ x 12 = 24
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
        imageSrc: "/levels-images/4.svg",
      },
      {
        challengeId: 84, //_ x 12 = 24
        correct: false,
        text: "60",
        audioSrc: "/levels-audio/60.mp3",
        imageSrc: "/levels-images/60.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 85, //6 x 46 = _
        imageSrc: "/levels-images/801.svg",
        correct: false,
        text: "801",
        audioSrc: "/levels-audio/801.mp3",
      },
      {
        challengeId: 85, //6 x 46 = _
        imageSrc: "/levels-images/274.svg",
        correct: false,
        text: "274",
        audioSrc: "/levels-audio/274.mp3",
      },
      {
        challengeId: 85, //6 x 46 = _
        imageSrc: "/levels-images/170.svg",
        correct: false,
        text: "170",
        audioSrc: "/levels-audio/170.mp3",
      },
      {
        challengeId: 85, //6 x 46 = _
        imageSrc: "/levels-images/276.svg",
        correct: true,
        text: "276",
        audioSrc: "/levels-audio/276.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 86, //4 x _ = 40
        imageSrc: "/levels-images/20.svg",
        correct: false,
        text: "20",
        audioSrc: "/levels-audio/20.mp3",
      },
      {
        challengeId: 86, //4 x _ = 40
        imageSrc: "/levels-images/30.svg",
        correct: false,
        text: "30",
        audioSrc: "/levels-audio/30.mp3",
      },
      {
        challengeId: 86, //4 x _ = 40
        imageSrc: "/levels-images/10.svg",
        correct: true,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 86, //4 x _ = 40
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 87, //2 x _ = 376
        imageSrc: "/levels-images/187.svg",
        correct: false,
        text: "187",
        audioSrc: "/levels-audio/187.mp3",
      },
      {
        challengeId: 87, //2 x _ = 376
        imageSrc: "/levels-images/190.svg",
        correct: false,
        text: "190",
        audioSrc: "/levels-audio/190.mp3",
      },
      {
        challengeId: 87, //2 x _ = 376
        imageSrc: "/levels-images/188.svg",
        correct: true,
        text: "188",
        audioSrc: "/levels-audio/188.mp3",
      },
      {
        challengeId: 87, //2 x _ = 376
        imageSrc: "/levels-images/411.svg",
        correct: false,
        text: "411",
        audioSrc: "/levels-audio/411.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 88, //_ x 177 = 177
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 88, //_ x 177 = 177
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 88, //_ x 177 = 177
        imageSrc: "/levels-images/0.svg",
        correct: false,
        text: "0",
        audioSrc: "/levels-audio/0.mp3",
      },
      {
        challengeId: 88, //_ x 177 = 177
        imageSrc: "/levels-images/1.svg",
        correct: true,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 89, //_ x 467 = 0
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 89, //_ x 467 = 0
        imageSrc: "/levels-images/100.svg",
        correct: false,
        text: "100",
        audioSrc: "/levels-audio/100.mp3",
      },
      {
        challengeId: 89, //_ x 467 = 0
        imageSrc: "/levels-images/93.svg",
        correct: false,
        text: "93",
        audioSrc: "/levels-audio/93.mp3",
      },
      {
        challengeId: 89, //_ x 467 = 0
        imageSrc: "/levels-images/0.svg",
        correct: true,
        text: "0",
        audioSrc: "/levels-audio/0.mp3",
      },
    ]);
    // 7 challenges for Division 1
    await db.insert(schema.challenges).values([
      {
        id: 90,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 1,
        question: "What is 8 ÷ 4 ?",
      },
      {
        id: 91,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 2,
        question: "What is 6 ÷ 3 ?",
      },
      {
        id: 92,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 3,
        question: "What is 6 ÷ 2 ?",
      },
      {
        id: 93,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 4,
        question: "What is 2 ÷ 2 ?",
      },
      {
        id: 94,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 5,
        question: "What is 2 ÷ 1 ?",
      },
      {
        id: 95,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 6,
        question: "What is 8 ÷ 2 ?",
      },
      {
        id: 96,
        lessonId: 18, //Division 1
        type: "SELECT",
        order: 7,
        question: "What is 6 ÷ 6 ?",
      },
    ]);
    // 28 challenge options for Division 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 90, //8 ÷ 4
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 90, //8 ÷ 4
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 90, //8 ÷ 4
        imageSrc: "/levels-images/2.svg",
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 90, //8 ÷ 4
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 91, //6 ÷ 3
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
        imageSrc: "/levels-images/2.svg",
      },
      {
        challengeId: 91, //6 ÷ 3
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
        imageSrc: "/levels-images/3.svg",
      },
      {
        challengeId: 91, //6 ÷ 3
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
        imageSrc: "/levels-images/4.svg",
      },
      {
        challengeId: 91, //6 ÷ 3
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
        imageSrc: "/levels-images/6.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 92, //6 ÷ 2
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
      {
        challengeId: 92, //6 ÷ 2
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 92, //6 ÷ 2
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 92, //6 ÷ 2
        imageSrc: "/levels-images/3.svg",
        correct: true,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 93, //2 ÷ 2
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 93, //2 ÷ 2
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 93, //2 ÷ 2
        imageSrc: "/levels-images/1.svg",
        correct: true,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 93, //2 ÷ 2
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 94, //2 ÷ 1
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 94, //2 ÷ 1
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 94, //2 ÷ 1
        imageSrc: "/levels-images/2.svg",
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 94, //2 ÷ 1
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 95, //8 ÷ 2
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 95, //8 ÷ 2
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 95, //8 ÷ 2
        imageSrc: "/levels-images/0.svg",
        correct: false,
        text: "0",
        audioSrc: "/levels-audio/0.mp3",
      },
      {
        challengeId: 95, //8 ÷ 2
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 96, //6 ÷ 6
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 96, //6 ÷ 6
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 96, //6 ÷ 6
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 96, //6 ÷ 6
        imageSrc: "/levels-images/1.svg",
        correct: true,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
    ]);
    // 7 challenges for Division 2
    await db.insert(schema.challenges).values([
      {
        id: 97,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 1,
        question: "What is 10 ÷ 5 ?",
      },
      {
        id: 98,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 2,
        question: "What is 14 ÷ 7 ?",
      },
      {
        id: 99,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 3,
        question: "What is 28 ÷ 7 ?",
      },
      {
        id: 100,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 4,
        question: "What is 36 ÷ 6 ?",
      },
      {
        id: 101,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 5,
        question: "What is 81 ÷ 9 ?",
      },
      {
        id: 102,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 6,
        question: "What is 77 ÷ 7 ?",
      },
      {
        id: 103,
        lessonId: 19, //Division 2
        type: "SELECT",
        order: 7,
        question: "What is 66 ÷ 6 ?",
      },
    ]);
    // 28 challenge options for Division 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 97, // 10 ÷ 5
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 97, // 10 ÷ 5
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 97, // 10 ÷ 5
        imageSrc: "/levels-images/2.svg",
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 97, // 10 ÷ 5
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 98, // 14 ÷ 7
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
        imageSrc: "/levels-images/2.svg",
      },
      {
        challengeId: 98, // 14 ÷ 7
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
        imageSrc: "/levels-images/3.svg",
      },
      {
        challengeId: 98, // 14 ÷ 7
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
        imageSrc: "/levels-images/4.svg",
      },
      {
        challengeId: 98, // 14 ÷ 7
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
        imageSrc: "/levels-images/6.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 99, // 28 ÷ 7
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
      {
        challengeId: 99, // 28 ÷ 7
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 99, // 28 ÷ 7
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 99, // 28 ÷ 7
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 100, // 36 ÷ 6
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 100, // 36 ÷ 6
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 100, // 36 ÷ 6
        imageSrc: "/levels-images/6.svg",
        correct: true,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
      {
        challengeId: 100, // 36 ÷ 6
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 101, // 81 ÷ 9
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 101, // 81 ÷ 9
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 101, // 81 ÷ 9
        imageSrc: "/levels-images/9.svg",
        correct: true,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 101, // 81 ÷ 9
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 102, // 77 ÷ 7
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 102, // 77 ÷ 7
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 102, // 77 ÷ 7
        imageSrc: "/levels-images/7.svg",
        correct: false,
        text: "7",
        audioSrc: "/levels-audio/7.mp3",
      },
      {
        challengeId: 102, // 77 ÷ 7
        imageSrc: "/levels-images/11.svg",
        correct: true,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 103, // 66 ÷ 6
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 103, // 66 ÷ 6
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 103, // 66 ÷ 6
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 103, // 66 ÷ 6
        imageSrc: "/levels-images/11.svg",
        correct: true,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
    ]);
    // 7 challenges for Division 3
    await db.insert(schema.challenges).values([
      {
        id: 104,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 1,
        question: "What is 30 ÷ 10 ?",
      },
      {
        id: 105,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 2,
        question: "What is 54 ÷ 18 ?",
      },
      {
        id: 106,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 3,
        question: "What is 96 ÷ 12 ?",
      },
      {
        id: 107,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 4,
        question: "What is 98 ÷ 49 ?",
      },
      {
        id: 108,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 5,
        question: "What is 72 ÷ 12 ?",
      },
      {
        id: 109,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 6,
        question: "What is 64 ÷ 16 ?",
      },
      {
        id: 110,
        lessonId: 20, //Division 3
        type: "SELECT",
        order: 7,
        question: "What is 90 ÷ 18 ?",
      },
    ]);
    // 28 challenge options for Division 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 104, // 30 ÷ 10
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 104, // 30 ÷ 10
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 104, // 30 ÷ 10
        imageSrc: "/levels-images/3.svg",
        correct: true,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 104, // 30 ÷ 10
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 105, // 54 ÷ 18
        correct: true,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
        imageSrc: "/levels-images/3.svg",
      },
      {
        challengeId: 105, // 54 ÷ 18
        correct: false,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
        imageSrc: "/levels-images/13.svg",
      },
      {
        challengeId: 105, // 54 ÷ 18
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
        imageSrc: "/levels-images/4.svg",
      },
      {
        challengeId: 105, // 54 ÷ 18
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
        imageSrc: "/levels-images/6.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 106, // 96 ÷ 12
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
      {
        challengeId: 106, // 96 ÷ 12
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 106, // 96 ÷ 12
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 106, // 96 ÷ 12
        imageSrc: "/levels-images/8.svg",
        correct: true,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 107, // 98 ÷ 49
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 107, // 98 ÷ 49
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 107, // 98 ÷ 49
        imageSrc: "/levels-images/2.svg",
        correct: true,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 107, // 98 ÷ 49
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 108, // 72 ÷ 12
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 108, // 72 ÷ 12
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 108, // 72 ÷ 12
        imageSrc: "/levels-images/6.svg",
        correct: true,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
      {
        challengeId: 108, // 72 ÷ 12
        imageSrc: "/levels-images/8.svg",
        correct: false,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 109, // 64 ÷ 16
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 109, // 64 ÷ 16
        imageSrc: "/levels-images/5.svg",
        correct: false,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
      {
        challengeId: 109, // 64 ÷ 16
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 109, // 64 ÷ 16
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 110, // 90 ÷ 18
        imageSrc: "/levels-images/9.svg",
        correct: false,
        text: "9",
        audioSrc: "/levels-audio/9.mp3",
      },
      {
        challengeId: 110, // 90 ÷ 18
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 110, // 90 ÷ 18
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 110, // 90 ÷ 18
        imageSrc: "/levels-images/5.svg",
        correct: true,
        text: "5",
        audioSrc: "/levels-audio/5.mp3",
      },
    ]);
    // 7 challenges for Division 4
    await db.insert(schema.challenges).values([
      {
        id: 111,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 1,
        question: "What is the missing number: _ ÷ 4 = 2 ?",
      },
      {
        id: 112,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 2,
        question: "What is the missing number: _ ÷ 6 = 2 ?",
      },
      {
        id: 113,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 3,
        question: "What is the missing number: _ ÷ 14 = 4 ?",
      },
      {
        id: 114,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 4,
        question: "What is the missing number: 44 ÷ _ = 11 ?",
      },
      {
        id: 115,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 5,
        question: "What is the missing number: 62 ÷ _ = 2 ?",
      },
      {
        id: 116,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 6,
        question: "What is the missing number: 99 ÷ _ = 3 ?",
      },
      {
        id: 117,
        lessonId: 21, //Division 4
        type: "SELECT",
        order: 7,
        question: "What is the missing number: 84 ÷ 4 = _ ?",
      },
    ]);
    // 28 challenge options for Division 4
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 111, // _ ÷ 4 = 2
        imageSrc: "/levels-images/4.svg",
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 111, // _ ÷ 4 = 2
        imageSrc: "/levels-images/18.svg",
        correct: false,
        text: "18",
        audioSrc: "/levels-audio/18.mp3",
      },
      {
        challengeId: 111, // _ ÷ 4 = 2
        imageSrc: "/levels-images/8.svg",
        correct: true,
        text: "8",
        audioSrc: "/levels-audio/8.mp3",
      },
      {
        challengeId: 111, // _ ÷ 4 = 2
        imageSrc: "/levels-images/11.svg",
        correct: false,
        text: "11",
        audioSrc: "/levels-audio/11.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 112, // _ ÷ 6 = 2
        correct: true,
        text: "12",
        audioSrc: "/levels-audio/12.mp3",
        imageSrc: "/levels-images/12.svg",
      },
      {
        challengeId: 112, // _ ÷ 6 = 2
        correct: false,
        text: "13",
        audioSrc: "/levels-audio/13.mp3",
        imageSrc: "/levels-images/13.svg",
      },
      {
        challengeId: 112, // _ ÷ 6 = 2
        correct: false,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
        imageSrc: "/levels-images/4.svg",
      },
      {
        challengeId: 112, // _ ÷ 6 = 2
        correct: false,
        text: "60",
        audioSrc: "/levels-audio/60.mp3",
        imageSrc: "/levels-images/60.svg",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 113, // _ ÷ 14 = 4
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
      {
        challengeId: 113, // _ ÷ 14 = 4
        imageSrc: "/levels-images/40.svg",
        correct: false,
        text: "40",
        audioSrc: "/levels-audio/40.mp3",
      },
      {
        challengeId: 113, // _ ÷ 14 = 4
        imageSrc: "/levels-images/21.svg",
        correct: false,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
      },
      {
        challengeId: 113, // _ ÷ 14 = 4
        imageSrc: "/levels-images/56.svg",
        correct: true,
        text: "56",
        audioSrc: "/levels-audio/56.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 114, // 44 ÷ _ = 11
        imageSrc: "/levels-images/1.svg",
        correct: false,
        text: "1",
        audioSrc: "/levels-audio/1.mp3",
      },
      {
        challengeId: 114, // 44 ÷ _ = 11
        imageSrc: "/levels-images/3.svg",
        correct: false,
        text: "3",
        audioSrc: "/levels-audio/3.mp3",
      },
      {
        challengeId: 114, // 44 ÷ _ = 11
        imageSrc: "/levels-images/4.svg",
        correct: true,
        text: "4",
        audioSrc: "/levels-audio/4.mp3",
      },
      {
        challengeId: 114, // 44 ÷ _ = 11
        imageSrc: "/levels-images/6.svg",
        correct: false,
        text: "6",
        audioSrc: "/levels-audio/6.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 115, // 62 ÷ _ = 2
        imageSrc: "/levels-images/21.svg",
        correct: false,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
      },
      {
        challengeId: 115, // 62 ÷ _ = 2
        imageSrc: "/levels-images/19.svg",
        correct: false,
        text: "19",
        audioSrc: "/levels-audio/19.mp3",
      },
      {
        challengeId: 115, // 62 ÷ _ = 2
        imageSrc: "/levels-images/31.svg",
        correct: true,
        text: "31",
        audioSrc: "/levels-audio/31.mp3",
      },
      {
        challengeId: 115, // 62 ÷ _ = 2
        imageSrc: "/levels-images/18.svg",
        correct: false,
        text: "18",
        audioSrc: "/levels-audio/18.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 116, // 99 ÷ _ = 3
        imageSrc: "/levels-images/2.svg",
        correct: false,
        text: "2",
        audioSrc: "/levels-audio/2.mp3",
      },
      {
        challengeId: 116, // 99 ÷ _ = 3
        imageSrc: "/levels-images/50.svg",
        correct: false,
        text: "50",
        audioSrc: "/levels-audio/50.mp3",
      },
      {
        challengeId: 116, // 99 ÷ _ = 3
        imageSrc: "/levels-images/30.svg",
        correct: false,
        text: "30",
        audioSrc: "/levels-audio/30.mp3",
      },
      {
        challengeId: 116, // 99 ÷ _ = 3
        imageSrc: "/levels-images/33.svg",
        correct: true,
        text: "33",
        audioSrc: "/levels-audio/33.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 117, // 84 ÷ 4 = _
        imageSrc: "/levels-images/19.svg",
        correct: false,
        text: "19",
        audioSrc: "/levels-audio/19.mp3",
      },
      {
        challengeId: 117, // 84 ÷ 4 = _
        imageSrc: "/levels-images/10.svg",
        correct: false,
        text: "10",
        audioSrc: "/levels-audio/10.mp3",
      },
      {
        challengeId: 117, // 84 ÷ 4 = _
        imageSrc: "/levels-images/30.svg",
        correct: false,
        text: "30",
        audioSrc: "/levels-audio/30.mp3",
      },
      {
        challengeId: 117, // 84 ÷ 4 = _
        imageSrc: "/levels-images/21.svg",
        correct: true,
        text: "21",
        audioSrc: "/levels-audio/21.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the db");
  }
};

main();
