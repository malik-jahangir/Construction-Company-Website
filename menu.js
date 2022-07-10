//////////////menu
const navBtn = document.querySelector(".hamburger-menu");
const navMob = document.querySelector(".nav-mobile");
const navOpenClose = function () {
  // navMob.style.display='flex';

  navBtn.classList.toggle("hamburger-menu-active");
  navMob.classList.toggle("nav-active");
};


navBtn.addEventListener("click", () => {
  
navOpenClose();
});