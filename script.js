console.log("JavaScript conectado correctamente");

const productos = [
    {
        id: "ramo-margaritas",
        nombre: "Ramo en base de margaritas de colores",
        categoria: "Ramos y arreglos florales",
        imagen: "imagenes/ramo_grande.jpg",
        descripcion: "Un hermoso arreglo floral elaborado con margaritas de diferentes colores, ideal para sorprender y celebrar momentos especiales.",
        caracteristicas: [
            "Margaritas de diferentes colores",
            "Elaborado de manera artesanal",
            "Ideal para regalar"
        ]
    }
];

const producto = document.querySelector(".producto");

if (producto) {

    producto.addEventListener("click", function() {

        const idProducto = producto.dataset.producto;

        window.location.href = "detalle.html?producto=" + idProducto;

    });

}

const parametros = new URLSearchParams(window.location.search);

const idProducto = parametros.get("producto");

console.log("Producto de la URL:", idProducto);
const productoEncontrado = productos.find(function(producto) {
    return producto.id === idProducto;
});

console.log("Producto encontrado:", productoEncontrado);
if (productoEncontrado) {

    document.getElementById("detalle-titulo").textContent = productoEncontrado.nombre;

    document.getElementById("detalle-categoria").textContent = productoEncontrado.categoria;

    document.getElementById("detalle-descripcion").textContent = productoEncontrado.descripcion;

    document.getElementById("detalle-imagen").src = productoEncontrado.imagen;

    document.getElementById("detalle-imagen").alt = productoEncontrado.nombre;

    const listaCaracteristicas = document.getElementById("detalle-caracteristicas");

    productoEncontrado.caracteristicas.forEach(function(caracteristica) {

        const elemento = document.createElement("li");

        elemento.textContent = caracteristica;

        listaCaracteristicas.appendChild(elemento);
    });

    document.getElementById("detalle-producto").style.display = "block";
}