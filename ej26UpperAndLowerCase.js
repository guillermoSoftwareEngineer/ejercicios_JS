
// toLowerCase y toUpperCase

// toLowerCase() convierte todos los caracteres de un string a minúsculas.
// toUpperCase() convierte todos los caracteres de un string a mayúsculas.
// Estos métodos son útiles para comparar strings sin importar mayúsculas o 
// minúsculas, o para formatear textos de manera uniforme.


// Sintaxis básica:
let texto = "JavaScript es Genial";

// Convertir a minúsculas
let minusculas = texto.toLowerCase();
console.log(minusculas); // "javascript es genial"

// Convertir a mayúsculas
let mayusculas = texto.toUpperCase();
console.log(mayusculas); // "JAVASCRIPT ES GENIAL"

// Ejercicio 1: Normalizar un nombre
// Declara una variable nombre con el valor "jUAn péRez". 
// Usa ambos métodos para convertir el nombre a minúsculas y a mayúsculas.

let nombre = "jUAn péRez"

let nombreMin = nombre.toLowerCase()
let nombreMay = nombre.toUpperCase()
console.log(`El nombre en mayusculas es ${nombreMay}`)
console.log(`El nombre en minusculas es ${nombreMin}`)

// Ejercicio 2: Comparar palabras insensibles a mayúsculas
// Declara dos variables:

// palabra1 con el valor "JavaScript".
// palabra2 con el valor "javascript".
// Usa toLowerCase para verificar si ambas palabras son iguales, sin importar las mayúsculas.


let palabra1 = "JavaScript"
let palabra2 = "javascript"



if (palabra1.toLowerCase()===palabra2.toLowerCase()) {
    console.log(`La palabra ${palabra1} es igual a la palabra ${palabra2}`)
} else {
    console.log(`La palabra ${palabra1} NO es igual a la palabra ${palabra2}`)
}

// Ejercicio 3: Formatear un título
// Declara una variable titulo con el valor "bienvenidos a JAVASCRIPT". 
// Usa toLowerCase y toUpperCase para formatearlo completamente en minúsculas y luego en mayúsculas.

let titulo = "bienvenidos a JAVASCRIPT"
let enMin= titulo.toLowerCase()
let enMay= titulo.toUpperCase()
console.log(`la palabra en minusculas es ${enMin}`)
console.log(`la palabra en mayusculas es ${enMay}`)


// Ejercicio 4: Validar un correo electrónico
// Declara una variable correo con el valor "Usuario@Ejemplo.Com".
// Usa toLowerCase para asegurarte de que el correo sea siempre comparado en minúsculas.

let correo = "Usuario@Ejemplo.Com"

let correoMin =correo.toLowerCase()
console.log(`El correo en minusculas es ${correoMin}`)

// Ejercicio 5: Comparar dominios de correo electrónico
// Declara dos variables:

// correo1 con el valor "Usuario@Ejemplo.Com".
// correo2 con el valor "usuario@ejemplo.com".
// Usa toLowerCase para verificar si ambos correos son iguales sin importar las mayúsculas o minúsculas.


let correo1 = "Usuario@Ejemplo.Com"
let correo2 = "usuario@ejemplo.com"

if (correo1.toLowerCase()===correo2.toLowerCase()) {
    console.log(`El correo ${correo1} es igual a ${correo2} sin importar las mayúsculas o minúsculas`)
} else {
    console.log(`El correo ${correo1} NO es igual a ${correo2} sin importar las mayúsculas o minúsculas`)
}
