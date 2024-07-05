const mainMenu = document.getElementById("header_main-menu");
const menuCotainer = document.getElementById("header_menu-itens");
const htmlMain = document.querySelector("html");

if (mainMenu) {
    mainMenu.onclick = function () {
        mainMenu.classList.toggle("menu-open");
        menuCotainer.classList.toggle("menu-open");
        htmlMain.classList.toggle("menu-open");
    };
};
