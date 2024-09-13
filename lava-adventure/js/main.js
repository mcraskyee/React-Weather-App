//dom
const navLogo = document.getElementById("nav-logo");
const navHome = document.getElementById("nav-home");
const navOverview = document.getElementById("nav-overview");
const navPhotos = document.getElementById("nav-photos");
const navExperience = document.getElementById("nav-experience");
const navOffer = document.getElementById("nav-offer");
const navProducts = document.getElementById("nav-products");
const home = document.getElementById("home-video");
const overview = document.getElementById("overview-top");
const photos = document.getElementById("photos");
const experience = document.getElementById("experience");
const offer = document.getElementById("offer-cooperation");
const products = document.getElementById("products-favorite");

//prevent default action from scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, null, `#${targetId}`);
  });
});

//click and scroll
function scrollToHome() {
  home.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, null, "#home");
}

function scrollToOverview() {
  overview.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, null, "#overview");
}
function scrollToPhotos() {
  photos.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, null, "#photos");
}
function scrollToExperience() {
  experience.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, null, "#experience");
}
function scrollToOffer() {
  offer.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, null, "#offer");
}
function scrollToProducts() {
  products.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, null, "#products");
}

//booking
function bookingDate() {
  alert("Booking successfully!");
}

//subscribe
function subscribeComment() {
  const subscribe = document.getElementById("subscribe").value;
  alert(`Your comment: "${subscribe}" is submitted.`);
}

//responsive
document.addEventListener("DOMContentLoaded", function () {
  updateNavToggle();

  // 在窗口大小变化时调用 updateNavToggle
  window.addEventListener("resize", updateNavToggle);
});

function updateNavToggle() {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");
  const navToggleContent = document.getElementById("nav-toggle-content");
  const navToggleIcon = document.getElementById("nav-toggle-icon");

  if (window.innerWidth < 539) {
    navToggle.style.display = "block";
    handleNewList(navToggleContent, navList, navToggleIcon);
  } else {
    navToggle.style.display = "none";
    // 将 navList 移回原来的位置
    const originalNavContainer = document.querySelector(".nav-menu");
    if (navToggleContent.contains(navList)) {
      originalNavContainer.appendChild(navList);
    }
  }
}

function handleNewList(navToggleContent, navList, navToggleIcon) {
  if (!navToggleContent.contains(navList)) {
    navToggleContent.appendChild(navList);
  }
  // 确保每次都添加事件监听器
  navToggleIcon.removeEventListener("click", toggleNavContent);
  navToggleIcon.addEventListener("click", toggleNavContent);
}

function toggleNavContent() {
  const navToggleContent = document.getElementById("nav-toggle-content");
  navToggleContent.classList.toggle("nav-toggle-content-hidden");
}
