const menu = document.getElementById('header');
const scroll_btn = document.getElementById("scroll--top");

scroll_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  scroll_btn.classList.add("scroll--top--show");

  let scrollTop = window.pageYOffset;

  if (scrollTop === 0) {
    scroll_btn.classList.remove("scroll--top--show");
  }
});

window.addEventListener("scroll", function () {
  let scroll_Y = window.scrollY;
  if (scroll_Y >= 75) {
    menu.classList.add("sticky--header");
  } else {
    menu.classList.remove("sticky--header");
  }
});





/***  mobile menu ***/
const nav = document.querySelector('#menu');
const menuOpen = document.querySelector('#nav-open');
const menuClosed = menu.querySelector('#nav-close');
const menuOverlay = document.querySelector('.overlay');
const menuItem = menu.querySelector('.navbar__menulists');
const menuArrow = menu.querySelector('.menu-mobile-arrow'); 
let subMenu; 



menuItem.addEventListener('click', (e) => {
    if (e.target.closest('.navbar__haschild')) {
        const hasChildren = e.target.closest('.navbar__haschild');
        showSubMenu(hasChildren);
    }
}); 

menuOpen.addEventListener('click', () => {
    toggleMenu();
});
menuClosed.addEventListener('click', () => {
    hideSubMenu();
    toggleMenu();
});
menuOverlay.addEventListener('click', () => {
    hideSubMenu();
    toggleMenu();
});
function toggleMenu() {
    nav.classList.toggle('nav__right--open');
    menuOverlay.classList.toggle('active');
}
menuArrow.addEventListener('click', () => {
  hideSubMenu();
}); 

 function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector('.navbar__menu--child');
  subMenu.classList.add('active');
  subMenu.style.animation = 'slide-toLeft 0.5s ease forwards';
  const menuTitle = hasChildren.querySelector('.navbar__menulink i').parentNode.childNodes[0].textContent;
  menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
  menu.querySelector('.menu-mobile-header').classList.add('active'); 
}

function hideSubMenu() {
  subMenu.style.animation = "slide-toRight 0.5s ease forwards";
  setTimeout(() => {
      subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".menu-mobile-title").innerHTML = "";
  menu.querySelector(".menu-mobile-header").classList.remove("active");
} 


function checkMediaQueryAnimation() {
    // Check if the media query is true
    if (window.innerWidth > 1022) {
      subMenu.style.animation = "none";
    }
}
window.addEventListener('resize', checkMediaQueryAnimation);