/*
 8) Crea 5 objetos y almacenalos en un arreglo, debes hacer una funcion para filtrar a todas las personas que tengan el nombre luis y que esa misma funcion tambien muestre cuales
 son mayores de edad
*/

function ejercicioOcho() {
  const Personas = [
    {
      nombre: "Luis",
      apellido: "Fernandez",
      edad: 19,
    },
    {
      nombre: "Carlos",
      apellido: "Santos",
      edad: 10,
    },
    {
      nombre: "Kiko",
      apellido: "Perez",
      edad: 28,
    },
    {
      nombre: "Ramon",
      apellido: "Martinez",
      edad: 22,
    },
    {
      nombre: "Luis",
      apellido: "Alvarez",
      edad: 12,
    },
  ];
  console.log(Personas);
  console.log("Personas que se llaman luis");
  Personas.filter((el) => {
    if (el.nombre === "Ramon") console.log(`${el.nombre}`);
  });
  console.log("Mayores de edad");
  Personas.filter((el) => {
    if (el.edad >= 18) console.log(`${el.nombre} ${el.apellido} - ${el.edad}`);
  });
  console.log("Personas menores de edad");
  Personas.filter((el) => {
    if (el.edad < 18) console.log(`${el.nombre} ${el.apellido} - ${el.edad}`);
  });
}

ejercicioOcho();
