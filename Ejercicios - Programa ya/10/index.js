/*
 10) En un arreglo tenemos varios varlores numericos, debemos de hacer una funcion que elimine aquellos valores que se encuentran repetidas
*/

function ejercicioDiez(){
    const nums = [1,2,3,4,5,6,4,2,1];

    let result = nums.filter((item, index)=>{
        return nums.indexOf(item) === index

    });

    console.log(`Arreglo original: ${nums}`);
    console.log(result);


    // segunda forma 

    let newNums = new Set(nums);
    let result2 = [...arguments, ...newNums];
    console.log(result2);
}

ejercicioDiez();