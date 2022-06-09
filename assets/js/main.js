const btnMenu = document.querySelector(".header__menu");
const listMenu = document.querySelector(".menu_tab-list");

btnMenu.addEventListener("click", () => {
  listMenu.classList.toggle("active");
});
