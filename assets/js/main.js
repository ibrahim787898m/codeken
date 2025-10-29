/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
/*
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
*/

/* Adding active-link in nav_links */
let nav_link1 = document.querySelector(".nav__link1");
let nav_link2 = document.querySelector(".nav__link2");
let nav_link3 = document.querySelector(".nav__link3");
let nav_link4 = document.querySelector(".nav__link4");
let nav_link5 = document.querySelector(".nav__link5");

nav_link1.addEventListener("click", function () {
  nav_link1.classList.add("active-link");
  nav_link2.classList.remove("active-link");
  nav_link3.classList.remove("active-link");
  nav_link4.classList.remove("active-link");
  nav_link5.classList.remove("active-link");
});

nav_link2.addEventListener("click", function () {
  nav_link1.classList.remove("active-link");
  nav_link2.classList.add("active-link");
  nav_link3.classList.remove("active-link");
  nav_link4.classList.remove("active-link");
  nav_link5.classList.remove("active-link");
});

nav_link3.addEventListener("click", function () {
  nav_link1.classList.remove("active-link");
  nav_link2.classList.remove("active-link");
  nav_link3.classList.add("active-link");
  nav_link4.classList.remove("active-link");
  nav_link5.classList.remove("active-link");
});

nav_link4.addEventListener("click", function () {
  nav_link1.classList.remove("active-link");
  nav_link2.classList.remove("active-link");
  nav_link3.classList.remove("active-link");
  nav_link4.classList.add("active-link");
  nav_link5.classList.remove("active-link");
});

nav_link5.addEventListener("click", function () {
  nav_link1.classList.remove("active-link");
  nav_link2.classList.remove("active-link");
  nav_link3.classList.remove("active-link");
  nav_link4.classList.remove("active-link");
  nav_link5.classList.add("active-link");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
