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
