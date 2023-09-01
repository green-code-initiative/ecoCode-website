<script>
  import Logo from "./../lib/assets/img/logo/logo-accueil.webp";
  import LogoEcocode from "./../lib/assets/img/logo/logo-ecocode-carousel.webp";
  import LogoSnapp from "./../lib/assets/img/logo/logo-snapp-carousel.webp";
  import LogoAquitaine from "./../lib/assets/img/logo/logo-aquitaine-carousel.jpg";
  import LogoPau from "./../lib/assets/img/logo/logo-pau-carousel.jpg";
  import LogoSociete from "./../lib/assets/img/logo/logo-societe-carousel.jpg";

  import IconLeft from "./../lib/assets/img/icon/arrow-left.webp";
  import IconRight from "./../lib/assets/img/icon/arrow-right.webp";

  import IconRightBlue from "./../lib/assets/img/icon/arrow-right-blue.webp";
  import IconLeftBlue from "./../lib/assets/img/icon/arrow-left-blue.webp";
  import IconBottomBlue from "./../lib/assets/img/icon/arrow-bottom-blue.webp";

  import IconLeftWhite from "./../lib/assets/img/icon/arrow-left-white.webp";
  import IconRightWhite from "./../lib/assets/img/icon/arrow-right-white.webp";

  import Illutrastion1 from "./../lib/assets/img/illustrator/img-accueil-1.png";

  import Illutrastion2 from "./../lib/assets/img/illustrator/img-accueil-2.png";

  let selectedType = "individu"; // Définir "individu" par défaut
  let options = [];

  $: if (selectedType === "individu") {
    options = ["Contribuer à ecoCode", "Des informations sur ecoCode"];
  } else if (selectedType === "organisation") {
    options = [
      "Développer des règles pour mon organisation",
      "Développer des règles pour mon organisation",
      "Soutenir ecoCode financièrement",
      "Des informations sur ecoCode",
    ];
  }
</script>

<main data-sveltekit-preload-data="off">
  <div class="section-01">
    <img alt="logo-accueil" class="logo-accueil" src={Logo} />
    <h1 class="title-accueil">
      Nous réduisons l'impact environnemental et social des solutions
      numériques.
    </h1>
    <span class="subtitle-accueil"
      >Nous créons un référentiel de règles d'éco-conception logicielle en Open
      Source, développées par notre communauté.</span
    >
  </div>
  <div class="section-02">
    <div class="left-section-02">
      <span class="title-right-section-02">Je suis un individu</span>
      <a href="/" class="button-section-02"
        ><img alt="fleche Gauche" src={IconLeft} /> Je souhaite contribuer au
        projet
        <img alt="fleche Droite" src={IconRight} /></a
      >
    </div>
    <div class="right-section-02">
      <span class="title-right-section-02">Je suis une organisation</span>
      <a href="/" class="button-section-02"
        ><img alt="Fleche Gauche" src={IconLeft} /> Je souhaite des règles
        sur-mesure <img alt="Fleche Droite" src={IconRight} /></a
      >
    </div>
  </div>
  <div class="section-03">
    <h2 class="title-section-03">
      Le numérique nous passionne et nous considérons qu’il est impératif de
      réduire son impact environnemental et social afin de le rendre plus
      durable.
    </h2>
    <span class="subtitle-section-03"
      >ecoCode est une initiative qui prend racine dans la force du collectif</span
    >
    <div class="box-one-section-03">
      <span class="text-box-one-section-03"
        >ecoCode rassemble différents types d'acteurs qui oeuvrent ensemble pour
        rendre le numérique plus responsable : recherche, entreprises, personnes
        en poste sur leur temps de travail, personnes indépendantes sur leur
        temps libre...</span
      >
      <img
        alt="Illutrastion N°1"
        class="img-box-one-section-03"
        src={Illutrastion1}
      />
    </div>
    <div class="box-two-section-03">
      <img
        alt="Illutrastion N°2"
        class="img-box-two-section-03"
        src={Illutrastion2}
      />
      <span class="text-box-two-section-03"
        >Les membres contributeurs du collectif conceptualisent et implémentent
        des règles permettant de repérer les défauts de qualité du code source
        d’un projet pouvant avoir un impact écologique négatif. <br />
        Le tout est mis à disposition en open source.</span
      >
    </div>
  </div>
  <div class="section-04">
    <h2 class="title-section-04">
      Le processus de création d'une règle ecoCode
    </h2>
    <div class="schema-section-04">
      <div class="top-schema-section-04">
        <div class="box-schema-section-04">
          <span class="title-schema-box-section-04">identification</span>
          <div class="box-int-schema-section-04">
            <div class="int-box-schema-section-04">
              Nous identifions des patterns de code qui pourraient être
              améliorés (code smells)
            </div>
            <img
              alt="Fleche Droite"
              id="hidden-mobile"
              class="icon-arrow-section-04"
              src={IconRightBlue}
            />
          </div>
          <img
            alt="fleche vers le bas"
            id="hidden-desktop"
            class="icon-arrow-bottom-section-04"
            src={IconBottomBlue}
          />
        </div>

        <div class="box-schema-section-04">
          <span class="title-schema-box-section-04">production</span>
          <div class="box-int-schema-section-04">
            <div class="int-box-schema-section-04">
              Les membres contributeurs produisent la règle permettant de
              réduire l’impact du code
            </div>
            <img
              alt="fleche droite"
              id="hidden-mobile"
              class="icon-arrow-section-04"
              src={IconRightBlue}
            />
          </div>
          <img
            alt="fleche vers le bas"
            id="hidden-desktop"
            class="icon-arrow-bottom-section-04"
            src={IconBottomBlue}
          />
        </div>

        <div class="box-schema-section-04">
          <span
            id="lastTitle-box-schema-section-04"
            class="title-schema-box-section-04">expérimentation</span
          >
          <div class="box-int-schema-section-04">
            <div class="int-box-schema-section-04">
              La règle est testée en comparaison avec le code smell
            </div>
          </div>
          <img
            alt="fleche vers le bas"
            class="icon-arrow-bottom-section-04"
            src={IconBottomBlue}
          />
        </div>
      </div>

      <div class="bottom-schema-section-04">
        <div class="box-schema-section-04">
          <span class="title-schema-box-section-04">utilisation</span>
          <div class="box-int-schema-section-04">
            <div class="int-box-schema-section-04">
              Utilisation de la règle par des équipes techniques dans leur
              organisation
            </div>
            <img
              alt="fleche Gauche"
              id="hidden-mobile"
              class="icon-arrow-section-04"
              src={IconLeftBlue}
            />
          </div>
        </div>

        <div class="box-schema-section-04">
          <span class="title-schema-box-section-04">intégration</span>
          <div class="box-int-schema-section-04">
            <div class="int-box-schema-section-04">
              La règle est publiée dans le référentiel Open Source d’ecoCode
            </div>
            <img
              alt="fleche Gauche"
              id="hidden-mobile"
              class="icon-arrow-section-04"
              src={IconLeftBlue}
            />
          </div>
          <img
            alt="Fleche Gauche"
            id="hidden-desktop"
            class="icon-arrow-bottom-section-04"
            src={IconLeftBlue}
          />
        </div>

        <div class="box-schema-section-04">
          <span
            id="lastTitle-box-schema-section-04"
            class="title-schema-box-section-04">validation</span
          >
          <div class="box-int-schema-section-04">
            <div class="int-box-schema-section-04">
              Une équipe expérimentée étudie et valide la nouvelle règle
            </div>
          </div>
          <img
            alt="fleche vers le bas"
            id="hidden-desktop"
            class="icon-arrow-bottom-section-04"
            src={IconBottomBlue}
          />
        </div>
      </div>
    </div>
    <span class="text-detail-schema-section-04"
      >Nous travaillons également sur des règles sur-mesure pour des
      organisations clientes</span
    >
    <a href="/" class="button-detail-schema-section-04"
      ><img alt="fleche Gauche" src={IconLeftWhite} /> En savoir plus
      <img alt="fleche droite" src={IconRightWhite} />
    </a>
  </div>

  <div class="section-05">
    <h2 class="title-section-05">
      ecoCode est rendu possible grâce aux nombreux acteurs impliqués
    </h2>
    <span class="subtitle-section-05">Quelques structures partenaires :</span>
    <div class="carousel-section-05">
      <div class="container-box-section-05">
        <div id="container-ecocode" class="container-logo-section-05">
          <img
            alt="logo EcoCode"
            id="ecocode"
            class="img-carousel-section-05"
            src={LogoEcocode}
          />
        </div>
        <span class="detail-container-section-05">Green Code Initiative</span>
      </div>

      <div class="container-box-section-05">
        <div class="container-logo-section-05">
          <img
            alt="logo Snapp"
            id="snapp"
            class="img-carousel-section-05"
            src={LogoSnapp}
          />
        </div>
        <span class="detail-container-section-05">Snapp'</span>
      </div>

      <div class="container-box-section-05">
        <div class="container-logo-section-05">
          <img
            alt="Logo Région Nouvelle Aquitaine"
            id="aquitaine"
            class="img-carousel-section-05"
            src={LogoAquitaine}
          />
        </div>
        <span class="detail-container-section-05"
          >Région Nouvelle Aquitaine'</span
        >
      </div>

      <div class="container-box-section-05">
        <div class="container-logo-section-05">
          <img
            alt="logo Université de Pau"
            id="pau"
            class="img-carousel-section-05"
            src={LogoPau}
          />
        </div>
        <span class="detail-container-section-05">Université de Pau</span>
      </div>

      <div class="container-box-section-05">
        <div class="container-logo-section-05">
          <img
            alt="logo Société Générale"
            id="societe"
            class="img-carousel-section-05"
            src={LogoSociete}
          />
        </div>
        <span class="detail-container-section-05">Société Générale</span>
      </div>
    </div>
    <div class="box-button-section-05">
      <a href="/" class="button-section-05"
        ><img alt="Fleche Gauche" src={IconLeft} /> Toutes les entreprises
        partenaires <img alt="Fleche Droite" src={IconRight} /></a
      >
      <a href="/" class="button-section-05"
        ><img alt="Fleche Gauche" src={IconLeft} /> Tous nos membres
        contributeurs
        <img alt="Fleche Droite" src={IconRight} /></a
      >
    </div>
  </div>

  <div class="section-06">
    <h2 class="title-section-06">On discute d’ecoCode ?</h2>
    <form class="form-section-06">
      <div class="right-form-section-06">
        <div class="container-form-section-06">
          <span class="detail-form-section-06">Je suis :</span>
          <div>
            <input
              class="radio-section-06"
              id="individu"
              name="select"
              bind:group={selectedType}
              type="radio"
              value="individu"
            />
            <label class="text-radio-section-06" for="individu"
              >Un individu</label
            >
          </div>
          <div>
            <input
              class="radio-section-06"
              id="organisation"
              name="select"
              bind:group={selectedType}
              type="radio"
              value="organisation"
            />
            <label class="text-radio-section-06" for="organisation"
              >Une organisation</label
            >
          </div>
        </div>
        <div class="container-form-section-06">
          <span class="detail-form-section-06">Je souhaite :</span>
          <select class="select-section-06">
            {#each options as option}
              <option>{option}</option>
            {/each}
          </select>
        </div>

        <div class="form-input-section-06">
          <input
            class="input-section-06"
            type="text"
            placeholder="Nom de l’entreprise / personne"
          />
          <div class="merge-input-section-06">
            <input class="input-section-06" type="text" placeholder="E-mail" />
            <input
              class="input-section-06"
              type="text"
              placeholder="Téléphone"
            />
          </div>
          <input
            class="input-section-06"
            type="text"
            placeholder="Des éléments supplémentaires ?"
          />
        </div>
      </div>
    </form>
    <a href="/" class="button-detail-schema-section-04"
      ><img alt="fleche Gauche" src={IconLeftWhite} /> Envoyer
      <img alt="fleche droite" src={IconRightWhite} />
    </a>
  </div>
</main>

<style>
  @import "../lib/assets/css/index.css";
  @import "../lib/assets/css/responsive-index.css";
</style>
