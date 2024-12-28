// Reemplazo básico: Declara una variable mensaje con el valor "Hola mundo". 
// Usa replace para reemplazar "mundo" por "amigo".

const mensaje = 'Hola mundo'
console.log(`El mensaje era: ${mensaje}`)//los strings son inmutables
let nuevoMensaje=mensaje.replace("mundo","amigo")//Replace crea un nuevo string
console.log(`Ahora mensaje es: ${nuevoMensaje}`)