/*
 6) Hacer una funcion que, dado como dato de entrada nuestra fecha de cumpleanos, nos dia cuantos dias faltan para el mismo.
*/

function ejercicioSeis(a= "5 feb 2024"){
    let cumple = new Date(a);
    let hoy = new Date();
    let diasRestantes = Math.floor((cumple.getTime()- hoy.getTime()) / (1000 * 60 * 60 * 24))
    console.log(`Tu cumples es ${cumple} y faltan ${diasRestantes} dias.`);
}

ejercicioSeis();