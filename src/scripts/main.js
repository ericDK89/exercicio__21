document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;
  const headerTitle = document.querySelector(".header__title");
  const headerList = document.querySelector(".header__list");

  if (screenWidth <= 768) {
    headerTitle.classList.add("header__title--is-mobile");
    headerList.classList.add("header__list--is-mobile");
  } else {
    headerTitle.classList.remove("header__title--is-mobile");
    headerList.classList.remove("header__list--is-mobile");
  }
});
