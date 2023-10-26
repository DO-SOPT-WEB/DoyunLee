const topBtn = document.getElementById("top_btn");
const topElm = document.getElementById("page_top");
const bottomElm = document.querySelector("footer");

document.addEventListener("scroll", () => {
  const scrollY = document.documentElement.scrollTop; //
  const heightDiff =
    bottomElm.getBoundingClientRect().bottom -
    topElm.getBoundingClientRect().height;

  const opacity = scrollY / heightDiff;
  topBtn.style.opacity = opacity;
});
