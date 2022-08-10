const openNav = () => {
  let nav = document.querySelector(".navMobile");
  nav.classList.toggle("translate-y-full");
};
const closeNav = () => {
  let nav = document.querySelector(".navMobile");
  nav.classList.toggle("translate-y-full");
};

let navLink = document.querySelectorAll(".menu");
navLink.forEach((nav) => {
  nav.addEventListener("click", function () {
    navLink.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    console.log(this);
  });
});
