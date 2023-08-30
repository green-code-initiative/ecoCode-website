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