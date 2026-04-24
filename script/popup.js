document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    const popup = button.parentElement.nextElementSibling;
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 1500);
  });
});
