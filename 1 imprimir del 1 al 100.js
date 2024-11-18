function imprimir(limite) {
    for( var i = 1; i <= 100; i++) {
       console.log(i);
    }
}

//realizar el imprimir donde el limite lo coloque el ususario
let limiteUsuario = prompt("Ingrese un numero");
imprimir(parseInt(limiteUsuario));

//imprimir numeros pares del 1 al 20