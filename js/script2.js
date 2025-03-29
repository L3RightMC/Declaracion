// Creado por: L3RightMC
document.addEventListener("DOMContentLoaded", () => {
    const lluvia = document.querySelector(".lluvia");

    function crearGota() {
        const gota = document.createElement("div");
        gota.classList.add("gota");

        gota.style.left = Math.random() * window.innerWidth + "px";

        const duracion = Math.random() * 1.5 + 1;
        gota.style.animationDuration = duracion + "s";

        const tamaño = Math.random() * 2 + 1;
        gota.style.width = tamaño + "px";
        gota.style.height = tamaño * 7 + "px";

        lluvia.appendChild(gota);

        setTimeout(() => gota.remove(), duracion * 1000);
    }

    setInterval(crearGota, 100);
});
