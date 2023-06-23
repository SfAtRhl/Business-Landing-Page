gsap.to("#child-scroll", {
    y:[-16, 1],
    opacity: 0.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 1
});

gsap.registerPlugin(ScrollTrigger);

const elements = [
     { id: 'LeftSide', animation: null },
    { id: 'RightSide', animation: null },
    { id: 'QuiSomme', animation: null },
    { id: 'NHistoire', animation: null },
 
    { id: 'NProduit', animation: null },
    { id: 'NValeur', animation: null },
    { id: 'LastSection', animation: null },
    { id: 'Footer', animation: null },
    { id: '1', animation: null },
    { id: '2', animation: null },
    { id: '3', animation: null },
    { id: '4', animation: null },
    { id: '5', animation: null },
    { id: '6', animation: null },
    { id: '7', animation: null },
    { id: 'ValeurContent', animation: null },
    { id: 'ProduitsContent', animation: null },
];
const ShakingElements = [
    { id: 'left1', animation: null },
  { id: 'left2', animation: null },
      { id: 'right1', animation: null },
    { id: 'right2', animation: null },
 
];
const RightElements = [
  
    { id: 'sommeImages', animation: null },

];
const LeftElements = [
  { id: 'sommeText', animation: null },

  

];
var FinalList = [];


function handleScroll() {
  FinalList.forEach((element) => {
    const el = document.getElementById(element.id);
      if (isInViewport(el)) {
          element.animation.play(); 
      }
  });
}



function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var width = $(window).width();


ShakingElements.forEach((element) => {
  const el = document.getElementById(element.id);
  element.animation = gsap.from(el, {
  y:[-12, 1],
    opacity: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 1,
    paused: true 
  });
    FinalList.push(element);
});
if (width >= 768) {
  
elements.forEach((element) => {
  const el = document.getElementById(element.id);
  element.animation = gsap.from(el, {
    opacity: 0,
    ease:'bounce',
    duration: 2,
    paused: true 
  });
    FinalList.push(element)
});
RightElements.forEach((element) => {
  const el = document.getElementById(element.id);
  element.animation = gsap.from(el, {
   x:"-100",
   opacity:0,
    duration: 2.5,
  });
    FinalList.push(element);
});
LeftElements.forEach((element) => {
  const el = document.getElementById(element.id);
  element.animation = gsap.from(el, {
   x:"100",
   opacity:0,
    duration: 2.2,
  });
    FinalList.push(element);
});

}

FinalList.forEach((element) => {
    const el = document.getElementById(element.id);
    ScrollTrigger.create({
        trigger: el,
        onEnter: () => element.animation.play(),
        start: "top left", 
        end: "bottom left", 
        
    });
});


window.addEventListener('scroll', handleScroll);

