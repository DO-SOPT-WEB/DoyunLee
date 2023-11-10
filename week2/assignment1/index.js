const contentList = document.querySelectorAll(".img_hover_wrapper");

contentList.forEach((content) => {
  const selectedImg = content.querySelector("img");
  const selectedEx = content.querySelector(".explanation");
  content.addEventListener("mouseover", function () {
    selectedEx.classList.remove("hidden");
    selectedImg.classList.add("bg_brightness");
  });
  content.addEventListener("mouseleave", function () {
    selectedImg.classList.remove("bg_brightness");
    selectedEx.classList.add("hidden");
  });
});
