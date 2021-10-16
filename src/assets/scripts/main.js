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
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  window.addEventListener("load", function () {
    let slidersContainer = document.querySelector(".sliders-container");
    let slide1 = document.querySelector(".slide-1");
    let slide2 = document.querySelector(".slide-2");
    let slide3 = document.querySelector(".slide-3");

    slidersContainer.style.height = `${
      slide1.clientHeight + slide2.clientHeight + slide3.clientHeight
    }px`;
  });
  window.addEventListener("scroll", onScroll);

  function onScroll() {
    let slide1 = document.querySelector(".slide-1");
    let slide2 = document.querySelector(".slide-2");
    let slide3 = document.querySelector(".slide-3");
    let sliderBar = document.querySelector(".slider-bar .bar");

    let boundingRectSlide1 = slide1.getBoundingClientRect();
    let boundingRectSlide2 = slide2.getBoundingClientRect();
    let slidersWrapper = document.querySelector(".sliders-wrapper");

    if (
      boundingRectSlide1.top <= 0 &&
      slidersWrapper.offsetTop > boundingRectSlide1.height / 2
    ) {
      slide1.classList.remove("is-active");
      slide2.classList.add("is-active");
      sliderBar.classList.replace('is-active-1', 'is-active-2');
      if (
        boundingRectSlide2.top <= 0 &&
        slidersWrapper.offsetTop >
          boundingRectSlide1.height + boundingRectSlide2.height / 2
      ) {
        slide2.classList.remove("is-active");
        slide3.classList.add("is-active");
        sliderBar.classList.replace('is-active-2', 'is-active-3');
      } else {
        slide3.classList.remove("is-active");
        slide2.classList.add("is-active");
        sliderBar.classList.replace('is-active-3', 'is-active-2');
      }
    } else {
      slide2.classList.remove("is-active");
      slide1.classList.add("is-active");
      sliderBar.classList.replace('is-active-2', 'is-active-1');
    }
  }
})();
