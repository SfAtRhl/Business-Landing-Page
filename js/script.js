document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

  var width = $(window).width();
  
  
window.onscroll = function () {
  if (width >= 1000) {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      $("#header").css("background", "#fff");
      $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
      $("#header .md\\:flex a").removeClass("hover:text-white");
      $("#header .md\\:flex a").addClass("hover:text-green-500");

    } else {
      $("#header").css("background", "transparent");
      $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
      $("#header .md\\:flex a").removeClass("hover:text-green-500");
      $("#header .md\\:flex a").addClass("hover:text-white");
    }
  }
};

























  
  const elements = document.querySelectorAll("[id='elem1']");


  Array.from(elements).forEach((element) => {
  const img = element.querySelector("img");

  const secondDiv = element.querySelector("#VD1");
  const firstDiv = element.querySelector("#V1");

  element.addEventListener("mouseover", () => {
    img.classList.add("md:opacity-50");
    firstDiv.classList.remove("md:bottom-4");
    firstDiv.classList.add("md:bottom-16");
    firstDiv.classList.remove("text-3xl");
    firstDiv.classList.add("text-2xl");
    firstDiv.classList.remove("md:text-white");
    firstDiv.classList.add("md:text-black");
    firstDiv.classList.remove("md:font-outline-2");
    secondDiv.classList.remove("md:hidden");
  });

    element.addEventListener("mouseout", () => {
    firstDiv.classList.add("text-3xl");
    firstDiv.classList.remove("text-2xl");
    img.classList.remove("md:opacity-50");
    firstDiv.classList.add("md:bottom-4");
    firstDiv.classList.remove("md:bottom-16");
    firstDiv.classList.remove("md:text-black");
    firstDiv.classList.add("md:text-white");
    firstDiv.classList.add("md:font-outline-2");
    secondDiv.classList.add("md:hidden");
  });
});

function closemagnify() {
  $("#magnify").addClass("animated fadeOut");
  setTimeout(function () {
    $("#magnify").css("display", "none");
    $("#magnify").removeClass("animated fadeOut");
    $("#img_here").css("background", `url('') center center`);
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1650);
});
