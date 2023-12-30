/*
 3) Realizar una tabla de multiplicacion de un numero (a) desde 0 hasta x, pero que no se muestre la multiplicacion de a * 5
*/

function ejercicioTres(a = 0, x = 12){
    for (let i = 0; i <= x; i++){
        if(i !== 5)console.log(`${a} x ${i} = ${a*i}`);
    }
}

ejercicioTres(2);

