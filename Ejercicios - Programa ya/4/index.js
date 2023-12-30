/*
 4) Hacer una funcion que filtre todos los numeros que sean multiplos del 3 de un arreglo que contenga los numeros del 1 al 100
*/

function ejercicioCuatro(){
    let nums = [];
    let multiplos = [];
    for (let i = 1; i <=100; i++) {
        nums.push(i);  
    }
    console.log(`Este es el arreglo principal: ${nums}`);
    nums.filter((el) =>{
        if(el % 3 === 0) multiplos.push(el);
        if(el < 25 && el > 10) console.log(el); // otro ejemplo para usar el filter que muestra desde el 11 hasta el 24 segun la condicion dada.
    });
    console.log(`Estos son los numeros que son multiplos del 3 ${multiplos}`);
}

ejercicioCuatro();