import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const equipeTabl = await query_pfe({
        query: "SELECT * FROM `equipe`  ",
        values: [],
      });
      const laboTabl = await query_pfe({
        query: "SELECT * FROM `laboratoire`  ",
        values: [],
      });

      return NextResponse.json({ equipeTabl: equipeTabl, laboTabl: laboTabl }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
