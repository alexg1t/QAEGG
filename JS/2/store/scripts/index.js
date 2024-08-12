let totalApagar = 0; // Inicialización de la variable que acumula el total a pagar
let c = Number(prompt("¿Cuántos productos desea llevar?"))
let resumen = "";
for (let index = 1; index <= c; index++) {
  const nombre = prompt("¿Qué producto desea llevar?"); // Solicitar el nombre del producto
  let cantidad = Number(prompt("¿Cuántas unidades?")); // Solicitar la cantidad y convertir a número
  let precio = Number(prompt("¿Cuánto sale cada unidad?")); // Solicitar el precio y convertir a número



  const subtotal = cantidad * precio; // Calcular el subtotal
  totalApagar += subtotal; // Sumar el subtotal al total a pagar
  resumen += `${nombre}: ${cantidad} unidad(es) a $${precio} cada una. Subtotal: $${subtotal}\n`;
}

const mensaje = `Resumen de la compra:\n${resumen}\nEl total a pagar es: $${totalApagar}`;
alert(mensaje)
console.log(totalApagar); // Mostrar el total a pagar