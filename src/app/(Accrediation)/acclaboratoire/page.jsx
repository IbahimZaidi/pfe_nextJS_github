// import Image from "next/image";

import Link from "next/link";
export default function AccrediationLabo() {
  return (
    <div className=" bg-green-300 w-90vw flex justify-center items-center m-auto ">
      <div class="midlle border border-red-400 h-800px w-90% my-4 ">
        <div className="first_div border-2 border-black m-3 p-4 text-2xl ">
          L’accréditation ou la ré-accréditation du laboratoire doit être
          validée d’abord par le conseil d’établissement de domiciliation,
          ensuite par le Conseil de l’université. La demande d’accréditation ou
          renouvellement d’accréditation est accordée sur la base d’un canevas
          (formulaire-X). La validation est basée sur l’avis du conseil
          d’établissement et du Conseil de de l’université après évaluation
        </div>

        {/* the seconde div is :  */}
        <div className="first_div border-2 border-black m-3 p-4 text-2xl ">
          Le dossier d’accréditation ou de renouvellement d’accréditation d’un
          laboratoire de recherche doit comporter :
        </div>

        <div className="flex flex-col space-y-4 mx-3 p-2  border-2 border-red-400">
          <span className="text-2xl ">
            {" "}
            * Les compétences scientifiques du laboratoire notamment en matière
            de production scientifique
          </span>
          <span className="text-2xl ">
            * les axes de recherche du laboratoire
          </span>
          <span className="text-2xl ">
            * le plan prévisionnel en matière de production scientifique de la
            formation par et pour la recherche ainsi que la valorisation des
            résultat
          </span>{" "}
          <span className="text-2xl ">
            * le règlement intérieur du laboratoire de recherche approuvé par
            les membres permanents
          </span>{" "}
          <span className="text-2xl ">
            * l’engagement et les CV succincts (CV) des responsables des membres
            permanents
          </span>{" "}
          <span className="text-2xl ">
            * l’engagement et le CV détaillé du Directeur du Laboratoire
          </span>
          <Link
            href="/images&figures/accreditation.pdf"
            className="bg-yellow-400 flex justify-center items-center w-150px h-16 rounded-sm text-xl "
          >
            Formule_pdf{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
