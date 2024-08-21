const navSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Cómo comprar", linkTo: "./how.html" },
  { title: "Taxes", linkTo: "./taxs.html" },
  { title: "Ordenes", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}

// Seleccionar el footer por su ID
const footerSelector = document.querySelector("#footer");

// Definir las opciones de cada columna
const options2 = [
  {
    title: "Ofertas",
    linkTo: "./index.html",
    opts: ["Laptops", "Audio", "Auriculares"],
  },
  {
    title: "Cómo comprar",
    linkTo: "./index.html",
    opts: ["Formas de pago", "Envíos", "Devoluciones"],
  },
  {
    title: "Costos y tarifas",
    linkTo: "./index.html",
    opts: ["Impuestos", "Facturación"],
  },
  {
    title: "Mis pedidos",
    linkTo: "./index.html",
    opts: ["Pedir nuevamente", "Lista de deseos"],
  },
  { title: "Garantía", linkTo: "./index.html", opts: ["Garantia"] },
];

// Iterar sobre las opciones para construir el footer dinámicamente

for (const option of options2) {
  // Crear el elemento ul para cada columna
  const ul = document.createElement("ul");
  ul.classList.add("footer-ul");

  // Crear el elemento li para el título principal de cada columna
  const liTitle = document.createElement("li");
  liTitle.classList.add("footer-main-item");

  // Crear el enlace para el título principal
  const aTitle = document.createElement("a");
  aTitle.classList.add("footer-a");
  aTitle.href = option.linkTo;
  aTitle.textContent = option.title;

  // Añadir el enlace del título principal al li
  liTitle.appendChild(aTitle);

  // Añadir el li del título principal al ul
  ul.appendChild(liTitle);

  // Iterar sobre las opciones adicionales en la columna
  for (const opt of option.opts) {
    if (opt) {
      // Crear el elemento li para cada opción
      const liOption = document.createElement("li");
      liOption.classList.add("footer-li");

      // Crear el enlace para la opción
      const aOption = document.createElement("a");
      aOption.classList.add("footer-a");
      aOption.href = option.linkTo; // Usando el mismo linkTo para cada opción (puedes personalizar si es necesario)
      aOption.textContent = opt;

      // Añadir el enlace de la opción al li
      liOption.appendChild(aOption);

      // Añadir el li de la opción al ul
      ul.appendChild(liOption);
    }
  }

  // Añadir la columna ul al footer
  footerSelector.appendChild(ul);
}
