// substring

// substring(startIndex, endIndex) extrae una porción de un string entre dos índices:
// startIndex: posición inicial (incluida).
// endIndex: posición final (excluida).
// Si no se proporciona endIndex, se extrae hasta el final del string.
// Diferencias clave con slice:
// Orden de los índices:

// En substring, si startIndex > endIndex, los valores se intercambian automáticamente.
// En slice, los índices no se ajustan; simplemente devuelve una cadena vacía.
// No acepta valores negativos:

// En substring, los valores negativos se convierten a 0.
// En slice, los valores negativos se interpretan como índices desde el final del string.

// Sintaxis básica:
let texto = "JavaScript";

// Substring entre los índices 0 y 4
console.log(texto.substring(0, 4)); // "Java"

// Substring desde el índice 4 hasta el final
console.log(texto.substring(4)); // "Script"

// Si el inicio es mayor que el final, los intercambia
console.log(texto.substring(4, 0)); // "Java"

// Ejercicio 1: Extraer una palabra
// Declara una variable frase con el valor "Aprender JavaScript es divertido". 
// Usa substring para extraer la palabra "JavaScript".

let frase = "Aprender JavaScript es divertido"
let extraido = frase.substring(9,18)
console.log(extraido)

// Ejercicio 2: Obtener los primeros 5 caracteres
// Declara una variable mensaje con el valor "Hola Mundo". 
// Usa substring para obtener los primeros 5 caracteres.

let mensaje = "Hola Mundo"
let indiceInicio = 0
let indiceFin = 5
let prim = mensaje.substring(indiceInicio,indiceFin)
console.log(`el substring extraido desde el indice "${indiceInicio}", hasta el indice "${indiceFin}" es "${prim}"`)

// Ejercicio 3: Extraer caracteres desde la mitad
// Declara una variable palabra con el valor "increíble".
 // Usa substring para extraer desde la mitad hasta el final de la palabra.

let palabra = "increíble" 
let mitad = 4
let fin = palabra.length+1
let relizado = palabra.substring(mitad,fin)
console.log(`El string desde el indice de la mitad "${mitad}" hasta el indice final "${fin}" es "${relizado}"`) 

// Ejercicio 4: Invertir los índices
// Declara una variable texto con el valor "Frontend". 
 // Usa substring con los índices intercambiados (5, 2) para comprobar cómo se comporta.

let text = "Frontend"
let invertido = text.substring(5,2)//En substring, si el índice inicial es mayor que el índice final, 
// los valores se intercambian automáticamente. Por lo tanto, substring(5, 2) funciona como substring(2, 5).
console.log(invertido)

// Ejercicio 5: Extraer la extensión de un archivo
// Declara una variable archivo con el valor "documento.pdf". 
 // Usa substring para extraer la extensión del archivo (".pdf").

let archivo = "documento.pdf"
let extraido1 = archivo.substring(9,13)
console.log(extraido1)

