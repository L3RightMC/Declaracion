// Creado por: L3RightMC
document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".corazones");

    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = Math.random() * 2 + 3 + "s";

        fondo.appendChild(corazon);

        setTimeout(() => corazon.remove(), 5000);
    }

    setInterval(crearCorazon, 300);
});

document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".corazones");

    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = Math.random() * 2 + 3 + "s";

        fondo.appendChild(corazon);

        setTimeout(() => corazon.remove(), 5000); 
    }

    setInterval(crearCorazon, 300);

    const botonA = document.getElementById("boton-a");
    let intentos = 0;

    botonA.addEventListener("mouseover", () => {
        if (intentos < 10) {
            const maxX = window.innerWidth - botonA.clientWidth;
            const maxY = window.innerHeight - botonA.clientHeight;

            botonA.style.position = "absolute";
            botonA.style.left = Math.random() * maxX + "px";
            botonA.style.top = Math.random() * maxY + "px";

            intentos++;
        } else {
            window.location.href = "views/noo.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton-a");
    let intentos = 0;

    boton.addEventListener("click", (e) => {
        intentos++;
        if (intentos < 10) {
            const maxX = window.innerWidth - boton.clientWidth;
            const maxY = window.innerHeight - boton.clientHeight;

            boton.style.position = "absolute";
            boton.style.left = Math.random() * maxX + "px";
            boton.style.top = Math.random() * maxY + "px";
        } else {
            window.location.href = "views/noo.html";
        }
    });
});