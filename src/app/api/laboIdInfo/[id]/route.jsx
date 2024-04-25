import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (req.method === "GET") {
      const laboIdInfo = await query_pfe({
        query: "SELECT * FROM `laboratoire` WHERE id_labo = ? ",
        values: [params.id],
      });

      return NextResponse.json({ laboIdInfo: laboIdInfo }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
