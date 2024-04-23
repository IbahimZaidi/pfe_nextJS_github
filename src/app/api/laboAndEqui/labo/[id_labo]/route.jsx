import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (req.method === "GET") {
      const laboElem = await query_pfe({
        query:
          "SELECT NomPrenom , E_mail FROM `prof` as p inner JOIN laboratoire as labo USING(id_labo) WHERE id_labo = ?  ",
        values: [params?.id_labo],
      });

      const laboResp = await query_pfe({
        query:
          "SELECT NomPrenom , E_mail , id_prof ,id_Responsable_labo , id_labo   FROM `prof` as p inner JOIN laboratoire as labo USING(id_labo) WHERE id_prof = id_Responsable_labo  && id_labo = ?   ",
        values: [params?.id_labo],
      });

      return NextResponse.json({ laboElem: laboElem, laboResp: laboResp }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
