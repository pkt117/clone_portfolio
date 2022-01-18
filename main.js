document.querySelectorAll(".category__btn").forEach((element) =>
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  })
);
// 클릭시 다른 버튼은 불 active가 remove 되게 할것...
