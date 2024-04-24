import { query } from "@/src/connectDB/query";
import { query_pfe } from "@/src/connectDB/query_pfe";
import { NEXT_QUERY_PARAM_PREFIX } from "next/dist/lib/constants";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (req.method === "GET") {
      const infoTheseReponse = await query_pfe({
        query:
          "SELECT etudiant.NomPrenom, soutenance.id_soutenace , YEAR(soutenance.Date_de_soutenacne_tim) AS year, HOUR(soutenance.Date_de_soutenacne_tim) AS hour,MINUTE(soutenance.Date_de_soutenacne_tim) AS minute,MONTHNAME(soutenance.Date_de_soutenacne_tim ) AS month, DAY(soutenance.Date_de_soutenacne_tim ) AS day, soutenance.Intitulé_du_travail FROM soutenance INNER JOIN etudiant ON soutenance.id_Auteur = etudiant.id_Étudiant where soutenance.id_soutenace  = ?   ",
        values: [params.id],
      });

      // get the data of the jury using the id_soutenace pass in the arguments :

      const infoJuryProfsNames = await query_pfe({
        query:
          " SELECT * FROM prof WHERE id_jury IN (SELECT id_jury from soutenance where id_soutenace=? ) ORDER BY id_jury ",
        values: [params.id],
      });

      return NextResponse.json({
        infoTheseReponse: infoTheseReponse,
        infoJuryProfsNames: infoJuryProfsNames,
      }); // return in the response a json with value of posts;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
