<script>
  // @ts-nocheck
  import "../lib/assets/css/header.css";
  import Footer from "../routes/footer.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let headerColor = "";
  let active = "";
  let currentURL = "";

  page.subscribe((value) => {
    currentURL = value.url.pathname;
  });

  if (currentURL.includes("/contributeur")) {
    headerColor = "contributeur-background";
    active = "is-active";
  } else if (currentURL.includes("/entreprise")) {
    headerColor = "entreprise-background";
    active = "is-active";
  } else if (currentURL.includes("/team")) {
    headerColor = "team-background";
    active = "is-active";
  } else {
    headerColor = "";
  }

  function Menu() {
    const x = document.getElementById("menu-desktop");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  import IconLeftWhite from "./../lib/assets/img/icon/arrow-left-white.webp";
  import IconRightWhite from "./../lib/assets/img/icon/arrow-right-white.webp";
  import Logo from "./../lib/assets/img/logo/logo-ecocode.webp";
</script>

<header class={headerColor}>
  <a data-sveltekit-reload href="/"
    ><img
      width="160"
      height="71.84"
      alt="logo-accueil"
      class="logo-header"
      src={Logo}
    /></a
  >
  <div id="menu-desktop" class="topnav">
    <a
      data-sveltekit-reload
      class="text-header {currentURL.includes('contributeur')
        ? 'is-active'
        : ''}"
      href="/contributeur"
    >
      <img
        width="160"
        height="71.84"
        alt="fleche gauche"
        class="icon-header {currentURL.includes('contributeur')
          ? ''
          : 'hide-arrow'}"
        src={IconLeftWhite}
      />
      <span>Contributeur</span>
      <img
        width="160"
        height="71.84"
        alt="fleche droite"
        class="icon-header {currentURL.includes('contributeur')
          ? ''
          : 'hide-arrow'}"
        src={IconRightWhite}
      />
    </a>

    <a
      data-sveltekit-reload
      class="text-header {currentURL.includes('entreprise') ? 'is-active' : ''}"
      href="/entreprise"
    >
      <img
        width="160"
        height="71.84"
        alt="fleche gauche"
        class="icon-header {currentURL.includes('entreprise')
          ? ''
          : 'hide-arrow'}"
        src={IconLeftWhite}
      />
      <span>Entreprise</span>
      <img
        width="160"
        height="71.84"
        alt="fleche droite"
        class="icon-header {currentURL.includes('entreprise')
          ? ''
          : 'hide-arrow'}"
        src={IconRightWhite}
      />
    </a>

    <a
      data-sveltekit-reload
      class="text-header {currentURL.includes('team') ? 'is-active' : ''}"
      href="/team"
    >
      <img
        width="160"
        height="71.84"
        alt="fleche gauche"
        class="icon-header {currentURL.includes('team') ? '' : 'hide-arrow'}"
        src={IconLeftWhite}
      />
      <span>Team</span>
      <img
        width="160"
        height="71.84"
        alt="fleche droite"
        class="icon-header {currentURL.includes('team') ? '' : 'hide-arrow'}"
        src={IconRightWhite}
      />
    </a>
  </div>
  <button class="button-header text-header" on:click={Menu}
    ><i id="menu-mobile" class="fa-solid fa-bars" />
  </button>
</header>
<slot />
<Footer />

<style>
  .contributeur-background {
    background-color: #529a75;
  }

  .entreprise-background {
    background-color: #4f65a0;
  }

  .team-background {
    background-color: #c04052;
  }

  .is-active {
    opacity: 1 !important;
  }

  .button-header {
    background-color: transparent;
    border: 0px;
    outline: none;
    display: none;
  }

  .hide-arrow {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .button-header {
      display: flex;
    }
  }
</style>
