// Notación científica

// La notación científica permite representar números muy grandes o pequeños con una base 
// multiplicada por 10 elevado a un exponente (ej: 3e2 = 3 * 10^2 = 300).

// Sintaxis:
const notacion = 5e3; // Equivale a 5000
console.log(notacion); // 5000
console.log(typeof notacion); // "number"

// 1.Declara una variable num1 con valor 3e2 (notación científica). Imprime su valor y su tipo.

let num1 = 3e2

console.log(`El valor real de la notacion cientifica 3e2 en JavaScript es "${num1}" y  su tipo de dato es "${typeof(num1)}"`)

// 2.Declara otra variable num2 con valor 5e-3. Imprime el valor y observa la diferencia.

let num2 = 3e-3
console.log(`el valor de 3e-3 es "${num2}"`)

// 3.Suma 3e3 + 2e4 en una variable llamada sumaCientifica. Imprime el resultado.

let  numero1 = 3e3
let  numero2 = 2e4

let sumaCientifica =  numero1 + numero2

console.log(`El resultado de sumar "${numero1}" mas "${numero2}" es: "${sumaCientifica}" `)

// 4. Multiplica 1e2 por 1e-1. Muestra el resultado en consola.

let  number1 = 1e2
let  number2 = 1e-1

let multiplicacionCientifica =  number1 * number2

console.log(`El resultado de multiplicar "${number1}" con "${number2}" es: "${multiplicacionCientifica}" `)


// 5. Compara con === si 10e1 y 1e2 son iguales. Imprime la comparación.

let compara1 = 10e1 
let compara2 = 1e2

let comparacion = compara1===compara2

console.log(`Que "${compara1}" sea igual a "${compara2}" es "${comparacion}"`)