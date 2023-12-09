let ATagNavbar = document.querySelectorAll("header>nav ul>li>a");
// Dark & Light Mode ***************
function toggleDarkMode() {
  if (numDark % 2) {
    // Dark Mode
    document.getElementsByTagName("body")[0].classList.add("bodyDark");
    document.getElementsByTagName("body")[0].classList.add("bodyDark");
    document.querySelector("header>nav").style.background = "#004646";
    document.querySelector("header>nav figcaption").style.color = "#fff";
    ATagNavbar.forEach((val) => {
      val.style.color = "#fff";
    });
    document.getElementById("counter").style.border = "1px solid #F9C06A";
    document.getElementById("counter").style.color = "#fff";
    AllH2.forEach((item) => {
      item.style.color = "#d3ad7f";
    });
    document.querySelector(".dark-light-Mode").style.background = "#f9c06a70";
    document.querySelector(".dark-light-Mode>span>i").style.color = "#fdb813";
    document.querySelector(".dark-light-Mode>span>i").className =
      "bi bi-brightness-high-fill";
    document.querySelector("#banner>.row>article>h2").style.color = "#d3ad7f";
    document.querySelector("#Subscribe>.row>.Subscribe-title>h2").style.color =
      "#d3ad7f";
    AllMenuArticle.forEach((item) => {
      item.style.background = "#FFEED8";
      item.style.color = "#603809";
      item.style.borderColor = "#FFF9F1";
    });
    document.querySelector("#mobile>span").style.color = '#fff'
  } else {
    // Light Mode
    document.getElementsByTagName("body")[0].classList.remove("bodyDark");
    document.getElementsByTagName("body")[0].classList.remove("bodyDark");
    document.querySelector("header>nav").style.background = "#fff";
    document.querySelector("header>nav figcaption").style.color = "#1E1E1E";
    ATagNavbar.forEach((val) => {
      val.style.color = "#1E1E1E";
    });
    document.getElementById("counter").style.background =
      "rgba(23, 23, 23, 0.062)";
    document.getElementById("counter").style.border = "none";
    document.getElementById("counter").style.color = "#F9C06A";
    AllH2.forEach((item) => {
      item.style.color = "#603809";
    });
    AllMenuArticle.forEach((item) => {
      item.style.background = "#FFF9F1";
      item.style.color = "#603809";
      item.style.borderColor = "rgba(249, 192, 106, 0.42)";
    });
    document.querySelector(".dark-light-Mode").style.background = "#F9C06A";
    document.querySelector(".dark-light-Mode>span>i").style.color = "#f5f3ce";
    document.querySelector(".dark-light-Mode>span>i").className =
      "bi bi-moon-fill";
    document.querySelector("#banner>.row>article>h2").style.color = "#fff";
    document.querySelector("#Subscribe>.row>.Subscribe-title>h2").style.color =
      "#fff";
    AllMenuArticle.forEach((item) => {
      item.style.background = "#FFF9F1";
    });
    document.querySelector("#mobile>span").style.color = '#1E1E1E'
  }
  localStorage.setItem("darkMode", numDark % 2 === 1 ? "true" : "false");
  numDark++;
}
function loadDarkMode() {
  const darkModeValue = localStorage.getItem("darkMode");
  numDark = darkModeValue === "true" ? 3 : 4;
  toggleDarkMode();
}
loadDarkMode();
if (document.getElementsByClassName("dark-light-Mode")[0]) {
  document
    .getElementsByClassName("dark-light-Mode")[0]
    .addEventListener("click", toggleDarkMode);
}
// Dark & Light Mode ***************
