"use server";

import db from "@/database/drizzle";
import { getUserProgress } from "@/database/queries";
import { challengeProgress, challenges, userProgress } from "@/database/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// export const upsertChallengeProgress = async (
//   challengeId: number,
//   isReadType: boolean = false,
// ) => {
//   const { userId } = auth();
//   if (!userId) {
//     throw new Error("Unauthorized");
//   }

//   const currentUserProgress = await getUserProgress();
//   if (!currentUserProgress) {
//     throw new Error("User Progress not found");
//   }
//   const challenge = await db.query.challenges.findFirst({
//     where: eq(challenges.id, challengeId),
//   });

//   if (!challenge) {
//     throw new Error("Challenge not found");
//   }

//   const lessonId = challenge.lessonId;
//   const existingchallengeProgress = await db.query.challengeProgress.findFirst({
//     where: and(
//       eq(challengeProgress.userId, userId),
//       eq(challengeProgress.challengeId, challengeId),
//     ),
//   });

//   const isPractise = !!existingchallengeProgress;

//   if (currentUserProgress.hearts === 0 && !isPractise) {
//     return { error: "hearts" };
//   }

//   if (isPractise) {
//     await db
//       .update(challengeProgress)
//       .set({
//         completed: true,
//       })
//       .where(eq(challengeProgress.id, existingchallengeProgress.id));
//     await db
//       .update(userProgress)
//       .set({
//         hearts: Math.min(currentUserProgress.hearts + 1, 5),
//         points: currentUserProgress.points + 10,
//       })
//       .where(eq(userProgress.userId, userId));
//     revalidatePath("/learn");
//     revalidatePath("/lesson");
//     revalidatePath("/quests");
//     revalidatePath("/leaderboard");
//     revalidatePath(`/lesson/${lessonId}`);
//     return;
//   }
//   await db.insert(challengeProgress).values({
//     challengeId,
//     userId,
//     completed: true,
//   });

//   await db
//     .update(userProgress)
//     .set({
//       points: currentUserProgress.points + 10,
//     })
//     .where(eq(userProgress.userId, userId));
//   revalidatePath("/learn");
//   revalidatePath("/lesson");
//   revalidatePath("/quests");
//   revalidatePath("/leaderboard");
//   revalidatePath(`/lesson/${lessonId}`);
// };

export const upsertChallengeProgress = async (
  challengeId: number,
  isReadType: boolean = false,
) => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const currentUserProgress = await getUserProgress();
  if (!currentUserProgress) throw new Error("User Progress not found");

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });
  if (!challenge) throw new Error("Challenge not found");

  const lessonId = challenge.lessonId;
  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId),
    ),
  });

  const isPractise = !!existingChallengeProgress;

  if (isReadType) {
    // If it's a READ challenge, mark as completed and award points without reducing hearts
    if (isPractise) {
      await db
        .update(challengeProgress)
        .set({
          completed: true,
        })
        .where(eq(challengeProgress.id, existingChallengeProgress.id));
    } else {
      await db.insert(challengeProgress).values({
        challengeId,
        userId,
        completed: true,
      });
    }

    // Update user progress with points, but don’t alter hearts
    await db
      .update(userProgress)
      .set({
        points: currentUserProgress.points + 10, // Adjust points as needed
      })
      .where(eq(userProgress.userId, userId));
  } else {
    // Existing logic for non-READ challenges
    if (currentUserProgress.hearts === 0 && !isPractise)
      return { error: "hearts" };

    if (isPractise) {
      await db
        .update(challengeProgress)
        .set({
          completed: true,
        })
        .where(eq(challengeProgress.id, existingChallengeProgress.id));
      await db
        .update(userProgress)
        .set({
          hearts: Math.min(currentUserProgress.hearts + 1, 5),
          points: currentUserProgress.points + 10,
        })
        .where(eq(userProgress.userId, userId));
    } else {
      await db.insert(challengeProgress).values({
        challengeId,
        userId,
        completed: true,
      });
      await db
        .update(userProgress)
        .set({
          points: currentUserProgress.points + 10,
        })
        .where(eq(userProgress.userId, userId));
    }
  }

  // Revalidate paths
  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
};
