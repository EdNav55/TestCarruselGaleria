const cuadros = document.querySelectorAll(`.contenedor-cuadros div`);
const btnAnterior = document.querySelector(`#retroceder`);
const btnSiguiente = document.querySelector(`#avanzar`);
const contenedorGaleria = document.querySelector(`.contenedor-cuadros`);

let desplazamiento = 0;
let intervaloDesplazamiento;
const velocidadDesplazamiento = 10;

function actualizarDesplazamiento(direccion) {
    imagenes.forEach(img => {
        const currentTranslateX = parseFloat(img.style.transform.replace('translateX(', '').replace('px)', '') || 0);
        img.style.transform = `translateX(${currentTranslateX + direccion}px)`;
    });
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

// function cambioImagen() {
//     const contenedorGaleria = document.getElementById(`galeria_puertas`);
//     const primerHijo = contenedorGaleria.children[1];
//     const ultimoHijo = contenedorGaleria.children[6];

//     console.log(contenedorGaleria.offsetWidth);
//     console.log(primerHijo.offsetWidth);
//     primerHijo.style.transform = `translateX(${contenedorGaleria.offsetWidth}px)`;
// }