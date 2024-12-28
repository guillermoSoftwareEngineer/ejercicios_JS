// charCodeAt

// charCodeAt(index) devuelve el código Unicode del carácter en la posición especificada (index) dentro de un string.
// El código Unicode es un número que representa al carácter según el estándar UTF-16.

// Sintaxis básica:
let texto = "ABC";
console.log(texto.charCodeAt(0)); // 65 (Unicode de 'A')
console.log(texto.charCodeAt(1)); // 66 (Unicode de 'B')
console.log(texto.charCodeAt(2)); // 67 (Unicode de 'C')

// Características clave:
// Índices basados en cero:
// Igual que en charAt, el primer carácter está en la posición 0.
// Códigos Unicode:
// Cada carácter tiene un número único en Unicode. Por ejemplo:
// "A": 65
// "a": 97
// "0": 48
// Errores de rango:
// Si el índice está fuera del rango del string, devuelve NaN.

// Ejercicio 1: Obtener el código Unicode del primer carácter
// Declara una variable frase con el valor "Hola Mundo". 
// Usa charCodeAt para obtener el código Unicode del primer carácter.

let frase = "Hola Mundo"
let caracter = frase.charCodeAt(0)
console.log(`El codigo unicode del primer caracter de la frase "${frase}" es el "${caracter}" `)

// Ejercicio 2: Comparar mayúsculas y minúsculas
// Declara una variable letra1 con el valor "A" y letra2 con el valor "a". 
// Usa charCodeAt para obtener sus códigos Unicode y verifica cuál es mayor.

letra1= "A"
letra2= "a"

if (letra1.charCodeAt(0)>letra2.charCodeAt(0)) {
    console.log(`El valor mayor de unicode entre "${letra1}" y "${letra2}" Es el de "${letra1}" y es "${letra1.charCodeAt(0)}" `)
} else if(letra2.charCodeAt(0)>letra1.charCodeAt(0)) {
    console.log(`El valor mayor de unicode entre "${letra1}" y "${letra2}" Es el de "${letra2}" y es "${letra2.charCodeAt(0)}" `)
}else{
    console.log(`los dos valores de unicode entre  "${letra1}" y "${letra2}" es el mismo`)
}
// Ejercicio 3: Código Unicode de un número
// Declara una variable numero con el valor "123". 
// Usa charCodeAt para obtener el código Unicode del carácter "1".

let numero ="123"
let posicion = numero.charCodeAt(0)
console.log(`El codigo unicode del numero "${numero.charAt(0)}", es "${posicion}"`)
// Ejercicio 4: Validar un rango Unicode

// Declara una variable caracter1 con el valor "Z". Usa charCodeAt para verificar si su código Unicode 
// está entre 65 y 90 (rango de letras mayúsculas en Unicode).

let caracter1 ="Z"
let unicod = caracter1.charCodeAt()

if (unicod >= 65 && unicod <= 90) {

// primero la condicion >=65 En JavaScript, 
// las condiciones en un if se evalúan de izquierda a derecha.
// Si la primera condición en un && es falsa, el resto de la expresión no se evalúa 
// (esto se llama evaluación de cortocircuito).

    console.log(`El valor unicode de "${caracter1} No esta entre 65 y 90 (rango de letras mayúsculas en Unicode)`)
} else {
    console.log(`El valor unicode de "${caracter1}" SI esta entre 65 y 90 (rango de letras mayúsculas en Unicode)`)   
}

// Ejercicio 5: Combinar charAt y charCodeAt
// Declara una variable variable con el valor "¡Hola!". 
// Usa charAt para obtener el último carácter y luego usa charCodeAt para obtener su código Unicode.

let variable = "¡Hola!"
let lastChar = variable.charAt(variable.length-1)
console.log(`El codigo unicode del ultimo caracter de la frase "${variable}" que es el caracter "${lastChar}", tiene un valor de "${lastChar.charCodeAt(0)}"`)

