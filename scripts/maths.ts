import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Db with maths questions");
    // await db.insert(schema.units).values([
    //   {
    //     id: 1,
    //     courseId: 1, //Maths - change on need basis
    //     title: "Unit 1",
    //     description: "Learn the basics of Maths",
    //     order: 1,
    //   },
    // ]);
    await db.insert(schema.units).values([
      {
        id: 2,
        courseId: 1, //Maths - change on need basis
        title: "Unit 2",
        description: "Double Digit Maths with introduction of Sequences",
        order: 1,
      },
    ]);

    // // 4 lessons in unit 1 - Basics of maths (Add1, Add2, Sub1, Sub2)
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 1,
    //     unitId: 1, //Unit 1 learn basics of Maths
    //     order: 1,
    //     title: "Addition 1",
    //   },
    //   {
    //     id: 2,
    //     unitId: 1, //Unit 1 learn basics of Maths
    //     order: 2,
    //     title: "Subtraction 1",
    //   },
    //   {
    //     id: 3,
    //     unitId: 1, //Unit 1 learn basics Maths
    //     order: 3,
    //     title: "Addition 2",
    //   },
    //   {
    //     id: 4,
    //     unitId: 1, //Unit 1 learn basics Maths
    //     order: 4,
    //     title: "Subtraction 2",
    //   },
    // ]);

    // // 4 challenges for addition 1
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 1,
    //     lessonId: 1, //Addition 1
    //     type: "SELECT",
    //     order: 1,
    //     question: "What is 1 + 3 ?",
    //   },
    //   {
    //     id: 2,
    //     lessonId: 1, //Addition 1
    //     type: "SELECT",
    //     order: 2,
    //     question: "What is 7 + 7 ?",
    //   },
    //   {
    //     id: 3,
    //     lessonId: 1, //Addition 1
    //     type: "SELECT",
    //     order: 3,
    //     question: "What is 3 + 4 ?",
    //   },
    //   {
    //     id: 4,
    //     lessonId: 1, //Addition 1
    //     type: "SELECT",
    //     order: 4,
    //     question: "What is 9 + 5 ?",
    //   },
    // ]);
    // // 16 challenge options for addition 1
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 1, //1+3
    //     imageSrc: "/levels-images/1.svg",
    //     correct: false,
    //     text: "1",
    //     audioSrc: "/levels-audio/1.mp3",
    //   },
    //   {
    //     challengeId: 1, //1+3
    //     imageSrc: "/levels-images/3.svg",
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    //   {
    //     challengeId: 1, //1+3
    //     imageSrc: "/levels-images/4.svg",
    //     correct: true,
    //     text: "4",
    //     audioSrc: "/levels-audio/4.mp3",
    //   },
    //   {
    //     challengeId: 1, //1+3
    //     imageSrc: "/levels-images/6.svg",
    //     correct: false,
    //     text: "6",
    //     audioSrc: "/levels-audio/6.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 2, // "7+7"
    //     correct: true,
    //     text: "14",
    //     audioSrc: "/levels-audio/14.mp3",
    //     imageSrc: "/levels-images/14.svg",
    //   },
    //   {
    //     challengeId: 2, // "7+7"
    //     correct: false,
    //     text: "10",
    //     audioSrc: "/levels-audio/10.mp3",
    //     imageSrc: "/levels-images/10.svg",
    //   },
    //   {
    //     challengeId: 2, // "7+7"
    //     correct: false,
    //     text: "5",
    //     audioSrc: "/levels-audio/5.mp3",
    //     imageSrc: "/levels-images/5.svg",
    //   },
    //   {
    //     challengeId: 2, // "7+7"
    //     correct: false,
    //     text: "13",
    //     audioSrc: "/levels-audio/13.mp3",
    //     imageSrc: "/levels-images/13.svg",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 3, //3+4
    //     imageSrc: "/levels-images/3.svg",
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    //   {
    //     challengeId: 3, //3+4
    //     imageSrc: "/levels-images/5.svg",
    //     correct: false,
    //     text: "5",
    //     audioSrc: "/levels-audio/5.mp3",
    //   },
    //   {
    //     challengeId: 3, //3+4
    //     imageSrc: "/levels-images/11.svg",
    //     correct: false,
    //     text: "11",
    //     audioSrc: "/levels-audio/11.mp3",
    //   },
    //   {
    //     challengeId: 3, //3+4
    //     imageSrc: "/levels-images/7.svg",
    //     correct: true,
    //     text: "7",
    //     audioSrc: "/levels-audio/7.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 4, //9+5
    //     imageSrc: "/levels-images/15.svg",
    //     correct: false,
    //     text: "15",
    //     audioSrc: "/levels-audio/15.mp3",
    //   },
    //   {
    //     challengeId: 4, //9+5
    //     imageSrc: "/levels-images/19.svg",
    //     correct: false,
    //     text: "19",
    //     audioSrc: "/levels-audio/19.mp3",
    //   },
    //   {
    //     challengeId: 4, //9+5
    //     imageSrc: "/levels-images/14.svg",
    //     correct: true,
    //     text: "14",
    //     audioSrc: "/levels-audio/14.mp3",
    //   },
    //   {
    //     challengeId: 4, //9+5
    //     imageSrc: "/levels-images/13.svg",
    //     correct: false,
    //     text: "13",
    //     audioSrc: "/levels-audio/13.mp3",
    //   },
    // ]);
    // // 4 challenges for Subtraction 1
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 5,
    //     lessonId: 2, //Subtraction 1
    //     type: "SELECT",
    //     order: 1,
    //     question: "What is 3 - 1 ?",
    //   },
    //   {
    //     id: 6,
    //     lessonId: 2, //Subtraction 1
    //     type: "SELECT",
    //     order: 2,
    //     question: "What is 7 - 7 ?",
    //   },
    //   {
    //     id: 7,
    //     lessonId: 2, //Subtraction 1
    //     type: "SELECT",
    //     order: 3,
    //     question: "What is 4 - 2 ?",
    //   },
    //   {
    //     id: 8,
    //     lessonId: 2, //Subtraction 1
    //     type: "SELECT",
    //     order: 4,
    //     question: "What is 9 - 5 ?",
    //   },
    // ]);
    // // 16 challenge options for Subtraction 1
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 5, //3 - 1
    //     imageSrc: "/levels-images/1.svg",
    //     correct: false,
    //     text: "1",
    //     audioSrc: "/levels-audio/1.mp3",
    //   },
    //   {
    //     challengeId: 5, //3 - 1
    //     imageSrc: "/levels-images/3.svg",
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    //   {
    //     challengeId: 5, //3 - 1
    //     imageSrc: "/levels-images/2.svg",
    //     correct: true,
    //     text: "2",
    //     audioSrc: "/levels-audio/2.mp3",
    //   },
    //   {
    //     challengeId: 5, //3 - 1
    //     imageSrc: "/levels-images/6.svg",
    //     correct: false,
    //     text: "6",
    //     audioSrc: "/levels-audio/6.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 6, // "7-7"
    //     correct: true,
    //     text: "0",
    //     audioSrc: "/levels-audio/0.mp3",
    //     imageSrc: "/levels-images/0.svg",
    //   },
    //   {
    //     challengeId: 6, // "7-7"
    //     correct: false,
    //     text: "1",
    //     audioSrc: "/levels-audio/1.mp3",
    //     imageSrc: "/levels-images/1.svg",
    //   },
    //   {
    //     challengeId: 6, // "7-7"
    //     correct: false,
    //     text: "5",
    //     audioSrc: "/levels-audio/5.mp3",
    //     imageSrc: "/levels-images/5.svg",
    //   },
    //   {
    //     challengeId: 6, // "7-7"
    //     correct: false,
    //     text: "7",
    //     audioSrc: "/levels-audio/7.mp3",
    //     imageSrc: "/levels-images/7.svg",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 7, //4-2
    //     imageSrc: "/levels-images/3.svg",
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    //   {
    //     challengeId: 7, //4-2
    //     imageSrc: "/levels-images/5.svg",
    //     correct: false,
    //     text: "5",
    //     audioSrc: "/levels-audio/5.mp3",
    //   },
    //   {
    //     challengeId: 7, //4-2
    //     imageSrc: "/levels-images/4.svg",
    //     correct: false,
    //     text: "4",
    //     audioSrc: "/levels-audio/4.mp3",
    //   },
    //   {
    //     challengeId: 7, //4-2
    //     imageSrc: "/levels-images/2.svg",
    //     correct: true,
    //     text: "2",
    //     audioSrc: "/levels-audio/2.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 8, //9-5
    //     imageSrc: "/levels-images/15.svg",
    //     correct: false,
    //     text: "15",
    //     audioSrc: "/levels-audio/15.mp3",
    //   },
    //   {
    //     challengeId: 8, //9-5
    //     imageSrc: "/levels-images/9.svg",
    //     correct: false,
    //     text: "9",
    //     audioSrc: "/levels-audio/9.mp3",
    //   },
    //   {
    //     challengeId: 8, //9-5
    //     imageSrc: "/levels-images/4.svg",
    //     correct: true,
    //     text: "4",
    //     audioSrc: "/levels-audio/4.mp3",
    //   },
    //   {
    //     challengeId: 8, //9-5
    //     imageSrc: "/levels-images/5.svg",
    //     correct: false,
    //     text: "5",
    //     audioSrc: "/levels-audio/5.mp3",
    //   },
    // ]);
    // // 4 challenges for addition 2
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 9,
    //     lessonId: 3, //Addition 2
    //     type: "SELECT",
    //     order: 1,
    //     question: "What is 10 + 3 ?",
    //   },
    //   {
    //     id: 10,
    //     lessonId: 3, //Addition 2
    //     type: "SELECT",
    //     order: 2,
    //     question: "What is 13 + 9 ?",
    //   },
    //   {
    //     id: 11,
    //     lessonId: 3, //Addition 2
    //     type: "SELECT",
    //     order: 3,
    //     question: "What is 56 + 4 ?",
    //   },
    //   {
    //     id: 12,
    //     lessonId: 3, //Addition 2
    //     type: "SELECT",
    //     order: 4,
    //     question: "What is 92 + 7 ?",
    //   },
    // ]);
    // // 16 challenge options for addition 2
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 9, //10 + 3
    //     imageSrc: "/levels-images/23.svg",
    //     correct: false,
    //     text: "23",
    //     audioSrc: "/levels-audio/23.mp3",
    //   },
    //   {
    //     challengeId: 9, //10 + 3
    //     imageSrc: "/levels-images/9.svg",
    //     correct: false,
    //     text: "9",
    //     audioSrc: "/levels-audio/9.mp3",
    //   },
    //   {
    //     challengeId: 9, //10 + 3
    //     imageSrc: "/levels-images/13.svg",
    //     correct: true,
    //     text: "13",
    //     audioSrc: "/levels-audio/13.mp3",
    //   },
    //   {
    //     challengeId: 9, //10 + 3
    //     imageSrc: "/levels-images/61.svg",
    //     correct: false,
    //     text: "61",
    //     audioSrc: "/levels-audio/61.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 10, // 13 + 9
    //     correct: true,
    //     text: "22",
    //     audioSrc: "/levels-audio/22.mp3",
    //     imageSrc: "/levels-images/22.svg",
    //   },
    //   {
    //     challengeId: 10, // 13 + 9
    //     correct: false,
    //     text: "10",
    //     audioSrc: "/levels-audio/10.mp3",
    //     imageSrc: "/levels-images/10.svg",
    //   },
    //   {
    //     challengeId: 10, // 13 + 9
    //     correct: false,
    //     text: "21",
    //     audioSrc: "/levels-audio/21.mp3",
    //     imageSrc: "/levels-images/21.svg",
    //   },
    //   {
    //     challengeId: 10, // 13 + 9
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //     imageSrc: "/levels-images/3.svg",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 11, //56 + 4
    //     imageSrc: "/levels-images/3.svg",
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    //   {
    //     challengeId: 11, //56 + 4
    //     imageSrc: "/levels-images/61.svg",
    //     correct: false,
    //     text: "61",
    //     audioSrc: "/levels-audio/61.mp3",
    //   },
    //   {
    //     challengeId: 11, //56 + 4
    //     imageSrc: "/levels-images/49.svg",
    //     correct: false,
    //     text: "49",
    //     audioSrc: "/levels-audio/49.mp3",
    //   },
    //   {
    //     challengeId: 11, //56 + 4
    //     imageSrc: "/levels-images/60.svg",
    //     correct: true,
    //     text: "60",
    //     audioSrc: "/levels-audio/60.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 12, //92 + 7
    //     imageSrc: "/levels-images/89.svg",
    //     correct: false,
    //     text: "89",
    //     audioSrc: "/levels-audio/89.mp3",
    //   },
    //   {
    //     challengeId: 12, //92 + 7
    //     imageSrc: "/levels-images/19.svg",
    //     correct: false,
    //     text: "19",
    //     audioSrc: "/levels-audio/19.mp3",
    //   },
    //   {
    //     challengeId: 12, //92 + 7
    //     imageSrc: "/levels-images/99.svg",
    //     correct: true,
    //     text: "99",
    //     audioSrc: "/levels-audio/99.mp3",
    //   },
    //   {
    //     challengeId: 12, //92 + 7
    //     imageSrc: "/levels-images/3.svg",
    //     correct: false,
    //     text: "3",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    // ]);
    // // 4 challenges for Subtraction 2
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 13,
    //     lessonId: 4, //Subtraction 2
    //     type: "SELECT",
    //     order: 1,
    //     question: "What is 13 - 4 ?",
    //   },
    //   {
    //     id: 14,
    //     lessonId: 4, //Subtraction 2
    //     type: "SELECT",
    //     order: 2,
    //     question: "What is 74 - 7 ?",
    //   },
    //   {
    //     id: 15,
    //     lessonId: 4, //Subtraction 2
    //     type: "SELECT",
    //     order: 3,
    //     question: "What is 40 - 2 ?",
    //   },
    //   {
    //     id: 16,
    //     lessonId: 4, //Subtraction 2
    //     type: "SELECT",
    //     order: 4,
    //     question: "What is 93 - 5 ?",
    //   },
    // ]);
    // // 16 challenge options for Subtraction 2
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 13, //13 - 4
    //     imageSrc: "/levels-images/10.svg",
    //     correct: false,
    //     text: "10",
    //     audioSrc: "/levels-audio/10.mp3",
    //   },
    //   {
    //     challengeId: 13, //13 - 4
    //     imageSrc: "/levels-images/21.svg",
    //     correct: false,
    //     text: "21",
    //     audioSrc: "/levels-audio/21.mp3",
    //   },
    //   {
    //     challengeId: 13, //13 - 4
    //     imageSrc: "/levels-images/9.svg",
    //     correct: true,
    //     text: "9",
    //     audioSrc: "/levels-audio/9.mp3",
    //   },
    //   {
    //     challengeId: 13, //13 - 4
    //     imageSrc: "/levels-images/6.svg",
    //     correct: false,
    //     text: "6",
    //     audioSrc: "/levels-audio/6.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 14, // 74 - 7
    //     correct: true,
    //     text: "67",
    //     audioSrc: "/levels-audio/67.mp3",
    //     imageSrc: "/levels-images/67.svg",
    //   },
    //   {
    //     challengeId: 14, // 74 - 7
    //     correct: false,
    //     text: "64",
    //     audioSrc: "/levels-audio/64.mp3",
    //     imageSrc: "/levels-images/64.svg",
    //   },
    //   {
    //     challengeId: 14, // 74 - 7
    //     correct: false,
    //     text: "51",
    //     audioSrc: "/levels-audio/51.mp3",
    //     imageSrc: "/levels-images/51.svg",
    //   },
    //   {
    //     challengeId: 14, // 74 - 7
    //     correct: false,
    //     text: "7",
    //     audioSrc: "/levels-audio/70.mp3",
    //     imageSrc: "/levels-images/70.svg",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 15, //40-2
    //     imageSrc: "/levels-images/43.svg",
    //     correct: false,
    //     text: "43",
    //     audioSrc: "/levels-audio/43.mp3",
    //   },
    //   {
    //     challengeId: 15, //40-2
    //     imageSrc: "/levels-images/5.svg",
    //     correct: false,
    //     text: "5",
    //     audioSrc: "/levels-audio/5.mp3",
    //   },
    //   {
    //     challengeId: 15, //40-2
    //     imageSrc: "/levels-images/14.svg",
    //     correct: false,
    //     text: "14",
    //     audioSrc: "/levels-audio/14.mp3",
    //   },
    //   {
    //     challengeId: 15, //40-2
    //     imageSrc: "/levels-images/40.svg",
    //     correct: true,
    //     text: "40",
    //     audioSrc: "/levels-audio/40.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 16, //93 - 5
    //     imageSrc: "/levels-images/95.svg",
    //     correct: false,
    //     text: "95",
    //     audioSrc: "/levels-audio/95.mp3",
    //   },
    //   {
    //     challengeId: 16, //93 - 5
    //     imageSrc: "/levels-images/89.svg",
    //     correct: false,
    //     text: "89",
    //     audioSrc: "/levels-audio/89.mp3",
    //   },
    //   {
    //     challengeId: 16, //93 - 5
    //     imageSrc: "/levels-images/88.svg",
    //     correct: true,
    //     text: "88",
    //     audioSrc: "/levels-audio/88.mp3",
    //   },
    //   {
    //     challengeId: 16, //93 - 5
    //     imageSrc: "/levels-images/56.svg",
    //     correct: false,
    //     text: "56",
    //     audioSrc: "/levels-audio/56.mp3",
    //   },
    // ]);

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
    // 5 challenges for Sequence 1 -TODOOOOOOOOOOOOO
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

    // await db.insert(schema.challenges).values([
    //   {
    //     id: 4,
    //     lessonId: 2, //Verbs
    //     type: "SELECT",
    //     order: 1,
    //     question: 'Which one of these is a "Man" ?',
    //   },
    //   {
    //     id: 5,
    //     lessonId: 2, //Verbs
    //     type: "ASSIST",
    //     order: 2,
    //     question: '"Man"',
    //   },
    //   {
    //     id: 6,
    //     lessonId: 2, //Verbs
    //     type: "SELECT",
    //     order: 3,
    //     question: 'Which one of these is a "Robot" ?',
    //   },
    // ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the db");
  }
};

main();
