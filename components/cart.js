export function cartSection() {
  const cart = document.createElement("section");
  cart.innerHTML = `
  <div class="cart">
    <span class="close-cart">
      <i class="fas fa-window-close"></i>
    </span>
    <h2>Your Cart</h2>
    <div class="cart-content">
      <div class="cart-item">
        <img src="../images/product-1.jpeg" alt="cart1" />
        <div>
          <h4>queen bed</h4>
          <h5>$140</h5>
          <span class="remove-item">remove</span>
        </div>
        <div>
          <i class="fas fa-chevron-up"></i>
          <p class="item-amount">1</p>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>

    <div class="cart-footer">
      <h3>Your Total: $<span class="cart-total">120</span></h3>
      <button class="clear-cart banner-btn">Clear Cart</button>
    </div>
  </div>
  `;
  cart.classList.add("cart-overlay");

  const cartBtn = document.querySelector(".cart-btn");
  const closeCartBtn = document.querySelector(".close-cart");
  const clearCartBtn = document.querySelector(".clear-cart");

  let cart_col = [];

  return cart;
}

class Local_Storage {}
