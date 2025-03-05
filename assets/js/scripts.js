const backgrounds = {
  // slide1: "url('assets/img-slides/slide1.png')",
  slide2: "url('assets/img-slides/slide2.png')",
  slide3: "url('assets/img-slides/slide3.png')",
  slide4: "url('assets/img-slides/slide4.png')",
};

function setBackgrounds (enabled) {
  for (const slideId in backgrounds) {
    const slideElement = document.getElementById (slideId);
    slideElement.style.backgroundImage = enabled
      ? backgrounds[slideId]
      : 'none';
  }
}

let fondosActivos = true;
setBackgrounds (fondosActivos);

function scaleSlides () {
  const scaleFactor = Math.min (1, window.innerWidth / 1920);
  document.querySelectorAll ('.slide').forEach (slide => {
    slide.style.transform = `scale(${scaleFactor})`;
  });
  document.querySelectorAll ('.slide-wrapper').forEach (wrapper => {
    wrapper.style.width = 1920 * scaleFactor + 'px';
    wrapper.style.height = 1080 * scaleFactor + 'px';
  });
}

window.addEventListener ('load', scaleSlides);
window.addEventListener ('resize', scaleSlides);
