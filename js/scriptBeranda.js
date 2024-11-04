const barMenu = document.querySelector(".menu_bar");
const naviMenu = document.querySelector(".menu_navigation");

barMenu.addEventListener("click", function () {
    naviMenu.classList.toggle("menu-active");
});