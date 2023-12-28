/*
 2) Realizar una funcion que almacene en un arreglo todos los numeros pares
desde a hasta b.
*/

function ejercicioDos(a = 0, b = 0) {
    let nums = [];
    
    for (let i = a; i <=b; i++) {
        
          if (i % 2 === 0)nums.push(i); 
    
    
    }
    console.log(nums);
}

ejercicioDos(2,8);