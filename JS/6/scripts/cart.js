let cartProducts = JSON.parse(localStorage.getItem("cart"));
console.log(JSON.parse(localStorage.getItem("cart")));
console.log(Array.isArray(cartProducts));
var result = Object.keys(cartProducts).map((key) => [key, cartProducts[key]]);
console.log(result);
if (!Array.isArray(cartProducts)) {
  cartProducts = [cartProducts];
}
function createCartCard(product) {
  return `
<article class="product-cart">
    
    <div class="product-image">
        <img src="${product.image}" alt="Apple iPhone XR">
    </div>

    
    <div class="product-details">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="product-quantity">
            
            <input type="number" id="quantity" value="1"></input>
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
  cartContainer.innerHTML = "";
  products.forEach((product) => {
    cartContainer.innerHTML += createCartCard(product);
  });
}

printCartCards(cartProducts);

function deleteCart() {
  localStorage.removeItem("cart");
  console.log("borrao");
  cartProducts = JSON.parse(localStorage.getItem("cart"));
  printCartCards(cartProducts);
}
function createTotalTemplate(arrayOfProducts) {
  let total = 0;
  arrayOfProducts.forEach(
    (each) => (total = total + each.price * each.quantity)
  );
  return `
<div class="resumen-pedido">
    <h4 class="total-title"> Resumen del pedido </h4>
    <p class="total-p">Subtotal <span>$ ${total}</span></p>
    <h3>Incluye impuesto PAIS y percepción AFIP</h3>
    <button id="buy" class="card-btn" type="button">Finaliza tu compra</button>
</div>
  `;
}

function printTotalTemplate(a) {
  const cartContainer = document.getElementById("total");
  cartContainer.innerHTML += createTotalTemplate(a);
}

printTotalTemplate(cartProducts);
