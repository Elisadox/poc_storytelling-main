import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var timelineStarter = gsap.timeline({
  scrollTrigger: {
    trigger: ".starter",
    scrub: true,
    pin: true,
  },
});
timelineStarter.to(".starter-notif-one", {
  opacity: 1,
  left: "3%",
});

timelineStarter.to(".starter-notif-two", {
  opacity: 1,
  right: "1%",
});
timelineStarter.to(".starter-notif-three", {
  opacity: 1,
  left: "5%",
});
timelineStarter.to(".starter-notif-four", {
  opacity: 1,
  left: "30%",
});
timelineStarter.to(".starter-notif-five", {
  opacity: 1,
  right: "1%",
});
timelineStarter.to(".starter-notif-six", {
  opacity: 1,
  right: "24%",
});
var timelineStarter = gsap.timeline({
  scrollTrigger: {
    trigger: ".flash",
    scrub: true,
    pin: true,
  },
});
timelineStarter.to(".flash-img", {
  width: "80%",
});

gsap.to("#bulle-left-1", {
  opacity: 1,
  x: "25%",
  scrollTrigger: {
    trigger: ".bulle-1",
    start: "top 75%",
    end: "center center",
    scrub: 1,
  },
});

gsap.to("#bulle-right-2", {
  opacity: 1,
  x: "50%",
  scrollTrigger: {
    trigger: ".bulle-2",
    start: "top 85%",
    end: "center center",
    scrub: 1,
  },
});

gsap.to("#bulle-left-3", {
  opacity: 1,
  x: "25%",
  scrollTrigger: {
    trigger: ".bulle-3",
    start: "top 85%",
    end: "center center",
    scrub: 1,
  },
});
gsap.to("#bulle-right-4", {
  opacity: 1,
  x: "30%",
  scrollTrigger: {
    trigger: ".bulle-4",
    start: "top 95%",
    end: "center center",
    scrub: 1,
  },
});
gsap.to("#bulle-left-5", {
  opacity: 1,
  x: "20%",
  scrollTrigger: {
    trigger: ".bulle-5",
    start: "top 90%",
    end: "center center",
    scrub: 1,
  },
});
gsap.to(".storytelling-second-vessel", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".storytelling-second-vessel",
    start: "0% top",
    scrub: 1,
  },
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".storytelling-horizontal",
    start: "top top",
    end: "300%",
    scrub: true,
    pin: true,
  },
});

tl.to(".storytelling-animation", {
  xPercent: -50,
  ease: "none",
});
tl.to(
  ".storytelling-horizontal-voiture",
  {
    x: 550,
    y: -50,
    ease: "none",
  },
  0
);
