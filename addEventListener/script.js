const h1 = document.querySelector("h1"); 
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");//esto permite seleccionar la el ID de la etiqueta para luego poder escuchar el evento.
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#form");

/* btn.addEventListener("click",escucharOnClick); //los argumentos deben ser: el evento que se quiere escuchar, segundo la función o código que se quiera ejecutar al escuchar el evento. no deben incluirse los parentesis en la función que se esta llamando
function escucharOnClick() {
    const a = input1.value;
    const b = input2.value;
    resultado.innerText = "Resultado: " + a + " " + b;
} */

//forma 1 de solucionar el efecto submit
/* form.addEventListener("submit",sumarInputs);

function sumarInputs(event) {
    console.log(event);
    event.preventDefault();//permite que el navegador no ejecute lo que por defecto se ejecuta cuando se trabaja con formularios, evita que se recarge la página cuando se hace clic en el último botón.
    const a = input1.value;
    const b = input2.value;
    resultado.innerText = "Resultado: " + a + " " + b;
} */
//forma 2 de solucionar el efecto submit, en HTML se le agrega el type="button"
form.addEventListener("click",sumarInputs);

function sumarInputs(event) {
    const a = input1.value;
    const b = input2.value;
    resultado.innerText = "Resultado: " + a + " " + b;
}//permite confirmar el último botón del formulario como button y eliminar el evento submit por defecto