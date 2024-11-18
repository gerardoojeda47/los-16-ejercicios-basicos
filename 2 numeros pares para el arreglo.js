function imprimirPares(limite) {
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Solicitar el límite al usuario
const limiteUsuario = prompt("Ingrese un numero");
imprimirPares(parseInt(limiteUsuario));

// Para imprimir los números pares del 1 al 20
imprimirPares(limite);