// split
// split(separador) divide un string en partes usando un separador y devuelve un array con las partes resultantes.
// Es muy útil para procesar datos que están separados por comas, espacios u otros delimitadores.
// Cómo funciona:
// Si usas una coma (,) como separador, dividirá el texto en cada coma.
// Si usas un espacio ( ), dividirá el texto en cada espacio.
// Si no especificas un separador, devuelve el string completo como un único elemento del array.

// Sintaxis:
let texto = "manzana, pera, plátano";
let frutas = texto.split(", "); 
console.log(frutas);

// Ejercicio 1: Dividir una lista
// Declara una variable productos con el valor "pan, leche, huevos". 
// Usa split para dividir el string en un array de productos.

let productos = 'pan, leche, huevos'
console.log(productos)
let productosSplit = productos.split(", ")
console.log(productosSplit)

// Ejercicio 2: Dividir nombres
// Declara una variable nombres con el valor "Juan Marta Luis". 
// Usa split para dividir los nombres en un array, separándolos por espacios.

let nombres ='Juan Marta Luis'
let nombresSplit = nombres.split(" ")
console.log(nombresSplit)

// Ejercicio 3: Dividir en letras
// Declara una variable palabra con el valor "JavaScript". 
// Usa split para dividir el string en un array donde cada elemento sea una letra.

let palabra ='JavaScript'
let palabraSplit = palabra.split("")
console.log(palabraSplit)

// Ejercicio 4: Dividir una fecha
// Declara una variable fecha con el valor "2024-12-07". 
// Usa split para dividir el string en partes (año, mes, día) utilizando "-" como separador.

let fecha ='2024-12-07'
let fechaSplit =fecha.split("-")
console.log(fechaSplit)

// Ejercicio 5: Dividir por puntos
// Declara una variable oraciones con el valor "Hola. Soy Juan. Estoy aprendiendo JavaScript.". 
// Usa split para dividir el string en oraciones utilizando el punto (.) como separador.

let oraciones = 'Hola. Soy Juan. Estoy aprendiendo JavaScript'
let oracionesSplit = oraciones.split(".")
console.log(oracionesSplit)