const cantidad = Number(prompt("¿Cuántos números desea sumar?"));
let sumatoria = 0;
for (let index = 1; index <= cantidad; index++) {
    const numeroAsumar = Number(prompt("Ingrese el número " + index + " a sumar"));
    sumatoria = sumatoria + numeroAsumar;
  }
const mensaje="La suma es: " + sumatoria;
alert(mensaje)