const contenedorUno = document.getElementById('contenedor__uno');

// ===== CREO EL CARRITO VACIO =======

let carrito = []

const carritoEnLS = JSON.parse(localStorage.getItem('carrito'))

if (carritoEnLS !== null) {
    carrito = carritoEnLS
    mostrarCompra()
}

// ======= CREO LOS NODOS PARA LOS PRODUCTOS =========

stockProducto.forEach( (prod) => {

    const div = document.createElement('div')
    div.className = "carta"
    div.innerHTML = `
        <div id="alerta" class="contenedor__alertaOculto">
            <span>Agregado! :)</span>
        </div>
        <img src=${prod.foto} class="carta__img" alt="img${prod.id}">
        <div class="carta__text">
            <h5 class="carta__titulo">${prod.nombre}</h5>
            <p class="carta__descripcion">$${prod.precio}</p>
        </div>
        <button id="mostrarAlerta" onclick="agregarAlCarrito(${prod.id})" class="button btn">Agregar al carrito</button>
    `
    contenedorUno.appendChild(div)
})

// ====  DECLARACION DE BOTONES  ====

const botonAbrir = document.getElementById('modal-abrir')

const botonCerrar = document.getElementById('modal-cerrar')

const sombra = document.getElementById('modal-container')

const modal = document.getElementById('modal')

let alerta = document.getElementById('alerta')

let mostrarAlerta = document.getElementById('mostrarAlerta')



// // ===== DECLARACION DE EVENTOS PARA ABRIR Y CERRAR MODAL =====

botonAbrir.addEventListener('click', () => {
    sombra.classList.add('modal-activo')
})

botonCerrar.addEventListener('click', () => {
    sombra.classList.remove('modal-activo')
})

sombra.addEventListener('click', () => {
    sombra.classList.remove('modal-activo')
})

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

mostrarAlerta.addEventListener('click', () => {
    alerta.classList.add('contenedor__alerta')
    setTimeout(() => {
        alerta.classList.remove('contenedor__alerta')
    }, 2000)
})

