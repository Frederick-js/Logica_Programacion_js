/* 1) Realizar una función que nos permita realizar las 4 operaciones aritméticas (suma, resta, multiplicar y dividir) usando decodeURI. La función debe aceptar 3 parámetros, 
siendo dos de ellos los valores (a y b) y el tercero el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido, debería mostrar un error personalizado en la consola. */

function ejercicioUno(a = 0, b = 0, operation = 'suma') {
    switch (operation) {
        case 'suma':
            return console.log(a + b);
        case 'resta':
                return console.log(a - b);
        case 'multiplicacion':
            return console.log(a * b);
        case 'division':
                return console.log(a / b);
        default:
            console.error(`La operacion ${operation} no es valida!!!`);

    }

}

// Ejecucion de funciones
ejercicioUno(3,2,"resta");