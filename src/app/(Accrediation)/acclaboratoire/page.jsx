// import Image from "next/image";

export default function AccrediationLabo() {
  return (
    <div className=" bg-green-300 h-100vh w-90vw flex justify-center items-center m-auto ">
      <div class="midlle">
        <div class="accr_equipe">
          <h2>
            <span class="space-1 "></span> L’accréditation ou la
            ré-accréditation du laboratoire doit être validée d’abord par le
            conseil d’établissement de domiciliation, ensuite par le Conseil de
            l’université. La demande d’accréditation ou renouvellement
            d’accréditation est accordée sur la base d’un canevas
            (formulaire-X). La validation est basée sur l’avis du conseil
            d’établissement et du Conseil de de l’université après évaluation .
          </h2>
          <h2>
            Le dossier d’accréditation ou de renouvellement d’accréditation d’un
            laboratoire de recherche doit comporter :
          </h2>

          <h3>
            {" "}
            <span class="space "> </span>Les compétences scientifiques du
            laboratoire notamment en matière de production scientifique,{" "}
          </h3>

          <h3>
            {" "}
            <span class="space "> </span> les axes de recherche du laboratoire;
          </h3>
          <h3>
            <span class="space "> </span> le plan prévisionnel en matière de
            production scientifique de la formation par et pour la recherche
            ainsi que la valorisation des résultats la recherche et de
            partenariat au niveau national et/ou international ;
          </h3>
          <h3>
            <span class="space "> </span> le règlement intérieur du laboratoire
            de recherche approuvé par les membres permanents ;
          </h3>
          <h3>
            <span class="space "> </span> l’engagement et les CV succincts (CV)
            des responsables des membres permanents ;
          </h3>
          <h3>
            <span class="space "> </span>l’engagement et le CV détaillé du
            Directeur du Laboratoire ;
          </h3>

          <div class="boton">
            <button class="consulter-info-about-labo">
              <a href="http://localhost/php-testing/files_phpCSS/accreditation.pdf">
                {" "}
                formule-X
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
