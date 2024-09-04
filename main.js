// alert("Hola soy Katteryn aprendiendo JavaScript");

//Variables
let nombre = "Katteryn";
nombre = "Rick";

//Constantes
const apellido = "Villanueva";

//otra variable
let altura = 154;

//Mostrar por consola
console.log(nombre);
console.log(altura);

//Concatenacion
let concatenacion = nombre + " " + apellido;

//Seleccionar elementos del dom(de la pagina)
let datos = document.querySelector("#datos");
datos.innerHTML = `
        <hr>
        <h1> Soy la caja de datos</h1>
        <h2>Mi nombre es: ${concatenacion}</h2>
        <h3>Mi altura es:${altura} cm</h3>
`;

//condiciones
altura = 160;
if (altura <= 154) {
    datos.innerHTML += "<h1>Eres una persona chaparra</h1>";
} else {
    datos.innerHTML += "<h1>Eres una persona alta</h1>";   
}
//Bucles for inicializador, condicion, incrementador
for (let year = 2000; year <= 2024; year++){
    datos.innerHTML += "<h2>Estamos en el año: " + year + "</h2>";
}

//Arrays
let nombres = ["Pimbo", "Renyi", "Hinata"];

let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[2];

divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";

// nombres.forEach(nombre => {
//     divNombres.innerHTML += "<li>" + nombre + "</li>";
// });

for (let nombre of nombres) {
    divNombres.innerHTML += "<li>" + nombre + "</li>";
}

divNombres.innerHTML += "</ul>";