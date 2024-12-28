// ej41.js

// Conversión Implícita y Explícita
// En JavaScript, las conversiones de tipo permiten convertir valores de un tipo a otro, 
// como convertir un número a una cadena o un valor a un booleano. Hay dos tipos principales
//  de conversiones}

// Conversión Implícita
// Definición: Ocurre automáticamente cuando JavaScript convierte un valor a otro tipo en un 
// contexto donde se necesita un tipo diferente.
// Ejemplo común: Comparaciones, operadores lógicos o aritméticos que fuerzan la conversión:

const resultado = 5 > 4; // Comparación devuelve true
console.log(resultado); // true

const name = "Guillermo";
console.log(!!name); // Doble negación convierte 'name' en un booleano (true)

// Conversión Explícita
// Definición: Es cuando el desarrollador realiza la conversión de manera intencional utilizando
// métodos o funciones específicas.
// Ejemplo común: Usar el constructor Boolean, Number o String:

const value = 0;
const otherValue = 24;

const explicitBoolean = Boolean(value); // false porque 0 es falsy
const explicitBoolean2 = Boolean(otherValue); // true porque 24 es truthy

console.log(explicitBoolean); // false
console.log(explicitBoolean2); // true

// 1.Ejercicios de Conversión Implícita
// Comparaciones Booleanas: Declara dos variables con valores numéricos (a = 5, b = 7) y compara si a < b. 
// 
// Imprime el resultado.

let a =5
let b =7

let compara = a<b

console.log (`Los datos "${a}" y "${b}" son de tipo "${typeof(a)}" pero la comparacion "${compara}" es de tipo "${typeof	(compara)}"`)

// 2.Uso de operadores lógicos: Declara dos cadenas no vacías ("hola" y "mundo") y utiliza el operador ||. 
// 
// ¿Qué devuelve?

let variable1 ="hola"
let variable2 ="mundo"

let operadorOr = variable1||variable2

console.log(`La comparacion OR entre las variables "${variable1}" y la variable "${variable2}" es de tipo "${typeof(operadorOr)}"`)

// 3.Suma de cadena y número: Declara una cadena ("10") y súmale un número (5). Imprime el resultado.

let cadena = "10"
let numero = 5
sumatoria = cadena + numero 

console.log(sumatoria)
console.log(typeof(sumatoria))

// 4.Multiplicación de cadena numérica: Declara una cadena que contiene un número ("20") y 
// multiplícalo por otro número (3). 
// Imprime el resultado.

let palabra = "20"
let number = 3
let multiplo = palabra * number
console.log(multiplo)
console.log(typeof(multiplo))


// 5. Operador == con valores de diferente tipo: Compara "5" == 5 e imprime el resultado. 
// Explica por qué ocurre.

let string5 = "5"
let numero5 = 5

let comp =string5 == numero5
console.log(comp)
console.log(typeof(comp))

// Ejercicios de Conversión Explícita
// 6.Booleanos explícitos: Declara una variable con valor undefined y conviértela explícitamente a booleano. 
// Imprime el resultado.

let var1 = undefined

let convBool = Boolean(undefined)

console.log(convBool)
console.log(typeof(convBool))

// 7.Cadena a número: Declara una cadena ("42") y conviértela explícitamente a número usando Number(). 
// Imprime el resultado.

let string42 = "42"

let num42 = Number(string42)
console.log(num42)
console.log(typeof(num42))

// 8.Número a cadena: Declara un número (123) y conviértelo explícitamente a una cadena usando String(). 
// Imprime el resultado.

let num123 =123
let string123 = String(num123)
console.log(string123)
console.log(typeof(string123))

// 9.Booleano a cadena: Declara un booleano (true) y conviértelo explícitamente a una cadena usando String(). 
// Imprime el resultado.

let booleano = true

let boolToTrue = String(booleano)

console.log(boolToTrue)
console.log(typeof(boolToTrue))

// 10.Número booleano: Declara un número (0) y conviértelo explícitamente a un booleano usando Boolean(). 
// Imprime el resultado.

let numeroCero = 0
let stringCero = Boolean(numeroCero)

console.log(stringCero)
console.log(typeof(stringCero))
