// Función Constructora
// Una función constructora es una plantilla para crear múltiples objetos con la misma estructura. 
// Se usa con la palabra clave new para inicializar un nuevo objeto.

// Cómo funciona:
// Declaras una función con mayúscula inicial (por convención).
// Usas this para definir propiedades del nuevo objeto.
// Cuando llamas la función con new, se crea un objeto vacío, y this apunta a ese objeto.
// Ejemplo básico:

// javascript
// Copiar código
function Animal(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;

    this.hacerSonido = function () {
        console.log(`${this.tipo} dice: ${this.sonido}`);
    };
}

const perro = new Animal("Perro", "Guau");
const gato = new Animal("Gato", "Miau");

perro.hacerSonido(); // Perro dice: Guau
gato.hacerSonido(); // Gato dice: Miau
