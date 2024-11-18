// Arreglo inicial de personas
let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", edad: 25 }
];

// Función para agregar una nueva persona
function agregarPersona(nombre, edad) {
    // Crear un nuevo objeto persona
    let nuevaPersona = {
        nombre: nombre,
        edad: parseInt(edad)
    };

    // Agregar el objeto al arreglo
    personas.push(nuevaPersona);
}

// Ejemplo de uso
agregarPersona("Carlos", 28);
agregarPersona("Laura", 22);

// Mostrar el arreglo actualizado
console.log(personas);
