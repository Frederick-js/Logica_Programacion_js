/*
 3) Realizar una tabla de multiplicacion de un numero (a) desde 0 hasta x, pero que no se muestre la multiplicacion de a * 5
*/

function multiplicacion(a = 0, x = 0) {
    for (let i = a; a <= x; a++) {
        if (i*a === i*5 ) {
            console.log('sacamos el 5');
        }else{
            console.log(i*a);
        }
        
    }
}

multiplicacion(2,5);

