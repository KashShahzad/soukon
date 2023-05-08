export function heroSection() {
  const hero = document.createElement("header");
  hero.innerHTML = `
    <div class="banner">
    <p class="banner-title">Buy anything local</p>
    <button class="banner-btn">Shop Now</button>
    </div>
    `;
  return hero;
}
