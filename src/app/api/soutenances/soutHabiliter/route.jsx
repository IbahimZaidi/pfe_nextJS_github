import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const infoHabGlobalTable = await query_pfe({
        query:
          "SELECT prof.NomPrenom, prof.Grade , soutenance_habiliter.id_sout_abi , MONTHNAME(soutenance_habiliter.Date_de_soutenacne_habiliter ) AS month, DAY(soutenance_habiliter.Date_de_soutenacne_habiliter ) AS day, soutenance_habiliter.Intitulé_du_travail FROM soutenance_habiliter INNER JOIN prof ON soutenance_habiliter.id_Auteur = prof.id_prof ",
        values: [],
      });

      return NextResponse.json({
        infoHabGlobalTable: infoHabGlobalTable,
      }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
