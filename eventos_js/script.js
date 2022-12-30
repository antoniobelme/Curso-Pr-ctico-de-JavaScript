const h1 = document.querySelector("h1"); 
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

function escucharOnClick() {
    const a = input1.value;
    const b = input2.value;
    resultado.innerText = "Resultado: " + a + " " + b;
}