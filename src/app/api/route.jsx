import { query } from "@/src/connectDB/query";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const posts = await query({
        query: "SELECT * FROM `posts` WHERE 1",
        values: [],
      });
      const users = await query({
        query: "SELECT * FROM `users` WHERE 1",
        values: [],
      });

      return NextResponse.json({ users: users, posts: posts }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
