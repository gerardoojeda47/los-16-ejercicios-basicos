const filtrarMayoresDeEdad = (personas) => {
    return personas.filter(persona => persona.edad > 18);
};

// Ejemplo de uso
const personas = [
    { nombre: 'Alice', edad: 25 },
    { nombre: 'Bob', edad: 17 },
    { nombre: 'Charlie', edad: 20 },
    { nombre: 'David', edad: 15 }
];

const mayoresDeEdad = filtrarMayoresDeEdad(personas);
console.log(mayoresDeEdad);  
// Salida: [ { nombre: 'Alice', edad: 25 }, { nombre: 'Charlie', edad: 20 } ]
