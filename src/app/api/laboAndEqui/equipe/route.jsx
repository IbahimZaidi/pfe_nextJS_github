import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const equipeTabl = await query_pfe({
        query: "SELECT * FROM `equipe`  ",
        values: [],
      });

      return NextResponse.json({ equipeTabl: equipeTabl }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
