// Creado por: L3RightMC
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".globos-container");

    function crearGlobo() {
        const globo = document.createElement("div");
        globo.classList.add("globo");

        let tamaño = Math.random() * 30 + 20;
        globo.style.width = `${tamaño}px`;
        globo.style.height = `${tamaño * 1.3}px`;

        let colores = ["red", "blue", "yellow", "green", "purple", "pink", "orange"];
        globo.style.background = colores[Math.floor(Math.random() * colores.length)];

        globo.style.left = `${Math.random() * 100}vw`;
        globo.style.animationDuration = `${Math.random() * 3 + 3}s`;

        container.appendChild(globo);

        setTimeout(() => globo.remove(), 5000);
    }

    setInterval(crearGlobo, 500);
});