<script>
  import { onMount} from "svelte";
  import { get } from "svelte/store"; 
  import IconLeft from "../../lib/assets/img/icon/arrow-left.webp";
  import IconRight from "../../lib/assets/img/icon/arrow-right.webp";

  import iconLinkedin from "../../lib/assets/img/icon/icon-linkedIn.png";

  import JSONDATATEAM from "../../lib/assets/data/core-team.json";
  import JSONDATACONTRIBUTEUR from "../../lib/assets/data/contribution.json";
  import JSONDATAENTPARTENAIRE from "../../lib/assets/data/entreprisePartenaire.json";

  
  


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

  let isMounted = false;
  


  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const espace = params.get("espace");

    if (espace === "entreprise") {
      changeDisplayEntreprise();
    } else if (espace === "membre") {
      changeDisplayMembre();
    }
  });
</script>

<main>
  <div class="section-01">
    <button id="MembreContributeur" on:click={changeDisplayMembre} class="title-accueil is-active-link">
      Membres contributeurs
    </button>
    <button id="EntreprisePartenaire" on:click={changeDisplayEntreprise} class="title-accueil is-no-active-link">
      Organisations partenaires
    </button>
  </div>

  <div id="blockEntreprisePartenaire">
    <div class="section-02">
      <h2 class="title-section-02">
        De nombreuses organisations s'impliquent sur ecoCode
      </h2>
      <div class="carousel-section-02">
        {#each JSONDATAENTPARTENAIRE as item}
        <div class="container-box-section-02">
          <div class="container-logo-section-02">
            <img id="snapp" width="160" height="71.84" alt="logo ecocode" class="img-carousel-section-02"
              src={item.img} />
          </div>
          <span class="detail-container-section-02">{item.name}</span>
        </div>
        {/each}
      </div>
    </div>
  </div>

  <div id="blockMembreContributeur">
    <div class="section-03">
      <h2 class="title-section-03">Core team</h2>
      <span class="subtitle-section-03">La team renforcée d’ecoCode</span>
      <div class="carousel-section-03">
        {#each JSONDATATEAM as item}
        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img width="160" height="71.84" alt="icon-linkedin" class="img-carousel-section-03" src={item.img} />
          </div>
          <span class="detail-container-section-03">{item.name}</span>
          {#if item.entreprise != ""}
          <span class="subdetail-container-section-03">{item.entreprise}</span>
          {:else}
          <span class="no-entreprise">{item.entreprise}</span>
          {/if}
          {#if item.link != ""}
          <a target="_blank" href={item.link}><img width="160" height="71.84" alt="icon-linkedin"
              class="icon-section-03" src={iconLinkedin} /></a>
          {/if}
        </div>
        {/each}
      </div>
    </div>

    <div class="section-04">
      <h2 class="title-section-04">Contributrices et contributeurs</h2>
      <span class="subtitle-section-04">La team active sur ecoCode</span>
      <div class="carousel-section-03">
        {#each JSONDATACONTRIBUTEUR as item}
        <div class="container-box-section-03">
          <div id="container-team" class="container-logo-section-03">
            <img width="160" height="71.84" alt="icon-linkedin" class="img-carousel-section-03" src={item.img} />
          </div>
          <span class="detail-container-section-03">{item.name}</span>
          {#if item.entreprise != ""}
          <span class="subdetail-container-section-03">{item.entreprise}</span>
          {:else}
          <span class="no-entreprise">{item.entreprise}</span>
          {/if}
          {#if item.link != ""}
          <a target="_blank" href={item.link}><img width="160" height="71.84" alt="icon-linkedin"
              class="icon-section-03" src={iconLinkedin} /></a>
          {/if}
        </div>
        {/each}
      </div>

      <!--<div class="section-05">
        <h2 class="title-section-05">Core team Emeriti</h2>
        <span class="subtitle-section-05">Celles et ceux qui ont fortement contribué à ecoCode</span>
        <div class="carousel-section-05">
          {#each jsonDataTeamEmeriti as item}
          <div class="container-box-section-05">
            <div id="container-team" class="container-logo-section-05">
              <img width="160" height="71.84" alt="icon-linkedin" class="img-carousel-section-05" src={item.img} />
            </div>
            <span class="detail-container-section-05">{item.name}</span>
            <span class="subdetail-container-section-05">{item.entreprise}</span>
            {#if item.link != ""}
            <a href={item.link}><img width="160" height="71.84" alt="icon-linkedin" class="icon-section-05"
                src={iconLinkedin} /></a>
            {/if}
          </div>
          {/each}
        </div>

        <div class="container-button-section-05">
        <div class="left-section-05">
          <a href="/" class="button-section-05"><img width="160" height="71.84" alt="fleche gauche" src={IconLeft} />Nos
            entreprises partenaires
            <img width="160" height="71.84" alt="fleche droite" src={IconRight} /></a>
        </div>
        <div class="right-section-05">
          <a href="/" class="button-section-05"><img width="160" height="71.84" alt="fleche gauche" src={IconLeft} />
            Rejoindre l’équipe
            <img width="160" height="71.84" alt="fleche droite" src={IconRight} /></a>
        </div>
      </div>
      </div>
    </div>-->
    </div>
  </div>
</main>

<style>
  @import "../../lib/assets/css/team.css";
  @import "../../lib/assets/css/responsive-team.css";
</style>