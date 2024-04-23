import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  // create a url from the req.url :

  try {
    if (req.method === "GET") {
      const equipeElem = await query_pfe({
        query:
          "SELECT NomPrenom , E_mail FROM `prof` as p inner JOIN equipe as equ USING(id_Equipe) WHERE id_Equipe = ?  ",
        values: [params?.id_eq],
      });

      const respoEquipe = await query_pfe({
        query:
          "SELECT NomPrenom , E_mail , id_prof , id_Responsable_Équipe , id_Equipe  FROM `prof` as p inner JOIN equipe as equ USING(id_Equipe) WHERE id_prof = id_Responsable_Équipe   && id_Equipe = ?  ",
        values: [params?.id_eq],
      });
      console.log("HHHHHHHHHHHHHHHHHHHHHHHHHhhh : ", params);
      return NextResponse.json({
        equipeElem: equipeElem,
        respoEquipe: respoEquipe,
      }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
