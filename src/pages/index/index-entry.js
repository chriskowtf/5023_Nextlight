require("./../../global/js/global-entry")

import "./index.scss"
import gsap from "gsap"

/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
// let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/animation_Nextlight.svg")
// console.log(svgContent);

// let counterArr = [
//     "#light1",
//     "#light2",
//     "#light3",
//     "#light4",
//     "#light5",
// ]

// document.querySelectorAll(counterArr).forEach(function (elem) {
//     let tempLength = (elem.getTotalLength() + 1).toFixed(0)
//     gsap.set(elem, { strokeDasharray: tempLength, strokeDashoffset: tempLength })
// })

gsap.to(".animation_nextlight svg", { opacity: 1 })
gsap.set("#legL1", { transformOrigin: "50% 50%" })
gsap.set("#legL2", { transformOrigin: "50% 50%" })
gsap.set("#legL3", { transformOrigin: "50% 50%" })
gsap.set("#legR1", { transformOrigin: "50% 50%" })
gsap.set("#legR2", { transformOrigin: "50% 50%" })
gsap.set("#legR3", { transformOrigin: "50% 50%" })
gsap.set("#handL1", { transformOrigin: "50% 50%" })
gsap.set("#handL2", { transformOrigin: "50% 50%" })
gsap.set("#handR1", { transformOrigin: "50% 50%" })
gsap.set("#handR2", { transformOrigin: "50% 50%" })
gsap.set("#circle1", { transformOrigin: "50% 50%" })
gsap.set("#circle2", { transformOrigin: "50% 50%" })
gsap.set("#head", { transformOrigin: "50% 50%" })
gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: 'sine.inOut' } })
    .to("#handL1", { repeat: -1, yoyo: true, rotation: 30 }, "<")
    .to("#handL1", { repeat: -1, yoyo: true, rotation: -30 })
    .to("#handL2", { repeat: -1, yoyo: true, rotation: -30 }, "<")
gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: 'sine.inOut' } })
    .to("#handR1", { repeat: -1, yoyo: true, rotation: -30 }, "<")
    .to("#handR1", { repeat: -1, yoyo: true, rotation: 30 })
    .to("#handR2", { repeat: -1, yoyo: true, rotation: 30 }, "<")
gsap.set("#legR2", { rotation: 35 }, "<")
gsap.set("#light1", { opacity: 0.2 }, "<")
gsap.set("#light2", { opacity: 0.2 }, "<")
gsap.set("#light3", { opacity: 0.2 }, "<")
gsap.set("#light4", { opacity: 0.2 }, "<")
gsap.set("#light5", { opacity: 0.2 }, "<")
gsap.set("#wifi1 >*", { opacity: 0 }, "<")
gsap.set("#wifi2 >*", { opacity: 0 }, "<")
gsap.set("#wifi3 >*", { opacity: 0 }, "<")
gsap.set("#wifi4 >*", { opacity: 0 }, "<")
gsap.set("#wifi5 >*", { opacity: 0 }, "<")
gsap.set("#carL", { x: -450 }, "<")
gsap.set("#carR", { x: 800 }, "<")
// gsap.to("#man", { y: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
gsap.to("#circle1", { scale: 0.5, duration: 0.5, x: -60, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
gsap.to("#circle2", { scale: 0.5, duration: 0.5, x: 60, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
gsap.to("#head", { rotation: 10, duration: 0.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }, "<")
gsap.set("#man", { x: -600, duration: 10, ease: 'none' })
gsap.timeline({ repeat: -1, defaults: { duration: 0.5, ease: "none" } })
    .to("#legL1", { rotation: 35 }, "<")
    .to("#legL2", { rotation: 35 }, "<")
    .to("#legR1", { rotation: -35 }, "<")
    .to("#legR2", { rotation: 0 }, "<")
    .to("#legL1", { rotation: 0 })
    .to("#legL2", { rotation: 0 }, "<")
    .to("#legR1", { rotation: 0 }, "<")
    .to("#legR2", { rotation: 35 }, "<")

gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
    .to("#wifi1 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, ">+0.5")
    .to("#carL", { x: 2000, duration: 5 })
    .to("#wifi2 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<-0.5")
    .to("#wifi3 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
    .to("#wifi4 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
    .to("#wifi5 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
    // .to("#light1", { duration: 0.5, strokeDashoffset: 0 }, "<+0.2")
    // .to("#light2", { duration: 0.5, strokeDashoffset: 0 }, "<+0.2")
    // .to("#light3", { duration: 0.5, strokeDashoffset: 0 }, "<+0.2")
    // .to("#light4", { duration: 0.5, strokeDashoffset: 0 }, "<+0.2")
    // .to("#light5", { duration: 0.5, strokeDashoffset: 0 }, "<+0.2")
    .to("#light1", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light2", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light3", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light4", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light5", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#carR", { x: -1950, duration: 6 }, "<-0.4")
    .to("#light5", { duration: 0.5, opacity: 0.2 }, "<+3.5")
    .to("#light4", { duration: 0.5, opacity: 0.2 }, "<+0.2")
    .to("#light3", { duration: 0.5, opacity: 0.2 }, "<+0.2")
    .to("#light2", { duration: 0.5, opacity: 0.2 }, "<+0.2")
    .to("#light1", { duration: 0.5, opacity: 0.2 }, "<+0.2")
    .to("#wifi5 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<-0.5")
    .to("#wifi4 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<+0.2")
    .to("#wifi3 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<+0.2")
    .to("#wifi2 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<+0.2")
    .to("#man", { x: 1600, duration: 20, ease: 'none' }, "<+2.5")
    .to("#wifi2 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<-0.5")
    .to("#wifi3 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
    .to("#wifi4 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
    .to("#wifi5 >*", { opacity: 1, stagger: { each: 0.1, from: "start" } }, "<+0.2")
    ///

    .to("#light1", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light2", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light3", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light4", { duration: 0.5, opacity: 1 }, "<+0.2")
    .to("#light5", { duration: 0.5, opacity: 1 }, "<+0.2")


    .to("#light1", { duration: 0.5, opacity: 0.2 }, ">+2.5")
    .to("#wifi1 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
    .to("#light2", { duration: 0.5, opacity: 0.2 }, ">+3")
    .to("#wifi2 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
    .to("#light3", { duration: 0.5, opacity: 0.2 }, "<+3")
    .to("#wifi3 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
    .to("#light4", { duration: 0.5, opacity: 0.2 }, "<+3.5")
    .to("#wifi4 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")
    .to("#light5", { duration: 0.5, opacity: 0.2 }, "<+3.5")
    .to("#wifi5 >*", { opacity: 0, stagger: { each: 0.1, from: "end" } }, "<")





