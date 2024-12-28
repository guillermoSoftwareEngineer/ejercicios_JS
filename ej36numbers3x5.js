// . Infinito e NaN

// Infinity representa un valor infinito, como resultado de dividir un número entre 0.
// NaN (Not a Number) resulta cuando una operación no es numéricamente válida.

// Sintaxis:
const infinito = 1 / 0; // Infinito
console.log(infinito); // Infinity
const noEsNumero = "texto" * 5; // NaN
console.log(noEsNumero); // NaN

// 1. Divide 1 entre 0 y almacénalo en la variable resultado. Muestra su valor.
let uno = 1
let cero = 0

let resultado = uno / cero 
let comentario ="en matematicas no se puede dividir por 0 por que tiende a infinito"

console.log(`El valor de la division de "${uno}" entre "${cero}" es igual a "${resultado}" por que "${comentario}"`)

// 2.Declara num = "texto" * 5. Imprime num y su tipo.

let num = "texto" * 5
let comentario2 = "por que no se puede multiplicar un numero con un literal entonces NaN (not is a number)"
console.log(`la variable num vale "${num}" y es de tipo "${typeof num}" por que ${comentario2}`)

// 3.Verifica si Infinity es mayor que 100000000 usando console.log.

let inf = Infinity
let nComparado = 100000000

let comparacion = inf >= nComparado

console.log (`La comparacion de que "${inf}" sea mayor que "${nComparado}" es en realidad "${comparacion}"`)

// 4.Comprueba si una variable resultado con valor NaN es igual a sí misma usando ===.

let result = NaN
let native = NaN
let mensaje = "NaN no es igual a ningún otro valor, ni siquiera a si mismo"
let comparado = result === native

console.log(`Si comparamos "${result}" con "${native}" tenemos que la condicion de que sean iguales es: "${comparado}" por que: "${mensaje}`)

// 5.Usa isNaN para verificar si "abc" / 3 es realmente NaN. Imprime el resultado.

let div = "abc"/3
let comp = isNaN(div)
console.log(`EL valor "${div}" comparado mediante la funcion isNaN da como resultado "${comp}"`)
