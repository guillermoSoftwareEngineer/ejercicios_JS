// Método: endsWith

// endsWith(substring) verifica si un string termina con una subcadena específica.
// Devuelve true si el string termina con la subcadena, o false si no.
// Es sensible a mayúsculas y minúsculas, por lo que "PDF" y "pdf" no se consideran iguales.

// Sintaxis básica:
let texto = "archivo.txt";
console.log(texto.endsWith(".txt")); // true
console.log(texto.endsWith(".pdf")); // false

// Ejercicio 1: Validar la extensión de un archivo
// Declara una variable archivo con el valor "documento.pdf".
//  Usa endsWith para verificar si el archivo termina con ".pdf".

let archivo = "documento.pdf"
let archivoComprobado = archivo.endsWith(".pdf")
console.log(`La condicion de que el archivo finaliza con .pdf es ${archivoComprobado}`)

// Ejercicio 2: Validar la terminación de una URL
// Declara una variable url con el valor "https://example.com/index.html". 
// Usa endsWith para comprobar si la URL termina con ".html".
let variable = 'Final
https://example.com/index.html'
let variableComprobada = variable.endsWith(".html")
console.log(`La condicion de que la variable finaliza con .html es ${variableComprobada}`)

// Ejercicio 3: Comprobar la terminación de una palabra
// Declara una variable palabra con el valor "increíble". 
// Usa endsWith para verificar si la palabra termina con "ble".

let palabra = "increíble"
let palabraComprobada = palabra.endsWith("ble")
console.log(`La condicion de que la palabra finaliza con "ble" es ${palabraComprobada}`)

// Ejercicio 4: Validar el final de un número de serie
// Declara una variable numeroSerie con el valor "12345-ABC". 
// Usa endsWith para comprobar si el número de serie termina con "ABC".

let numeroSerie ="12345-ABC"
let serieComprobada = numeroSerie.endsWith("ABC")
console.log(`La condicion de que el numero de serie finaliza con "ABC" es ${serieComprobada}`)

// Ejercicio 5: Validar múltiples extensiones
// Declara una variable archivoFinal con el valor "reporte_final.docx". 
// Usa una condición para verificar si el archivo termina con ".docx" o ".pdf".

let archivoFinal ='reporte_final.docx'
if (archivoFinal
    .endsWith(".doc")===true) {
    console.log(`El archivo contiene ".doc" al final`)
} else if(archivoFinal
    .endsWith(".pdf")===true) {
    console.log(`El archivo contiene ".pdf" al final`)
}else{
    console.log(`El archivo no finaliza ni con ".pdf", ni con ".docx`)
}