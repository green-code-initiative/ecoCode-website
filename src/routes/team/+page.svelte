<script>
  import LogoEcocode from "../../lib/assets/img/logo/logo-ecocode-carousel.webp";
  import LogoSnapp from "../../lib/assets/img/logo/logo-snapp-carousel.webp";
  import LogoAquitaine from "../../lib/assets/img/logo/logo-aquitaine-carousel.jpg";
  import LogoPau from "../../lib/assets/img/logo/logo-pau-carousel.jpg";
  import LogoPageJaune from "../../lib/assets/img/logo/logo-page-jaune.webp";
  import LogoDavidson from "../../lib/assets/img/logo/logo-davidson.jpg";
  import LogoCa from "../../lib/assets/img/logo/logo-ca.png";
  import LogoSonar from "../../lib/assets/img/logo/logo-sonar.png";
  import LogoEnedis from "../../lib/assets/img/logo/logo-enedis.svg";
  import LogoCgi from "../../lib/assets/img/logo/logo-cgi.png";
  import LogoTosit from "../../lib/assets/img/logo/logo-tosit.jpeg";
  import LogoBanque from "../../lib/assets/img/logo/logo-banque.svg";
  import LogoAubay from "../../lib/assets/img/logo/logo-aubay.svg";

  import IconLeft from "../../lib/assets/img/icon/arrow-left.webp";
  import IconRight from "../../lib/assets/img/icon/arrow-right.webp";

  import ProfilDavidDCO from "../../lib/assets/img/profil/David_De_Carvalho.jpeg";
  import ProfilJulesDR from "../../lib/assets/img/profil/Jules_Delecour.jpeg";
  import ProfilMaximeDS from "../../lib/assets/img/profil/Maxime_Dubois.jpeg";
  import ProfilGillesGT from "../../lib/assets/img/profil/Gilles_Grousset.jpeg";
  import ProfilJulienHT from "../../lib/assets/img/profil/Julien_Hertout.jpeg";
  import ProfilGeoffreyLE from "../../lib/assets/img/profil/Geoffrey_Lalloué.jpeg";
  import ProfilOlivierLGR from "../../lib/assets/img/profil/Olivier_Le_Goaer.jpeg";
  import ProfilMaximeMN from "../../lib/assets/img/profil/Maxime_Malgorn.jpeg";

  import iconLinkedin from "../../lib/assets/img/icon/icon-linkedIn.png";

  function changeDisplayEntreprise() {
    blockEntreprisePartenaire.style.display = "flex";
    blockMembreContributeur.style.display = "none";

    EntreprisePartenaire.classList.add("is-active-link");
    EntreprisePartenaire.classList.remove("is-no-active-link");
    MembreContributeur.classList.add("is-no-active-link");
    MembreContributeur.classList.remove("is-active-link");
  }

  function changeDisplayMembre() {
    blockEntreprisePartenaire.style.display = "none";
    blockMembreContributeur.style.display = "flex";

    EntreprisePartenaire.classList.remove("is-active-link");
    EntreprisePartenaire.classList.add("is-no-active-link");
    MembreContributeur.classList.add("is-active-link");
    MembreContributeur.classList.remove("is-no-active-link");
  }

  function Menu() {
    const x = document.getElementById("menu-desktop");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
</script>

<main>
  <div class="section-01">
    <button
      id="EntreprisePartenaire"
      on:click={changeDisplayEntreprise}
      class="title-accueil is-active-link"
    >
      Entreprises partenaires
    </button>
    <button
      id="MembreContributeur"
      on:click={changeDisplayMembre}
      class="title-accueil is-no-active-link"
    >
      Membres contributeurs
    </button>
  </div>

  <div id="blockEntreprisePartenaire">
    <div class="section-02">
      <h2 class="title-section-02">
        De nombreuses entreprises s'impliquent sur ecoCode
      </h2>
      <div class="carousel-section-02">
        <div class="container-box-section-02">
          <div id="container-ecocode" class="container-logo-section-02">
            <img
              alt="logo ecocode"
              id="ecocode"
              class="img-carousel-section-02"
              src={LogoEcocode}
            />
          </div>
          <span class="detail-container-section-02">Green Code Initiative</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="logo Snapp"
              id="snapp"
              class="img-carousel-section-02"
              src={LogoSnapp}
            />
          </div>
          <span class="detail-container-section-02">Snapp'</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="logo Aquitaine"
              id="aquitaine"
              class="img-carousel-section-02"
              src={LogoAquitaine}
            />
          </div>
          <span class="detail-container-section-02"
            >Région Nouvelle Aquitaine'</span
          >
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="logo Pau"
              id="pau"
              class="img-carousel-section-02"
              src={LogoPau}
            />
          </div>
          <span class="detail-container-section-02">UPPA</span>
        </div>

        <div class="container-box-section-02">
          <div id="last" class="container-logo-section-02">
            <img
              alt="logo page jaune"
              id="societe"
              class="img-carousel-section-02"
              src={LogoPageJaune}
            />
          </div>
          <span class="detail-container-section-02">Pages Jaunes</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="logo davidson"
              id="societe"
              class="img-carousel-section-02"
              src={LogoDavidson}
            />
          </div>
          <span class="detail-container-section-02">Davidson</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="Logo crédit agricole"
              id="societe"
              class="img-carousel-section-02"
              src={LogoCa}
            />
          </div>
          <span class="detail-container-section-02">Crédit Agricole</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="logo Sonar"
              id="societe"
              class="img-carousel-section-02"
              src={LogoSonar}
            />
          </div>
          <span class="detail-container-section-02">Sonar</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="logo Enedis"
              id="societe"
              class="img-carousel-section-02"
              src={LogoEnedis}
            />
          </div>
          <span class="detail-container-section-02">Enedis</span>
        </div>

        <div class="container-box-section-02">
          <div id="last" class="container-logo-section-02">
            <img
              alt="Logo Cgi"
              id="societe"
              class="img-carousel-section-02"
              src={LogoCgi}
            />
          </div>
          <span class="detail-container-section-02">CGI</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="Logo Tosit"
              id="societe"
              class="img-carousel-section-02"
              src={LogoTosit}
            />
          </div>
          <span class="detail-container-section-02">TOSIT</span>
        </div>

        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img
              alt="Logo Banque de france"
              id="societe"
              class="img-carousel-section-02"
              src={LogoBanque}
            />
          </div>
          <span class="detail-container-section-02">Banque de France</span>
        </div>

        <div class="container-box-section-02">
          <div id="aubay-container" class="container-logo-section-02">
            <img
              alt="Logo Aubay"
              id="aubay"
              class="img-carousel-section-02"
              src={LogoAubay}
            />
          </div>
          <span class="detail-container-section-02">Aubay</span>
        </div>
      </div>
      <div class="box-button-section-02">
        <a href="/" class="button-section-02"
          ><img alt="fleche gauche" src={IconLeft} />Devenir une entreprise
          cliente
          <img alt="fleche droite" src={IconRight} /></a
        >
      </div>
    </div>
  </div>

  <div id="blockMembreContributeur">
    <div class="section-03">
      <h2 class="title-section-03">Core team</h2>
      <span class="subtitle-section-03">La team renforcée d’ecoCode</span>
      <div class="carousel-section-03">
        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilDavidDCO}
            />
          </div>
          <span class="detail-container-section-03">David De Carvalho</span>
          <span class="subdetail-container-section-03">Pages Jaunes</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/david--de--carvalho/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilJulesDR}
            />
          </div>
          <span class="detail-container-section-03">Jules Delecour</span>
          <span class="subdetail-container-section-03">Davidson Consulting</span
          >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jules-delecour-498680118/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilMaximeDS}
            />
          </div>
          <span class="detail-container-section-03">Maxime Dubois</span>
          <span class="subdetail-container-section-03">Snapp'</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/maxime-dubois-649a3a3/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilGillesGT}
            />
          </div>
          <span class="detail-container-section-03">Gilles Grousset</span>
          <span class="subdetail-container-section-03">inside|app</span>
          <a target="_blank" href="https://www.linkedin.com/in/gillesgrousset/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilJulienHT}
            />
          </div>
          <span class="detail-container-section-03">Julien Hertout</span>
          <span class="subdetail-container-section-03">Snapp'</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/julien-hertout-b1175449/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilGeoffreyLE}
            />
          </div>
          <span class="detail-container-section-03 no-entreprise"
            >Geoffrey Lalloué</span
          >
          <span class="subdetail-container-section-03" />
          <a target="_blank" href="https://www.linkedin.com/in/geoffreylalloue/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilOlivierLGR}
            />
          </div>
          <span class="detail-container-section-03">Olivier Le Goaër</span>
          <span class="subdetail-container-section-03">LIUPPA</span>
          <a target="_blank" href="https://www.linkedin.com/in/olivierlegoaer/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>

        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-03"
              src={ProfilMaximeMN}
            />
          </div>
          <span class="detail-container-section-03">Maxime Malgorn</span>
          <span class="subdetail-container-section-03">Natixis</span>
          <a target="_blank" href="https://www.linkedin.com/in/maximemalgorn/"
            ><img
              alt="icon-linkedin"
              class="icon-section-03"
              src={iconLinkedin}
            /></a
          >
        </div>
      </div>
    </div>

    <div class="section-04">
      <h2 class="title-section-04">Contributrices et contributeurs</h2>
      <span class="subtitle-section-04">La team active sur ecoCode</span>
      <div class="tab-list-section-04">
        <div class="colum-section-04">
          <div class="line-list-section-04">
            <img
              alt="icon-linkedin"
              class="img-line-section-04"
              src={iconLinkedin}
            />
            <span class="text-line-section-04">Prénom Nom</span>
          </div>
        </div>

        <div class="colum-section-04">
          <div class="line-list-section-04">
            <img
              alt="icon-linkedin"
              class="img-line-section-04"
              src={iconLinkedin}
            />
            <span class="text-line-section-04">Prénom Nom</span>
          </div>
        </div>

        <div class="colum-section-04">
          <div class="line-list-section-04">
            <img
              alt="icon-linkedin"
              class="img-line-section-04"
              src={iconLinkedin}
            />
            <span class="text-line-section-04">Prénom Nom</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section-05">
      <h2 class="title-section-05">Core team Emeriti</h2>
      <span class="subtitle-section-05"
        >Celles et ceux qui ont fortement contribué à ecoCode</span
      >
      <div class="carousel-section-05">
        <div class="container-box-section-05">
          <div id="container-team" class="container-logo-section-05">
            <img
              alt="icon-linkedin"
              class="img-carousel-section-05"
              src={ProfilMaximeDS}
            />
          </div>
          <span class="detail-container-section-05">Maxime Dubois</span>
          <span class="subdetail-container-section-05">Snapp'</span>
          <img alt="icon-linkedin" class="icon-section-05" src={iconLinkedin} />
        </div>
      </div>
      <div class="container-button-section-05">
        <div class="left-section-05">
          <a href="/" class="button-section-05"
            ><img alt="fleche gauche" src={IconLeft} />Nos entreprises
            partenaires
            <img alt="fleche droite" src={IconRight} /></a
          >
        </div>
        <div class="right-section-05">
          <a href="/" class="button-section-05"
            ><img alt="fleche gauche" src={IconLeft} /> Rejoindre l’équipe
            <img alt="fleche droite" src={IconRight} /></a
          >
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  @import "../../lib/assets/css/team.css";
  @import "../../lib/assets/css/responsive-team.css";
</style>
