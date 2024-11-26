import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Db");

    // await db.insert(schema.courses).values([
    //   {
    //     id: 2,
    //     title: "English",
    //     imageSrc: "/englishUK.svg",
    //   },
    // ]);

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

    //English Unit 3
    await db.insert(schema.units).values([
      {
        id: 7,
        courseId: 2, //English
        title: "Unit 3",
        description: "Phonics",
        order: 1,
      },
    ]);
    // 1 lessons in unit 2 - Phonics Pronunciation
    await db.insert(schema.lessons).values([
      {
        id: 26,
        unitId: 7, //Unit 3 eng
        order: 1,
        title: "Phonics",
      },
    ]);
    // 26 challenges for Phonics - 1 for each letter
    await db.insert(schema.challenges).values([
      {
        id: 206,
        lessonId: 26, //Phonics
        type: "READ",
        order: 1,
        question: "Apple",
        imageSrc: "/levels-images/apple.svg",
        audioSrc: "/levels-audio/apple.mp3",
      },
      {
        id: 207,
        lessonId: 26, //Phonics
        type: "READ",
        order: 2,
        question: "Ball",
        imageSrc: "/levels-images/ball.svg",
        audioSrc: "/levels-audio/ball.mp3",
      },
      {
        id: 208,
        lessonId: 26, //Phonics
        type: "READ",
        order: 3,
        question: "Cat",
        imageSrc: "/levels-images/cat.svg",
        audioSrc: "/levels-audio/cat.mp3",
      },
      {
        id: 209,
        lessonId: 26, //Phonics
        type: "READ",
        order: 4,
        question: "Dog",
        imageSrc: "/levels-images/dog.svg",
        audioSrc: "/levels-audio/dog.mp3",
      },
      {
        id: 210,
        lessonId: 26, //Phonics
        type: "READ",
        order: 5,
        question: "Elephant",
        imageSrc: "/levels-images/elephant.svg",
        audioSrc: "/levels-audio/elephant.mp3",
      },
      {
        id: 211,
        lessonId: 26, //Phonics
        type: "READ",
        order: 6,
        question: "Food",
        imageSrc: "/levels-images/food.svg",
        audioSrc: "/levels-audio/food.mp3",
      },
      {
        id: 212,
        lessonId: 26, //Phonics
        type: "READ",
        order: 7,
        question: "Gate",
        imageSrc: "/levels-images/gate.svg",
        audioSrc: "/levels-audio/gate.mp3",
      },
      {
        id: 213,
        lessonId: 26, //Phonics
        type: "READ",
        order: 8,
        question: "Hat",
        imageSrc: "/levels-images/hat.svg",
        audioSrc: "/levels-audio/hat.mp3",
      },
      {
        id: 214,
        lessonId: 26, //Phonics
        type: "READ",
        order: 9,
        question: "Insect",
        imageSrc: "/levels-images/insect.svg",
        audioSrc: "/levels-audio/insect.mp3",
      },
      {
        id: 215,
        lessonId: 26, //Phonics
        type: "READ",
        order: 10,
        question: "Jug",
        imageSrc: "/levels-images/jug.svg",
        audioSrc: "/levels-audio/jug.mp3",
      },
      {
        id: 216,
        lessonId: 26, //Phonics
        type: "READ",
        order: 11,
        question: "Kite",
        imageSrc: "/levels-images/kite.svg",
        audioSrc: "/levels-audio/kite.mp3",
      },
      {
        id: 217,
        lessonId: 26, //Phonics
        type: "READ",
        order: 12,
        question: "Lamp",
        imageSrc: "/levels-images/lamp.svg",
        audioSrc: "/levels-audio/lamp.mp3",
      },
      {
        id: 218,
        lessonId: 26, //Phonics
        type: "READ",
        order: 13,
        question: "Milk",
        imageSrc: "/levels-images/milk.svg",
        audioSrc: "/levels-audio/milk.mp3",
      },
      {
        id: 219,
        lessonId: 26, //Phonics
        type: "READ",
        order: 14,
        question: "Needle",
        imageSrc: "/levels-images/needle.svg",
        audioSrc: "/levels-audio/needle.mp3",
      },
      {
        id: 220,
        lessonId: 26, //Phonics
        type: "READ",
        order: 15,
        question: "Orange",
        imageSrc: "/levels-images/orange.svg",
        audioSrc: "/levels-audio/orange.mp3",
      },
      {
        id: 221,
        lessonId: 26, //Phonics
        type: "READ",
        order: 16,
        question: "Pencil",
        imageSrc: "/levels-images/pencil.svg",
        audioSrc: "/levels-audio/pencil.mp3",
      },
      {
        id: 222,
        lessonId: 26, //Phonics
        type: "READ",
        order: 17,
        question: "Question Mark",
        imageSrc: "/levels-images/question.svg",
        audioSrc: "/levels-audio/question.mp3",
      },
      {
        id: 223,
        lessonId: 26, //Phonics
        type: "READ",
        order: 18,
        question: "Rice",
        imageSrc: "/levels-images/rice.svg",
        audioSrc: "/levels-audio/rice.mp3",
      },
      {
        id: 224,
        lessonId: 26, //Phonics
        type: "READ",
        order: 19,
        question: "Sun",
        imageSrc: "/levels-images/sun.svg",
        audioSrc: "/levels-audio/sun.mp3",
      },
      {
        id: 225,
        lessonId: 26, //Phonics
        type: "READ",
        order: 20,
        question: "Tomato",
        imageSrc: "/levels-images/tomato.svg",
        audioSrc: "/levels-audio/tomato.mp3",
      },
      {
        id: 226,
        lessonId: 26, //Phonics
        type: "READ",
        order: 21,
        question: "Umbrella",
        imageSrc: "/levels-images/umbrella.svg",
        audioSrc: "/levels-audio/umbrella.mp3",
      },
      {
        id: 227,
        lessonId: 26, //Phonics
        type: "READ",
        order: 22,
        question: "Van",
        imageSrc: "/levels-images/van.svg",
        audioSrc: "/levels-audio/van.mp3",
      },
      {
        id: 228,
        lessonId: 26, //Phonics
        type: "READ",
        order: 23,
        question: "Water",
        imageSrc: "/levels-images/water.svg",
        audioSrc: "/levels-audio/water.mp3",
      },
      {
        id: 229,
        lessonId: 26, //Phonics
        type: "READ",
        order: 24,
        question: "X-Ray",
        imageSrc: "/levels-images/xray.svg",
        audioSrc: "/levels-audio/xray.mp3",
      },
      {
        id: 230,
        lessonId: 26, //Phonics
        type: "READ",
        order: 25,
        question: "Yellow",
        imageSrc: "/levels-images/yellow.svg",
        audioSrc: "/levels-audio/yellow.mp3",
      },
      {
        id: 231,
        lessonId: 26, //Phonics
        type: "READ",
        order: 26,
        question: "Zebra",
        imageSrc: "/levels-images/zebra.svg",
        audioSrc: "/levels-audio/zebra.mp3",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the db");
  }
};

main();
