// ===== CONSTRUCTOR DE PRODUCTOS ====

class crearProducto {
    constructor(id, nombre, tipo, precio, stock, foto) {
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.precio = parseInt (precio)
        this.stock = parseInt (stock)
        this.foto = foto
    }
}

const subirProducto = document.getElementById('subir-producto')

subirProducto.addEventListener('click', (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre-producto').value
    const tipo = document.getElementById('tipo-producto').value
    const precio = document.getElementById('precio-producto').value
    const stock = document.getElementById('stock-producto').value
    const foto = document.getElementById('foto-producto').value

    const producto = new crearProducto(stockProducto.length + 1, nombre, tipo, precio, stock, foto)
    stockProducto.push(producto)
    localStorage.setItem('stockProducto', JSON.stringify(stockProducto))

})