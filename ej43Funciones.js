// Funciones en JavaScript
// Las funciones son bloques de código reutilizables diseñados para realizar una tarea específica. 
// Pueden recibir parámetros (valores de entrada) y devolver un resultado.

// 1. Declaración de funciones
// Las funciones pueden declararse usando la palabra clave function:

function suma(a, b) {
  return a + b;
}
console.log(suma(5, 3)); // 8

// 2. Funciones anónimas
// Las funciones pueden ser anónimas y asignarse a una variable:

const resta = function(a, b) {
  return a - b;
};
console.log(resta(8, 5)); // 3

// 3. Arrow Functions
// Las arrow functions son una sintaxis más concisa para declarar funciones. 
// Se escriben usando la "flecha" (=>):

const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); // 8

// Características de las Arrow Functions:
// Más compactas: No necesitan function ni return si tienen una sola línea de código.
// Sin this propio: El valor de this se hereda del contexto donde se define.
// Paréntesis opcionales: Si tiene un solo parámetro, puedes omitir los paréntesis:

const cuadrado = x => x * x;
console.log(cuadrado(3)); // 9

// 4. Parámetros predeterminados
// Puedes establecer valores predeterminados para los parámetros si no se pasan al llamar a la 
// función:

function saludo(nombre = "Amigo") {
  return `¡Hola, ${nombre}!`;
}
console.log(saludo()); // ¡Hola, Amigo!
console.log(saludo("Guillermo")); // ¡Hola, Guillermo!

// 5. Funciones como argumentos
// Las funciones pueden pasarse como argumentos a otras funciones:

function ejecutar(fn, x, y) {
  return fn(x, y);
}
console.log(ejecutar((a, b) => a + b, 2, 3)); // 5