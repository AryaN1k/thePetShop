// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })
// function raf(0.5ms) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

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
// ?----------------------Sing up-------------------------------------------
  const handleSignUp = async () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    try {
      console.log(name)
      console.log(email)
      console.log(password)

      const response = await fetch("https://dogwebiste.onrender.com/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        if (response.status === 409) {
          // HTTP 409 indicates that the user already exists
          alert("This Email already Exists");
        } else {
          throw new Error("An error occurred during signup. Please try again.");
        }
      } else {
        alert("Sign Up Successful. Now You can Login");
        console.log(response)
        console.log(await response.json());
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("passwordInput").value = "";
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup. Please try again.");
    }
  };
  
  // Function to handle sign in
  const handleLogin = async () => {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
  
    try {
      const response = await fetch("https://dogwebiste.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          // HTTP 401 indicates that email and password don't match
          alert("Email and Password not Matched");
        } else {
          throw new Error("An error occurred during login. Please try again.");
        }
      } else {
        const responseData = await response.json();
        Cookies.set("token", responseData.token);
        alert("Login Successful");
        console.log(responseData);
        document.getElementById("emailInput").value = "";
        document.getElementById("passwordInput").value = "";
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login. Please try again.");
    }
  };
  
  // Add event listeners to buttons
  document.getElementById("signupBtn").addEventListener("click", handleSignUp);
  document.getElementById("signinBtn").addEventListener("click", handleLogin);