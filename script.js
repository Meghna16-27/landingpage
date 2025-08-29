

// ================== SHOP FILTER ==================
function filterProducts(category) {
  const products = document.querySelectorAll("#product-list .card");
  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// ================== CART ==================
let cartCount = 0;
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Add to Cart") {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  }
});

// ================== CONTACT FORM ==================
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
  e.target.reset();
});
