// Explicación de this en las funciones
// El contexto de this en JavaScript se refiere al objeto en el que se está ejecutando la función actual. 
// El valor de this puede cambiar dependiendo de cómo se llame a la función.

// 1. this en funciones normales
// Cuando llamas a una función de manera global, this generalmente apunta al objeto global:

// En el navegador, el objeto global es window.
// Ejemplo:


function mostrarContexto() {
    console.log(this);
}
mostrarContexto(); // En un navegador, imprimirá el objeto `window`.

// 2. this en un método de un objeto
// Cuando una función es llamada como un método de un objeto, this se refiere al objeto que contiene el método.

// Ejemplo:

const persona = {
    nombre: "Guillermo",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    },
};
persona.saludar(); // Hola, soy Guillermo

// Aquí, this.nombre se refiere a la propiedad nombre del objeto persona.

// 3. this en una función constructora
// Una función constructora es una función especial utilizada para crear objetos. 
// Usamos la palabra clave new para llamarla. Dentro de una función constructora, 
// this se refiere al nuevo objeto que se está creando.

// Ejemplo:

function Persona(nombre, edad) {
    this.nombre = nombre; // `this` apunta al nuevo objeto
    this.edad = edad;
}

const guillermo = new Persona("Guillermo", 30);
console.log(guillermo); // Persona { nombre: 'Guillermo', edad: 30 }

// 4. Arrow Functions y this
// Las arrow functions no tienen su propio this. En lugar de eso, 
// heredan el valor de this del contexto donde se definieron.

// Ejemplo:

const objeto = {
    nombre: "Guillermo",
    saludar: function () {
        const arrow = () => {
            console.log(`Hola, soy ${this.nombre}`); // Hereda el `this` del método `saludar`
        };
        arrow();
    },
};
objeto.saludar(); // Hola, soy Guillermo

console.log("========================Ejercicios ==============================================")


// 1.Crea una función global y muestra el valor de this dentro de ella.

function global() {
console.log(this)
}
global()

// 2.Escribe una función que use this para acceder a una propiedad del 
// objeto global (como window.innerWidth en navegadores).

// uasre una funcion creada con una propiedad creada por mi y accedere a ella
function xMi(){
    this.mensaje = "Esta es la propiedad mensaje"
    this.escribir = console.log(this.mensaje)
}

xMi()

console.log("-------------------------------------------------------------------------------")


// 3.Declara una función normal y usa 'use strict'; para ver qué pasa con el valor de this.

function normal (){
    'use strict'// en uso estricto el objeto this se convierte en "undefined"
    console.log(this)
}

normal()

console.log("-------------------------------------------------------------------------------")


// 4.Crea una función que asigne el valor de this a una variable local y muestra esa variable.

function asignar (){
    varLocal = this
    console.log(varLocal)
}

asignar()

console.log("-------------------------------------------------------------------------------")


// Declara una función dentro de otra y observa cómo cambia el valor de this en cada contexto.

function grande(){
    console.log(this)
    this.pequena = function(){
        console.log(this)
    }
    console.log(pequena)
}
grande()
grande.pequena()


// Crea un objeto persona con una propiedad nombre y un método que use this para mostrar el nombre.

function persona(){
    this.nombre=
}


// Agrega un método adicional que modifique otra propiedad del mismo objeto usando this.
// Declara un objeto con varios métodos que compartan this. Usa uno de esos métodos para llamar a otro.
// Crea un método y guárdalo en una variable fuera del objeto. Luego, llámalo y observa cómo cambia this.
// Usa this en un objeto que tenga un método dentro de un método (funciones anidadas).

// Crea una función constructora Persona que inicialice las propiedades nombre y edad usando this.
// Declara una función constructora con un método que use this para mostrar sus propiedades.
// Crea dos objetos usando la misma función constructora y muestra cómo this funciona de manera independiente en cada instancia.
// Usa this para modificar una propiedad de un objeto creado con una función constructora.
// Declara un método en el prototype de la función constructora y usa this dentro del método.

// Declara una arrow function en el ámbito global y muestra el valor de this.
// Usa una arrow function dentro de un método de un objeto y muestra cómo hereda el valor de this.
// Declara una función normal que contiene una arrow function. Usa this en ambas y explica el comportamiento.
// Crea un método en un objeto que use una arrow function para acceder a una propiedad del objeto.
// Declara una función constructora y usa una arrow function dentro de uno de sus métodos. Muestra cómo this se comporta.





