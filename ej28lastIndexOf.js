// lastIndexOf

// lastIndexOf(substring) busca la posición de la última ocurrencia de una subcadena en un string.
// Devuelve:
// El índice (posición) donde comienza la última ocurrencia si la encuentra.
// -1 si la subcadena no está presente.
// Es sensible a mayúsculas y minúsculas.
// Se puede especificar un segundo argumento para buscar desde un índice específico hacia atrás.
// Sintaxis básica:

let frase1 = "Aprender JavaScript es divertido, porque JavaScript es poderoso";
let ultimaPosicion = frase1.lastIndexOf("JavaScript");
console.log(ultimaPosicion); // 36 (última ocurrencia de "JavaScript")

// Uso del segundo argumento en lastIndexOf:

// ¿Qué hace el segundo argumento?

// El segundo argumento en lastIndexOf(substring, fromIndex) indica hasta qué posición (de izquierda a derecha) 
// debe buscar la última aparición de la subcadena.
// ¿Cómo funciona?

// La búsqueda sigue siendo hacia atrás (de derecha a izquierda), pero comienza desde el índice especificado por el segundo argumento.
// Ejemplo básico:


let texto = "abracadabra";
let posicion = texto.lastIndexOf("a", 7);
console.log(posicion); // Resultado: 5

// Ejercicio 1: Última ocurrencia de una palabra
// Declara una variable frase con el valor "El aprendizaje de JavaScript es divertido, 
// porque JavaScript es poderoso". Usa lastIndexOf para encontrar la posición de la última ocurrencia de "JavaScript".

let frase = "El aprendizaje de JavaScript es divertido,porque JavaScript es poderoso"
let encontrada = "JavaScript"
let ocurrencia = frase.lastIndexOf(encontrada)
console.log(`La palabra "${encontrada}" esta presente en la frase "${frase}" en la posicion "${ocurrencia}" `)

// Ejercicio 2: Última letra en una palabra
// Declara una variable palabra con el valor "increíble".
//  Usa lastIndexOf para encontrar la última aparición de la letra "i".

let  variable = "increíble"
let letra ="i"
let ultima = variable.lastIndexOf(letra)
console.log(`La palabra "${variable}" contiene la letra "${letra}" en la posicion "${ultima}"`)


// Ejercicio 3: Última coma en una lista
// Declara una variable lista con el valor "HTML, CSS, JavaScript, Python, Ruby". 
// Usa lastIndexOf para encontrar la posición de la última coma.

let lista = "HTML, CSS, JavaScript, Python, Ruby"
let simbolo = ","
let ultimoSimbolo = lista.lastIndexOf(",")
console.log(`La lista "${lista}", tiene el ultimo simbolo "${simbolo}"en la posicion "${ultimoSimbolo}"`)

// Ejercicio 4: Última aparición de una extensión de archivo
// Declara una variable archivo con el valor "documento.backup.pdf". 
// Usa lastIndexOf para encontrar la posición de ".pdf".

let archivo = "documento.backup.pdf"
let extension = ".pdf"
let extfind = archivo.lastIndexOf(extension)
console.log(`La extension "${extension}", se encuentra presente en el documento "${archivo}" en la posicion "${extfind}"`)

// Ejercicio 5: Buscar desde un índice específico
// Declara una variable textoNew con el valor "abracadabra". 
// Usa lastIndexOf para encontrar la última ocurrencia de "a" antes de la posición 7.

let textoNew = "abracadabra"
let letter = "a"
let lastFind = textoNew.lastIndexOf(letter,7)//indica que posicion buscar de derecha a izquierda(segundo argumento)
console.log(`La ultima ocurrencia de "${letter}" en la palabra "${textoNew}" es en la posicion "${lastFind}"`)

