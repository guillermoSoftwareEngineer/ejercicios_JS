// prototype
// ¿Qué es prototype?
// prototype es una propiedad especial de las funciones en JavaScript.

// Solo las funciones tienen la propiedad prototype, no los objetos normales.
// ¿Para qué sirve?

// Sirve para añadir propiedades y métodos que serán compartidos por todos los objetos creados 
// a partir de esa función, si se usa como un "constructor".

// ¿Por qué es importante?

// Optimización: En lugar de copiar métodos para cada objeto creado, 
// los métodos definidos en prototype se comparten entre todos los objetos.
// Permite extender las capacidades de los objetos creados por una función.

// PASOS DE CREACION

// primero crear el objeto de referencia mediante una funcion :

function Persona(nombre) {
    this.nombre = nombre; // Propiedad específica de cada objeto
}

// segundo  Definimos un método en el prototype, relacionado al objeto creado en el paso anterior:

Persona.prototype.saludar = function () {
    console.log("Hola, me llamo " + this.nombre);
};

// tercero Creamos objetos usando Persona, para que estos puedan usar el prototype
const persona1 = new Persona("Juan");
const persona2 = new Persona("María");

cuarto podemos ejecutar el objeto con el metodo creado

persona1.saludar(); // "Hola, me llamo Juan"
persona2.saludar(); // "Hola, me llamo María"
es como crear propiedades que funcionan, para multiples objetos


// 10 Ejercicios de prototype
// Ejercicio 1:
// Crea una función constructora llamada Vehiculo con propiedades marca y modelo. 
// Usa el prototype para añadir un método detalles que imprima "Este vehículo es un [marca] 
// modelo [modelo]".

function vehicule (marca,modelo){
    this.marca = marca
    this.modelo= modelo
}

vehicule.prototype.detalles = function(){
    console.log(`Este vehículo es un [marca] 
// modelo [modelo]`)
}

// Ejercicio 2:
// Crea un método calcularEdad en el prototype de una función constructora Persona, 
// 
// que reciba el año actual y calcule la edad basado en una propiedad anioNacimiento.

// Ejercicio 3:
// Añade una propiedad compartida esElectronico con valor true al prototype de una función Dispositivo. 
// 
// Luego crea dos dispositivos diferentes y verifica el valor de la propiedad.

// Ejercicio 4:
// Define una función constructora Libro con propiedades titulo y autor. 
// 
// Usa el prototype para añadir un método describir que imprima "El libro [titulo] fue escrito por 
// [autor]".

// Ejercicio 5:
// Crea un método actualizarMarca en el prototype de una función Coche, 
// 
// que permita cambiar el valor de la propiedad marca de un objeto creado con esa función.

// Ejercicio 6:
// Crea una función constructora Casa con una propiedad habitaciones. 
// 
// Usa el prototype para añadir un método agregarHabitacion que incremente la cantidad de 
// habitaciones en uno.

// Ejercicio 7:
// Usa prototype para añadir un método area a una función constructora Rectangulo. 
// 
// Este método debe calcular el área usando las propiedades base y altura del rectángulo.

// Ejercicio 8:
// Crea un método en el prototype de una función Estudiante que permita mostrar la lista de materias 
// 
// inscritas (almacenadas en un arreglo dentro de cada objeto).

// Ejercicio 9:
// Añade una propiedad color al prototype de una función Pintura. 
// 
// Luego, sobrescribe esa propiedad para un objeto específico.

// Ejercicio 10:
// Extiende el prototype de String para añadir un método esPalindromo que determine 
// 
// si una cadena es un palíndromo (se lee igual al derecho y al revés).