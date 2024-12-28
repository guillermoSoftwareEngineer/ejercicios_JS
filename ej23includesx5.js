// includes
// includes(substring) verifica si un string contiene una determinada 
// secuencia de caracteres (substring).
// Devuelve true si encuentra la secuencia de caracteres, o false si no la encuentra.
// Es sensible a mayúsculas y minúsculas, lo que significa que "Hola" y "hola" no se consideran iguales.

// Sintaxis básica:
let texto = "Aprendiendo JavaScript es divertido";
console.log(texto.includes("JavaScript")); // true
console.log(texto.includes("python")); // false

// Ejercicio 1: Buscar una palabra en una frase
// Declara una variable frase con el valor "El aprendizaje de JavaScript es emocionante". 
// Usa includes para verificar si la palabra "JavaScript" está presente.

let frase = 'El aprendizaje de JavaScript es emocionante'
let palabra ='JavaScript'
let estaPresente = frase.includes(palabra)

console.log(`En la frase " ${frase} " , la condicion de que la palabra " ${palabra} "  este presente es " ${estaPresente} " `)

// Ejercicio 2: Comprobar una palabra en mayúsculas y minúsculas
// Declara una variable titulo con el valor "Desarrollo Web con HTML, CSS y javascript". 
// Usa includes para comprobar si "JavaScript" (con mayúscula) está presente y observa el resultado.

let titulo = "Desarrollo Web con HTML, CSS y javascript"
let palabraJavaScript = "JavaScript"
let encontrar = titulo.includes(palabraJavaScript)
console.log(`En la frase" ${titulo}" la palabra "${palabraJavaScript} "con mayuscula, la condicion de que este es : "${encontrar}"`)

// Ejercicio 3: Validar un correo electrónico
// Declara una variable correo con el valor "usuario@example.com". 
// Usa includes para verificar si el correo contiene "@".

let correo = "usuario@example.com"
let simbolo = "@"
let incluye =correo.includes(simbolo)
console.log(`En el correo ${correo} la condicion de que el simbolo ${simbolo} aparesca es ${incluye}`)

// Ejercicio 4: Buscar caracteres específicos
// Declara una variable codigo con el valor "ABC123". 
// Usa includes para verificar si contiene "123".

let codigo = "ABC123"
let stringNumeros = "123"

let contieneNumeros = codigo.includes(stringNumeros)

console.log(`La condicion de que en el string alfanumerico ${codigo}, contenga el string numerico ${stringNumeros}, es ${contieneNumeros}`)

// Ejercicio 5: Validar la extensión de un archivo
// Declara una variable archivo con el valor "documento.pdf". 
// Usa includes para verificar si el archivo tiene la extensión ".pdf".

let archivo = "documento.pdf"
let extension =".pdf"
let contieneExt = archivo.includes(".pdf")
console.log(`En el archivo ${archivo}, la condicion de que este contenga la extension ${extension}, es ${contieneExt}`)