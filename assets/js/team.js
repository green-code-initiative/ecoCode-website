const IdentreprisePartenaire = document.getElementById("EntreprisePartenaire");
const IdMembreContributeur = document.getElementById("MembreContributeur");

IdentreprisePartenaire.addEventListener("click", changeDisplayEntreprise);
IdMembreContributeur.addEventListener("click", changeDisplayMembre);

function changeDisplayEntreprise() {
  const BlockentreprisePartenaire = document.getElementById(
    "blockEntreprisePartenaire"
  );
  const BlockMembreContributeur = document.getElementById(
    "blockMembreContributeur"
  );

  BlockentreprisePartenaire.style.display = "flex";
  IdentreprisePartenaire.classList.add("is-active-link");
  IdentreprisePartenaire.classList.remove("is-no-active-link");

  BlockMembreContributeur.style.display = "none";
  IdMembreContributeur.classList.add("is-no-active-link");
  IdMembreContributeur.classList.remove("is-active-link");
}

function changeDisplayMembre() {
  const BlockentreprisePartenaire = document.getElementById(
    "blockEntreprisePartenaire"
  );
  const BlockMembreContributeur = document.getElementById(
    "blockMembreContributeur"
  );

  BlockentreprisePartenaire.style.display = "none";
  IdentreprisePartenaire.classList.remove("is-active-link");
  IdentreprisePartenaire.classList.add("is-no-active-link");
  BlockMembreContributeur.style.display = "flex";
  IdMembreContributeur.classList.add("is-active-link");
  IdMembreContributeur.classList.remove("is-no-active-link");
}

const menu = document.getElementById('menu-mobile');


menu.addEventListener('click', Menu);

function Menu() {
    const x = document.getElementById("menu-desktop");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
