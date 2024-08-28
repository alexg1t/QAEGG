
let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

// ASEGURAR EL CART COMO ARRAY
if (!Array.isArray(cartProducts)) {
  cartProducts = [cartProducts];
}


//TEMPLATE PARA CADA CARTCARD
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
    </article>
  `;
}

function printCartCards(products) {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = products.map(createCartCard).join('');
}

function deleteCart() {
  localStorage.removeItem("cart");
  cartProducts = [];
  printCartCards(cartProducts);
  printTotalTemplate(cartProducts);
}

function createTotalTemplate(arrayOfProducts) {
  const total = arrayOfProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
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

  const productIndex = cartProducts.findIndex(product => product.id === productId);
  if (productIndex !== -1) {
    cartProducts[productIndex].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    printTotalTemplate(cartProducts);
  }
}

// start renderr
printCartCards(cartProducts);
printTotalTemplate(cartProducts);