const hamburger = document.querySelector("#hamburger");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    header.classList.contains("open") ? header.classList.remove("open") : header.classList.add("open");
});