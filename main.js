"use strict";

// navbar 버튼 클릭 이벤트 -> 메뉴 아이템 클릭시 border 와 background 변경
// navbar 버튼 클릭시 해당 위치로 스크롤 이동
const navbar_menu = document.querySelector(".navbar__menu");
const menu_items = document.querySelectorAll(".navbar__menu__item");
navbar_menu.addEventListener("click", (event) => {
  if (event.target.dataset.id == null) {
    return;
  }
  navbar_menu.classList.remove("open");
  scrollIntoView(event.target.dataset.id);
  const active = document.querySelector(".navbar__menu__item.active");
  active.classList.remove("active");
  event.target.classList.add("active");
});

const contact_btn = document.querySelector(".home__btn");
contact_btn.addEventListener("click", () => {
  scrollIntoView("#contact");
});
// navbar 스크롤시 투명색 => 진한색 && toggle 버튼 이벤트
const navbar = document.querySelector("#navbar");
const navbar_height = navbar.getBoundingClientRect().height;
const toggle_btn = document.querySelector(".navbar__toggle-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > navbar_height) {
    navbar.classList.add("navbar--dark");
    toggle_btn.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
    toggle_btn.classList.remove("navbar--dark");
  }
});
toggle_btn.addEventListener("click", () => {
  navbar_menu.classList.toggle("open");
});
// 스크롤하면 할수록 home의 text 들이 점점 투명해지는 이벤트
const home_container = document.querySelector(".home__container");
const homeHeight = home_container.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY <= homeHeight) {
    home_container.style.opacity = 1 - window.scrollY / homeHeight;
  }
});
// work에서의 button 클릭 이벤트 && filter에 맞는 데이터 출력
const category_btn = document.querySelector(".work__categories");
const btn_items = document.querySelectorAll(".category__btn");
const btn_datas = document.querySelectorAll(".project");
const project_container = document.querySelector(".work__projects");
category_btn.addEventListener("click", (event) => {
  const category =
    event.target.dataset.category || event.target.parentNode.dataset.category;

  if (category == null) return;
  //  버튼 클릭 부분
  const active_btn = document.querySelector(".category__btn.active");
  active_btn.classList.remove("active");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("active");
  // filter에 맞는 데이터 출력 및 애니메이션
  project_container.classList.add("out_ani");
  setTimeout(() => {
    btn_datas.forEach((element) => {
      if (category === "all" || element.dataset.category === category) {
        element.classList.remove("invisible");
      } else {
        element.classList.add("invisible");
      }
    });
    project_container.classList.remove("out_ani");
  }, 200);
});

//  top_btn 클릭시 스크롤 탑으로 !
// 맨위에서는 보이지 않고 어느정도 스크롤 됐을경우 보이도록
const top_btn = document.querySelector("#top_btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    top_btn.classList.add("visible");
  } else {
    top_btn.classList.remove("visible");
  }
});
top_btn.addEventListener("click", () => scrollIntoView("#home"));

// 유틸리티 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
