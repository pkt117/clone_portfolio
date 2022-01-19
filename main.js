"use strict";
// work에서의 button 이벤트

const btn_click = document.querySelectorAll(".category__btn");

btn_click.forEach(
  (element) => element.addEventListener("click", (event) => handleClick(event))
  // (event) => handleClick(event)를 handleClick로 줄여서가능
);

function handleClick(event) {
  if (event.target.classList[1] === "active") {
    event.target.classList.remove("active");
  } else {
    btn_click.forEach((element) => element.classList.remove("active"));
    event.target.classList.add("active");
  }
}

// navbar 메뉴바 이벤트

const nav_menu = document.querySelector(".navbar__toggle-btn");

nav_menu.addEventListener("click", () => {
  document.querySelector(".navbar__menu").classList.toggle("open");
});

// navbar 스크롤시 투명한색 => 진한색
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// navbar menu 클릭시 border 변화와 menu에 맞는 화면이동

const navbar_menu = document.querySelector(".navbar__menu");
const navbar_menu_item = document.querySelectorAll(".navbar__menu__item");

navbar_menu.addEventListener("click", (event) => {
  const scrollTo = `${event.target.dataset.id}`;
  if (scrollTo == "null") return;
  scrollIntoView(scrollTo);

  if (event.target.classList[1] === "active") {
    event.target.classList.remove("active");
  } else {
    navbar_menu_item.forEach((element) => element.classList.remove("active"));

    event.target.classList.add("active");
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

document
  .querySelector(".home__btn")
  .addEventListener("click", () => scrollIntoView("#contact"));
