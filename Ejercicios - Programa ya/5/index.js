/*
 5) Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saqué su mitad, el doble y su raíz cuadrada.
*/

function ejercicioCinco(){
    let num = Math.floor(Math.random()* (1000 - 1)+1);
    console.log(`El numero es ${num}`);
    let mitad = num / 2; // se saca la mitad
    let doble = num * 2; // se saca el doble
    let raiz = Math.sqrt(num); // saca la raiz cuadrada del parametro que se le pase
    console.log(`La mitad de ${num} es ${mitad}. El doble de ${num} es ${doble}. La raiz de ${num} es ${raiz}`);
}
ejercicioCinco();
