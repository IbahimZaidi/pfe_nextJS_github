import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (req.method === "GET") {
      const formationIdRes = await query_pfe({
        query:
          "SELECT * FROM suject_poposee WHERE id_labo in (SELECT DISTINCT(id_labo) FROM suject_poposee WHERE id_labo in (SELECT id_labo FROM laboratoire WHERE id_formation  = ? ))",
        values: [params.id],
      });

      return NextResponse.json({ formationIdRes: formationIdRes }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
