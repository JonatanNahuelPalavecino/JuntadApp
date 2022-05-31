// ==== DECLARO LA FUNCION DE QUE EL MODAL CREE LOS ITEMS ====

const mostrarCompra = () => {
    const caja = document.getElementById('box')
    caja.innerHTML = ""

    if (carrito.length === 0) {
        caja.innerHTML = `
            <div class="centrar">
                <strong>No hay productos en el carrito</strong>
            </div>
        `
    } else {
        carrito.forEach( (prod) => {
    
            const div = document.createElement ('div')
            div.className = "tarjetas"
            div.innerHTML = `
            <div class="contenido">
                <img class="img" src="${prod.foto}" alt="...">
                <div class="centrar">
                    <div class="tarjetas-desc">${prod.nombre}</div>
                    <div>$${prod.precio}</div>
                </div>
                <button onclick="eliminarDelCarrito(${prod.id})" class="button">Eliminar</button>
            </div>
            <hr>    
            `
            caja.appendChild(div)
        })
        mostrarTotal()
    }
}

// ===== MOSTRAR TOTAL EN EL CARRITO ==============

const mostrarTotal = () => {
    const total = document.getElementById('total')
    
        let suma = 0
        carrito.forEach( (prod) => {
            suma += prod.precio
        })
    
        total.innerHTML = `
            Total: $${suma}
        `
   
}

// ==== AGREGO LOS PRODUCTOS AL CARRITO ====

function agregarAlCarrito (prodId) {
    let producto = stockProducto.find(el => el.id === prodId)

    if (producto.stock > 0) {
        carrito.push(producto)
        producto.stock--
        localStorage.setItem('carrito', JSON.stringify(carrito))
        mostrarCompra()
        mostrarTotal()
        avisoAgregado(prodId)
    } else {
        const alerta = document.getElementById('alertaStock' + prodId)
        alerta.classList.add('contenedor__alerta')
        setTimeout(() => {
            alerta.classList.remove('contenedor__alerta')
        }, 2000)
    }
}

// ====== AVISO DE PRODUCTO AGREGADO =========

function avisoAgregado (e) {
    const alerta = document.getElementById('alerta' + e)
    alerta.classList.add('contenedor__alerta')
    setTimeout(() => {
        alerta.classList.remove('contenedor__alerta')
    }, 2000)
}


// ===== ELIMINO UNO POR UNO LOS PRODUCTOS DEL CARRITO ====

function eliminarDelCarrito (prodId) {
    let producto = carrito.find(el => el.id === prodId)
    carrito.splice(carrito.indexOf(producto), 1)
    producto.stock++
    localStorage.setItem('carrito', JSON.stringify(carrito))
    mostrarCompra()
    mostrarTotal()
}

