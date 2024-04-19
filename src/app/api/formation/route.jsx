import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const formDoc = await query_pfe({
        query: "SELECT Nom_du_Axe as title FROM `axe_recherche` ",
        values: [],
      });

      return NextResponse.json({ formDoc: formDoc }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
