/*
 9) ealizar una funcion que nos diga la fecha de apertura de un examen de la universidad, es decir
 , La cantidad de horas restantes  que faltan para que abra dicho examen. en caso de que el examen haya cerrado que nos retorne un mensaje que diga "El examen ya cerro"
*/


function ejercicioNueve (open= "", close = ""){
    if(open === "" || close === "") return console.error('Faltan parametros');
    else {
        let today = new Date(),
            testOpen = new Date(open),
            testClose = new Date(close);
        
        let resulTimeOpen = Math.floor((testClose.getTime() - testOpen.getTime()) / (1000 * 60));
        let resulTimeRest = Math.floor((testOpen.getTime() - testClose.getTime()) / (1000 * 60));

        if(testClose.getTime() < today.getTime()) return console.log("El examen ya cerro");
        else{
            if(resulTimeRest > 0) console.log(`Faltan ${resulTimeOpen} minutos para que el examen abra`);
            else{
                console.log("El examen esta abierto");
                console.log(`El examen durara abierto ${resulTimeOpen} minutos.`);
            }
        }
    }
    
    
}

ejercicioNueve('Wed Jan 17 2022 09:30:00','Wed Jan 18 2021 10:00:00');
