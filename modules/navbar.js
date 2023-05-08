import { setCartValue } from "./cart";

export function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `
  <div class="navbar-center">
    <span class="nav-icon">
      <i class="fas fa-bars"></i>
    </span>
    <h2 class="on">Soukon</h2>
    <div class="cart-btn">
      <span class="nav-icon">
        <i class="fas fa-cart-plus"></i>
      </span>
      <span class="cart-items"></span>
    </div>
  </div>
  `;
  navbar.classList.add("navbar");
  return navbar;
}
