// Seleccionar el botón "Finaliza tu compra"
const buySelector = document.getElementById("buy");

// Función para actualizar la vista del carrito
function updateCartView() {
    console.log("update")
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");
    const totalContainer = document.getElementById("total");

    if (cartProducts.length === 0) {
        cartContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        totalContainer.innerHTML = '';
    } else {
        printCartCards(cartProducts);
        printTotalTemplate(cartProducts);
    }
}

// Evento de click para finalizar la compra
buySelector.addEventListener("click",endShop);

function endShop(){
        // Borrar todos los productos del array cartProducts
        cartProducts = [];

        // Borrar todos los productos del localStorage
        localStorage.removeItem("cart");
    
        // Actualizar la vista del carrito
        updateCartView();
    
        alert('¡Gracias por tu compra!');
}
// Llamar a updateCartView al cargar la página para manejar el caso inicial
document.addEventListener('DOMContentLoaded', updateCartView);