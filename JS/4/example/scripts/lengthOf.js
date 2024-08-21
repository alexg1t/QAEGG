
const lengthOf = (texto) => {
		if (texto==""){
			console.log("Invalid input")
		}
		else{
			return texto.length;
		}
		
	}

console.log(lengthOf("")); 
console.log(lengthOf("1234")); 
console.log(lengthOf("123456789")); 