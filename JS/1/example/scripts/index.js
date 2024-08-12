/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje2");
/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";


const entrada = prompt("¿Cual es su nombre?");
const mensaje = "Bienvenido " + entrada;
console.log(mensaje);
alert(entrada);