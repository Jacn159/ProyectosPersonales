//Usamos queryselector 
const submit = document.querySelector("[data-input-submit]");
const padre = document.querySelector("[data-padre]");
const input = document.querySelector("[data-value]");

const crearCard = ( (event)=>{
    // no se recarga la pagina 
    event.preventDefault();
    const valor= input.value;
    const card = document.createElement("div");
    // le agrego el nombre de la clase
    card.classList.add("cards");
    //creo constante para img
    const imagen = document.createElement("img");
    imagen.src = "img/logo.png";
    //creo constante para h3
    const texto = document.createElement("h3");
    // si no esta la clase lo crea y si esta lo borra
    submit.classList.toggle("formulario__input-active");
    texto.innerText=valor;
    if (valor=="") {
        texto.innerText="no seas gracioso chibolo, escribe algo"
    }
    card.appendChild(imagen);
    card.appendChild(texto);
    padre.appendChild(card);
    console.log("pla");
})
submit.addEventListener("click", crearCard);

