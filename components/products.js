export function productSection() {
  const products = document.createElement("section");
  products.innerHTML = `
      <div class="section-title">
        <h2>our products</h2>
      </div>
      <div class="products-center">
        <article class="product">
          <div class="img-container">
            <img src="../images/product-1.jpeg" alt="1" class="product-img"/>  
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>Queen bed</h3>
        <h4>$130</h4>
        </article>
        <article class="product">
          <div class="img-container">
            <img src="../images/product-1.jpeg" alt="1" class="product-img"/>  
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>Queen bed</h3>
        <h4>$130</h4>
        </article>
        <article class="product">
          <div class="img-container">
            <img src="../images/product-1.jpeg" alt="1" class="product-img"/>  
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>Queen bed</h3>
        <h4>$130</h4>
        </article>
        <article class="product">
          <div class="img-container">
            <img src="../images/product-1.jpeg" alt="1" class="product-img"/>  
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>Queen bed</h3>
        <h4>$130</h4>
        </article>
        <article class="product">
          <div class="img-container">
            <img src="../images/product-1.jpeg" alt="1" class="product-img"/>  
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>Queen bed</h3>
        <h4>$130</h4>
        </article>
        <article class="product">
          <div class="img-container">
            <img src="../images/product-1.jpeg" alt="1" class="product-img"/>  
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>Queen bed</h3>
        <h4>$130</h4>
        </article>
      </div>
      `;

  products.classList.add("products");
  return products;
}
