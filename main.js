import "./style.css";
import { createNavbar } from "./components/navbar";
import { heroSection } from "./components/hero";
import { productSection, Products, UI_Products } from "./components/products";
import { cartSection } from "./components/cart";
import { foot } from "./components/footer";

const app = document.querySelector("#app");
const navbar = createNavbar();
const hero = heroSection();
const products = productSection();
const footer = foot();
const cart = cartSection();

app.appendChild(navbar);
app.appendChild(hero);
app.appendChild(products);
app.appendChild(cart);
app.appendChild(footer);

document.addEventListener("DOMContentLoaded", function () {
  const ui = new UI_Products();
  const product = new Products();

  //get all products
  product.getProducts().then((products) => ui.displayProducts(products));
});
