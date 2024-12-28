// Propiedades de la funciones

// 1. Propiedades de las funciones
// Las propiedades son características asociadas a una función. Las más importantes son:

// 1.1. length

// Indica el número de parámetros que la función espera.
// Ejemplo:

function suma(a, b) {}
console.log(suma.length); // 2

// 1.2. name
// Devuelve el nombre de la función.
// Si es una función anónima asignada a una variable, devuelve el nombre de la variable.
// Ejemplo:

function miFuncion() {}
console.log(miFuncion.name); // "miFuncion"

const anonima = function () {};
console.log(anonima.name); // "anonima"

// 1.3. prototype
// Es un objeto que permite agregar métodos o propiedades a todas las instancias creadas por una 
// función constructora.
// Ejemplo:

function Persona(nombre) {
    this.nombre = nombre;
}
Persona.prototype.saludar = function () {
    return `Hola, soy ${this.nombre}`;
};
const juan = new Persona("Juan");
console.log(juan.saludar()); // Hola, soy Juan


console.log("==================================ejercicios================================================")


// Ejercicios de length:
// 1. Declara una función que acepte dos parámetros y usa .length para mostrar cuántos parámetros espera.

function twoParameter (a,b){
result = a+b
return console.log(result)
}

twoParameter(3,3)
console.log(`La funcion "${twoParameter}" tiene "${twoParameter.length}" parametros`)

// 2. Crea una función que no acepte ningún parámetro. Usa .length para verificar cuántos parámetros 
// están definidos.

// Desde aqui recorde que debo aprender ingles, asi que voy a tratar de nombrar funciones y variables 
// en ingles 

let sinParameters = ()=>{
	console.log("I am a function without parameters")
}
console.log(sinParameters.length)

// 3. Declara una función con cinco parámetros y otra con uno. Usa .length para comparar cuál espera más
 // parámetros.

function fiveParameters (c,d,e,f,g){
nres = c * d * e *  f *  g
return nres
}

function threeParameters(h,i,j){
	pot = (h ** i) - j
}

largeFirstFunction = fiveParameters.length
largeSecondFunction =threeParameters.length

if(largeFirstFunction>largeSecondFunction){
	console.log(`La funcion con "${largeFirstFunction}"  parametros tiene mas parametros que La funcion con "${largeSecondFunction}" parametros `)
}
else if (largeFirstFunction==largeSecondFunction){
	console.log(`La funcion con "${largeFirstFunction}"  parametros tiene los mismos parametros que La funcion con "${largeSecondFunction}" parametros `)	
}else{
	console.log(`La funcion con "${largeSecondFunction}" parametros  tiene mas parametros que La funcion con "${largeFirstFunction}" parametros`  )
}

// 4. Crea una función que reciba dos parámetros pero pase tres argumentos al llamarla. Usa 
// .length para mostrar cuántos parámetros espera y cuántos argumentos se le pasaron realmente.

function manyParameters(y, z) {
    console.log(`La función espera ${manyParameters.length} parámetros`)
    console.log(`La función recibió ${arguments.length} argumentos`)//arguments solo sirve dentro del ambito de la funcion
}

manyParameters(3, 4, 5)



// 5. Usa .length en una función anónima y muestra su valor.

let anonymous= ()=> {

console.log("Hola")
}

let numAnonim=anonymous.length
console.log( numAnonim )