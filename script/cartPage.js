document.addEventListener("DOMContentLoaded", () => {
  const cartBody = document.getElementById("cart-body");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  let totalAmount = 0;


  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    totalAmount += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td>${item.qty}</td>
      <td>₹${itemTotal}</td>
      <td><button class="remove-btn" data-index="${index}">❌</button></td>
    `;
    cartBody.appendChild(row);
  });


  cartTotal.textContent = totalAmount;

 
  cartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.getAttribute("data-index");
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      location.reload();
    }
  });


  checkoutBtn.addEventListener("click", () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cartItems)); 
    window.location.href = "../pages/payment.html"; 
  });
});
