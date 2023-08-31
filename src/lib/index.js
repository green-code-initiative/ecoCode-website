// place files you want to import through the `$lib` alias in this folder.
// Dans votre fichier JavaScript externe
const headerElement = document.querySelector("header[data-current-url]");
const currentURL = headerElement.getAttribute("data-current-url");

// Maintenant vous pouvez utiliser currentURL comme nécessaire
