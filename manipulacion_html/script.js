const h1 = document.querySelector("h1"); //permite seleccionar una etiqueta en HTML para manipularla por medio de JS
const p = document.querySelector("p");
const parrafo = document.querySelector(".parrafo");
const parrafoId = document.getElementById("parrafoId");// no es neccesario usar el . o # antes del elemento, eso solo se hace con .querySelector()
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafo,
    parrafoId,
    input
})
/* h1.innerHTML = "Chiste flojo"; // esto permite modifocar el HTML */
h1.innerText = "Chiste <b>flojo</b>"; // esto permite modifocar el HTML pero lo traduce en texto sin importar que hayan etiquetas.
console.log(h1.getAttribute("plantalla")); //.getAttribute() permite aaceder al atributo de una etiqueta, con el console.log se imprime en la consola del navegador.
/* h1.setAttribute("class", "rojo"); //permite modificar en consola, en este caso la clase, o atributo de cualquer etiqueta. */
h1.classList.add("rojo"); //permite modificar las clases en especifico de las etiquetas, .add permite agregar una clase.
h1.classList.remove("verde"); //permite modificar las clases en especifico de las etiquetas, .remove permite eliminar una clase.

input.value = "1234"; //permite modificar o agregar un value al input.
const img = document.createElement("img"); //permite crear una etiqueta en la consola.
img.setAttribute("src", "https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"); // permite crear el atributo src a la etiqueta img, y asugnarle una url.
console.log(img);
parrafoId.innerHTML = ""; //permite borrar el contenido dentro de la etiqueta asignandole un string vacío.
parrafoId.append(img);// permite insertar la img dentro de una etiqueta que ya existe en el HTML
/* console.log(document.createElement("img")); */