const btnAnterior = document.querySelector(`#retroceder`);
const btnSiguiente = document.querySelector(`#avanzar`);
const contenedorGaleria = document.querySelector(`.contenedor-cuadros`);
const parteVisible = document.querySelector(`.prueba`);

let desplazamiento = 0;
let intervaloDesplazamiento;
const velocidadDesplazamiento = 3;

function actualizarDesplazamiento(direccion) {
    const contenedorRect = contenedorGaleria.getBoundingClientRect();
    const visibleRect = parteVisible.getBoundingClientRect();

    const currentTranslateX = parseFloat(contenedorGaleria.style.transform.replace('translateX(', '').replace('px)', '') || 0);

    const dentroLimites =
        !(contenedorRect.left + direccion > visibleRect.left + 8 || contenedorRect.right + direccion < visibleRect.right - 8);

    if (dentroLimites) {
        contenedorGaleria.style.transform = `translateX(${currentTranslateX + direccion}px)`;
    } else {
        detenerDesplazamiento();
    }
}
function iniciarDesplazamiento(direccion) {
    clearInterval(intervaloDesplazamiento);
    intervaloDesplazamiento = setInterval(() => {
        actualizarDesplazamiento(direccion);
    }, 20);
}

function detenerDesplazamiento() {
    clearInterval(intervaloDesplazamiento);
}

function modulo(n) {
    return ((n % m) + m) % m;
}

btnAnterior.addEventListener("mousedown", () => {
    iniciarDesplazamiento(velocidadDesplazamiento);
});

btnAnterior.addEventListener("mouseup", detenerDesplazamiento);

btnAnterior.addEventListener("mouseleave", detenerDesplazamiento);

btnSiguiente.addEventListener("mousedown", () => {
    iniciarDesplazamiento(-velocidadDesplazamiento);
});

btnSiguiente.addEventListener("mouseup", detenerDesplazamiento);

btnSiguiente.addEventListener("mouseleave", detenerDesplazamiento);