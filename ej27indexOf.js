// indexOf

// indexOf(substring) busca la posición de la primera ocurrencia de una subcadena en un string.
// Devuelve:
// El índice (posición) donde comienza la subcadena si la encuentra.
// -1 si la subcadena no está presente.
// Es sensible a mayúsculas y minúsculas, por lo que "Hola" y "hola" no se consideran iguales.
// Sintaxis básica:
let texto = "Aprender JavaScript es divertido";
let posicion = texto.indexOf("JavaScript"); // 9
console.log(posicion);


// Ejercicio 1: Encontrar una palabra en una frase
// Declara una variable frase con el valor "El aprendizaje de JavaScript es emocionante". 
// Usa indexOf para encontrar la posición de la palabra "JavaScript".

let frase = "El aprendizaje de JavaScript es emocionante"
let palabra = "JavaScript"
let encontrado = frase.indexOf(palabra)
console.log(`la palabra "${palabra}" se encuentra en la posicion "${encontrado}" de la frase`)

// Ejercicio 2: Verificar si una palabra está en una frase
// Declara una variable mensaje con el valor "Bienvenido al curso de programación". 
// Usa indexOf para verificar si la palabra "curso" está presente en el mensaje.
 let mensaje = "Bienvenido al curso de programación"
 let palabraBuscada ="curso"
 let presente = mensaje.indexOf(palabraBuscada)

 if (presente === -1) {
    console.log(`la palabra "${palabraBuscada}" NO esta presente en la frase "${mensaje}"`)
 } else {
    console.log(`la palabra "${palabraBuscada}" SI esta presente en la frase "${mensaje}"`)    
 }

// Ejercicio 3: Comprobar una letra en una palabra
// Declara una variable palabra1 con el valor "increíble". 
// Usa indexOf para verificar si la letra "i" aparece en la palabra.

let palabra1 = "increíble"
let letra = "i"
let seEncuentra=palabra1.indexOf(letra)

if (seEncuentra=== -1) {
     console.log(`la letra "${letra}" NO esta presente en la palabra "${palabra1}"`) 
} else {
    console.log(`la letra "${letra}" SI esta presente en la palabra "${palabra1}"`) 
}



// Ejercicio 4: Validar una extensión de archivo
// Declara una variable archivo con el valor "documento.pdf". 
// Usa indexOf para verificar si el archivo tiene la extensión ".pdf".

let archive = "documento.pdf"
let extension = ".pdf"
let comprobado = archive.indexOf(extension)

if (comprobado === -1) {
    console.log(`la extension "${extension}" NO esta presente en el archivo "${archive}"`) 
} else {
    console.log(`la extension "${extension}" SI esta presente en el archivo "${archive}"`) 
}

// Ejercicio 5: Buscar múltiples palabras
// Declara una variable texto1 con el valor "HTML, CSS, JavaScript, Python". 
// Usa indexOf para encontrar la posición de "Python" en el texto1.

 let texto1 = "HTML, CSS, JavaScript, Python"
 let ubicacion = texto1.indexOf("Python")

 console.log(`La posicion de Python en el texto comienza desde la posicion ${ubicacion} del texto ${texto1}`)
