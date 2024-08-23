// Obtener el ID del producto desde la URL
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);
//PARA PROBAR EN CAAD REFRESH
localStorage.removeItem("cart");
function printDetails(id) {
  // Buscar el producto por ID
  const product = products.find((each) => each.id === parseInt(id, 10)); // Convertir a número

  if (!product) {
    console.error(`Product with ID ${id} not found.`);
    return;
  }

  // Plantilla para la vista de detalle
  const detailsTemplate = `
    <section class="product-images-block">
      <div class="product-images">
        <img
          class="mini-img"
          src="${product.image}" 
          alt="${product.title}"
          onclick="changeMini(event)"
        />
                <img
          class="mini-img"
          src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" 
          alt="${product.title}"
          onclick="changeMini(event)"
        />
      </div>
      <img
        class="big-img"
        id="big-img"
        src="${product.image}" 
        alt="${product.title}"
      />
    </section>
    <div class="product-description-block">
      <h1 class="product-title">${product.title}</h1>
      <form class="product-selector">
        <fieldset class="product-fieldset">
          <label class="product-label" for="color">Color</label>
          <select
            class="product-select"
            id="color-${product.id}"
            type="text"
            placeholder="Selecciona un color"
          >
            ${product.colors.map(
              (color) => `<option value="${color}">${color}</option>`
            ).join('')}
          </select>
        </fieldset>
      </form>
      <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>
          ${product.description}
        </p>
      </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 id="price" class="checkout-total-price">$${product.price}</h2>
        <p class="checkout-description">
          ${product.taxPolicy}
        </p>
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon">
              <img src="./assets/truck.png" alt="Truck"/>
            </span>
            <span class="policy-desc">
              Agrega el producto al carrito para conocer los costos de envío
            </span>
          </li>
          <li>
            <span class="policy-icon">
              <img src="./assets/plane.png" alt="Plane"/>
            </span>
            <span class="policy-desc">
              Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
            </span>
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input id="quantity-${product.id}" type="number" min="1" value="1" onchange="changeSubtotal(event)" />
            <button type="button" class="cart-btn" onclick="saveProduct(${product.id})">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Seleccionar el contenedor de detalles y actualizar su contenido
  const detailsSelector = document.querySelector("#details");
  if (detailsSelector) {
    detailsSelector.innerHTML = detailsTemplate;
  } else {
    console.error('Element with ID "details" not found.');
  }
}


//cambiar a img
function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigSelector = document.querySelector("#big-img");
    bigSelector.src = selectedSrc;
  }
// Llamar a la función con el ID obtenido de la URL
if (id) {
  printDetails(id);
}


function changeSubtotal(event){
  const quantity = parseInt(event.target.value, 10);
  const product = products.find((each) => each.id === parseInt(id, 10));
  console.log(quantity)
  let subtotal=0;
  if(!isNaN(quantity) ){
    subtotal = product.price * quantity;
  }
  else{
    subtotal=product.price;
  }
  console.log(subtotal)
  const priceSelector = document.querySelector("#price");
  priceSelector.innerHTML = `$${subtotal}`;
}

//SAVE PRODUCT

function saveProduct(id) {
  const found = products.find((each) => each.id === id);
  const product = {
    id: id,
    title: found.title,
    price: found.price,
    image: found.image,
    color: document.querySelector("#color-" + id).value,
    quantity: document.querySelector("#quantity-" + id).value,
  };
  const stringifyProduct = JSON.stringify(product);
  console.log(stringifyProduct);
  localStorage.setItem("cart", stringifyProduct);
  // const cart = localStorage.getItem("cart");
  // let cartArray = [];
  // if (cart) {
  //   // Si la clave existe, parsear el array existente
  //   cartArray = JSON.parse(cart);
  //   cartArray.push(product);
    
  // }
  // else{
  //   cartArray.push(product);
  // }
  
  
  // console.log(cartArray)
  // const stringifyProducts = JSON.stringify(cartArray);
  // console.log(stringifyProducts)
  // localStorage.setItem("cart", stringifyProducts);
}