// DE MANERA ESTATICA
// let productsTemplate=`        <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//             alt="iPad Pro 12.9"
//           />
//           <div class="product-info">
//             <span class="product-title">macbook</span>
//             <span class="product-description">Silver</span>
//             <div class="product-price-block">
//               <span class="product-price">900000</span>
//               <span class="product-discount">50% Off</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//             alt="iPad Pro 12.9"
//           />
//           <div class="product-info">
//             <span class="product-title">iPad Pro 12.9</span>
//             <span class="product-description">Silver</span>
//             <div class="product-price-block">
//               <span class="product-price">900000</span>
//               <span class="product-discount">50% Off</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//             alt="iPad Pro 12.9"
//           />
//           <div class="product-info">
//             <span class="product-title">iPad Pro 12.9</span>
//             <span class="product-description">Silver</span>
//             <div class="product-price-block">
//               <span class="product-price">900000</span>
//               <span class="product-discount">50% Off</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//             alt="iPad Pro 12.9"
//           />
//           <div class="product-info">
//             <span class="product-title">iPad Pro 12.9</span>
//             <span class="product-description">Silver</span>
//             <div class="product-price-block">
//               <span class="product-price">900000</span>
//               <span class="product-discount">50% Off</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//             alt="iPad Pro 12.9"
//           />
//           <div class="product-info">
//             <span class="product-title">iPad Pro 12.9</span>
//             <span class="product-description">Silver</span>
//             <div class="product-price-block">
//               <span class="product-price">900000</span>
//               <span class="product-discount">50% Off</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>
//         <a class="product-card" href="./details.html">
//           <img
//             class="product-img"
//             src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//             alt="iPad Pro 12.9"
//           />
//           <div class="product-info">
//             <span class="product-title">iPad Pro 12.9</span>
//             <span class="product-description">Silver</span>
//             <div class="product-price-block">
//               <span class="product-price">900000</span>
//               <span class="product-discount">50% Off</span>
//             </div>
//             <div class="product-tax-policy">
//               Incluye impuesto País y percepción AFIP
//             </div>
//           </div>
//         </a>`;

//RENDERIZAR DE FORMA DINAMICA
function createCard(product) {
  return `
      <a class="product-card" href="./details.html?id=${product.id}">
        <img
          class="product-img"
          src="${product.image}"
          alt="${product.title}"
        />
        <div class="product-info">
          <span class="product-title">${product.title}</span>
          <span class="product-description">${product.description}</span>
          <div class="product-price-block">
            <span class="product-price">${product.price}</span>
            <span class="product-discount">${product.discount}</span>
          </div>
          <div class="product-tax-policy">
            ${product.taxPolicy}
          </div>
        </div>
      </a>
    `;
}
// let productsTemplate = "";
// for (const element of products) {
//   productsTemplate += createCard(element);
// }
// const productsSelector = document.getElementById("products");
// productsSelector.innerHTML = productsTemplate;

//fFUNCION DE RENDERZADO
function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate += createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  if (productsSelector) {
    productsSelector.innerHTML = productsTemplate;
  } else {
    console.error(`No hay elemeto con id :"${idSelector}"`);
  }
}

printCards(products, "products");
