

const slider = document.querySelector(".slider");

let sectionIndex = 0;
document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    sectionIndex = ind;
    slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
  });
});

const searchbtn = document.querySelector(".opensrchbtn");
const closebtn = document.querySelector(".closebtn");
const searchBox = document.querySelector(".searchBox");
const navMenu = document.querySelector(".submenu");
var menuIcon = document.querySelector(".icon_conatiner");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("open");
});

window.addEventListener("scroll", scrollTop);
function scrollTop() {
  var scrollTops = document.querySelectorAll(".scroll");
  for (var i = 0; i < scrollTops.length; i++) {
    var windowHeigth = window.innerHeight;
    var scroller = scrollTops[i].getBoundingClientRect().top;
    var scrollPoint = 150;
    if (scroller < windowHeigth - scrollPoint) {
      scrollTops[i].classList.add("active");
    } else {
      scrollTops[i].classList.remove("active");
    }
  }
}


var swiper = new Swiper(".jsSlider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      touch : true,
    },
    pagination: {
      el: ".js-pagination",

    },
    breakpoints :{
           767 :{
            slidesPerView : 3,
        },
    }
  });
