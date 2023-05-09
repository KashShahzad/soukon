import "./style.css";
import { createNavbar } from "./modules/navbar";
import { heroSection } from "./modules/hero";
import { productSection, Products, UI_Products } from "./modules/products";
import {
  cartSection,
  closeCart,
  setCartItems,
  setCartValue,
  showCart,
} from "./modules/cart";
import { foot } from "./modules/footer";
import { Storage } from "./modules/cart";

const app = document.querySelector("#app");
const navbar = createNavbar();
const hero = heroSection();
const products = productSection();
const footer = foot();
const cart = cartSection().cart;
let cartCol = cartSection().cartCol;
let buttonsDOM = [];

app.appendChild(navbar);
app.appendChild(hero);
app.appendChild(products);
app.appendChild(cart);
app.appendChild(footer);

document.addEventListener("DOMContentLoaded", function () {
  const ui = new UI_Products();
  const product = new Products();

  //setup App
  setupApp();
  cartLogic();

  //get all products
  product
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      const buttons = [...document.querySelectorAll(".bag-btn")];
      buttonsDOM = buttons;
      buttons.forEach((button) => {
        let id = button.dataset.id;
        let inCart = cartCol.find((item) => item.id === id);
        if (inCart) {
          button.innerText = "In Cart";
        }
        button.addEventListener("click", (event) => {
          event.target.innerText = "In Cart";
          event.target.disabled = true;
          //get product from products
          let cartItem = { ...Storage.getProduct(id), amount: 1 };
          console.log(cartItem);
          //add product to the cart
          cartCol = [...cartCol, cartItem];
          console.log(cartCol);
          //save cart in local storage
          Storage.saveCart(cartCol);
          //set cart values
          setCartValue(cartCol);
          //display cart items
          setCartItems(cartItem);
          //show the cart
          showCart();
        });
      });
    });
});

//setup all the buttons and data on load
function setupApp() {
  cartCol = Storage.getCart();
  setCartValue(cartCol);
  populateCart(cartCol);

  const cartBtn = document.querySelector(".cart-btn");
  cartBtn.addEventListener("click", () => {
    showCart();
  });

  const closeBtn = document.querySelector(".close-cart");
  closeBtn.addEventListener("click", () => {
    closeCart();
  });
}

function populateCart(cart) {
  cart.forEach((item) => setCartItems(item));
}

//cart items interferences
function cartLogic() {
  const clearCartBtn = document.querySelector(".clear-cart");
  clearCartBtn.addEventListener("click", () => {
    clearCart();
    console.log("BUTTON clicked");
  });
}

function clearCart() {
  let cartItems = cartCol.map((items) => items.id);
  cartItems.forEach((id) => removeItem(id));
}

function removeItem(id) {
  cartCol = cartCol.filter((items) => items.id !== id);
  setCartValue(cartCol);
}
