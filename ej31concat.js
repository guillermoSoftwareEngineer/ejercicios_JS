//  concat

// concat() se utiliza para combinar dos o más strings en uno solo.
// Aunque puedes usar el operador + para concatenar strings, c
// oncat es una alternativa explícita y legible.

// Sintaxis básica:

let texto1 = "Hola";
let texto2 = "Mundo";
let resultado = texto1.concat(" ", texto2);
console.log(resultado); // "Hola Mundo"

// Características clave:
// Acepta múltiples argumentos:

// Puedes concatenar varios strings en una sola llamada.

let resultado2 = texto1.concat(" ", texto2, " ¡Bienvenido!");
console.log(resultado2); // "Hola Mundo ¡Bienvenido!"

// No modifica los strings originales:

// concat devuelve un nuevo string sin alterar los originales.
// Alternativa al operador +:

// Aunque el operador + es más común, concat puede ser útil para mayor claridad 
// en concatenaciones complejas.


// Ejercicio 1: Combinar un saludo
// Declara dos variables:
// saludo con el valor "Hola".
// nombre con el valor "Juan".
// Usa concat para combinarlas en un solo string con un espacio entre ellas.

let saludo = "Hola"
let nombre ="Juan"

let result = saludo.concat(" ",nombre)
console.log(result)

// Ejercicio 2: Crear una frase completa
// Declara tres variables:
// parte1 con el valor "Aprender".
// parte2 con el valor "JavaScript".
// parte3 con el valor "es divertido".
// Usa concat para unirlas en una frase completa separada por espacios.

let parte1 = "Aprender"
let parte2 = "JavaScript"
let parte3 = "es divertido"

let completa =parte1.concat(" ",parte2," ",parte3)

console.log(completa)

// Ejercicio 3: Concatenar con un carácter especial
// Declara dos variables:
// primeraPalabra con el valor "Front".
// segundaPalabra con el valor "End".
// Usa concat para unirlas con un guion (-) entre ellas.

let primPalabra = "Front"
let segPalabra = "End"

let juntas = primPalabra.concat("-",segPalabra)
console.log(juntas)

// Ejercicio 4: Añadir un signo de exclamación
// Declara una variable frase con el valor "Esto es increíble". 
// Usa concat para añadir un signo de exclamación (!) al final.

let frase = "Esto es increíble"
let exclama = frase.concat("!")
console.log(exclama)

// Ejercicio 5: Concatenar múltiples líneas
// Declara tres variables:
// linea1 con el valor "Primera línea.".
// linea2 con el valor "Segunda línea.".
// linea3 con el valor "Tercera línea.".
// Usa concat para unirlas, separándolas con saltos de línea (\n).

let linea1 ="Primera línea."
let linea2 ="Segunda línea."
let linea3 ="Tercera línea."

let conjuncion = linea1.concat("\n",linea2,"\n",linea3)
console.log(conjuncion)
