function scaleSlides() {
  const scaleFactor = Math.min(1, window.innerWidth / 1920);
  document.querySelectorAll(".slide").forEach((slide) => {
    slide.style.transform = `scale(${scaleFactor})`;
  });
  document.querySelectorAll(".slide-wrapper").forEach((wrapper) => {
    wrapper.style.width = 1920 * scaleFactor + "px";
    wrapper.style.height = 1080 * scaleFactor + "px";
  });
}

window.addEventListener("load", scaleSlides);
window.addEventListener("resize", scaleSlides);
