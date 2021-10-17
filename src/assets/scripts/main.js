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
    checkPosition();
    slidersEffect();
  }
  function checkPosition() {
    // document.querySelector(
    //   ".sky"
    // ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(0, -200)})`;
    document.querySelector(
      ".desk"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(0, -800)})`;

    document.querySelector(
      ".monitor"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(20, -700)})`;
    document.querySelector(
      ".plant"
    ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(50, -600)})`;
    // document.querySelector(
    //   ".cloud3"
    // ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(-50, -650)})`;
    // document.querySelector(
    //   ".monitor"
    // ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(-10, -100)})`;
    // document.querySelector(
    //   ".mountMg"
    // ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(-30, -250)})`;
    // document.querySelector(
    //   ".mountFg"
    // ).style.transform = `matrix(1,0,0,1,0,${calculateTransform(-50, -600)})`;
  }

  function calculateTransform(y1, y2, max) {
    let scrollDist = document.querySelector(".scroll-dist");
    let scrollDistV = scrollDist.getBoundingClientRect();
    let calc = y1 + (Math.abs(scrollDistV.top) * y2) / (scrollDistV.height / 2);
    return calc < 0 ?  calc : 0;
  }
  function slidersEffect() {
    let slidersContainer = document.querySelector(".sliders-container");
    let slide1 = document.querySelector(".slide-1");
    let slide2 = document.querySelector(".slide-2");
    let slide3 = document.querySelector(".slide-3");
    let sliderBar = document.querySelector(".slider-bar .bar");
    let slidersWrapper = document.querySelector(".sliders-wrapper");

    let percentage =
      ((slidersWrapper.offsetTop + slidersWrapper.offsetHeight) /
        slidersContainer.getBoundingClientRect().height) *
      100;

    sliderBar.style.background = `linear-gradient(to right, black ${percentage}%, transparent ${percentage}%)`;
    if (percentage > 40) {
      slide1.classList.remove("is-active");
      slide2.classList.add("is-active");
      sliderBar.classList.replace("is-active-1", "is-active-2");
      if (percentage > 70) {
        slide2.classList.remove("is-active");
        slide3.classList.add("is-active");
        sliderBar.classList.replace("is-active-2", "is-active-3");
      } else {
        slide3.classList.remove("is-active");
        slide2.classList.add("is-active");
        sliderBar.classList.replace("is-active-3", "is-active-2");
      }
    } else {
      slide2.classList.remove("is-active");
      slide1.classList.add("is-active");
      sliderBar.classList.replace("is-active-2", "is-active-1");
    }
  }
})();
