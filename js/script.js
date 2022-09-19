//Getting elements

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const menuLink = document.querySelectorAll(".menu-link");
const subMenu = document.querySelector(".sub-menu");

//Activating menu on click

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

//

window.addEventListener("load", (e) => {
  const innerWidth = e.currentTarget.innerWidth;

  if (innerWidth <= 768) {
    //Activating submenu on click

    menuLink[2].addEventListener("click", () => {
      subMenu.classList.toggle("active");
    });

    //Rotating arrows on click

    menuLink.forEach((link) => {
      link.addEventListener("click", (e) => {
        const nextSvg = e.target.nextElementSibling;
        nextSvg.classList.toggle("rotate");
      });
    });
  } else {
    return;
  }
});
