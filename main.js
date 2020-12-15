/**
 * This is the main.js file for my portfolio website. 
 * This is a project to fulfill the final site requirements 
 * for WEB 110 and WEB 114. It is a living portfolio that 
 * includes a section of research on media literacy.
 * @author: Matt Heapes
 * @version: December 2, 2020
 **/
"use strict";

console.log("Hey look, I logged something to the console");
console.log("Hey! Stop logging stuff to the console!!!");
console.log("NEVER" + "STOP" + "LOGGING!");

if (!false && true) {
    let myNumberyNum = Math.max(12, 42, 42, 64, 113);
    console.log(myNumberyNum);
}
let myPowNum = (Math.pow(6.48074069841, 2))
console.log(myPowNum)

let navBar = document.querySelector(".navBar");
let ham = document.querySelector(".burgerContainer");
// let menuButt = document.querySelector(".menuButt");


ham.addEventListener("click", toggleHamAndNav);
// menuButt.addEventListener("click", toggleMenuButt);
// menuButt.addEventListener("mouseover", menuButtFocusHandle);
// menuButt.addEventListener("mouseout", menuButtBlurHandle);
window.addEventListener("beforeunload", toggleButts);


/* function toggleMenuButt() {
    navBar.classList.toggle("showNav");
    menuButt.classList.toggle("menuButtClose");
} */

/* function toggleButts() {
    navBar.classList.add("navBar");
    menuButt.classList.add("menuButt");
    ham.classList.toggle("change");
} */

/* function menuButtFocusHandle() { 
    menuButt.classList.add("menuButtHover");
} */

/* function menuButtBlurHandle() { 
    ham.classList.remove("menuButtHover");
} */

function toggleHamAndNav() { 
    ham.classList.toggle("change");
    navBar.classList.toggle("showNav");
}


