import { query } from "@/src/connectDB/query";
import { query_pfe } from "@/src/connectDB/query_pfe";
import { NEXT_QUERY_PARAM_PREFIX } from "next/dist/lib/constants";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (req.method === "GET") {
      const infoHaReponse = await query_pfe({
        query:
          "SELECT prof.NomPrenom, soutenance_habiliter.id_sout_abi, MONTHNAME(soutenance_habiliter.Date_de_soutenacne_habiliter) AS month, DAY(soutenance_habiliter.Date_de_soutenacne_habiliter) AS day, YEAR(soutenance_habiliter.Date_de_soutenacne_habiliter) AS year, HOUR(soutenance_habiliter.Date_de_soutenacne_habiliter) AS hour, MINUTE(soutenance_habiliter.Date_de_soutenacne_habiliter) AS minute, soutenance_habiliter.Intitulé_du_travail as Intitulé_du_travail FROM soutenance_habiliter INNER JOIN prof ON soutenance_habiliter.id_Auteur = prof.id_prof WHERE soutenance_habiliter.id_sout_abi =  ?  ",
        values: [params.id],
      });

      // get the data of the jury using the id_soutenace pass in the arguments :

      const infoJuryProfsNames = await query_pfe({
        query:
          " SELECT * FROM prof WHERE id_jury IN (SELECT id_jury from soutenance_habiliter where id_sout_abi = ? ) ORDER BY id_jury  ",
        values: [params.id],
      });

      return NextResponse.json({
        infoHaReponse: infoHaReponse,
        infoJuryProfsNames: infoJuryProfsNames,
      }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
