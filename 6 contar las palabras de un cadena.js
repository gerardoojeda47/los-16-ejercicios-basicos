const contarPalabras = (cadena) => {
    // Eliminamos espacios en blanco al inicio y al final, luego dividimos por espacios
    const palabras = cadena.trim().split(/\s+/);
    return palabras.length === 1 && palabras[0] === '' ? 0 : palabras.length;
};

// Ejemplo de uso
const texto = prompt("Ingrese un texto para contar sus palabras:");
const cantidadPalabras = contarPalabras(texto);
console.log(cantidadPalabras);  // Salida: 4
