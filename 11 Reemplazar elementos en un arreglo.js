const reemplazarElemento = (arreglo, elementoAntiguo, elementoNuevo) => 
    arreglo.map(elemento => elemento === elementoAntiguo ? elementoNuevo : elemento);

// Ejemplo de uso
const frutas = ['manzana', 'banana', 'naranja', 'banana'];
const elementoAntiguo = prompt("Ingrese el texto que desea reemplazar");
const elementoNuevo = prompt("Ingrese el nuevo elemento");
const nuevoArreglo = reemplazarElemento(frutas, elementoAntiguo, elementoNuevo);
console.log(nuevoArreglo);  // Salida: ['manzana', 'kiwi', 'naranja', 'kiwi']
