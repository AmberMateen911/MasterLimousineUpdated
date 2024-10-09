// ---- HIDE NAVIGATION ABR
function toggleMenu() {
    let screenWidth = window.innerWidth;
    let menu = document.querySelector("#menu");
  
    if (screenWidth <= 425) {
      if (menu) {
        if (menu.style.display === "none" || menu.style.display === "") {
          menu.style.display = "flex"; // ----SHOW THE MENU
        } else {
         menu.style.display = "none"; // ----HIDE THE MENU
        }
      } else {
        console.error("Header element not found");
      }
    }
  }
