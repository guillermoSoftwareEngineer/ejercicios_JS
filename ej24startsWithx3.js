// startsWith
// startsWith(substring) verifica si un string comienza con una subcadena específica.
// Devuelve true si el string comienza con la subcadena, o false si no.
// Es sensible a mayúsculas y minúsculas.

// Sintaxis básica:
let texto = "JavaScript es genial";
console.log(texto.startsWith("JavaScript")); // true
console.log(texto.startsWith("javascript")); // false (sensible a mayúsculas)

// Ejercicio 1: Comprobar el inicio de una frase
// Declara una variable frase con el valor "Bienvenido a JavaScript".
//  Usa startsWith para verificar si la frase comienza con "Bienvenido".

let frase = "Bienvenido a JavaScript"
let buscar = "Bienvenido"
let fraseContiene =  frase.startsWith("Bienvenido")
console.log(`La condicion de que la frase "${frase}" contiene "${buscar}" es "${ fraseContiene}"`)

// Ejercicio 2: Validar un protocolo en una URL
// Declara una variable url con el valor "https://example.com". 
// Usa startsWith para comprobar si la URL comienza con "https".

let url ="https://example.com"
let comienzo = "https"
let contiene = url.startsWith(comienzo)
console.log(`La condicion de que la url "${url}" contiene "${comienzo}" es "${contiene}"`)

// Ejercicio 3: Validar un prefijo en un archivo
// Declara una variable archivo con el valor "doc_12345.pdf". 
// Usa startsWith para comprobar si el archivo comienza con "doc_".

let archivo = "doc_12345.pdf"
let inicio = "doc_"
let doc = archivo.startsWith(inicio)
console.log(`La condicion de que el documento "${archivo}" contiene en su inicio "${inicio}" es "${doc}"`)