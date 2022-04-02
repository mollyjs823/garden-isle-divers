const menu = document.querySelector(".hamburger-content");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector("#hamburger");
const close = document.getElementById("close-icon");
const open = document.getElementById("open-icon");
const desktopNav = document.querySelector("#nav-desktop");

var faqs = document.getElementsByClassName("faq-question");
var i;

//TOGGLE HAMBURGER MENU, checks if open or not already
function toggle() {
  if (menu.classList.contains("show-hamburger")) {
    //If already open
    menu.classList.remove("show-hamburger");
    close.style.display = "none";
    open.style.display = "block";
    desktopNavToggle();
  } else {
    //If closed
    menu.classList.add("show-hamburger");
    close.style.display = "block";
    open.style.display = "none";
    desktopNavToggle();
  }
}

//TOGGLE INLINE 3-LINK MENU ON DESKTOP SIZES, checks screen width
function desktopNavToggle() {
  if (window.innerWidth >= 1200 && !menu.classList.contains("show-hamburger")) {
    desktopNav.style.display = "flex";
  } else {
    desktopNav.style.display = "none";
  }
}

//Close menu when click on menu item NOT NEEDED WHEN CAN NAVIGATE TO ANOTHER PAGE
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggle);
});

//Listen for clicks and screen resizing
window.addEventListener("resize", function () {
  setTimeout(desktopNavToggle(), 1000);
});
hamburger.addEventListener("click", toggle);

//FAQs Accordion
for (i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function () {
    this.classList.toggle("open");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.padding = "0";
      answer.style.maxHeight = null;
      answer.style.borderBottom = "none";
    } else {
      answer.style.padding = ".5em";
      answer.style.maxHeight = answer.scrollHeight + "em";
      answer.style.borderBottom = "5px solid var(--lt-teal)";
    }
  });
}
