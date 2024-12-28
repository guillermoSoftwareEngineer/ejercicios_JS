// 2. Métodos de las funciones
// Los métodos son funciones que se pueden declarar con this, dentro de la funcion principal:

// 2.1. call
// Llama a una función con un contexto (this) específico y argumentos individuales.
// Ejemplo:

function saludar(saludo) {
    console.log(`${saludo}, soy ${this.nombre}`);
}
const persona = { nombre: "Guillermo" };
saludar.call(persona, "Hola"); // Hola, soy Guillermo

// 2.2. apply
// Similar a call, pero los argumentos se pasan en un array.
// Ejemplo:

saludar.apply(persona, ["Hola"]); // Hola, soy Guillermo

// 2.3. bind
// Crea una nueva función con un contexto (this) fijado, sin ejecutarla.
// Ejemplo:

const saludarPersona = saludar.bind(persona);
saludarPersona("Hola"); // Hola, soy Guillermo

// 2.4. toString
// Devuelve el código fuente de la función como una cadena.
// Ejemplo:

function ejemplo() {
    return "Hola";
}
console.log(ejemplo.toString());

// 2.5. length y name
// Son propiedades pero se acceden como métodos al analizarlas.