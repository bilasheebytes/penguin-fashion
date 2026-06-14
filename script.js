const header = document.querySelector("header");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
