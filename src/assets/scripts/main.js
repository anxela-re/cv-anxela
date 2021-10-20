/**
 * Import dependencies from node_modules
 * see commented examples below
 */
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  window.addEventListener("load", function () {
    let slidersContainer = document.querySelector(".sliders-container");
    let slide1 = document.querySelector(".slide-1");
    let slide2 = document.querySelector(".slide-2");
    let slide3 = document.querySelector(".slide-3");

    slidersContainer.style.height = `${
      slide1.clientHeight + slide2.clientHeight + slide3.clientHeight + slide3.clientHeight
    }px`;
  });

  window.addEventListener("scroll", onScroll);

  function onScroll() {
    checkPosition();
    slidersEffect();
  }
  function checkPosition() {
    document.querySelector(
      ".desk"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(0, -800)})`;

    document.querySelector(
      ".monitor"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(120, -400)})`;

    document.querySelector(
      ".plant"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(80, -500)})`;

    document.querySelector(
      ".notebook"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(50, -600)})`;

    document.querySelector(
      ".cup"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(150, -550)})`;
  }

  function calculateTransform(y1, y2, max) {
    let scrollDist = document.querySelector(".scroll-dist");
    let scrollDistV = scrollDist.getBoundingClientRect();
    let calc = y1 + (Math.abs(scrollDistV.top) * y2) / (scrollDistV.height / 2);
    return calc < 0 ? calc : 0;
  }
  function slidersEffect() {
    const limit0 = 25;
    const limit1 = 60;
    const limit2 = 80;
    let slidersContainer = document.querySelector(".sliders-container");
    let slide1 = document.querySelector(".slide-1");
    let slide2 = document.querySelector(".slide-2");
    let slide3 = document.querySelector(".slide-3");

    let sliderBar2 = document.querySelector(".slider-bar-2");
    let sliderBar3 = document.querySelector(".slider-bar-3");
    let sliderLink1 = document.querySelector(".slider-link-1");
    let sliderLink2 = document.querySelector(".slider-link-2");
    let slidersWrapper = document.querySelector(".sliders-wrapper");

    let percentage =
      ((slidersWrapper.offsetTop + slidersWrapper.offsetHeight) /
        slidersContainer.getBoundingClientRect().height) *
      100;

    slide2.classList.remove("is-active");
    slide3.classList.remove("is-active");
    sliderBar2.classList.remove("active");
    sliderBar3.classList.remove("active");

    let calculateGradient = (100 / (limit1 - limit0)) * (percentage - limit0);
    sliderLink1.style.background = `linear-gradient(to right, #7f93bb ${calculateGradient}%, transparent ${calculateGradient}%)`;

    if (percentage > limit1) {
      calculateGradient = (100 / (limit2 - limit1)) * (percentage - limit1);
      sliderLink2.style.background = `linear-gradient(to right, #7f93bb ${calculateGradient}%, transparent ${calculateGradient}%)`;
      
      slide1.classList.remove("is-active");
      slide3.classList.remove("is-active");
      slide2.classList.add("is-active");
      sliderBar2.classList.add("active");

      if (percentage > limit2) {
        slide2.classList.remove("is-active");
        slide1.classList.remove("is-active");
        slide3.classList.add("is-active");
        sliderBar3.classList.add("active");
      } else {
        slide3.classList.remove("is-active");
        slide1.classList.remove("is-active");
        slide2.classList.add("is-active");
        sliderBar3.classList.remove("active");
      }
    } else {
      slide2.classList.remove("is-active");
      slide3.classList.remove("is-active");
      slide1.classList.add("is-active");
      sliderBar2.classList.remove("active");
    }
  }
})();
