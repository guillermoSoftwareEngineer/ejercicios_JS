// Operaciones con Math

// El objeto Math proporciona métodos matemáticos útiles.
// Math.sqrt(): Raíz cuadrada.
// Math.abs(): Valor absoluto.
// Math.random(): Número aleatorio entre 0 y 1.
// Math.floor() y Math.ceil(): Redondeos hacia abajo y arriba.

// Sintaxis:
const raiz = Math.sqrt(16); // 4
const absoluto = Math.abs(-10); // 10
const aleatorio = Math.random(); // Entre 0 y 1
console.log(raiz, absoluto, aleatorio.toFixed(2)); // 4, 10, número aleatorio

// 1.Calcula la raíz cuadrada de 64 usando Math.sqrt e imprímela.
let raizC = Math.sqrt(64)
console.log(`La raiz de 64 es "${raizC}"`)
// 2.Encuentra el valor absoluto de -23 con Math.abs.
let numero = -23
console.log(`El valor absoluto de "${numero}" es "${Math.abs(numero)}"`)

// 3.Genera un número aleatorio entre 0 y 1 usando Math.random e imprímelo.

let nrandom = Math.random()
console.log(nrandom)

// 5.Redondea 5.7 hacia abajo usando Math.floor y hacia arriba usando Math.ceil.

let number = 5.7

let porAbajo = Math.floor(number)
let porArriba = Math.ceil(number)

console.log(`El numero "${number}" redondeado por abajo es "${porAbajo}" y redondeado por arriba es: "${porArriba}"`)

// Genera un número aleatorio entre 1 y 10, redondeándolo con Math.round.

let numRandom = Math.random()//siempre esta entre 0 y 0.99999999
console.log(`El numero redondeado es "${numRandom*(11)+1}"`)


// ======Si quiero solo limite superior  siempre 0=======

// formula general  es Math.random()*nmax+1 
// donde nmax es el numero mas alto mas 1 

// ======Si quiero solo limite superior e inferior siempre 0=======

// formula general es Math.random()*(max-min + 1) + min