let btn = document.querySelector(".menu-toggle");
btn.onclick = toggleMenu;

function toggleMenu() {
  let menu = document.querySelector("#main-menu");
  menu.classList.toggle("show-mobile");
}