// Casting y Coerción en JavaScript
// Ambos términos se refieren a la conversión de tipos de datos en JavaScript, pero hay una diferencia clave entre ellos:

// 1. Coerción
// Definición: Es el proceso de conversión de tipos de datos realizado automáticamente por JavaScript.
// Clave: La coerción es implícita, lo que significa que JavaScript decide cuándo y cómo convertir un 
// valor de un tipo a otro.
// Ejemplo común:
// Cuando usamos operadores como +, -, *, o ==, JavaScript intenta convertir automáticamente los valores 
// para que la operación tenga sentido.
// Ejemplo de coerción implícita:

console.log("5" + 2); // "52" (La cadena "5" se concatena con 2)
console.log("5" * 2); // 10 (La cadena "5" se convierte en número)
console.log(5 == "5"); // true (JavaScript convierte "5" a número antes de comparar)
// Notas importantes:

// La coerción puede ser útil, pero a veces genera resultados inesperados, lo que hace que el código 
// sea difícil de leer y depurar.
// 2. Casting
// Definición: Es el proceso de conversión de tipos de datos que realiza el desarrollador explícitamente.
// Clave: El casting es explícito, es decir, tú decides cuándo y cómo convertir un valor usando métodos 
// o funciones.
// Ejemplo común:
// Usar constructores como String(), Number(), o Boolean() para convertir valores.
// Ejemplo de casting explícito:

const valor = "42";
console.log(Number(valor)); // 42 (La cadena se convierte explícitamente en número)
console.log(String(123)); // "123" (El número se convierte explícitamente en cadena)
console.log(Boolean(0)); // false (El número 0 se convierte explícitamente en booleano)

// Operador +: Se utiliza tanto para concatenar cadenas como para sumar números.

console.log(5 + "5"); // "55" (Coerción a cadena)
console.log(5 + +"5"); // 10 (El operador + convierte "5" en número)
// 
Comparación == versus ===:

console.log(5 == "5"); // true (Coerción implícita convierte "5" a número)
console.log(5 === "5"); // false (No hay coerción; los tipos son diferentes)