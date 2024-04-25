// import Image from "next/image";

import Link from "next/link";
export default function AccrediationEqui() {
  return (
    <div className=" bg-green-300  w-90vw flex justify-center items-center m-auto ">
      <div class="midlle border border-red-400 h-800px w-90% my-4 ">
        <div className="first_div border-2 border-black m-3 p-4 text-2xl ">
          L’accréditation ou le renouvellement d’accréditation de l’équipe de
          recherche doit être validée d’abord par le conseil d’établissement
          domiciliant l’équipe, ensuite par le Conseil de l’université. La
          demande d’accréditation ou renouvellement d’accréditation est accordée
          sur la base d’un canevas (formulaire-Y) comporter un plan d’action
          quadriennal présentant :
        </div>

        {/* the seconde div is : 
        <div className="first_div border-2 border-black m-3 p-4 text-2xl ">
          Le dossier d’accréditation ou de renouvellement d’accréditation d’un
          laboratoire de recherche doit comporter :
        </div> */}

        <div className="flex flex-col space-y-4 mx-3 p-2 pb-20  border-2 border-red-400">
          <span className="text-2xl ">
            {" "}
            * Le ou les axes de recherche à développer
          </span>
          <span className="text-2xl ">
            * Le plan prévisionnel en matière de recherche scientifique, de la
            formation par la recherche et de la valorisation des résultats de la
            recherche et de partenariat au niveau national et/ou international
          </span>
          <span className="text-2xl ">
            * le plan prévisionnel en matière de production scientifique de la
            formation par et pour la recherche ainsi que la valorisation des
            résultat
          </span>{" "}
          <span className="text-2xl ">
            * Les compétences scientifiques de l’équipe notamment en matière de
            production scientifique
          </span>{" "}
          <span className="text-2xl ">
            * Le règlement intérieur de l’équipe de recherche approuvé par ses
            membres
          </span>{" "}
          <span className="text-2xl ">
            * L’engagement et les CV succincts (CV-succinct) des membres
            permanents pour appartenir à l’équipe
          </span>
          <span className="text-2xl">
            * Le CV détaillé du membre désigné pour assurer la responsabilité de
            l’équipe
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
