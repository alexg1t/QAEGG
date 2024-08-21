
const titleFormat = (texto) => {

    const a = texto.charAt(0).toUpperCase();
    const b = texto.slice(1).toLowerCase();    

    const c = a+b;

    return c;
}



console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));