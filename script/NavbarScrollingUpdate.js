window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#ff9933";
  } else {
    nav.style.background = "transparent";
  }
});
