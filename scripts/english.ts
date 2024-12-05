import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sqll = neon(process.env.DATABASE_URL!);

const db = drizzle(sqll, { schema });

import { sql } from "drizzle-orm";

const main = async () => {
  try {
    // console.log("Seeding Db");

    // await db.insert(schema.courses).values([
    //   {
    //     id: 2,
    //     title: "English",
    //     imageSrc: "/englishUK.svg",
    //   },
    // ]);

    // // English unit 1
    // await db.insert(schema.units).values([
    //   {
    //     id: 5,
    //     courseId: 2, //English
    //     title: "Unit 1",
    //     description:
    //       "Match upper and lower case letters and complete letter sequences.",
    //     order: 1,
    //   },
    // ]);

    // // 3 lessons in unit 1 - Uppercase, Lowercase & Sequences
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 22,
    //     unitId: 5, //Unit 1 eng
    //     order: 1,
    //     title: "Uppercase Letters",
    //   },
    //   {
    //     id: 23,
    //     unitId: 5, //Unit 1 eng
    //     order: 2,
    //     title: "Lowercase Letters",
    //   },
    //   {
    //     id: 24,
    //     unitId: 5, //Unit 1 eng
    //     order: 3,
    //     title: "Letter Sequences",
    //   },
    // ]);

    // // 26 challenges for Uppercase Letters - 1 for each letter
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 118,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 1,
    //     question: 'What is the capital of "a" ?',
    //   },
    //   {
    //     id: 119,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 2,
    //     question: 'What is the capital of "b" ?',
    //   },
    //   {
    //     id: 120,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 3,
    //     question: 'What is the capital of "c" ?',
    //   },
    //   {
    //     id: 121,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 4,
    //     question: 'What is the capital of "d" ?',
    //   },
    //   {
    //     id: 122,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 5,
    //     question: 'What is the capital of "e" ?',
    //   },
    //   {
    //     id: 123,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 6,
    //     question: 'What is the capital of "f" ?',
    //   },
    //   {
    //     id: 124,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 7,
    //     question: 'What is the capital of "g" ?',
    //   },
    //   {
    //     id: 125,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 8,
    //     question: 'What is the capital of "h" ?',
    //   },
    //   {
    //     id: 126,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 9,
    //     question: 'What is the capital of "i" ?',
    //   },
    //   {
    //     id: 127,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 10,
    //     question: 'What is the capital of "j" ?',
    //   },
    //   {
    //     id: 128,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 11,
    //     question: 'What is the capital of "k" ?',
    //   },
    //   {
    //     id: 129,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 12,
    //     question: 'What is the capital of "l" ?',
    //   },
    //   {
    //     id: 130,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 13,
    //     question: 'What is the capital of "m" ?',
    //   },
    //   {
    //     id: 131,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 14,
    //     question: 'What is the capital of "n" ?',
    //   },
    //   {
    //     id: 132,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 15,
    //     question: 'What is the capital of "o" ?',
    //   },
    //   {
    //     id: 133,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 16,
    //     question: 'What is the capital of "p" ?',
    //   },
    //   {
    //     id: 134,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 17,
    //     question: 'What is the capital of "q" ?',
    //   },
    //   {
    //     id: 135,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 18,
    //     question: 'What is the capital of "r" ?',
    //   },
    //   {
    //     id: 136,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 19,
    //     question: 'What is the capital of "s" ?',
    //   },
    //   {
    //     id: 137,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 20,
    //     question: 'What is the capital of "t" ?',
    //   },
    //   {
    //     id: 138,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 21,
    //     question: 'What is the capital of "u" ?',
    //   },
    //   {
    //     id: 139,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 22,
    //     question: 'What is the capital of "v" ?',
    //   },
    //   {
    //     id: 140,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 23,
    //     question: 'What is the capital of "w" ?',
    //   },
    //   {
    //     id: 141,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 24,
    //     question: 'What is the capital of "x" ?',
    //   },
    //   {
    //     id: 142,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 25,
    //     question: 'What is the capital of "y" ?',
    //   },
    //   {
    //     id: 143,
    //     lessonId: 22, //Uppercase Letters
    //     type: "SELECT",
    //     order: 26,
    //     question: 'What is the capital of "z" ?',
    //   },
    // ]);

    // // 104 challenge options for Uppercase Letters
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 118, //What is the capital of "a"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: true,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 118, //What is the capital of "a"
    //     imageSrc: "/levels-images/a.svg",
    //     correct: false,
    //     text: "a",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 118, //What is the capital of "a"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: false,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 118, //What is the capital of "a"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 119, //What is the capital of "b"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 119, //What is the capital of "b"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 119, //What is the capital of "b"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: true,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 119, //What is the capital of "b"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 120, //What is the capital of "c"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 120, //What is the capital of "c"
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: true,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 120, //What is the capital of "c"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 120, //What is the capital of "c"
    //     imageSrc: "/levels-images/u.svg",
    //     correct: false,
    //     text: "u",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 121, //What is the capital of "d"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 121, //What is the capital of "d"
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: false,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 121, //What is the capital of "d"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 121, //What is the capital of "d"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: true,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 122, //What is the capital of "e"
    //     imageSrc: "/levels-images/Ec.svg",
    //     correct: true,
    //     text: "E",
    //     audioSrc: "/levels-audio/e.mp3",
    //   },
    //   {
    //     challengeId: 122, //What is the capital of "e"
    //     imageSrc: "/levels-images/x.svg",
    //     correct: false,
    //     text: "x",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 122, //What is the capital of "e"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: false,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 122, //What is the capital of "e"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 123, //What is the capital of "f"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 123, //What is the capital of "f"
    //     imageSrc: "/levels-images/f.svg",
    //     correct: false,
    //     text: "f",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     challengeId: 123, //What is the capital of "f"
    //     imageSrc: "/levels-images/Fc.svg",
    //     correct: true,
    //     text: "F",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     challengeId: 123, //What is the capital of "f"
    //     imageSrc: "/levels-images/g.svg",
    //     correct: false,
    //     text: "g",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 124, //What is the capital of "g"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 124, //What is the capital of "g"
    //     imageSrc: "/levels-images/Gc.svg",
    //     correct: true,
    //     text: "G",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    //   {
    //     challengeId: 124, //What is the capital of "g"
    //     imageSrc: "/levels-images/h.svg",
    //     correct: false,
    //     text: "h",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    //   {
    //     challengeId: 124, //What is the capital of "g"
    //     imageSrc: "/levels-images/TC.svg",
    //     correct: false,
    //     text: "T",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 125, //What is the capital of "h"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 125, //What is the capital of "h"
    //     imageSrc: "/levels-images/h.svg",
    //     correct: false,
    //     text: "h",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    //   {
    //     challengeId: 125, //What is the capital of "h"
    //     imageSrc: "/levels-images/Yc.svg",
    //     correct: false,
    //     text: "Y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     challengeId: 125, //What is the capital of "h"
    //     imageSrc: "/levels-images/Hc.svg",
    //     correct: true,
    //     text: "H",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 126, //What is the capital of "i"
    //     imageSrc: "/levels-images/Ic.svg",
    //     correct: true,
    //     text: "I",
    //     audioSrc: "/levels-audio/i.mp3",
    //   },
    //   {
    //     challengeId: 126, //What is the capital of "i"
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 126, //What is the capital of "i"
    //     imageSrc: "/levels-images/Rc.svg",
    //     correct: false,
    //     text: "R",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    //   {
    //     challengeId: 126, //What is the capital of "i"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 127, //What is the capital of "j"
    //     imageSrc: "/levels-images/Kc.svg",
    //     correct: false,
    //     text: "K",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 127, //What is the capital of "j"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 127, //What is the capital of "j"
    //     imageSrc: "/levels-images/Jc.svg",
    //     correct: true,
    //     text: "J",
    //     audioSrc: "/levels-audio/j.mp3",
    //   },
    //   {
    //     challengeId: 127, //What is the capital of "j"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 128, //What is the capital of "k"
    //     imageSrc: "/levels-images/Lc.svg",
    //     correct: false,
    //     text: "L",
    //     audioSrc: "/levels-audio/l.mp3",
    //   },
    //   {
    //     challengeId: 128, //What is the capital of "k"
    //     imageSrc: "/levels-images/Kc.svg",
    //     correct: true,
    //     text: "K",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 128, //What is the capital of "k"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: false,
    //     text: "c",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 128, //What is the capital of "k"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 129, //What is the capital of "l"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 129, //What is the capital of "l"
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: false,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 129, //What is the capital of "l"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 129, //What is the capital of "l"
    //     imageSrc: "/levels-images/Lc.svg",
    //     correct: true,
    //     text: "L",
    //     audioSrc: "/levels-audio/l.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 130, //What is the capital of "m"
    //     imageSrc: "/levels-images/Mc.svg",
    //     correct: true,
    //     text: "M",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 130, //What is the capital of "m"
    //     imageSrc: "/levels-images/x.svg",
    //     correct: false,
    //     text: "x",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 130, //What is the capital of "m"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: false,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 130, //What is the capital of "m"
    //     imageSrc: "/levels-images/Nc.svg",
    //     correct: false,
    //     text: "N",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 131, //What is the capital of "n"
    //     imageSrc: "/levels-images/Mc.svg",
    //     correct: false,
    //     text: "M",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 131, //What is the capital of "n"
    //     imageSrc: "/levels-images/n.svg",
    //     correct: false,
    //     text: "n",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    //   {
    //     challengeId: 131, //What is the capital of "n"
    //     imageSrc: "/levels-images/Nc.svg",
    //     correct: true,
    //     text: "N",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    //   {
    //     challengeId: 131, //What is the capital of "n"
    //     imageSrc: "/levels-images/o.svg",
    //     correct: false,
    //     text: "o",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 132, //What is the capital of "o"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 132, //What is the capital of "o"
    //     imageSrc: "/levels-images/Oc.svg",
    //     correct: true,
    //     text: "O",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    //   {
    //     challengeId: 132, //What is the capital of "o"
    //     imageSrc: "/levels-images/Gc.svg",
    //     correct: false,
    //     text: "G",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    //   {
    //     challengeId: 132, //What is the capital of "o"
    //     imageSrc: "/levels-images/TC.svg",
    //     correct: false,
    //     text: "T",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 133, //What is the capital of "p"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 133, //What is the capital of "p"
    //     imageSrc: "/levels-images/p.svg",
    //     correct: false,
    //     text: "p",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     challengeId: 133, //What is the capital of "p"
    //     imageSrc: "/levels-images/Qc.svg",
    //     correct: false,
    //     text: "Q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 133, //What is the capital of "p"
    //     imageSrc: "/levels-images/Pc.svg",
    //     correct: true,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 134, //What is the capital of "q"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 134, //What is the capital of "q"
    //     imageSrc: "/levels-images/Qc.svg",
    //     correct: true,
    //     text: "Q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 134, //What is the capital of "q"
    //     imageSrc: "/levels-images/i.svg",
    //     correct: false,
    //     text: "i",
    //     audioSrc: "/levels-audio/i.mp3",
    //   },
    //   {
    //     challengeId: 134, //What is the capital of "q"
    //     imageSrc: "/levels-images/PC.svg",
    //     correct: false,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 135, //What is the capital of "r"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 135, //What is the capital of "r"
    //     imageSrc: "/levels-images/r.svg",
    //     correct: false,
    //     text: "r",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    //   {
    //     challengeId: 135, //What is the capital of "r"
    //     imageSrc: "/levels-images/Pc.svg",
    //     correct: false,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     challengeId: 135, //What is the capital of "r"
    //     imageSrc: "/levels-images/Rc.svg",
    //     correct: true,
    //     text: "R",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 136, //What is the capital of "s"
    //     imageSrc: "/levels-images/Sc.svg",
    //     correct: true,
    //     text: "S",
    //     audioSrc: "/levels-audio/s.mp3",
    //   },
    //   {
    //     challengeId: 136, //What is the capital of "s"
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 136, //What is the capital of "s"
    //     imageSrc: "/levels-images/Rc.svg",
    //     correct: false,
    //     text: "R",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    //   {
    //     challengeId: 136, //What is the capital of "s"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 137, //What is the capital of "t"
    //     imageSrc: "/levels-images/Kc.svg",
    //     correct: false,
    //     text: "K",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 137, //What is the capital of "t"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 137, //What is the capital of "t"
    //     imageSrc: "/levels-images/Tc.svg",
    //     correct: true,
    //     text: "T",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    //   {
    //     challengeId: 137, //What is the capital of "t"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 138, //What is the capital of "u"
    //     imageSrc: "/levels-images/Vc.svg",
    //     correct: false,
    //     text: "V",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 138, //What is the capital of "u"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: true,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 138, //What is the capital of "u"
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: false,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 138, //What is the capital of "u"
    //     imageSrc: "/levels-images/u.svg",
    //     correct: false,
    //     text: "u",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 139, //What is the capital of "v"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 139, //What is the capital of "v"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 139, //What is the capital of "v"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 139, //What is the capital of "v"
    //     imageSrc: "/levels-images/Vc.svg",
    //     correct: true,
    //     text: "V",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 140, //What is the capital of "w"
    //     imageSrc: "/levels-images/Wc.svg",
    //     correct: true,
    //     text: "W",
    //     audioSrc: "/levels-audio/w.mp3",
    //   },
    //   {
    //     challengeId: 140, //What is the capital of "w"
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: false,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 140, //What is the capital of "w"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: false,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 140, //What is the capital of "w"
    //     imageSrc: "/levels-images/Nc.svg",
    //     correct: false,
    //     text: "N",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 141, //What is the capital of "x"
    //     imageSrc: "/levels-images/Mc.svg",
    //     correct: false,
    //     text: "M",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 141, //What is the capital of "x"
    //     imageSrc: "/levels-images/Fc.svg",
    //     correct: false,
    //     text: "F",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     challengeId: 141, //What is the capital of "x"
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: true,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 141, //What is the capital of "x"
    //     imageSrc: "/levels-images/o.svg",
    //     correct: false,
    //     text: "o",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 142, //What is the capital of "y"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 142, //What is the capital of "y"
    //     imageSrc: "/levels-images/Yc.svg",
    //     correct: true,
    //     text: "Y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     challengeId: 142, //What is the capital of "y"
    //     imageSrc: "/levels-images/Vc.svg",
    //     correct: false,
    //     text: "V",
    //     audioSrc: "/levels-audio/V.mp3",
    //   },
    //   {
    //     challengeId: 142, //What is the capital of "y"
    //     imageSrc: "/levels-images/TC.svg",
    //     correct: false,
    //     text: "T",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 143, //What is the capital of "z"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: true,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 143, //What is the capital of "z"
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: false,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 143, //What is the capital of "z"
    //     imageSrc: "/levels-images/qc.svg",
    //     correct: false,
    //     text: "Q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 143, //What is the capital of "z"
    //     imageSrc: "/levels-images/Pc.svg",
    //     correct: false,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    // ]);

    // // 26 challenges for Lowercase Letters - 1 for each letter
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 144,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 1,
    //     question: ' "A" ?',
    //   },
    //   {
    //     id: 145,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 2,
    //     question: 'What is the lowercase of "B" ?',
    //   },
    //   {
    //     id: 146,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 3,
    //     question: 'What is the lowercase of "C" ?',
    //   },
    //   {
    //     id: 147,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 4,
    //     question: 'What is the lowercase of "D" ?',
    //   },
    //   {
    //     id: 148,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 5,
    //     question: 'What is the lowercase of "E" ?',
    //   },
    //   {
    //     id: 149,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 6,
    //     question: 'What is the lowercase of "F" ?',
    //   },
    //   {
    //     id: 150,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 7,
    //     question: 'What is the lowercase of "G" ?',
    //   },
    //   {
    //     id: 151,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 8,
    //     question: 'What is the lowercase of "H" ?',
    //   },
    //   {
    //     id: 152,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 9,
    //     question: 'What is the lowercase of "I" ?',
    //   },
    //   {
    //     id: 153,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 10,
    //     question: 'What is the lowercase of "J" ?',
    //   },
    //   {
    //     id: 154,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 11,
    //     question: 'What is the lowercase of "K" ?',
    //   },
    //   {
    //     id: 155,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 12,
    //     question: 'What is the lowercase of "L" ?',
    //   },
    //   {
    //     id: 156,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 13,
    //     question: 'What is the lowercase of "M" ?',
    //   },
    //   {
    //     id: 157,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 14,
    //     question: 'What is the lowercase of "N" ?',
    //   },
    //   {
    //     id: 158,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 15,
    //     question: 'What is the lowercase of "O" ?',
    //   },
    //   {
    //     id: 159,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 16,
    //     question: 'What is the lowercase of "P" ?',
    //   },
    //   {
    //     id: 160,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 17,
    //     question: 'What is the lowercase of "Q" ?',
    //   },
    //   {
    //     id: 161,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 18,
    //     question: 'What is the lowercase of "R" ?',
    //   },
    //   {
    //     id: 162,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 19,
    //     question: 'What is the lowercase of "S" ?',
    //   },
    //   {
    //     id: 163,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 20,
    //     question: 'What is the lowercase of "T" ?',
    //   },
    //   {
    //     id: 164,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 21,
    //     question: 'What is the lowercase of "U" ?',
    //   },
    //   {
    //     id: 165,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 22,
    //     question: 'What is the lowercase of "V" ?',
    //   },
    //   {
    //     id: 166,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 23,
    //     question: 'What is the lowercase of "W" ?',
    //   },
    //   {
    //     id: 167,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 24,
    //     question: 'What is the lowercase of "X" ?',
    //   },
    //   {
    //     id: 168,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 25,
    //     question: 'What is the lowercase of "Y" ?',
    //   },
    //   {
    //     id: 169,
    //     lessonId: 23, //Lowercase Letters
    //     type: "SELECT",
    //     order: 26,
    //     question: 'What is the lowercase of "Z" ?',
    //   },
    // ]);

    // // 104 challenge options for Lowercase Letters
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 144, //What is the lowercase of "A"
    //     imageSrc: "/levels-images/a.svg",
    //     correct: true,
    //     text: "a",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 144, //What is the lowercase of "A"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 144, //What is the lowercase of "A"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: false,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 144, //What is the lowercase of "A"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 145, //What is the lowercase of "B"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 145, //What is the lowercase of "B"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 145, //What is the lowercase of "B"
    //     imageSrc: "/levels-images/b.svg",
    //     correct: true,
    //     text: "b",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 145, //What is the lowercase of "B"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 146, //What is the lowercase of "C"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 146, //What is the lowercase of "C"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: true,
    //     text: "c",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 146, //What is the lowercase of "C"
    //     imageSrc: "/levels-images/Lc.svg",
    //     correct: false,
    //     text: "L",
    //     audioSrc: "/levels-audio/l.mp3",
    //   },
    //   {
    //     challengeId: 146, //What is the lowercase of "C"
    //     imageSrc: "/levels-images/u.svg",
    //     correct: false,
    //     text: "u",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 147, //What is the lowercase of "D"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 147, //What is the lowercase of "D"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 147, //What is the lowercase of "D"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 147, //What is the lowercase of "D"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: true,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 148, //What is the lowercase of "E"
    //     imageSrc: "/levels-images/e.svg",
    //     correct: true,
    //     text: "e",
    //     audioSrc: "/levels-audio/e.mp3",
    //   },
    //   {
    //     challengeId: 148, //What is the lowercase of "E"
    //     imageSrc: "/levels-images/x.svg",
    //     correct: false,
    //     text: "x",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 148, //What is the lowercase of "E"
    //     imageSrc: "/levels-images/b.svg",
    //     correct: false,
    //     text: "b",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 148, //What is the lowercase of "E"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 149, //What is the lowercase of "F"
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     challengeId: 149, //What is the lowercase of "F"
    //     imageSrc: "/levels-images/Fc.svg",
    //     correct: false,
    //     text: "F",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     challengeId: 149, //What is the lowercase of "F"
    //     imageSrc: "/levels-images/f.svg",
    //     correct: true,
    //     text: "f",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     challengeId: 149, //What is the lowercase of "F"
    //     imageSrc: "/levels-images/g.svg",
    //     correct: false,
    //     text: "g",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 150, //What is the lowercase of "G"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 150, //What is the lowercase of "G"
    //     imageSrc: "/levels-images/g.svg",
    //     correct: true,
    //     text: "g",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    //   {
    //     challengeId: 150, //What is the lowercase of "G"
    //     imageSrc: "/levels-images/h.svg",
    //     correct: false,
    //     text: "h",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    //   {
    //     challengeId: 150, //What is the lowercase of "G"
    //     imageSrc: "/levels-images/t.svg",
    //     correct: false,
    //     text: "t",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 151, //What is the lowercase of "H"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 151, //What is the lowercase of "H"
    //     imageSrc: "/levels-images/h.svg",
    //     correct: true,
    //     text: "h",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    //   {
    //     challengeId: 151, //What is the lowercase of "H"
    //     imageSrc: "/levels-images/y.svg",
    //     correct: false,
    //     text: "y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     challengeId: 151, //What is the lowercase of "H"
    //     imageSrc: "/levels-images/Hc.svg",
    //     correct: false,
    //     text: "H",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 152, //What is the lowercase of "I"
    //     imageSrc: "/levels-images/i.svg",
    //     correct: true,
    //     text: "i",
    //     audioSrc: "/levels-audio/i.mp3",
    //   },
    //   {
    //     challengeId: 152, //What is the lowercase of "I"
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 152, //What is the lowercase of "I"
    //     imageSrc: "/levels-images/r.svg",
    //     correct: false,
    //     text: "r",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    //   {
    //     challengeId: 152, //What is the lowercase of "I"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 153, //What is the lowercase of "J"
    //     imageSrc: "/levels-images/Kc.svg",
    //     correct: false,
    //     text: "K",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 153, //What is the lowercase of "J"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 153, //What is the lowercase of "J"
    //     imageSrc: "/levels-images/j.svg",
    //     correct: true,
    //     text: "j",
    //     audioSrc: "/levels-audio/j.mp3",
    //   },
    //   {
    //     challengeId: 153, //What is the lowercase of "J"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 154, //What is the lowercase of "K"
    //     imageSrc: "/levels-images/Lc.svg",
    //     correct: false,
    //     text: "L",
    //     audioSrc: "/levels-audio/l.mp3",
    //   },
    //   {
    //     challengeId: 154, //What is the lowercase of "K"
    //     imageSrc: "/levels-images/k.svg",
    //     correct: true,
    //     text: "k",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 154, //What is the lowercase of "K"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: false,
    //     text: "c",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 154, //What is the lowercase of "K"
    //     imageSrc: "/levels-images/u.svg",
    //     correct: false,
    //     text: "u",
    //     audioSrc: "levels-audio//u.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 155, //What is the lowercase of "L"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 155, //What is the lowercase of "L"
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: false,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 155, //What is the lowercase of "L"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 155, //What is the lowercase of "L"
    //     imageSrc: "/levels-images/l.svg",
    //     correct: true,
    //     text: "l",
    //     audioSrc: "/levels-audio/l.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 156, //What is the lowercase of "M"
    //     imageSrc: "/levels-images/m.svg",
    //     correct: true,
    //     text: "m",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 156, //What is the lowercase of "M"
    //     imageSrc: "/levels-images/x.svg",
    //     correct: false,
    //     text: "x",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 156, //What is the lowercase of "M"
    //     imageSrc: "/levels-images/Bc.svg",
    //     correct: false,
    //     text: "B",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 156, //What is the lowercase of "M"
    //     imageSrc: "/levels-images/n.svg",
    //     correct: false,
    //     text: "n",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 157, //What is the lowercase of "N"
    //     imageSrc: "/levels-images/Mc.svg",
    //     correct: false,
    //     text: "M",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 157, //What is the lowercase of "N"
    //     imageSrc: "/levels-images/m.svg",
    //     correct: false,
    //     text: "m",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 157, //What is the lowercase of "N"
    //     imageSrc: "/levels-images/n.svg",
    //     correct: true,
    //     text: "n",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    //   {
    //     challengeId: 157, //What is the lowercase of "N"
    //     imageSrc: "/levels-images/o.svg",
    //     correct: false,
    //     text: "o",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 158, //What is the lowercase of "O"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 158, //What is the lowercase of "O"
    //     imageSrc: "/levels-images/o.svg",
    //     correct: true,
    //     text: "o",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    //   {
    //     challengeId: 158, //What is the lowercase of "O"
    //     imageSrc: "/levels-images/g.svg",
    //     correct: false,
    //     text: "g",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    //   {
    //     challengeId: 158, //What is the lowercase of "O"
    //     imageSrc: "/levels-images/t.svg",
    //     correct: false,
    //     text: "t",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 159, //What is the lowercase of "P"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 159, //What is the lowercase of "P"
    //     imageSrc: "/levels-images/Pc.svg",
    //     correct: false,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     challengeId: 159, //What is the lowercase of "P"
    //     imageSrc: "/levels-images/qc.svg",
    //     correct: false,
    //     text: "Q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 159, //What is the lowercase of "P"
    //     imageSrc: "/levels-images/p.svg",
    //     correct: true,
    //     text: "p",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 160, //What is the lowercase of "Q"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 160, //What is the lowercase of "Q"
    //     imageSrc: "/levels-images/q.svg",
    //     correct: true,
    //     text: "q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 160, //What is the lowercase of "Q"
    //     imageSrc: "/levels-images/i.svg",
    //     correct: false,
    //     text: "i",
    //     audioSrc: "/levels-audio/i.mp3",
    //   },
    //   {
    //     challengeId: 160, //What is the lowercase of "Q"
    //     imageSrc: "/levels-images/p.svg",
    //     correct: false,
    //     text: "p",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 161, //What is the lowercase of "R"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 161, //What is the lowercase of "R"
    //     imageSrc: "/levels-images/r.svg",
    //     correct: true,
    //     text: "r",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    //   {
    //     challengeId: 161, //What is the lowercase of "R"
    //     imageSrc: "/levels-images/p.svg",
    //     correct: false,
    //     text: "p",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     challengeId: 161, //What is the lowercase of "R"
    //     imageSrc: "/levels-images/Rc.svg",
    //     correct: false,
    //     text: "R",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 162, //What is the lowercase of "S"
    //     imageSrc: "/levels-images/s.svg",
    //     correct: true,
    //     text: "s",
    //     audioSrc: "/levels-audio/s.mp3",
    //   },
    //   {
    //     challengeId: 162, //What is the lowercase of "S"
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 162, //What is the lowercase of "S"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: false,
    //     text: "c",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 162, //What is the lowercase of "S"
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: false,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 163, //What is the lowercase of "T"
    //     imageSrc: "/levels-images/Kc.svg",
    //     correct: false,
    //     text: "K",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 163, //What is the lowercase of "T"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: false,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 163, //What is the lowercase of "T"
    //     imageSrc: "/levels-images/t.svg",
    //     correct: true,
    //     text: "t",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    //   {
    //     challengeId: 163, //What is the lowercase of "T"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 164, //What is the lowercase of "U"
    //     imageSrc: "/levels-images/Vc.svg",
    //     correct: false,
    //     text: "V",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 164, //What is the lowercase of "U"
    //     imageSrc: "/levels-images/u.svg",
    //     correct: true,
    //     text: "u",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 164, //What is the lowercase of "U"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: false,
    //     text: "c",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 164, //What is the lowercase of "U"
    //     imageSrc: "/levels-images/y.svg",
    //     correct: false,
    //     text: "y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 165, //What is the lowercase of "V"
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 165, //What is the lowercase of "V"
    //     imageSrc: "/levels-images/u.svg",
    //     correct: false,
    //     text: "u",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 165, //What is the lowercase of "V"
    //     imageSrc: "/levels-images/d.svg",
    //     correct: false,
    //     text: "d",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 165, //What is the lowercase of "V"
    //     imageSrc: "/levels-images/v.svg",
    //     correct: true,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 166, //What is the lowercase of "W"
    //     imageSrc: "/levels-images/w.svg",
    //     correct: true,
    //     text: "w",
    //     audioSrc: "/levels-audio/w.mp3",
    //   },
    //   {
    //     challengeId: 166, //What is the lowercase of "W"
    //     imageSrc: "/levels-images/x.svg",
    //     correct: false,
    //     text: "x",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 166, //What is the lowercase of "W"
    //     imageSrc: "/levels-images/b.svg",
    //     correct: false,
    //     text: "b",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 166, //What is the lowercase of "W"
    //     imageSrc: "/levels-images/Nc.svg",
    //     correct: false,
    //     text: "N",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 167, //What is the lowercase of "X"
    //     imageSrc: "levels-images//m.svg",
    //     correct: false,
    //     text: "m",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 167, //What is the lowercase of "X"
    //     imageSrc: "/levels-images/f.svg",
    //     correct: false,
    //     text: "f",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     challengeId: 167, //What is the lowercase of "X"
    //     imageSrc: "/levels-images/x.svg",
    //     correct: true,
    //     text: "x",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 167, //What is the lowercase of "X"
    //     imageSrc: "/levels-images/o.svg",
    //     correct: false,
    //     text: "o",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 168, //What is the lowercase of "Y"
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 168, //What is the lowercase of "Y"
    //     imageSrc: "/levels-images/y.svg",
    //     correct: true,
    //     text: "y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     challengeId: 168, //What is the lowercase of "Y"
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 168, //What is the lowercase of "Y"
    //     imageSrc: "/levels-images/t.svg",
    //     correct: false,
    //     text: "t",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 169, //What is the lowercase of "Z"
    //     imageSrc: "/levels-images/z.svg",
    //     correct: true,
    //     text: "z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 169, //What is the lowercase of "Z"
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: false,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 169, //What is the lowercase of "Z"
    //     imageSrc: "/levels-images/q.svg",
    //     correct: false,
    //     text: "q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 169, //What is the lowercase of "Z"
    //     imageSrc: "/levels-images/Pc.svg",
    //     correct: false,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    // ]);

    // // 10 challenges for Sequences - 5 forward, 5 reverse
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 170,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 1,
    //     question: 'What is the missing letter "U, _, W, X, Y" ?',
    //   },
    //   {
    //     id: 171,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 2,
    //     question: 'What is the missing letter "_, Y, X, W" ?',
    //   },
    //   {
    //     id: 172,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 3,
    //     question: 'What is the missing letter "L, M, N, _, P, Q" ?',
    //   },
    //   {
    //     id: 173,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 4,
    //     question: 'What is the missing letter "A, B, C, _, E" ?',
    //   },
    //   {
    //     id: 174,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 5,
    //     question: 'What is the missing letter "Z, Y, _, W, V" ?',
    //   },
    //   {
    //     id: 175,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 6,
    //     question: 'What is the missing letter "H, I, _, K," ?',
    //   },
    //   {
    //     id: 176,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 7,
    //     question: 'What is the missing letter "V, U, _, S," ?',
    //   },
    //   {
    //     id: 177,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 8,
    //     question: 'What is the missing letter "W, _, Y" ?',
    //   },
    //   {
    //     id: 178,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 9,
    //     question: 'What is the missing letter "F, _, D" ?',
    //   },
    //   {
    //     id: 179,
    //     lessonId: 24, //Sequences
    //     type: "SELECT",
    //     order: 10,
    //     question: 'What is the missing letter "Q, _, O" ?',
    //   },
    // ]);

    // // 40 challenge options for Sequences
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 170, //U, _, W, X, Y
    //     imageSrc: "/levels-images/Uc.svg",
    //     correct: false,
    //     text: "U",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 170, //U, _, W, X, Y
    //     imageSrc: "/levels-images/Vc.svg",
    //     correct: true,
    //     text: "V",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 170, //U, _, W, X, Y
    //     imageSrc: "/levels-images/Wc.svg",
    //     correct: false,
    //     text: "W",
    //     audioSrc: "/levels-audio/w.mp3",
    //   },
    //   {
    //     challengeId: 170, //U, _, W, X, Y
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 171, //_, Y, X, W
    //     imageSrc: "/levels-images/Yc.svg",
    //     correct: false,
    //     text: "Y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     challengeId: 171, //_, Y, X, W
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: true,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 171, //_, Y, X, W
    //     imageSrc: "/levels-images/p.svg",
    //     correct: false,
    //     text: "p",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     challengeId: 171, //_, Y, X, W
    //     imageSrc: "/levels-images/Rc.svg",
    //     correct: false,
    //     text: "R",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 172, //L, M, N, _, P, Q
    //     imageSrc: "/levels-images/Oc.svg",
    //     correct: true,
    //     text: "O",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    //   {
    //     challengeId: 172, //L, M, N, _, P, Q
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 172, //L, M, N, _, P, Q
    //     imageSrc: "/levels-images/Nc.svg",
    //     correct: false,
    //     text: "N",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    //   {
    //     challengeId: 172, //L, M, N, _, P, Q
    //     imageSrc: "/levels-images/Qc.svg",
    //     correct: false,
    //     text: "Q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 173, //A, B, C, _, E
    //     imageSrc: "/levels-images/Kc.svg",
    //     correct: false,
    //     text: "K",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     challengeId: 173, //A, B, C, _, E
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: false,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 173, //A, B, C, _, E
    //     imageSrc: "/levels-images/Dc.svg",
    //     correct: true,
    //     text: "D",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     challengeId: 173, //A, B, C, _, E
    //     imageSrc: "/levels-images/Ac.svg",
    //     correct: false,
    //     text: "A",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 174, //Z, Y, _, W, V"
    //     imageSrc: "/levels-images/Vc.svg",
    //     correct: false,
    //     text: "V",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 174, //Z, Y, _, W, V"
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: true,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 174, //Z, Y, _, W, V"
    //     imageSrc: "/levels-images/c.svg",
    //     correct: false,
    //     text: "c",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 174, //Z, Y, _, W, V"
    //     imageSrc: "/levels-images/y.svg",
    //     correct: false,
    //     text: "y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 175, //H, I, _, K,
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    //   {
    //     challengeId: 175, //H, I, _, K,
    //     imageSrc: "/levels-images/u.svg",
    //     correct: false,
    //     text: "u",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     challengeId: 175, //H, I, _, K,
    //     imageSrc: "/levels-images/Gc.svg",
    //     correct: false,
    //     text: "G",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    //   {
    //     challengeId: 175, //H, I, _, K,
    //     imageSrc: "/levels-images/Jc.svg",
    //     correct: true,
    //     text: "J",
    //     audioSrc: "/levels-audio/j.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 176, //V, U, _, S,
    //     imageSrc: "/levels-images/Tc.svg",
    //     correct: true,
    //     text: "T",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    //   {
    //     challengeId: 176, //V, U, _, S,
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: false,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 176, //V, U, _, S,
    //     imageSrc: "/levels-images/b.svg",
    //     correct: false,
    //     text: "b",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     challengeId: 176, //V, U, _, S,
    //     imageSrc: "/levels-images/Wc.svg",
    //     correct: false,
    //     text: "W",
    //     audioSrc: "/levels-audio/w.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 177, //W, _, Y
    //     imageSrc: "levels-images//m.svg",
    //     correct: false,
    //     text: "m",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     challengeId: 177, //W, _, Y
    //     imageSrc: "/levels-images/Yc.svg",
    //     correct: false,
    //     text: "Y",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     challengeId: 177, //W, _, Y
    //     imageSrc: "/levels-images/Xc.svg",
    //     correct: true,
    //     text: "X",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     challengeId: 177, //W, _, Y
    //     imageSrc: "/levels-images/Zc.svg",
    //     correct: false,
    //     text: "Z",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 178, //F, _, D
    //     imageSrc: "/levels-images/Cc.svg",
    //     correct: false,
    //     text: "C",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     challengeId: 178, //F, _, D
    //     imageSrc: "/levels-images/Ec.svg",
    //     correct: true,
    //     text: "E",
    //     audioSrc: "/levels-audio/e.mp3",
    //   },
    //   {
    //     challengeId: 178, //F, _, D
    //     imageSrc: "/levels-images/v.svg",
    //     correct: false,
    //     text: "v",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     challengeId: 178, //F, _, D
    //     imageSrc: "/levels-images/Gc.svg",
    //     correct: false,
    //     text: "G",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    // ]);
    // await db.insert(schema.challengeOptions).values([
    //   {
    //     challengeId: 179, //Q, _, O
    //     imageSrc: "/levels-images/Pc.svg",
    //     correct: true,
    //     text: "P",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     challengeId: 179, //Q, _, O
    //     imageSrc: "/levels-images/Nc.svg",
    //     correct: false,
    //     text: "N",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    //   {
    //     challengeId: 179, //Q, _, O
    //     imageSrc: "/levels-images/q.svg",
    //     correct: false,
    //     text: "q",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     challengeId: 179, //Q, _, O
    //     imageSrc: "/levels-images/Rc.svg",
    //     correct: false,
    //     text: "R",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    // ]);

    // //English Unit 2
    // await db.insert(schema.units).values([
    //   {
    //     id: 6,
    //     courseId: 2, //English
    //     title: "Unit 2",
    //     description: "Alphabets Pronunciation",
    //     order: 1,
    //   },
    // ]);

    // // 1 lessons in unit 2 - Alphabets Pronunciation
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 25,
    //     unitId: 6, //Unit 2 eng
    //     order: 1,
    //     title: "Alphabets",
    //   },
    // ]);

    // // 26 challenges for Alphabets - 1 for each letter
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 180,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 1,
    //     question: "A",
    //     imageSrc: "/levels-images/Ac.svg",
    //     audioSrc: "/levels-audio/a.mp3",
    //   },
    //   {
    //     id: 181,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 2,
    //     question: "B",
    //     imageSrc: "/levels-images/Bc.svg",
    //     audioSrc: "/levels-audio/b.mp3",
    //   },
    //   {
    //     id: 182,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 3,
    //     question: "C",
    //     imageSrc: "/levels-images/Cc.svg",
    //     audioSrc: "/levels-audio/c.mp3",
    //   },
    //   {
    //     id: 183,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 4,
    //     question: "D",
    //     imageSrc: "/levels-images/Dc.svg",
    //     audioSrc: "/levels-audio/d.mp3",
    //   },
    //   {
    //     id: 184,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 5,
    //     question: "E",
    //     imageSrc: "/levels-images/Ec.svg",
    //     audioSrc: "/levels-audio/e.mp3",
    //   },
    //   {
    //     id: 185,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 6,
    //     question: "F",
    //     imageSrc: "/levels-images/Fc.svg",
    //     audioSrc: "/levels-audio/f.mp3",
    //   },
    //   {
    //     id: 186,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 7,
    //     question: "G",
    //     imageSrc: "/levels-images/Gc.svg",
    //     audioSrc: "/levels-audio/g.mp3",
    //   },
    //   {
    //     id: 187,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 8,
    //     question: "H",
    //     imageSrc: "/levels-images/Hc.svg",
    //     audioSrc: "/levels-audio/h.mp3",
    //   },
    //   {
    //     id: 188,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 9,
    //     question: "I",
    //     imageSrc: "/levels-images/Ic.svg",
    //     audioSrc: "/levels-audio/i.mp3",
    //   },
    //   {
    //     id: 189,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 10,
    //     question: "J",
    //     imageSrc: "/levels-images/Jc.svg",
    //     audioSrc: "/levels-audio/j.mp3",
    //   },
    //   {
    //     id: 190,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 11,
    //     question: "K",
    //     imageSrc: "/levels-images/Kc.svg",
    //     audioSrc: "/levels-audio/k.mp3",
    //   },
    //   {
    //     id: 191,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 12,
    //     question: "L",
    //     imageSrc: "/levels-images/Lc.svg",
    //     audioSrc: "/levels-audio/l.mp3",
    //   },
    //   {
    //     id: 192,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 13,
    //     question: "M",
    //     imageSrc: "/levels-images/Mc.svg",
    //     audioSrc: "/levels-audio/m.mp3",
    //   },
    //   {
    //     id: 193,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 14,
    //     question: "N",
    //     imageSrc: "/levels-images/Nc.svg",
    //     audioSrc: "/levels-audio/n.mp3",
    //   },
    //   {
    //     id: 194,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 15,
    //     question: "O",
    //     imageSrc: "/levels-images/Oc.svg",
    //     audioSrc: "/levels-audio/o.mp3",
    //   },
    //   {
    //     id: 195,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 16,
    //     question: "P",
    //     imageSrc: "/levels-images/Pc.svg",
    //     audioSrc: "/levels-audio/p.mp3",
    //   },
    //   {
    //     id: 196,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 17,
    //     question: "Q",
    //     imageSrc: "/levels-images/Qc.svg",
    //     audioSrc: "/levels-audio/q.mp3",
    //   },
    //   {
    //     id: 197,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 18,
    //     question: "R",
    //     imageSrc: "/levels-images/Rc.svg",
    //     audioSrc: "/levels-audio/r.mp3",
    //   },
    //   {
    //     id: 198,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 19,
    //     question: "S",
    //     imageSrc: "/levels-images/Sc.svg",
    //     audioSrc: "/levels-audio/s.mp3",
    //   },
    //   {
    //     id: 199,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 20,
    //     question: "T",
    //     imageSrc: "/levels-images/Tc.svg",
    //     audioSrc: "/levels-audio/t.mp3",
    //   },
    //   {
    //     id: 200,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 21,
    //     question: "U",
    //     imageSrc: "/levels-images/Uc.svg",
    //     audioSrc: "/levels-audio/u.mp3",
    //   },
    //   {
    //     id: 201,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 22,
    //     question: "V",
    //     imageSrc: "/levels-images/Vc.svg",
    //     audioSrc: "/levels-audio/v.mp3",
    //   },
    //   {
    //     id: 202,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 23,
    //     question: "W",
    //     imageSrc: "/levels-images/Wc.svg",
    //     audioSrc: "/levels-audio/w.mp3",
    //   },
    //   {
    //     id: 203,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 24,
    //     question: "X",
    //     imageSrc: "/levels-images/Xc.svg",
    //     audioSrc: "/levels-audio/x.mp3",
    //   },
    //   {
    //     id: 204,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 25,
    //     question: "Y",
    //     imageSrc: "/levels-images/Yc.svg",
    //     audioSrc: "/levels-audio/y.mp3",
    //   },
    //   {
    //     id: 205,
    //     lessonId: 25, //Alphabet Pronunciation
    //     type: "READ",
    //     order: 26,
    //     question: "Z",
    //     imageSrc: "/levels-images/Zc.svg",
    //     audioSrc: "/levels-audio/z.mp3",
    //   },
    // ]);

    // //English Unit 3
    // await db.insert(schema.units).values([
    //   {
    //     id: 7,
    //     courseId: 2, //English
    //     title: "Unit 3",
    //     description: "Phonics",
    //     order: 1,
    //   },
    // ]);

    // // 1 lessons in unit 3 - Phonics Pronunciation
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 26,
    //     unitId: 7, //Unit 3 eng
    //     order: 1,
    //     title: "Phonics",
    //   },
    // ]);
    // // 26 challenges for Phonics - 1 for each letter
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 206,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 1,
    //     question: "Apple",
    //     imageSrc: "/levels-images/apple.svg",
    //     audioSrc: "/levels-audio/apple.mp3",
    //   },
    //   {
    //     id: 207,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 2,
    //     question: "Ball",
    //     imageSrc: "/levels-images/ball.svg",
    //     audioSrc: "/levels-audio/ball.mp3",
    //   },
    //   {
    //     id: 208,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 3,
    //     question: "Cat",
    //     imageSrc: "/levels-images/cat.svg",
    //     audioSrc: "/levels-audio/cat.mp3",
    //   },
    //   {
    //     id: 209,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 4,
    //     question: "Dog",
    //     imageSrc: "/levels-images/dog.svg",
    //     audioSrc: "/levels-audio/dog.mp3",
    //   },
    //   {
    //     id: 210,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 5,
    //     question: "Elephant",
    //     imageSrc: "/levels-images/elephant.svg",
    //     audioSrc: "/levels-audio/elephant.mp3",
    //   },
    //   {
    //     id: 211,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 6,
    //     question: "Food",
    //     imageSrc: "/levels-images/food.svg",
    //     audioSrc: "/levels-audio/food.mp3",
    //   },
    //   {
    //     id: 212,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 7,
    //     question: "Gate",
    //     imageSrc: "/levels-images/gate.svg",
    //     audioSrc: "/levels-audio/gate.mp3",
    //   },
    //   {
    //     id: 213,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 8,
    //     question: "Hat",
    //     imageSrc: "/levels-images/hat.svg",
    //     audioSrc: "/levels-audio/hat.mp3",
    //   },
    //   {
    //     id: 214,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 9,
    //     question: "Insect",
    //     imageSrc: "/levels-images/insect.svg",
    //     audioSrc: "/levels-audio/insect.mp3",
    //   },
    //   {
    //     id: 215,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 10,
    //     question: "Jug",
    //     imageSrc: "/levels-images/jug.svg",
    //     audioSrc: "/levels-audio/jug.mp3",
    //   },
    //   {
    //     id: 216,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 11,
    //     question: "Kite",
    //     imageSrc: "/levels-images/kite.svg",
    //     audioSrc: "/levels-audio/kite.mp3",
    //   },
    //   {
    //     id: 217,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 12,
    //     question: "Lamp",
    //     imageSrc: "/levels-images/lamp.svg",
    //     audioSrc: "/levels-audio/lamp.mp3",
    //   },
    //   {
    //     id: 218,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 13,
    //     question: "Milk",
    //     imageSrc: "/levels-images/milk.svg",
    //     audioSrc: "/levels-audio/milk.mp3",
    //   },
    //   {
    //     id: 219,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 14,
    //     question: "Needle",
    //     imageSrc: "/levels-images/needle.svg",
    //     audioSrc: "/levels-audio/needle.mp3",
    //   },
    //   {
    //     id: 220,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 15,
    //     question: "Orange",
    //     imageSrc: "/levels-images/orange.svg",
    //     audioSrc: "/levels-audio/orange.mp3",
    //   },
    //   {
    //     id: 221,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 16,
    //     question: "Pencil",
    //     imageSrc: "/levels-images/pencil.svg",
    //     audioSrc: "/levels-audio/pencil.mp3",
    //   },
    //   {
    //     id: 222,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 17,
    //     question: "Question Mark",
    //     imageSrc: "/levels-images/question.svg",
    //     audioSrc: "/levels-audio/question.mp3",
    //   },
    //   {
    //     id: 223,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 18,
    //     question: "Rice",
    //     imageSrc: "/levels-images/rice.svg",
    //     audioSrc: "/levels-audio/rice.mp3",
    //   },
    //   {
    //     id: 224,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 19,
    //     question: "Sun",
    //     imageSrc: "/levels-images/sun.svg",
    //     audioSrc: "/levels-audio/sun.mp3",
    //   },
    //   {
    //     id: 225,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 20,
    //     question: "Tomato",
    //     imageSrc: "/levels-images/tomato.svg",
    //     audioSrc: "/levels-audio/tomato.mp3",
    //   },
    //   {
    //     id: 226,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 21,
    //     question: "Umbrella",
    //     imageSrc: "/levels-images/umbrella.svg",
    //     audioSrc: "/levels-audio/umbrella.mp3",
    //   },
    //   {
    //     id: 227,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 22,
    //     question: "Van",
    //     imageSrc: "/levels-images/van.svg",
    //     audioSrc: "/levels-audio/van.mp3",
    //   },
    //   {
    //     id: 228,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 23,
    //     question: "Water",
    //     imageSrc: "/levels-images/water.svg",
    //     audioSrc: "/levels-audio/water.mp3",
    //   },
    //   {
    //     id: 229,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 24,
    //     question: "X-Ray",
    //     imageSrc: "/levels-images/xray.svg",
    //     audioSrc: "/levels-audio/xray.mp3",
    //   },
    //   {
    //     id: 230,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 25,
    //     question: "Yellow",
    //     imageSrc: "/levels-images/yellow.svg",
    //     audioSrc: "/levels-audio/yellow.mp3",
    //   },
    //   {
    //     id: 231,
    //     lessonId: 26, //Phonics
    //     type: "READ",
    //     order: 26,
    //     question: "Zebra",
    //     imageSrc: "/levels-images/zebra.svg",
    //     audioSrc: "/levels-audio/zebra.mp3",
    //   },
    // ]);

    // //English Unit 4
    // await db.insert(schema.units).values([
    //   {
    //     id: 8,
    //     courseId: 2, //English
    //     title: "Unit 4",
    //     description: "Numbers",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 4 - Numbers
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 27,
    //     unitId: 8, //Unit 4 eng
    //     order: 1,
    //     title: "Numbers",
    //   },
    // ]);
    // // 26 challenges for Numbers - 1 for each letter
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 232,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 1,
    //     question: "One",
    //     imageSrc: "/levels-images/1.svg",
    //     audioSrc: "/levels-audio/1.mp3",
    //   },
    //   {
    //     id: 234,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 2,
    //     question: "Two",
    //     imageSrc: "/levels-images/2.svg",
    //     audioSrc: "/levels-audio/2.mp3",
    //   },
    //   {
    //     id: 235,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 3,
    //     question: "Three",
    //     imageSrc: "/levels-images/3.svg",
    //     audioSrc: "/levels-audio/3.mp3",
    //   },
    //   {
    //     id: 236,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 4,
    //     question: "Four",
    //     imageSrc: "/levels-images/4.svg",
    //     audioSrc: "/levels-audio/4.mp3",
    //   },
    //   {
    //     id: 237,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 5,
    //     question: "Five",
    //     imageSrc: "/levels-images/5.svg",
    //     audioSrc: "/levels-audio/5.mp3",
    //   },
    //   {
    //     id: 238,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 6,
    //     question: "Six",
    //     imageSrc: "/levels-images/6.svg",
    //     audioSrc: "/levels-audio/6.mp3",
    //   },
    //   {
    //     id: 239,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 7,
    //     question: "Seven",
    //     imageSrc: "/levels-images/7.svg",
    //     audioSrc: "/levels-audio/7.mp3",
    //   },
    //   {
    //     id: 240,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 8,
    //     question: "Eight",
    //     imageSrc: "/levels-images/8.svg",
    //     audioSrc: "/levels-audio/8.mp3",
    //   },
    //   {
    //     id: 241,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 9,
    //     question: "Nine",
    //     imageSrc: "/levels-images/9.svg",
    //     audioSrc: "/levels-audio/9.mp3",
    //   },
    //   {
    //     id: 242,
    //     lessonId: 27, //Numbers
    //     type: "READ",
    //     order: 10,
    //     question: "Ten",
    //     imageSrc: "/levels-images/10.svg",
    //     audioSrc: "/levels-audio/10.mp3",
    //   },
    // ]);

    // //English Unit 5
    // await db.insert(schema.units).values([
    //   {
    //     id: 9,
    //     courseId: 2, //English
    //     title: "Unit 5",
    //     description: "Body Parts",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 5 - Body Parts
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 28,
    //     unitId: 9, //Unit 5 eng
    //     order: 1,
    //     title: "Body Parts",
    //   },
    // ]);
    // // 9 challenges for Body Parts - 1 for each letter
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 243,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 1,
    //     question: "Arm",
    //     imageSrc: "/levels-images/arm.svg",
    //     audioSrc: "/levels-audio/arm.mp3",
    //   },
    //   {
    //     id: 244,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 2,
    //     question: "Ear",
    //     imageSrc: "/levels-images/ear.svg",
    //     audioSrc: "/levels-audio/ear.mp3",
    //   },
    //   {
    //     id: 245,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 3,
    //     question: "Eyes",
    //     imageSrc: "/levels-images/eyes.svg",
    //     audioSrc: "/levels-audio/eyes.mp3",
    //   },
    //   {
    //     id: 246,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 4,
    //     question: "Feet",
    //     imageSrc: "/levels-images/feet.svg",
    //     audioSrc: "/levels-audio/feet.mp3",
    //   },
    //   {
    //     id: 247,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 5,
    //     question: "Hand",
    //     imageSrc: "/levels-images/hand.svg",
    //     audioSrc: "/levels-audio/hand.mp3",
    //   },
    //   {
    //     id: 248,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 6,
    //     question: "Head",
    //     imageSrc: "/levels-images/head.svg",
    //     audioSrc: "/levels-audio/head.mp3",
    //   },
    //   {
    //     id: 249,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 7,
    //     question: "Legs",
    //     imageSrc: "/levels-images/legs.svg",
    //     audioSrc: "/levels-audio/legs.mp3",
    //   },
    //   {
    //     id: 250,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 8,
    //     question: "Lips",
    //     imageSrc: "/levels-images/lips.svg",
    //     audioSrc: "/levels-audio/lips.mp3",
    //   },
    //   {
    //     id: 251,
    //     lessonId: 28, //Body Parts
    //     type: "READ",
    //     order: 9,
    //     question: "Nose",
    //     imageSrc: "/levels-images/nose.svg",
    //     audioSrc: "/levels-audio/nose.mp3",
    //   },
    // ]);

    // // English Unit 6
    // await db.insert(schema.units).values([
    //   {
    //     id: 10,
    //     courseId: 2, //English
    //     title: "Unit 6",
    //     description: "Colors",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 6 - Colors
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 29,
    //     unitId: 10, //Unit 5 eng
    //     order: 1,
    //     title: "Colors",
    //   },
    // ]);
    // // 10 challenges for Colors - 1 for each color
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 252,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 1,
    //     question: "Black",
    //     imageSrc: "/levels-images/black.svg",
    //     audioSrc: "/levels-audio/black.mp3",
    //   },
    //   {
    //     id: 253,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 2,
    //     question: "Blue",
    //     imageSrc: "/levels-images/blue.svg",
    //     audioSrc: "/levels-audio/blue.mp3",
    //   },
    //   {
    //     id: 254,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 3,
    //     question: "Brown",
    //     imageSrc: "/levels-images/brown.svg",
    //     audioSrc: "/levels-audio/brown.mp3",
    //   },
    //   {
    //     id: 255,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 4,
    //     question: "Grey",
    //     imageSrc: "/levels-images/grey.svg",
    //     audioSrc: "/levels-audio/grey.mp3",
    //   },
    //   {
    //     id: 256,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 5,
    //     question: "Green",
    //     imageSrc: "/levels-images/green.svg",
    //     audioSrc: "/levels-audio/green.mp3",
    //   },
    //   {
    //     id: 257,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 6,
    //     question: "Orange",
    //     imageSrc: "/levels-images/orangec.svg",
    //     audioSrc: "/levels-audio/orange.mp3",
    //   },
    //   {
    //     id: 258,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 7,
    //     question: "Pink",
    //     imageSrc: "/levels-images/pink.svg",
    //     audioSrc: "/levels-audio/pink.mp3",
    //   },
    //   {
    //     id: 259,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 8,
    //     question: "Purple",
    //     imageSrc: "/levels-images/purple.svg",
    //     audioSrc: "/levels-audio/purple.mp3",
    //   },
    //   {
    //     id: 260,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 9,
    //     question: "Red",
    //     imageSrc: "/levels-images/red.svg",
    //     audioSrc: "/levels-audio/red.mp3",
    //   },
    //   {
    //     id: 261,
    //     lessonId: 29, //Colors
    //     type: "READ",
    //     order: 10,
    //     question: "Yellow",
    //     imageSrc: "/levels-images/yellow.svg",
    //     audioSrc: "/levels-audio/yellow.mp3",
    //   },
    // ]);

    // // English Unit 7
    // await db.insert(schema.units).values([
    //   {
    //     id: 11,
    //     courseId: 2, //English
    //     title: "Unit 7",
    //     description: "Days",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 7 - Days of the week
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 30,
    //     unitId: 11, //Unit 5 eng
    //     order: 1,
    //     title: "Days",
    //   },
    // ]);
    // // 7 challenges for Days in the Week - 1 for each Day
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 262,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 1,
    //     question: "Monday",
    //     imageSrc: "/levels-images/monday.svg",
    //     audioSrc: "/levels-audio/monday.mp3",
    //   },
    //   {
    //     id: 263,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 2,
    //     question: "Tuesday",
    //     imageSrc: "/levels-images/tuesday.svg",
    //     audioSrc: "/levels-audio/tuesday.mp3",
    //   },
    //   {
    //     id: 264,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 3,
    //     question: "Wednesday",
    //     imageSrc: "/levels-images/wednesday.svg",
    //     audioSrc: "/levels-audio/wednesday.mp3",
    //   },
    //   {
    //     id: 265,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 4,
    //     question: "Thursday",
    //     imageSrc: "/levels-images/thursday.svg",
    //     audioSrc: "/levels-audio/thursday.mp3",
    //   },
    //   {
    //     id: 266,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 5,
    //     question: "Friday",
    //     imageSrc: "/levels-images/friday.svg",
    //     audioSrc: "/levels-audio/friday.mp3",
    //   },
    //   {
    //     id: 267,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 6,
    //     question: "Saturday",
    //     imageSrc: "/levels-images/saturday.svg",
    //     audioSrc: "/levels-audio/saturday.mp3",
    //   },
    //   {
    //     id: 268,
    //     lessonId: 30, //Days
    //     type: "READ",
    //     order: 7,
    //     question: "Sunday",
    //     imageSrc: "/levels-images/sunday.svg",
    //     audioSrc: "/levels-audio/sunday.mp3",
    //   },
    // ]);

    // // English Unit 8
    // await db.insert(schema.units).values([
    //   {
    //     id: 12,
    //     courseId: 2, //English
    //     title: "Unit 8",
    //     description: "Months",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 8 - Months of the Year
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 31,
    //     unitId: 12, //Unit 8 eng
    //     order: 1,
    //     title: "Months",
    //   },
    // ]);
    // // 12 challenges for Months in the Year - 1 for each Month
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 269,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 1,
    //     question: "January",
    //     imageSrc: "/levels-images/january.svg",
    //     audioSrc: "/levels-audio/january.mp3",
    //   },
    //   {
    //     id: 270,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 2,
    //     question: "February",
    //     imageSrc: "/levels-images/february.svg",
    //     audioSrc: "/levels-audio/february.mp3",
    //   },
    //   {
    //     id: 271,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 3,
    //     question: "March",
    //     imageSrc: "/levels-images/march.svg",
    //     audioSrc: "/levels-audio/march.mp3",
    //   },
    //   {
    //     id: 272,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 4,
    //     question: "April",
    //     imageSrc: "/levels-images/april.svg",
    //     audioSrc: "/levels-audio/april.mp3",
    //   },
    //   {
    //     id: 273,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 5,
    //     question: "May",
    //     imageSrc: "/levels-images/may.svg",
    //     audioSrc: "/levels-audio/may.mp3",
    //   },
    //   {
    //     id: 274,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 6,
    //     question: "June",
    //     imageSrc: "/levels-images/june.svg",
    //     audioSrc: "/levels-audio/june.mp3",
    //   },
    //   {
    //     id: 275,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 7,
    //     question: "July",
    //     imageSrc: "/levels-images/july.svg",
    //     audioSrc: "/levels-audio/july.mp3",
    //   },
    //   {
    //     id: 276,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 8,
    //     question: "August",
    //     imageSrc: "/levels-images/august.svg",
    //     audioSrc: "/levels-audio/august.mp3",
    //   },
    //   {
    //     id: 277,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 9,
    //     question: "September",
    //     imageSrc: "/levels-images/september.svg",
    //     audioSrc: "/levels-audio/september.mp3",
    //   },
    //   {
    //     id: 278,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 10,
    //     question: "October",
    //     imageSrc: "/levels-images/october.svg",
    //     audioSrc: "/levels-audio/october.mp3",
    //   },
    //   {
    //     id: 279,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 11,
    //     question: "November",
    //     imageSrc: "/levels-images/november.svg",
    //     audioSrc: "/levels-audio/november.mp3",
    //   },
    //   {
    //     id: 280,
    //     lessonId: 31, //Months
    //     type: "READ",
    //     order: 12,
    //     question: "December",
    //     imageSrc: "/levels-images/december.svg",
    //     audioSrc: "/levels-audio/december.mp3",
    //   },
    // ]);

    // // English Unit 9
    // await db.insert(schema.units).values([
    //   {
    //     id: 13,
    //     courseId: 2, //English
    //     title: "Unit 9",
    //     description: "Flowers",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 9 - Flowers
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 32,
    //     unitId: 13, //Unit 9 eng
    //     order: 1,
    //     title: "Flowers",
    //   },
    // ]);
    // // 4 challenges for 4 Flowers
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 281,
    //     lessonId: 32, //Flowers
    //     type: "READ",
    //     order: 1,
    //     question: "Rose",
    //     imageSrc: "/levels-images/rose.svg",
    //     audioSrc: "/levels-audio/rose.mp3",
    //   },
    //   {
    //     id: 282,
    //     lessonId: 32, //Flowers
    //     type: "READ",
    //     order: 2,
    //     question: "Sunflower",
    //     imageSrc: "/levels-images/sunflower.svg",
    //     audioSrc: "/levels-audio/sunflower.mp3",
    //   },
    //   {
    //     id: 283,
    //     lessonId: 32, //Flowers
    //     type: "READ",
    //     order: 3,
    //     question: "Tulip",
    //     imageSrc: "/levels-images/tulip.svg",
    //     audioSrc: "/levels-audio/tulip.mp3",
    //   },
    //   {
    //     id: 284,
    //     lessonId: 32, //Flowers
    //     type: "READ",
    //     order: 4,
    //     question: "Daisy",
    //     imageSrc: "/levels-images/daisy.svg",
    //     audioSrc: "/levels-audio/daisy.mp3",
    //   },
    // ]);

    // // English Unit 10
    // await db.insert(schema.units).values([
    //   {
    //     id: 14,
    //     courseId: 2, //English
    //     title: "Unit 10",
    //     description: "Birds",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 10 - Birds
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 33,
    //     unitId: 14, //Unit 10 eng
    //     order: 1,
    //     title: "Birds",
    //   },
    // ]);
    // // 8 challenges for 8 Birds
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 285,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 1,
    //     question: "Eagle",
    //     imageSrc: "/levels-images/eagle.svg",
    //     audioSrc: "/levels-audio/eagle.mp3",
    //   },
    //   {
    //     id: 286,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 2,
    //     question: "Vulture",
    //     imageSrc: "/levels-images/vulture.svg",
    //     audioSrc: "/levels-audio/vulture.mp3",
    //   },
    //   {
    //     id: 287,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 3,
    //     question: "Ostrich",
    //     imageSrc: "/levels-images/ostrich.svg",
    //     audioSrc: "/levels-audio/ostrich.mp3",
    //   },
    //   {
    //     id: 288,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 4,
    //     question: "Owl",
    //     imageSrc: "/levels-images/owl.svg",
    //     audioSrc: "/levels-audio/owl.mp3",
    //   },
    //   {
    //     id: 289,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 5,
    //     question: "Flamingo",
    //     imageSrc: "/levels-images/flamingo.svg",
    //     audioSrc: "/levels-audio/flamingo.mp3",
    //   },
    //   {
    //     id: 290,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 6,
    //     question: "Chicken",
    //     imageSrc: "/levels-images/chicken.svg",
    //     audioSrc: "/levels-audio/chicken.mp3",
    //   },
    //   {
    //     id: 291,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 7,
    //     question: "Rooster",
    //     imageSrc: "/levels-images/rooster.svg",
    //     audioSrc: "/levels-audio/rooster.mp3",
    //   },
    //   {
    //     id: 292,
    //     lessonId: 33, //Birds
    //     type: "READ",
    //     order: 8,
    //     question: "Duck",
    //     imageSrc: "/levels-images/duck.svg",
    //     audioSrc: "/levels-audio/duck.mp3",
    //   },
    // ]);

    // // English Unit 11
    // await db.insert(schema.units).values([
    //   {
    //     id: 15,
    //     courseId: 2, //English
    //     title: "Unit 11",
    //     description: "Fruits",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 11 - Fruits
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 34,
    //     unitId: 15, //Unit 11 eng
    //     order: 1,
    //     title: "Fruits",
    //   },
    // ]);
    // // 10 challenges for 10 Fruits
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 293,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 1,
    //     question: "Orange",
    //     imageSrc: "/levels-images/orange.svg",
    //     audioSrc: "/levels-audio/orange.mp3",
    //   },
    //   {
    //     id: 294,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 2,
    //     question: "Banana",
    //     imageSrc: "/levels-images/banana.svg",
    //     audioSrc: "/levels-audio/banana.mp3",
    //   },
    //   {
    //     id: 295,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 3,
    //     question: "Cherry",
    //     imageSrc: "/levels-images/cherry.svg",
    //     audioSrc: "/levels-audio/cherry.mp3",
    //   },
    //   {
    //     id: 296,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 4,
    //     question: "Grapes",
    //     imageSrc: "/levels-images/grapes.svg",
    //     audioSrc: "/levels-audio/grapes.mp3",
    //   },
    //   {
    //     id: 297,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 5,
    //     question: "Kiwi",
    //     imageSrc: "/levels-images/kiwi.svg",
    //     audioSrc: "/levels-audio/kiwi.mp3",
    //   },
    //   {
    //     id: 298,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 6,
    //     question: "Mango",
    //     imageSrc: "/levels-images/mango.svg",
    //     audioSrc: "/levels-audio/mango.mp3",
    //   },
    //   {
    //     id: 299,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 7,
    //     question: "Pineapple",
    //     imageSrc: "/levels-images/pineapple.svg",
    //     audioSrc: "/levels-audio/pineapple.mp3",
    //   },
    //   {
    //     id: 300,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 8,
    //     question: "Pomegranate",
    //     imageSrc: "/levels-images/pomegranate.svg",
    //     audioSrc: "/levels-audio/pomegranate.mp3",
    //   },
    //   {
    //     id: 301,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 9,
    //     question: "Strawberry",
    //     imageSrc: "/levels-images/strawberry.svg",
    //     audioSrc: "/levels-audiosStrawberry.mp3",
    //   },
    //   {
    //     id: 302,
    //     lessonId: 34, //Fruits
    //     type: "READ",
    //     order: 10,
    //     question: "Watermelon",
    //     imageSrc: "/levels-images/watermelon.svg",
    //     audioSrc: "/levels-audio/watermelon.mp3",
    //   },
    // ]);

    // // English Unit 12
    // await db.insert(schema.units).values([
    //   {
    //     id: 16,
    //     courseId: 2, //English
    //     title: "Unit 12",
    //     description: "Vegetables",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 12 - Vegetables
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 35,
    //     unitId: 16, //Unit 12 eng
    //     order: 1,
    //     title: "Vegetables",
    //   },
    // ]);
    // // 9 challenges for 9 Vegetables
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 303,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 1,
    //     question: "Apple",
    //     imageSrc: "/levels-images/apple.svg",
    //     audioSrc: "/levels-audio/apple.mp3",
    //   },
    //   {
    //     id: 304,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 2,
    //     question: "Cabbage",
    //     imageSrc: "/levels-images/cabbage.svg",
    //     audioSrc: "/levels-audio/cabbage.mp3",
    //   },
    //   {
    //     id: 305,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 3,
    //     question: "Carrot",
    //     imageSrc: "/levels-images/carrot.svg",
    //     audioSrc: "/levels-audio/carrot.mp3",
    //   },
    //   {
    //     id: 306,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 4,
    //     question: "Cucumber",
    //     imageSrc: "/levels-images/cucumber.svg",
    //     audioSrc: "/levels-audio/cucumber.mp3",
    //   },
    //   {
    //     id: 307,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 5,
    //     question: "Eggplant",
    //     imageSrc: "/levels-images/eggplant.svg",
    //     audioSrc: "/levels-audio/eggplant.mp3",
    //   },
    //   {
    //     id: 308,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 6,
    //     question: "Garlic",
    //     imageSrc: "/levels-images/garlic.svg",
    //     audioSrc: "/levels-audio/garlic.mp3",
    //   },
    //   {
    //     id: 309,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 7,
    //     question: "Onion",
    //     imageSrc: "/levels-images/onion.svg",
    //     audioSrc: "/levels-audio/onion.mp3",
    //   },
    //   {
    //     id: 310,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 8,
    //     question: "Peas",
    //     imageSrc: "/levels-images/peas.svg",
    //     audioSrc: "/levels-audio/peas.mp3",
    //   },
    //   {
    //     id: 311,
    //     lessonId: 35, //Vegetables
    //     type: "READ",
    //     order: 9,
    //     question: "Tomato",
    //     imageSrc: "/levels-images/tomato.svg",
    //     audioSrc: "/levels-audiostomatoo.mp3",
    //   },
    // ]);

    // // English Unit 13
    // await db.insert(schema.units).values([
    //   {
    //     id: 17,
    //     courseId: 2, //English
    //     title: "Unit 13",
    //     description: "Seasons",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 13 - Seasons
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 36,
    //     unitId: 17, //Unit 13 eng
    //     order: 1,
    //     title: "Seasons",
    //   },
    // ]);
    // // 4 challenges for 4 Seasons
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 312,
    //     lessonId: 36, //Seasons
    //     type: "READ",
    //     order: 1,
    //     question: "Winter",
    //     imageSrc: "/levels-images/winter.svg",
    //     audioSrc: "/levels-audio/winter.mp3",
    //   },
    //   {
    //     id: 313,
    //     lessonId: 36, //Seasons
    //     type: "READ",
    //     order: 2,
    //     question: "Summer",
    //     imageSrc: "/levels-images/summer.svg",
    //     audioSrc: "/levels-audio/summer.mp3",
    //   },
    //   {
    //     id: 314,
    //     lessonId: 36, //Seasons
    //     type: "READ",
    //     order: 3,
    //     question: "Autumn",
    //     imageSrc: "/levels-images/autumn.svg",
    //     audioSrc: "/levels-audio/autumn.mp3",
    //   },
    //   {
    //     id: 315,
    //     lessonId: 36, //Seasons
    //     type: "READ",
    //     order: 4,
    //     question: "Spring",
    //     imageSrc: "/levels-images/spring.svg",
    //     audioSrc: "/levels-audio/spring.mp3",
    //   },
    // ]);

    // // English Unit 14
    // await db.insert(schema.units).values([
    //   {
    //     id: 18,
    //     courseId: 2, //English
    //     title: "Unit 14",
    //     description: "Shapes",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 14 - Shapes
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 37,
    //     unitId: 18, //Unit 14 eng
    //     order: 1,
    //     title: "Shapes",
    //   },
    // ]);
    // // 13 challenges for 13 Shapes
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 316,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 1,
    //     question: "Circle",
    //     imageSrc: "/levels-images/circle.svg",
    //     audioSrc: "/levels-audio/circle.mp3",
    //   },
    //   {
    //     id: 317,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 2,
    //     question: "Semicircle",
    //     imageSrc: "/levels-images/semicircle.svg",
    //     audioSrc: "/levels-audio/semicircle.mp3",
    //   },
    //   {
    //     id: 318,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 3,
    //     question: "Square",
    //     imageSrc: "/levels-images/square.svg",
    //     audioSrc: "/levels-audio/square.mp3",
    //   },
    //   {
    //     id: 319,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 4,
    //     question: "Rectangle",
    //     imageSrc: "/levels-images/rectangle.svg",
    //     audioSrc: "/levels-audio/rectangle.mp3",
    //   },
    //   {
    //     id: 320,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 5,
    //     question: "Cone",
    //     imageSrc: "/levels-images/cone.svg",
    //     audioSrc: "/levels-audio/cone.mp3",
    //   },
    //   {
    //     id: 321,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 6,
    //     question: "Diamond",
    //     imageSrc: "/levels-images/diamond.svg",
    //     audioSrc: "/levels-audio/diamond.mp3",
    //   },
    //   {
    //     id: 322,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 7,
    //     question: "Hexagon",
    //     imageSrc: "/levels-images/hexagon.svg",
    //     audioSrc: "/levels-audio/hexagon.mp3",
    //   },
    //   {
    //     id: 323,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 8,
    //     question: "Octagon",
    //     imageSrc: "/levels-images/octagon.svg",
    //     audioSrc: "/levels-audio/octagon.mp3",
    //   },
    //   {
    //     id: 324,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 9,
    //     question: "Oval",
    //     imageSrc: "/levels-images/oval.svg",
    //     audioSrc: "/levels-audio/oval.mp3",
    //   },
    //   {
    //     id: 325,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 10,
    //     question: "Parallelogram",
    //     imageSrc: "/levels-images/parallelogram.svg",
    //     audioSrc: "/levels-audio/parallelogram.mp3",
    //   },
    //   {
    //     id: 326,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 11,
    //     question: "Pentagon",
    //     imageSrc: "/levels-images/pentagon.svg",
    //     audioSrc: "/levels-audio/pentagon.mp3",
    //   },
    //   {
    //     id: 327,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 12,
    //     question: "Star",
    //     imageSrc: "/levels-images/star.svg",
    //     audioSrc: "/levels-audio/star.mp3",
    //   },
    //   {
    //     id: 328,
    //     lessonId: 37, //Shapes
    //     type: "READ",
    //     order: 13,
    //     question: "Triangle",
    //     imageSrc: "/levels-images/triangle.svg",
    //     audioSrc: "/levels-audio/triangle.mp3",
    //   },
    // ]);

    // // English Unit 15
    // await db.insert(schema.units).values([
    //   {
    //     id: 19,
    //     courseId: 2, //English
    //     title: "Unit 15",
    //     description: "Modes of Transportation",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 15 - Modes of Transportation
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 38,
    //     unitId: 19, //Unit 15 eng
    //     order: 1,
    //     title: "Transportation",
    //   },
    // ]);
    // // 6 challenges for 6 Modes of Transportation
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 329,
    //     lessonId: 38, //Modes of Transportation
    //     type: "READ",
    //     order: 1,
    //     question: "Aeroplane",
    //     imageSrc: "/levels-images/aeroplane.svg",
    //     audioSrc: "/levels-audio/aeroplane.mp3",
    //   },
    //   {
    //     id: 330,
    //     lessonId: 38, //Modes of Transportation
    //     type: "READ",
    //     order: 2,
    //     question: "Bicycle",
    //     imageSrc: "/levels-images/bicycle.svg",
    //     audioSrc: "/levels-audio/bicycle.mp3",
    //   },
    //   {
    //     id: 331,
    //     lessonId: 38, //Modes of Transportation
    //     type: "READ",
    //     order: 3,
    //     question: "Car",
    //     imageSrc: "/levels-images/car.svg",
    //     audioSrc: "/levels-audio/car.mp3",
    //   },
    //   {
    //     id: 332,
    //     lessonId: 38, //Modes of Transportation
    //     type: "READ",
    //     order: 4,
    //     question: "Helicopter",
    //     imageSrc: "/levels-images/helicopter.svg",
    //     audioSrc: "/levels-audio/helicopter.mp3",
    //   },
    //   {
    //     id: 333,
    //     lessonId: 38, //Modes of Transportation
    //     type: "READ",
    //     order: 5,
    //     question: "Ship",
    //     imageSrc: "/levels-images/ship.svg",
    //     audioSrc: "/levels-audio/ship.mp3",
    //   },
    //   {
    //     id: 334,
    //     lessonId: 38, //Modes of Transportation
    //     type: "READ",
    //     order: 6,
    //     question: "Train",
    //     imageSrc: "/levels-images/train.svg",
    //     audioSrc: "/levels-audio/train.mp3",
    //   },
    // ]);

    // // English Unit 16
    // await db.insert(schema.units).values([
    //   {
    //     id: 20,
    //     courseId: 2, //English
    //     title: "Unit 16",
    //     description: "Stationary Items",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 16 - Stationary Items
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 39,
    //     unitId: 20, //Unit 16 eng
    //     order: 1,
    //     title: "Stationary",
    //   },
    // ]);
    // // 8 challenges for 6 Stationary Items
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 335,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 1,
    //     question: "Stapler",
    //     imageSrc: "/levels-images/stapler.svg",
    //     audioSrc: "/levels-audio/stapler.mp3",
    //   },
    //   {
    //     id: 336,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 2,
    //     question: "Scissor",
    //     imageSrc: "/levels-images/scissor.svg",
    //     audioSrc: "/levels-audio/scissor.mp3",
    //   },
    //   {
    //     id: 337,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 3,
    //     question: "Ruler",
    //     imageSrc: "/levels-images/ruler.svg",
    //     audioSrc: "/levels-audio/ruler.mp3",
    //   },
    //   {
    //     id: 338,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 4,
    //     question: "Pencil",
    //     imageSrc: "/levels-images/pencil.svg",
    //     audioSrc: "/levels-audio/pencil.mp3",
    //   },
    //   {
    //     id: 339,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 5,
    //     question: "Pen",
    //     imageSrc: "/levels-images/pen.svg",
    //     audioSrc: "/levels-audio/pen.mp3",
    //   },
    //   {
    //     id: 340,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 6,
    //     question: "Paperclip",
    //     imageSrc: "/levels-images/paperclip.svg",
    //     audioSrc: "/levels-audio/paperclip.mp3",
    //   },
    //   {
    //     id: 341,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 7,
    //     question: "Highlighter",
    //     imageSrc: "/levels-images/highlighter.svg",
    //     audioSrc: "/levels-audio/highlighter.mp3",
    //   },
    //   {
    //     id: 342,
    //     lessonId: 39, //Stationary Items
    //     type: "READ",
    //     order: 8,
    //     question: "Calculator",
    //     imageSrc: "/levels-images/calculator.svg",
    //     audioSrc: "/levels-audio/calculator.mp3",
    //   },
    // ]);

    // // English Unit 17
    // await db.insert(schema.units).values([
    //   {
    //     id: 21,
    //     courseId: 2, //English
    //     title: "Unit 17",
    //     description: "Occupations",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 17 - Occupations
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 40,
    //     unitId: 21, //Unit 17 eng
    //     order: 1,
    //     title: "Occupations",
    //   },
    // ]);
    // // 11 challenges for 11 Occupations
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 343,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 1,
    //     question: "Teacher",
    //     imageSrc: "/levels-images/teacher.svg",
    //     audioSrc: "/levels-audio/teacher.mp3",
    //   },
    //   {
    //     id: 344,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 2,
    //     question: "Soldier",
    //     imageSrc: "/levels-images/soldier.svg",
    //     audioSrc: "/levels-audio/soldier.mp3",
    //   },
    //   {
    //     id: 345,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 3,
    //     question: "Policeman",
    //     imageSrc: "/levels-images/policeman.svg",
    //     audioSrc: "/levels-audio/policeman.mp3",
    //   },
    //   {
    //     id: 346,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 4,
    //     question: "Nurse",
    //     imageSrc: "/levels-images/nurse.svg",
    //     audioSrc: "/levels-audio/nurse.mp3",
    //   },
    //   {
    //     id: 347,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 5,
    //     question: "Mechanic",
    //     imageSrc: "/levels-images/mechanic.svg",
    //     audioSrc: "/levels-audio/mechanic.mp3",
    //   },
    //   {
    //     id: 348,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 6,
    //     question: "Lawyer",
    //     imageSrc: "/levels-images/lawyer.svg",
    //     audioSrc: "/levels-audio/lawyer.mp3",
    //   },
    //   {
    //     id: 349,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 7,
    //     question: "Electrician",
    //     imageSrc: "/levels-images/electrician.svg",
    //     audioSrc: "/levels-audio/electrician.mp3",
    //   },
    //   {
    //     id: 350,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 8,
    //     question: "Construction Worker",
    //     imageSrc: "/levels-images/constructionworker.svg",
    //     audioSrc: "/levels-audio/constructionworker.mp3",
    //   },
    //   {
    //     id: 351,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 9,
    //     question: "Carpenter",
    //     imageSrc: "/levels-images/carpenter.svg",
    //     audioSrc: "/levels-audio/carpenter.mp3",
    //   },
    //   {
    //     id: 352,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 10,
    //     question: "Astronaut",
    //     imageSrc: "/levels-images/astronaut.svg",
    //     audioSrc: "/levels-audio/astronaut.mp3",
    //   },
    //   {
    //     id: 353,
    //     lessonId: 40, //Occupations
    //     type: "READ",
    //     order: 11,
    //     question: "Accountant",
    //     imageSrc: "/levels-images/accountant.svg",
    //     audioSrc: "/levels-audio/accountant.mp3",
    //   },
    // ]);

    // // English Unit 18
    // await db.insert(schema.units).values([
    //   {
    //     id: 22,
    //     courseId: 2, //English
    //     title: "Unit 18",
    //     description: "Clothing Items",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 18 - clothing items
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 41,
    //     unitId: 22, //Unit 18 eng
    //     order: 1,
    //     title: "Clothing Items",
    //   },
    // ]);
    // // 10 challenges for 10 items
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 354,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 1,
    //     question: "Suit",
    //     imageSrc: "/levels-images/suit.svg",
    //     audioSrc: "/levels-audio/suit.mp3",
    //   },
    //   {
    //     id: 355,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 2,
    //     question: "Socks",
    //     imageSrc: "/levels-images/socks.svg",
    //     audioSrc: "/levels-audio/socks.mp3",
    //   },
    //   {
    //     id: 356,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 3,
    //     question: "Slippers",
    //     imageSrc: "/levels-images/slippers.svg",
    //     audioSrc: "/levels-audio/slippers.mp3",
    //   },
    //   {
    //     id: 357,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 4,
    //     question: "Shirt",
    //     imageSrc: "/levels-images/shirt.svg",
    //     audioSrc: "/levels-audio/shirt.mp3",
    //   },
    //   {
    //     id: 358,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 5,
    //     question: "Jeans",
    //     imageSrc: "/levels-images/jeans.svg",
    //     audioSrc: "/levels-audio/jeans.mp3",
    //   },
    //   {
    //     id: 359,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 6,
    //     question: "Jacket",
    //     imageSrc: "/levels-images/jacket.svg",
    //     audioSrc: "/levels-audio/jacket.mp3",
    //   },
    //   {
    //     id: 360,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 7,
    //     question: "Hat",
    //     imageSrc: "/levels-images/hat.svg",
    //     audioSrc: "/levels-audio/hatt.mp3",
    //   },
    //   {
    //     id: 361,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 8,
    //     question: "Gloves",
    //     imageSrc: "/levels-images/gloves.svg",
    //     audioSrc: "/levels-audio/gloves.mp3",
    //   },
    //   {
    //     id: 362,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 9,
    //     question: "Coat",
    //     imageSrc: "/levels-images/coat.svg",
    //     audioSrc: "/levels-audio/coat.mp3",
    //   },
    //   {
    //     id: 363,
    //     lessonId: 41, //Clothing Items
    //     type: "READ",
    //     order: 10,
    //     question: "Boots",
    //     imageSrc: "/levels-images/boots.svg",
    //     audioSrc: "/levels-audio/boots.mp3",
    //   },
    // ]);

    // // English Unit 19
    // await db.insert(schema.units).values([
    //   {
    //     id: 23,
    //     courseId: 2, //English
    //     title: "Unit 19",
    //     description: "Animals",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 19 - Animals
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 42,
    //     unitId: 23, //Unit 19 eng
    //     order: 1,
    //     title: "Animals",
    //   },
    // ]);
    // // 12 challenges for 12 animals
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 364,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 1,
    //     question: "Cat",
    //     imageSrc: "/levels-images/cat.svg",
    //     audioSrc: "/levels-audio/catt.mp3",
    //   },
    //   {
    //     id: 365,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 2,
    //     question: "Dog",
    //     imageSrc: "/levels-images/dog.svg",
    //     audioSrc: "/levels-audio/dogg.mp3",
    //   },
    //   {
    //     id: 366,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 3,
    //     question: "motherboard",
    //     imageSrc: "/levels-images/wolf.svg",
    //     audioSrc: "/levels-audio/wolf.mp3",
    //   },
    //   {
    //     id: 367,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 4,
    //     question: "Tiger",
    //     imageSrc: "/levels-images/tiger.svg",
    //     audioSrc: "/levels-audio/tiger.mp3",
    //   },
    //   {
    //     id: 368,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 5,
    //     question: "Mouse",
    //     imageSrc: "/levels-images/mouse.svg",
    //     audioSrc: "/levels-audio/mouse.mp3",
    //   },
    //   {
    //     id: 369,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 6,
    //     question: "Monkey",
    //     imageSrc: "/levels-images/monkey.svg",
    //     audioSrc: "/levels-audio/monkey.mp3",
    //   },
    //   {
    //     id: 370,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 7,
    //     question: "Lion",
    //     imageSrc: "/levels-images/lion.svg",
    //     audioSrc: "/levels-audio/lion.mp3",
    //   },
    //   {
    //     id: 371,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 8,
    //     question: "Gorilla",
    //     imageSrc: "/levels-images/gorilla.svg",
    //     audioSrc: "/levels-audio/gorilla.mp3",
    //   },
    //   {
    //     id: 372,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 9,
    //     question: "Goat",
    //     imageSrc: "/levels-images/goat.svg",
    //     audioSrc: "/levels-audio/goat.mp3",
    //   },
    //   {
    //     id: 373,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 10,
    //     question: "Cow",
    //     imageSrc: "/levels-images/cow.svg",
    //     audioSrc: "/levels-audio/cow.mp3",
    //   },
    //   {
    //     id: 374,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 11,
    //     question: "Camel",
    //     imageSrc: "/levels-images/camel.svg",
    //     audioSrc: "/levels-audio/camel.mp3",
    //   },
    //   {
    //     id: 375,
    //     lessonId: 42, //Animal
    //     type: "READ",
    //     order: 12,
    //     question: "Bear",
    //     imageSrc: "/levels-images/bear.svg",
    //     audioSrc: "/levels-audio/bear.mp3",
    //   },
    // ]);

    // // English Unit 20
    // await db.insert(schema.units).values([
    //   {
    //     id: 24,
    //     courseId: 2, //English
    //     title: "Unit 20",
    //     description: "Computer Parts",
    //     order: 1,
    //   },
    // ]);
    // // 1 lessons in unit 19 - Computer Parts
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 43,
    //     unitId: 24, //Unit 19 eng
    //     order: 1,
    //     title: "Computer Parts",
    //   },
    // ]);
    // // 7 challenges for 7 Computer Parts
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 376,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 1,
    //     question: "Ram",
    //     imageSrc: "/levels-images/ram.svg",
    //     audioSrc: "/levels-audio/ram.mp3",
    //   },
    //   {
    //     id: 377,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 2,
    //     question: "Mouse",
    //     imageSrc: "/levels-images/mousee.svg",
    //     audioSrc: "/levels-audio/mouse.mp3",
    //   },
    //   {
    //     id: 378,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 3,
    //     question: "Motherboard",
    //     imageSrc: "/levels-images/motherboard.svg",
    //     audioSrc: "/levels-audio/motherboard.mp3",
    //   },
    //   {
    //     id: 379,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 4,
    //     question: "Monitor",
    //     imageSrc: "/levels-images/monitor.svg",
    //     audioSrc: "/levels-audio/monitor.mp3",
    //   },
    //   {
    //     id: 380,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 5,
    //     question: "Keyboard",
    //     imageSrc: "/levels-images/keyboard.svg",
    //     audioSrc: "/levels-audio/keyboard.mp3",
    //   },
    //   {
    //     id: 381,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 6,
    //     question: "Graphics Card",
    //     imageSrc: "/levels-images/gpu.svg",
    //     audioSrc: "/levels-audio/gpu.mp3",
    //   },
    //   {
    //     id: 382,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 7,
    //     question: "CPU",
    //     imageSrc: "/levels-images/cpu.svg",
    //     audioSrc: "/levels-audio/cpu.mp3",
    //   },
    //   {
    //     id: 383,
    //     lessonId: 43, //Computer Parts
    //     type: "READ",
    //     order: 8,
    //     question: "Gorilla",
    //     imageSrc: "/levels-images/gorilla.svg",
    //     audioSrc: "/levels-audio/gorilla.mp3",
    //   },
    // ]);

    // // English Unit 21
    // await db.insert(schema.units).values([
    //   {
    //     id: 25,
    //     courseId: 2, //English
    //     title: "Unit 21",
    //     description: "Countries Flags",
    //     order: 1,
    //   },
    // ]);
    // // 16 lessons in unit 20 - Countries Flags
    // await db.insert(schema.lessons).values([
    //   {
    //     id: 44,
    //     unitId: 25, //Unit 2- eng
    //     order: 1,
    //     title: "Countries Flags",
    //   },
    // ]);
    // // 16 Flags for 16 Countries
    // await db.insert(schema.challenges).values([
    //   {
    //     id: 384,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 1,
    //     question: "Pakistan",
    //     imageSrc: "/levels-images/pakistan.svg",
    //     audioSrc: "/levels-audio/pakistan.mp3",
    //   },
    //   {
    //     id: 385,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 2,
    //     question: "India",
    //     imageSrc: "/levels-images/india.svg",
    //     audioSrc: "/levels-audio/india.mp3",
    //   },
    //   {
    //     id: 386,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 3,
    //     question: "Bangladesh",
    //     imageSrc: "/levels-images/bangladesh.svg",
    //     audioSrc: "/levels-audio/bangladesh.mp3",
    //   },
    //   {
    //     id: 387,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 4,
    //     question: "China",
    //     imageSrc: "/levels-images/china.svg",
    //     audioSrc: "/levels-audio/china.mp3",
    //   },
    //   {
    //     id: 388,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 5,
    //     question: "USA",
    //     imageSrc: "/levels-images/usa.svg",
    //     audioSrc: "/levels-audio/usa.mp3",
    //   },
    //   {
    //     id: 389,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 6,
    //     question: "Germany",
    //     imageSrc: "/levels-images/germany.svg",
    //     audioSrc: "/levels-audio/germany.mp3",
    //   },
    //   {
    //     id: 390,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 7,
    //     question: "England",
    //     imageSrc: "/levels-images/england.svg",
    //     audioSrc: "/levels-audio/england.mp3",
    //   },
    //   {
    //     id: 391,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 8,
    //     question: "Netherlands",
    //     imageSrc: "/levels-images/netherlands.svg",
    //     audioSrc: "/levels-audio/netherlands.mp3",
    //   },
    //   {
    //     id: 392,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 9,
    //     question: "Norway",
    //     imageSrc: "/levels-images/norway.svg",
    //     audioSrc: "/levels-audio/norway.mp3",
    //   },
    //   {
    //     id: 393,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 10,
    //     question: "Denmark",
    //     imageSrc: "/levels-images/denmark.svg",
    //     audioSrc: "/levels-audio/denmark.mp3",
    //   },
    //   {
    //     id: 394,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 11,
    //     question: "Brazil",
    //     imageSrc: "/levels-images/brazil.svg",
    //     audioSrc: "/levels-audio/brazil.mp3",
    //   },
    //   {
    //     id: 395,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 12,
    //     question: "Gautemala",
    //     imageSrc: "/levels-images/gautemala.svg",
    //     audioSrc: "/levels-audio/guatemala.mp3",
    //   },
    //   {
    //     id: 396,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 13,
    //     question: "Morocco",
    //     imageSrc: "/levels-images/morocco.svg",
    //     audioSrc: "/levels-audio/morocco.mp3",
    //   },
    //   {
    //     id: 397,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 14,
    //     question: "Rwanda",
    //     imageSrc: "/levels-images/rwanda.svg",
    //     audioSrc: "/levels-audio/rwanda.mp3",
    //   },
    //   {
    //     id: 398,
    //     lessonId: 44, //Countries Flags
    //     type: "READ",
    //     order: 15,
    //     question: "Greece",
    //     imageSrc: "/levels-images/greece.svg",
    //     audioSrc: "/levels-audio/greece.mp3",
    //   },
    //   {
    //     id: 399,
    //     lessonId: 44, //Countries lags
    //     type: "READ",
    //     order: 16,
    //     question: "Australia",
    //     imageSrc: "/levels-images/australia.svg",
    //     audioSrc: "/levels-audio/australia.mp3",
    //   },
    // ]);

    // console.log("Seeding finished");

    // async function fixSequence() {
    try {
      // Find the maximum ID in the challengeOptions table
      const maxIdResult = await db.execute(
        sql`SELECT MAX(id) AS max_id FROM "challenge_options"`,
      );
      const maxId = (maxIdResult.rows[0]?.max_id as number) - 1;
      console.log("Max ID in challenge_options table:", maxId);

      // Update the sequence
      if (maxId !== null) {
        await db.execute(
          sql`SELECT setval('challenge_options_id_seq', ${maxId}, true)`,
        );
        console.log(`Sequence updated to ${maxId}`);
      } else {
        console.log("No records found in the challenge_options table.");
      }

      // Verify the update
      const nextValue = await db.execute(
        sql`SELECT nextval('challenge_options_id_seq')`,
      );
      console.log("Next Sequence Value:", nextValue.rows[0]?.nextval);
    } catch (error) {
      console.error("Error fixing sequence:", error);
    }
    // }

    // fixSequence();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the db");
  }
};

main();

// async function fixSequence() {
//   try {
//     // Find the maximum ID in the challenges table
//     const maxIdResult = await db.execute(
//       sql`SELECT MAX(id) AS max_id FROM Units`,
//     );
//     const maxId = maxIdResult.rows[0]?.max_id;
//     console.log("Max ID in Units table:", maxId);

//     // Update the sequence
//     if (maxId !== null) {
//       await db.execute(sql`SELECT setval('Units_id_seq', ${maxId})`);
//       console.log(`Sequence updated to ${maxId}`);
//     } else {
//       console.log("No records found in the Units table.");
//     }

//     // Verify the update
//     const nextValue = await db.execute(sql`SELECT nextval('Units_id_seq')`);
//     console.log("Next Sequence Value:", nextValue.rows[0]?.nextval);
//   } catch (error) {
//     console.error("Error fixing sequence:", error);
//   }
// }

// fixSequence();

// async function fixSequence2() {
//   try {
//     // Find the maximum ID in the courses table
//     const maxIdResult = await db.execute(
//       sql`SELECT COALESCE(MAX(id), 0) AS max_id FROM courses`,
//     );
//     const maxId = maxIdResult.rows[0]?.max_id || 0; // Use 0 if table is empty
//     console.log("Max ID in courses table:", maxId);

//     // Reset the sequence to match the max ID
//     await db.execute(sql`SELECT setval('courses_id_seq', ${maxId}, true)`); // Use true to ensure the nextval starts with maxId + 1
//     console.log(`Sequence updated to ${maxId}`);

//     // Verify the update
//     const nextValue = await db.execute(sql`SELECT nextval('courses_id_seq')`);
//     console.log("Next Sequence Value:", nextValue.rows[0]?.nextval);
//   } catch (error) {
//     console.error("Error fixing sequence:", error);
//   }
// }

// fixSequence2();
