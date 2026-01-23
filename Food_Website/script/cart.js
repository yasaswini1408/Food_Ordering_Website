let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
document.querySelector(".cart-number").textContent = cartCount;

document.querySelectorAll(".food-item").forEach((food) => {
  const addBtn = food.querySelector(".add-cart");
  const name = food.querySelector("h3").textContent;
  const price = parseInt(food.querySelector(".price").textContent.replace("₹",""));

  addBtn.addEventListener("click", () => {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount++;
    document.querySelector(".cart-number").textContent = cartCount;
  });
});
