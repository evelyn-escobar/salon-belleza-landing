// Menú desplegable en celulares
const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto);
});

// Cierra el menú al elegir una sección
menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", false);
    });
});

// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Indica si el salón está abierto según el horario publicado
function estaAbierto(fecha) {
    const dia = fecha.getDay(); // 0 = domingo, 6 = sábado
    const hora = fecha.getHours() + fecha.getMinutes() / 60;

    if (dia >= 1 && dia <= 5) {
        return hora >= 9 && hora < 19;
    }

    if (dia === 6) {
        return hora >= 8 && hora < 18;
    }

    return false;
}

document.getElementById("estado-horario").textContent = estaAbierto(new Date())
    ? "🟢 Estamos abiertos ahora"
    : "🔴 En este momento estamos cerrados. ¡Escríbenos y te respondemos pronto!";
