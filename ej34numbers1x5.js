//  Números enteros y decimales

// Los números enteros son aquellos sin decimales (ej: 1, 7, -4). 
// Los números decimales tienen una parte fraccionaria (ej: 0.5, -2.3).
// typeof sirve para saber que tipode dato tiene una variable

// Sintaxis:
const entero = 9; // Número entero
const decimal = 0.23; // Número decimal
console.log(typeof entero, typeof decimal); // "number" "number"

//1. Declara dos variables: a con valor 7 (entero) y b con valor 2.5 (decimal). 
// Muestra sus tipos con typeof.

let numero1 = 7
let numero2 = 2.5

console.log(`El tipo de dato de numero1 es "${typeof numero1}", y el de numero2 es "${ typeof numero2}"`)

// 2.Crea una variable suma que sume a y b. Imprime el resultado.
let a = 23
let b =33
let resultado = a + b
console.log(`El resultado de sumar "${a}" + "${b}" es "${resultado}"`)

// 3.Declara un número entero y un número decimal. Multiplica ambos y muestra el resultado.

let nEntero = 12
let nDecimal = 3.23
let multiplicacion = nEntero*nDecimal
console.log(`El resultado de multiplicar "${nEntero}" por "${nDecimal}" es "${multiplicacion	}"`)


// 4.Declara una variable division con la división de dos decimales: 5.5 / 2.2. Imprime el resultado.

let decimal1 = 5.5
let decimal2 = 2.2

let division = decimal1/decimal2

console.log(`El resultado de dividir el numero decimal "${decimal1}" entre el otro numero decimal "${decimal2}" es: "${division}"`)

// Calcula la diferencia entre 12.7 y 9. Imprime el valor y su tipo.

let num1 = 12.7
let num2 = 9

let diferencia = num1 -num2 

console.log(`El resultado de restar el numero decimal "${num1}" entre el otro numero entero "${num2}" es: "${diferencia}"`)
