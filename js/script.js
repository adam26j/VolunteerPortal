const APPSCRIPT_URL = "https://script.google.com/macros/s/AKfycbznQqGQpJRRePQ5osbXoaB6lwql5O8FjEjO1Fkpwulmo5-3BBcbrL0-ztoqgTfliSXybQ/exec";

document.getElementById("loginBtn").onclick = () => {

window.open(APPSCRIPT_URL,"_blank");

}

document.getElementById("heroLogin").onclick = () => {

window.open(APPSCRIPT_URL,"_blank");

}
document.getElementById("ctaLogin").onclick = () => {

window.open(APPSCRIPT_URL,"_blank");

};
// Simple counter animation

const counters = document.querySelectorAll(".impact-card h3");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

counters.forEach(counter=>{

counter.style.opacity="0";

counter.style.transform="translateY(30px)";

counter.style.transition="all .8s ease";

observer.observe(counter);

});
window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if (window.scrollY > 50) {

header.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";

} else {

header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

}

});
