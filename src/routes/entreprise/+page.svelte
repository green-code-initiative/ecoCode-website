<script>
  import IconLeft from "../../lib/assets/img/icon/arrow-left.webp";
  import IconRight from "../../lib/assets/img/icon/arrow-right.webp";

  import IconLeftWhite from "../../lib/assets/img/icon/arrow-left-white.webp";
  import IconRightWhite from "../../lib/assets/img/icon/arrow-right-white.webp";
</script>

<main>
  <div class="section-01">
    <h1 class="title-accueil">
      Nous proposons aux organisations la création de règles d'éco-conception
      logicielle sur-mesure.
    </h1>
    <span class="subtitle-accueil">En collaborant avec nous, vous réduisez votre impact numérique et
      contribuez à l'Open Source.</span>
    <div class="container-button-section-01">
      <div class="right-section-01">
        <a href="/" class="button-section-01"><img width="160" height="71.84" alt="fleche gauche" src={IconLeft} />
          Recevez le cas client Société Générale
          <img width="160" height="71.84" alt="fleche droite" src={IconRight} /></a>
      </div>
    </div>
  </div>

  <div class="section-03">
    <h2 class="title-section-03">Notre offre</h2>
    <span class="subtitle-section-03">Nous créons des extensions SonarQube pour analyser votre code et vous
      permettre de réduire son impact.</span>
    
  </div>

  <div class="section-02">
    <h2 class="title-section-02">
      Le processus de création d'une règle ecoCode
    </h2>
    <div class="schema-section-02">
      <div class="top-schema-section-02">
        <div class="box-schema-section-02">
          <span class="title-schema-box-section-02">Cadrage</span>
          <div class="box-int-schema-section-02">
            <div class="int-box-schema-section-02">
              Définition des règles à produire et contractualisation
            </div>
          </div>
        </div>

        <div class="box-schema-section-02">
          <span class="title-schema-box-section-02">production</span>
          <div class="box-int-schema-section-02">
            <div class="int-box-schema-section-02">
              Production des règles par notre équipe interne
            </div>
          </div>
        </div>

        <div class="box-schema-section-02">
          <span id="lastTitle-box-schema-section-02" class="title-schema-box-section-02">Test</span>
          <div class="box-int-schema-section-02">
            <div class="int-box-schema-section-02">
              Test des règles produites pour s’assurer de leur efficacité dans
              la réduction de la consommation énergétique
            </div>
          </div>
        </div>

        <div class="bottom-schema-section-02">
          <div class="box-schema-section-02">
            <span class="title-schema-box-section-02">Livraison</span>
            <div class="box-int-schema-section-02">
              <div class="int-box-schema-section-02">
                Mise à disposition des règles pour vos équipes
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="text-detail-schema-section-02">Toutes les règles sur-mesure, produites pour le compte
        d'organisations,
        tombent dans l'Open Source. C'est votre contribution à rendre le
        numérique plus responsable.</span>
    </div>

    <div class="section-04">
      <h2 class="title-section-04">
        Recevez notre cas client Société Générale par mail
      </h2>
      <form class="form-section-04">
        <div class="form-input-section-04">
          <div class="merge-input-section-04">
            <input class="input-section-04" type="text" placeholder="Nom" />
            <input class="input-section-04" type="text" placeholder="Prénom" />
          </div>
          <input class="input-section-04" type="text" placeholder="Votre organisation" />
          <input class="input-section-04" type="text" placeholder="Votre rôle" />
          <div class="merge-input-section-04">
            <input class="input-section-04" type="text" placeholder="Téléphone" />
            <input class="input-section-04" type="text" placeholder="E-mail" />
          </div>
          <textarea class="text-area-section-04" type="text" placeholder="Votre besoin" />
        </div>
      </form>

      <a href="/" class="button-section-04"><img width="160" height="71.84" alt="fleche gauche" src={IconLeftWhite} />
        Recevez notre cas client
        <img width="160" height="71.84" alt="fleche droite" src={IconRightWhite} /></a>
    </div>
  </div>
</main>

<style>
  @import "../../lib/assets/css/entreprise.css";
  @import "../../lib/assets/css/responsive-entreprise.css";
</style>