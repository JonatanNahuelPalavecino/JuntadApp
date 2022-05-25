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
        <div id="alerta${prod.id}" class="contenedor__alertaOculto">
            <span>Agregado! :)</span>
        </div>
        <div id="alertaStock${prod.id}" class="contenedor__alertaOculto">
            <span>No hay Stock disponible! :(</span>
        </div>
        <img src=${prod.foto} class="carta__img" alt="img${prod.id}">
        <div class="carta__text">
            <h5 class="carta__titulo">${prod.nombre}</h5>
            <p class="carta__descripcion">$${prod.precio}</p>
        </div>
        <button onclick="agregarAlCarrito(${prod.id})" class="button btn btn-margin">Agregar al carrito</button>
    `
    contenedorUno.appendChild(div)
})

// ====  DECLARACION DE BOTONES  ====

const botonAbrir = document.getElementById('modal-abrir')

const botonCerrar = document.getElementById('modal-cerrar')

const sombra = document.getElementById('modal-container')

const modal = document.getElementById('modal')

const vaciarCarrito = document.getElementById('vaciar-carrito')

const cargarProducto = document.getElementById('enviar-producto')

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

vaciarCarrito.addEventListener('click', () => {
    carrito.forEach( (prod) => {
        prod.stock++
    })
    carrito = []
    localStorage.clear()

    mostrarCompra()
    mostrarTotal()
})

cargarProducto.addEventListener("submit", cargarProductos)