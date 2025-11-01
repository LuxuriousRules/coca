import { gsap } from "gsap"; 



gsap.to(".nav__title span", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.4 // задержка между буквами
});



const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
let isOpen = false;

burger.addEventListener("click", () => {
  if (!isOpen) {
    // бургер → крестик
    gsap.to(".nav__burger__span:nth-child(1)", { rotate: 45, y: 8, duration: 0.3 });
    gsap.to(".nav__burger__span:nth-child(2)", { opacity: 0, duration: 0.3 });
    gsap.to(".nav__burger__span:nth-child(3)", { rotate: -45, y: -8, duration: 0.3 });

    // меню выезжает справа
    gsap.to(menu, { right: 0, duration: 0.5, ease: "power3.out" });
  } else {
    // крестик → бургер
    gsap.to(".nav__burger__span:nth-child(1)", { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(".nav__burger__span:nth-child(2)", { opacity: 1, duration: 0.3 });
    gsap.to(".nav__burger__span:nth-child(3)", { rotate: 0, y: 0, duration: 0.3 });

    // меню уезжает обратно
    gsap.to(menu, { right: "-100%", duration: 0.5, ease: "power3.in" });
  }
  isOpen = !isOpen;
});




