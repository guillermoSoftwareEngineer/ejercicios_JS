// charAt

// charAt(index) devuelve el carácter en la posición especificada (index) dentro de un string.
// Si el índice está fuera del rango del string, devuelve una cadena vacía ("").

// Sintaxis básica:
let texto = "JavaScript";
console.log(texto.charAt(0)); // "J" (primer carácter)
console.log(texto.charAt(4)); // "S" (quinto carácter)
console.log(texto.charAt(100)); // "" (índice fuera de rango)

// Ejercicio 1: Obtener el primer carácter
// Declara una variable frase con el valor "Aprender JavaScript es divertido". 
// Usa charAt para obtener el primer carácter de la frase.

let frase = "Aprender JavaScript es divertido"
let posicion = frase.charAt(0)
console.log(`El primer caracter dentro del string "${frase}" es la letra "${posicion}"`)

// Ejercicio 2: Obtener el último carácter
// Declara una variable palabra con el valor "increíble". Usa charAt para obtener el último carácter.

let palabra ="increíble"
console.log(`El ultimo caracter en la palabra "${palabra}" es "${palabra.charAt(palabra.length -1)}"`)

// Ejercicio 3: Acceder a un carácter intermedio
// Declara una variable nombre con el valor "JavaScript". Usa charAt para obtener el carácter en la posición 4.

let variable = "JavaScript"
let obtener = 4
let caracter = variable.charAt(obtener)
console.log(`Dentro de la palabra "${variable}" el caracter numero "${obtener}" es el "${caracter}", por que el conteo empieza en "0"`)

// Ejercicio 4: Validar si un string comienza con un carácter específico
// Declara una variable saludo con el valor "Hola Mundo". Usa charAt para verificar si el primer carácter es "H".

let saludo = "Hola Mundo"
let conteo = 0
let prime = saludo.charAt(0)

if (prime==="H") {
    console.log(`El primer caracter en la frase "${saludo}" SI es "${prime}"`)
} else {
    console.log(`El primer caracter en la frase "${saludo}" NO es "${prime}"`)
}

// Ejercicio 5: Combinar con indexOf
// Declara una variable texto1 con el valor "Bienvenido a JavaScript". 
// Usa indexOf para encontrar la posición de "J" y luego usa charAt para obtener el carácter en esa posición.

let texto1 ="Bienvenido a JavaScript"
letter= "J"
let numero =texto1.indexOf(letter)
console.log(`La letra "${letter}" se encuentra en la posicion "${numero}" del string "${texto1}" y La letra es "${texto1.charAt(numero)}" `)

