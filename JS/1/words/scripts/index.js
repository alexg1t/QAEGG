const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

const mensajeCantidad = "La longitud de la palabra o frase es: "+cantidad + "\nLa palabra o frase en minusculas es: "+ fraseMinusculas +"\nLa palabra o frase en mayusculas es: "+ fraseMayusculas
console.log(mensajeCantidad);
alert(mensajeCantidad);