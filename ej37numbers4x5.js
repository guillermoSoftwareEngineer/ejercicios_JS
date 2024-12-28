// Suma, resta, multiplicación y división

// Son operaciones aritméticas básicas: +, -, * y /.

// Sintaxis:
const suma = 3 + 5; // 8
const resta = 10 - 4; // 6
const multiplicacion = 2 * 3; // 6
const division = 20 / 4; // 5
console.log(suma, resta, multiplicacion, division);


// 1.Declara dos números: n1 = 8 y n2 = 4. Calcula la suma, resta, multiplicación y división.

let n1 = 8
let n2 = 4 

let sumaN = n1 + n2
let restaN = n1 - n2
let multiplicacionN = n1 * n2
let divisionN = n1 / n2

console.log(`Al sumar "${n1}" con "${n2}" se obtiene "${sumaN}"`)
console.log(`Al restar "${n1}" con "${n2}" se obtiene "${restaN}"`)
console.log(`Al multiplicar "${n1}" con "${n2}" se obtiene "${multiplicacionN}"`)
console.log(`Al dividir "${n1}" con "${n2}" se obtiene "${divisionN}"`)

// 2.Calcula 45 + 23 - 10. Almacena el resultado en operacion1 e imprímelo.

let variable1 = 45
let variable2 = 23
let variable3 = 10
let operacion1 = variable1 + variable2 - variable3
console.log(`Al sumar "${variable1}" con "${variable2}" y restar "${variable3}" se obtiene "${operacion1}"`)

// 3.Multiplica 7 por 3 y resta 10 del resultado.

let resultado1 = 7*3 
let resultado2= resultado1 - 10

console.log(`Al multiplicar siete por tres obtenemos "${resultado1}" y si restamos de ello diez, tenemos "${resultado2}"`)

// 4.Divide 100 entre 4 y luego suma 5. Imprime el resultado.

let num1 =100
let num2 =4
let num3 =5

let obtenemos = num1 / num2 + num3

console.log(`Si dividimos "${num1}" entre "${num2}" y sumamos "${num3}" obtenemos como resultado "${obtenemos}"`)

// 5.Encuentra el resultado de 5 * 2 / 2 - 1. Verifica el orden de las operaciones.

let number1 =5
let number2 =2
let number3 =1

let operation = number1 * number2 / number2 - number3

console.log(`Si multiplicamos "${number1}" con "${number2}" y eso lo dividimos entre "${number2}" menos "${number3}" obtenemos "${operation}"`)