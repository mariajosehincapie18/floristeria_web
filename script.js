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
producto.addEventListener("click", function() {

    const idProducto = producto.dataset.producto;

    const productoSeleccionado = productos.find(function(producto) {
        return producto.id === idProducto;
    });

    console.log(productoSeleccionado);
    document.getElementById("detalle-imagen").src = productoSeleccionado.imagen;
    document.getElementById("detalle-imagen").alt = productoSeleccionado.nombre;

    document.getElementById("detalle-categoria").textContent = productoSeleccionado.categoria;

    document.getElementById("detalle-titulo").textContent = productoSeleccionado.nombre;

    document.getElementById("detalle-descripcion").textContent = productoSeleccionado.descripcion;
    console.log("Detalle encontrado:", document.getElementById("detalle-producto"));

    document.getElementById("detalle-producto").style.display = "block";
    document.getElementById("detalle-producto").scrollIntoView({
    behavior: "smooth"
});

});