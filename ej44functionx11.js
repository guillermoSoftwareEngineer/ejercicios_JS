// 1.Crea una función que diga "Hola, mundo".
// Debe mostrar en consola el mensaje "Hola, mundo".
function decir() {
	mensaje = console.log("Hola, mundo")
	return mensaje
}

decir()


// 2.Crea una función que sume dos números.

function sumar (a,b){
	let result =a+b
	return console.log(result)
}

sumar(4,8)

// 3.La función debe aceptar dos números como entrada y mostrar el resultado de la suma.
// Crea una función que multiplique dos números.

function sumar (a,b){
	let result =a+b
	return console.log(result)
}

sumar(44,82)

// 4.Similar al ejercicio anterior, pero en lugar de sumar, debe multiplicar.
// Crea una función que diga tu nombre.

function multiplicar (a,b){
	let mult =a*b
	return console.log(mult)
}

multiplicar (3,2)


// 5.La función debe aceptar tu nombre como valor y mostrar "Hola, [tu nombre]".
// Crea una función que calcule el doble de un número.

function showName (nombre){
	saludo = `Hola mi nombre es "${nombre}"`
	return console.log(saludo)
}

showName("Guillermo")

// 6.La función debe aceptar un número como entrada y mostrar el doble de ese número.

function duplicar (numero){

let doble = `El valor de "${numero}" duplicado es "${numero * 2}"`
return console.log(doble)
}
duplicar(8)

// 7.Crea una arrow function que diga "Hola, mundo".
let saludoArrow =(sal1,sal2)=>{return console.log(sal1 + " " + sal2)}

saludoArrow("Hola","mundo") 

// 8.Similar al ejercicio 1, pero usando arrow functions.
// Crea una arrow function que sume dos números.

let sumaDos = (number1,number2)=>{return console.log(number1+number2)}
sumaDos(4,5)

// 9.Similar al ejercicio 2, pero usando la flecha =>.
// Crea una arrow function que multiplique dos números.

let multDos = (mult1,mult2)=>{return console.log(mult1*mult2)}
multDos(9,5)

// 10.Igual al ejercicio 3, pero con la sintaxis más compacta.
// Crea una función para calcular la mitad de un número.
// Debe aceptar un número y mostrar la mitad.

let medioNum = (numEnt)=> {return console.log(`La mitad del numero "${numEnt}" es: "${numEnt/2}"`)}
medioNum(16)


// 11.Crea una función para verificar si un número es mayor a 10.

let esMayorA10 = (numVerificate)=>{return console.log(`Que el numero "${numVerificate}" se mayor a 10 es "${numVerificate>10}"`)}
esMayorA10(11)

// 12.Debe aceptar un número y mostrar "Es mayor" si lo es o "No es mayor" si no lo es.

let esNoEs = (numes)=>{
	if (numes>10) {
		console.log(`El numero "${numes}" es mayor a 10`)
	}else{
		console.log(`El numero "${numes}" NO es mayor a 10`)
	}
}

esNoEs(10)

