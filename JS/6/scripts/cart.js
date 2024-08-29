let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

// ASEGURAR EL CART COMO ARRAY
if (!Array.isArray(cartProducts)) {
  cartProducts = [cartProducts];
}

function createCartCard(product) {
  return `
    <article class="product-cart" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-details">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="product-quantity">
          <input type="number" class="quantity-input" value="${product.quantity}" min="1" onchange="changeQuantity(event, ${product.id})">
        </div>
      </div>
      <div class="product-price">
        <span>ARS ${product.price}</span>
      </div>
      <button class="add-to-favorites" onclick="addToFavorites(${product.id})">Agregar a Favoritos</button>
      
    </article>
  `;
}

function printCartCards(products) {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = products.map(createCartCard).join("");
}

function deleteCart() {
  localStorage.removeItem("cart");
  cartProducts = [];
  printCartCards(cartProducts);
  printTotalTemplate(cartProducts);
}

function createTotalTemplate(arrayOfProducts) {
  const total = arrayOfProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return `
    <div class="resumen-pedido">
      <h4 class="total-title">Resumen del pedido</h4>
      <p class="total-p">Subtotal <span>$ ${total.toFixed(2)}</span></p>
      <h3>Incluye impuesto PAIS y percepción AFIP</h3>
      <button id="buy" class="card-btn" type="button" onclick="endShop()">Finaliza tu compra</button>
      
    </div>
  `;
}

function printTotalTemplate(products) {
  const cartContainer = document.getElementById("total");
  cartContainer.innerHTML = createTotalTemplate(products);
}

function changeQuantity(event, productId) {
  const newQuantity = parseInt(event.target.value);

  const productIndex = cartProducts.findIndex(
    (product) => product.id === productId
  );
  if (productIndex !== -1) {
    cartProducts[productIndex].quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    printTotalTemplate(cartProducts);
  }
}

function addToFavorites(productId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const product = cartProducts.find((product) => product.id === productId);

  if (product) {
    // Verificar si el producto ya está en la lista de favoritos
    const isFavorite = favorites.some((fav) => fav.id === productId);

    if (!isFavorite) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Producto agregado a favoritos");
      printFavorites();
    } else {
      alert("El producto ya está en la lista de favoritos");
    }
  }
}
function createFavoriteCard(product) {
  return `
    <article class="favorite-card">
      <div class="favorite-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="favorite-details">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
      </div>
    </article>
  `;
}
function printFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoritesContainer = document.getElementById("favorites-container");
  favoritesContainer.innerHTML = ""; // Limpiar el contenedor

  favorites.forEach((product) => {
    favoritesContainer.innerHTML += createFavoriteCard(product);
  });
}
function removeAllFavorites() {
  // Eliminar todos los favoritos del localStorage
  localStorage.removeItem('favorites');

  // Actualizar la vista para mostrar que no hay favoritos
  printFavorites([]);
}
// Llama a printFavorites al cargar la página para mostrar los favoritos existentes
document.addEventListener("DOMContentLoaded", printFavorites);
// start renderr
printCartCards(cartProducts);
printTotalTemplate(cartProducts);
