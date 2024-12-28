// Módulo y exponenciación

// El módulo (%) devuelve el residuo de una división.
// La exponenciación (**) calcula la potencia de un número.

// Sintaxis:
const modulo = 10 % 3; // Residuo: 1
const potencia = 2 ** 3; // 2 elevado a 3: 8
console.log(modulo, potencia);

// 1.Calcula el módulo de 17 entre 5. Imprime el resultado.

let moduloN =17 % 5

console.log(`el modulo de 17 entre 5 es "${moduloN}"`)

// 2.Usa el operador módulo para verificar si 29 es impar (pista: x % 2).

let numer29 =29

comprobacion = 29 % 2 === 0

console.log(`la condicion de que el numero "${numer29}" sea par es "${comprobacion}"`)

// 3.Declara base = 3 y exponente = 4. Calcula base ** exponente e imprímelo.

let base = 3
let exponente = 4

let potenciacion= base ** exponente

console.log(`Si tomamos como base "${base}" y lo elevamos a "${exponente}", entonces obtenemos "${potenciacion}"`)

// 4.Eleva 2 a la potencia de 10 y almacena el resultado en una variable llamada potencia.

let base1 =2
let exponente1 =10
let potencia1 =base1**exponente1

console.log(`Si tomamos como base "${base1}" y lo elevamos a "${exponente1}", entonces obtenemos "${potencia1}"`)


// 5.Encuentra el módulo de 34 entre 6 y multiplica el resultado por 2. Imprime el valor final.
let number1 = 34
let number2 =6
let mod =34 % 6
let modx2 = mod * 2
console.log(`Si tomamos "${number1}" y lo dividimos en "${number2}", entonces el modulo es "${mod}" y por dos es "${modx2}"`)
