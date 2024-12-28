// trim
// Descripción:
// trim() elimina los espacios en blanco del inicio y el final de un string.
// Es útil cuando trabajas con datos ingresados por usuarios o con strings que podrían
//  tener espacios innecesarios.

// Sintaxis básica:
let texto = "   Hola mundo   ";
let textoLimpio = texto.trim();
console.log(textoLimpio); 
console.log(texto.length)
console.log(textoLimpio.length)

// Ejercicio 1: Limpiar un saludo
// Declara una variable saludo con el valor " Hola ". 
// Usa trim para eliminar los espacios en blanco.

let saludo = " Hola "
let saludoTrim = saludo.trim()
console.log(saludoTrim)
console.log(saludo.length)
console.log(saludoTrim.length)

// Ejercicio 2: Limpiar un nombre completo
// Declara una variable nombreCompleto con el valor " Juan Pérez ". 
// Usa trim para obtener el nombre limpio.

let nombreCompleto = " Juan Pérez "
let nombreCompletoLimpio = nombreCompleto.trim()
console.log(nombreCompleto)
console.log(nombreCompleto.length)
console.log(nombreCompletoLimpio.length)

// Ejercicio 3: Limpiar datos de un formulario
// Declara una variable entrada con el valor " correo@example.com ". 
// Usa trim para obtener solo el correo sin espacios extra.

let entrada =' correo@example.com  '
let entradaLimpia = entrada.trim()
console.log(entrada)
console.log(entrada.length)
console.log(entradaLimpia.length)

// Ejercicio 4: Comparar strings con y sin espacios
// Declara dos variables:
// textoOriginal con el valor " JavaScript ".
// textoOriginalLimpio que será el resultado de aplicar trim sobre textoOriginal. 
// Luego, compara ambos strings para confirmar si son iguales o diferentes.

let textoOriginal = " JavaScript "
let textoOriginalLimpio= textoOriginal.trim()
let resultado =textoOriginal.length==textoOriginalLimpio.length
console.log(textoOriginal.length==textoOriginalLimpio.length)
console.log(`La condicion de que los dos textos tenga la misma extension es: ${resultado}`)

// Ejercicio 5: Limpiar múltiples datos
// Declara una variable datos con el valor " dato1 , dato2 , dato3 ". 
// Usa split para separar los datos en un array y luego aplica trim a 
// cada elemento del array para limpiarlos.

let datos =" dato1 , dato2 , dato3 "
let separados = datos.split(", ")
let index0 = separados[0].trim()
let index1 = separados[1].trim()
let index2 = separados[2].trim()
console.log(separados)
console.log(`el valor de lenght index0 es : ${index0.length}`)
console.log(`el valor de lenght index1 es : ${index1.length}`)
console.log(`el valor de lenght index2 es : ${index2.length}`)

