// alert("Hola soy Katteryn aprendiendo JavaScript");

//Variables
let nombre = "Katteryn";
nombre = "Rick";

//Constantes
const apellido = "Villanueva";
const altura = 154;

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
