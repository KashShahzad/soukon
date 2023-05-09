export function cartSection() {
  let cartCol = [];
  const cart = document.createElement("section");
  cart.innerHTML = `
  <div class="cart">
    <span class="close-cart">
      <i class="fas fa-window-close"></i>
    </span>
    <h2>Your Cart</h2>
    <div class="cart-content">
    </div>

    <div class="cart-footer">
      <h3>Your Total: $<span class="cart-total"></span></h3>
      <button class="clear-cart banner-btn">Clear Cart</button>
    </div>
  </div>
  `;
  cart.classList.add("cart-overlay");

  return { cart, cartCol };
}

//function to set the values of items in the cart
export function setCartValue(cart) {
  let tempTotal = 0;
  let itemsTotal = 0;

  cart.map((item) => {
    tempTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });

  let cartTotal = document.querySelector(".cart-total");
  let cartItems = document.querySelector(".cart-items");

  cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
  cartItems.innerText = itemsTotal;
}

//display items in cart
export function setCartItems(item) {
  const div = document.createElement("div");
  div.classList.add("cart-item");
  div.innerHTML = `
        <img src=${item.image} />
        <div>
          <h4>${item.title}</h4>
          <h5>${item.price}</h5>
          <span class="remove-item" data-id=${item.id}>remove</span>
        </div>
        <div>
          <i class="fas fa-chevron-up" data-id=${item.id}></i>
          <p class="item-amount">${item.amount}</p>
          <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div>
  `;
  const parent = document.querySelector(".cart-content");
  parent.appendChild(div);
}

//display Cart
export function showCart() {
  const cartDOM = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  cartOverlay.classList.add("transparentBcg");
  cartDOM.classList.add("showCart");
}

//close cart
export function closeCart() {
  const cartDOM = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  cartOverlay.classList.remove("transparentBcg");
  cartDOM.classList.remove("showCart");
}

//to store the cart in local storage
export class Storage {
  //create a static method here because it does not need class to be initiated to be used
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  //get product of specific id
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
  //save cart products in storage
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  //get a cart from local storage
  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}
