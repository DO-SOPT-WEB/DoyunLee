const contentList = document.querySelectorAll(".img_hover_wrapper");
const HIDDEN_CLASS = "hidden";
const BG_BRIGHTNESS = "bg_brightness";

contentList.forEach((content) => {
  const selectedImg = content.querySelector("img");
  const selectedEx = content.querySelector(".explanation");
  content.addEventListener("mouseover", function () {
    selectedEx.classList.remove("HIDDEN_CLASS");
    selectedImg.classList.add("BG_BRIGHTNESS");
  });
  content.addEventListener("mouseleave", function () {
    selectedImg.classList.remove("BG_BRIGHTNESS");
    selectedEx.classList.add("HIDDEN_CLASS");
  });
});
