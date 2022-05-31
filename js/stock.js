let stockProducto = [
    {id: 1, nombre: 'Brahma 453cc', tipo: 'rubia', precio: 180, stock: 10, foto: './img/D_NQ_NP_640945-MLA44839805234_022021-O.png'},
    {id: 2, nombre: 'Andes Roja 473cc', tipo: 'roja', precio: 150, stock: 10, foto: './img/D_NQ_NP_654410-MLA44839773937_022021-O.png'},
    {id: 3, nombre: 'Andes Negra 473cc', tipo: 'negra', precio: 280, stock: 10, foto: './img/D_NQ_NP_685447-MLA44839788798_022021-O.png'},
    {id: 4, nombre: 'Temple Scottish 473cc', tipo: 'rubia', precio: 280, stock: 10, foto: './img/D_NQ_NP_654410-MLA44839773937_022021-O.png'},
    {id: 5, nombre: 'Andes Ipa Andina 473cc', tipo: 'rubia', precio: 280, stock: 10, foto: './img/D_NQ_NP_707500-MLA44839743700_022021-O.png'},
    {id: 6, nombre: 'Andes Rubia 473cc', tipo: 'rubia', precio: 280, stock: 10, foto: './img/D_NQ_NP_718419-MLA44839770194_022021-O.png'},
    {id: 7, nombre: 'Temple Wolf Ipa 473cc', tipo: 'rubia', precio: 280, stock: 10, foto: './img/D_NQ_NP_810097-MLA44839765447_022021-O.png'},
    {id: 8, nombre: 'Andes Ipa Roja 473cc', tipo: 'roja', precio: 280, stock: 10, foto: './img/D_NQ_NP_903008-MLA47917049198_102021-O.png'},
    {id: 9, nombre: 'Quilmes Rubia 473cc', tipo: 'rubia', precio: 280, stock: 10, foto: './img/D_NQ_NP_960077-MLA44839776548_022021-O.png'},
    {id: 10, nombre: 'Patagonia Hoppy Lager 473cc', tipo: 'rubia', precio: 280, stock: 10, foto: './img/D_NQ_NP_978501-MLA44839773610_022021-O.png'},
    {id: 11, nombre: "Henineken Rubia 1L", tipo: 'rubia', precio: 300, stock: 10, foto: './img/CERVEZA-HEINEKEN-1-LITRO-NO-RETORNABLE-1-859.png'},
    {id: 12, nombre: 'Miller Rubia 1L', tipo: 'rubia', precio: 250, stock: 10, foto: './img/Cerveza-Rubia-Retornable-Miller-1-Lt-1-64397.png'},
    {id: 13, nombre: 'Imperial Ipa 1L', tipo: 'rubia', precio: 250, stock: 10, foto: './img/Imperial-IPA.png'},
]

const stockEnLS = JSON.parse(localStorage.getItem('stockProducto'))

if (stockEnLS !== null) {
    stockProducto = stockEnLS
}