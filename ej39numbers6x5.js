// Precisión con toFixed

// El método toFixed redondea un número a una cantidad específica de decimales.

// Sintaxis:
const num = 0.1 + 0.2; // 0.30000000000000004 (problema de precisión)
console.log(num.toFixed(1)); // "0.3" (redondeado a 1 decimal)

// 1.Suma 0.1 + 0.2 y usa .toFixed(1) para mostrar el resultado con un decimal.

let number1 =0.1
let number2 =0.2
result = number1 + number2 

console.log(result.toFixed(1))

// 2.Declara una variable num = 5.56789. Muestra su valor con 3 decimales.

let num1 = 5.56789
console.log(num1.toFixed(3))

// 3.Realiza la operación (0.2 * 3) / 2 y redondea a 2 decimales.
let operacion = (0.2 * 3)/2
console.log(operacion.toFixed(2))

// 4.Suma 4.5555 + 2.3333. Imprime el resultado con un solo decimal.

let sumado = 4.5555 + 2.3333
console.log(sumado.toFixed(1))

// 5.Multiplica 2.555 por 3 y redondea el resultado a 2 decimales.

let mult = 2.555 * 3
console.log(mult.toFixed(2))