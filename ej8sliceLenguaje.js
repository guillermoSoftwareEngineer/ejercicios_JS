// Método: slice
// Descripción:
// slice(inicio, fin) permite extraer una parte de un string.
// El índice inicio indica dónde empieza el corte (incluido), y el índice 
// fin indica dónde termina el corte (excluido).
// Si omites fin, extrae desde inicio hasta el final del string.

// Sintaxis:
let texto = "Aprender JavaScript";
console.log(texto.slice(0, 8)); // "Aprender"
console.log(texto.slice(9)); // "JavaScript"

// Ejercicio: 
// Extraer texto Declara una variable llamada frase con el valor "Aprender JavaScript es divertido".
// Usa el método slice para extraer la palabra "JavaScript" y muéstrala en consola con un 
// mensaje como: La palabra extraída es: JavaScript

let frase = "Aprender JavaScript es divertido"

console.log(`La palabra a extraer es el nombre del lenguaje ${frase.slice(8,18)}`)
