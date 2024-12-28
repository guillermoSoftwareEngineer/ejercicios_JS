// padStart y padEnd

// padStart(targetLength, padString):

// Añade caracteres al inicio de un string hasta alcanzar una longitud deseada (targetLength).
// Si el string ya es más largo que targetLength, no se realiza ningún cambio.
// padString es opcional. Si no se especifica, se usa un espacio como relleno.
// padEnd(targetLength, padString):

// Funciona igual que padStart, pero añade caracteres al final del string.

// Sintaxis básica:
let texto = "123";

// padStart
console.log(texto.padStart(5, "0")); // "00123"

// padEnd
console.log(texto.padEnd(5, "0")); // "12300"

// Características clave:
// Longitud del string:
// Si el string original ya tiene la longitud igual o mayor a targetLength, no se rellena.
// Relleno por defecto:
// Si no proporcionas padString, el relleno será con espacios.
// Versatilidad:
// Útil para formatear números, ajustar texto para tablas, o estandarizar salidas.

// Ejercicio 1: Formatear números con ceros
// Declara una variable numero con el valor "123". Usa padStart para formatear el número como 000123.

let numero ="123"
let formateado = numero.padStart(6,"0")
console.log(formateado)

// Ejercicio 2: Ajustar texto para tablas
// Declara una variable producto con el valor "Manzana". 
// Usa padEnd para rellenar el string con espacios hasta una longitud de 15 caracteres.
let producto = "Manzana"
let con15 = producto.padEnd(15," ")
console.log(con15)

// Ejercicio 3: Crear un identificador
// Declara una variable id con el valor "45". 
// Usa padStart para formatearlo como un ID de 6 dígitos: 000045.
let id = "45"
let seisDig = "45"
let esc = id.padStart(6,"0")
console.log(esc)

// Ejercicio 4: Ajustar texto con caracteres personalizados
// Declara una variable titulo con el valor "Título". 
// Usa padEnd para añadir guiones al final hasta alcanzar una longitud de 20 caracteres.

let titulo = "Título"
let conPad = titulo.padEnd(20,"-")
console.log(conPad)

// Ejercicio 5: Formatear números decimales
// Declara una variable precio con el valor "99". Usa padStart para formatear el precio como $099.

let precio = "99";
let con = "$".concat(precio.padStart(3, "0"));
console.log(con);
