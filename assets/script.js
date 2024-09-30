// Función que cambia el color del fondo del elemento clickeado
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Seleccionamos el elemento de HTML
const ele = document.getElementById("ele1");

// Agregamos el event listener que pasa el elemento clickeado y el color
ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // Cambiará el color a amarillo cuando se haga clic
});
