function toggleMenu() {
  let screenWidth = window.innerWidth;
  let menu = document.querySelector("#menu");
  let navi = document.querySelector("nav");

  console.log("Current screen width: " + screenWidth);

  //BACKGROUND COLOR BASED ON SCREEN WIDTH
  let backgroundColor =
    screenWidth <= 480
      ? "rgba(0, 0, 0, 0.9)"
      : screenWidth <= 770
      ? "rgba(0, 0, 0, 0.9)"
      : "transparent";

  // TOGGLE MENU DISPLAY
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
    navi.style.backgroundColor = backgroundColor;
  } else {
    menu.style.display = "none";
    navi.style.backgroundColor = "transparent";
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}
