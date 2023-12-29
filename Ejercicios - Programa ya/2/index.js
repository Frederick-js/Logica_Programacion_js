/*
 2) Realizar una funcion que almacene en un arreglo todos los numeros pares
desde a hasta b.
*/

function ejercicioDos(a = 0, b = 0) {
  let numsPar = [];
  let numsImpar = [];

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      numsPar.push(i);
    } else {
      numsImpar.push(i);
    }
  }
  console.log(numsPar);
  console.log(numsImpar);
}

ejercicioDos(2, 8);

