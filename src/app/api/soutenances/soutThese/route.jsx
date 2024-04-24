import { query_pfe } from "@/src/connectDB/query_pfe";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    if (req.method === "GET") {
      const infoTheseGlobalTable = await query_pfe({
        query:
          "SELECT etudiant.NomPrenom, soutenance.id_soutenace, MONTHNAME(soutenance.Date_de_soutenacne_tim ) AS month, DAY(soutenance.Date_de_soutenacne_tim ) AS day, soutenance.Intitulé_du_travail FROM soutenance INNER JOIN etudiant ON soutenance.id_Auteur = etudiant.id_Étudiant ",
        values: [],
      });

      return NextResponse.json({
        infoTheseGlobalTable: infoTheseGlobalTable,
      }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
