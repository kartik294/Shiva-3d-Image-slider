document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slider span");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.transform = `rotateY(${index * 45}deg) translateZ(400px)`;
      slide.style.opacity = "1";
    });

    slides[currentIndex].style.transform = `rotateY(0deg) translateZ(500px)`;
    slides[currentIndex].style.opacity = "1";
    slider.style.transform = `rotateY(${currentIndex * -45}deg)`;
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  document.getElementById("next").addEventListener("click", goNext);
  document.getElementById("prev").addEventListener("click", goPrev);
  document.getElementById("reset").addEventListener("click", () => {
    currentIndex = 0;
    updateSlider();
  });

  updateSlider();
});
