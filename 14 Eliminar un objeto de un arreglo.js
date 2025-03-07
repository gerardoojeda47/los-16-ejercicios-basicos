const eliminarPersonaPorNombre = (personas, nombre) => {
    return personas.filter(persona => persona.nombre !== nombre);
};

// Ejemplo de uso
const personas = [
    { nombre: 'Alice', edad: 25 },
    { nombre: 'Bob', edad: 30 },
    { nombre: 'Charlie', edad: 35 }
];

const nuevoArreglo = eliminarPersonaPorNombre(personas, 'Bob');
console.log(nuevoArreglo);  
// Salida: [ { nombre: 'Alice', edad: 25 }, { nombre: 'Charlie', edad: 35 } ]
