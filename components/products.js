//function to describe the structure of product section
export function productSection() {
  const products = document.createElement("section");
  products.innerHTML = `
      <div class="section-title">
        <h2>our products</h2>
      </div>
      <div class="products-center">
      </div>
      `;

  products.classList.add("products");
  return products;
}

//this class is going to fetch the product data and has a single method for that purpose
export class Products {
  async getProducts() {
    try {
      const result = await fetch("products.json");
      const data = await result.json();
      let products = Array.from(data.items);
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//this class is going to display the products
export class UI_Products {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <article class="product">
          <div class="img-container">
            <img src=${product.image} alt="1" class="product-img"/>  
            <button class="bag-btn" data-id=${product.id}>
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
        <h3>${product.title}</h3>
        <h4>$${product.price}</h4>
        </article>
      `;
    });
    document.querySelector(".products-center").innerHTML = result;
  }
}
