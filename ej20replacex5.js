// Ejercicio 1: Reemplazo múltiple
// Declara una variable fruta con el valor "manzana, manzana, manzana".
//  Usa replaceAll para cambiar todas las ocurrencias de "manzana" por "pera".

let fruta = "manzana, manzana, manzana"

nuevaFruta = fruta.replaceAll("manzana","pera")
console.log(`La antigua variable era: ${fruta}`)
console.log(`La nueva variable es: ${nuevaFruta}`)

// Ejercicio 2: Cambiar palabras repetidas
// Declara una variable texto con el valor "JavaScript es genial, JavaScript es poderoso".
//  Usa replaceAll para cambiar todas las ocurrencias de "JavaScript" por "JS".

let texto = "JavaScript es genial, JavaScript es poderoso"
let aRemplazar="JavaScript"
let remplazo= "JS"

let nuevoTexto = texto.replaceAll(aRemplazar,remplazo)
console.log(`El antiguo texto era:${texto}`)
console.log(`El nuevo texto es:${nuevoTexto}`)

// Ejercicio 3: Modificar números repetidos
// Declara una variable numeros con el valor "1, 2, 3, 3, 4, 3". 
// Usa replaceAll para cambiar todas las ocurrencias de "3" por "tres".

let numeros = "1, 2, 3, 3, 4, 3" 
let digitos = '3'
let letras = 'tres'

let conLetras = numeros.replaceAll(digitos,letras)
console.log(`la variable con digitos era: ${numeros}`)
console.log(`la variable con letras es: ${conLetras}`)

// Ejercicio 4: Historia con palabras repetidas
// Declara una variable historia con el valor "Había una vez un dragón y otro dragón que vivían juntos". 
// Usa replaceAll para cambiar todas las ocurrencias de "dragón" por "caballo".

let historia = "Había una vez un dragón y otro dragón que vivían juntos"

let primPalabra = "dragón"
let segPalabra = "caballo"

let newHistoria = historia.replaceAll(primPalabra,segPalabra)

console.log(`La antigua historia decia: ${historia}`)
console.log(`La nueva historia dice: ${newHistoria}`)

// Declara una variable menu con el valor "Pizza, Hamburguesa, Hamburguesa, Ensalada". 
// Usa replaceAll para cambiar todas las ocurrencias de "Hamburguesa" por "Tacos"

let menu = "Pizza, Hamburguesa, Hamburguesa, Ensalada"

let cambio = "Hamburguesa"
let cambiada ="Tacos"

let nuevoMenu = menu.replaceAll(cambio,cambiada)

console.log(`El menu con hamburguesa es: ${menu}`)
console.log(`El menu con saludable es: ${nuevoMenu}`)