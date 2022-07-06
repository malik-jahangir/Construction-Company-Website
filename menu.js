//////////////menu
const navBtn = document.querySelector(".hamburger-menu");
const navMob = document.querySelector(".nav-mobile");
const navOpenClose = function () {
  navBtn.classList.toggle("hamburger-menu-active");
  navMob.classList.toggle("nav-active");
};


navMob.style.display='flex';
navBtn.addEventListener("click", () => {
  
navOpenClose();
});