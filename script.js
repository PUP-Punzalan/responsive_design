let exitButton = document.querySelector(".exit-button");
let hamburgerButton = document.querySelector(".hamburger");
let popupNavbar = document.querySelector(".popup-navbar");

function popup() {
  if (popupNavbar.style.display == "none" || popupNavbar.style.display == "") {
    popupNavbar.style.display = "flex";
  } else popupNavbar.style.display = "none";
}

exitButton.addEventListener("click", popup);
hamburgerButton.addEventListener("click", popup);
