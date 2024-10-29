import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2l6Mt0IauZKoRUvwBFQLf9pF8ch"];

export const isAdmin = () => {
  const { userId } = auth();
  if (!userId) return false;
  return adminIds.indexOf(userId) !== -1;
};
