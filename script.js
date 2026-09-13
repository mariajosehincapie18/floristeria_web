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
    },
    {
    id: "ramo-margaritas-rosas",
    nombre: "Ramo Grande Funebre",
    categoria: "Ramos y arreglos florales",
    imagen: "imagenes/ramo_grande_m.jpg",
    descripcion: "Ramo floral de gran tamaño, elaborado como un detalle especial para acompañar momentos de despedida.",
    caracteristicas: [
        "Ramo de gran tamaño",
        "Diseño floral",
        "Elaborado de manera artesanal"
    ]
},

{
    id: "florero-rosas",
    nombre: "Cilindro con Flores",
    categoria: "Ramos y arreglos florales",
    imagen: "imagenes/florero_rosas.jpg",
    descripcion: "Arreglo floral presentado en un cilindro, una opción especial para regalar y decorar diferentes espacios.",
    caracteristicas: [
        "Flores de diferentes colores",
        "Presentación en cilindro",
        "Ideal para regalar"
    ]
},

{
    id: "florero-rosas-mariposas",
    nombre: "Cilindro con Flores y Decoración",
    categoria: "Ramos y arreglos florales",
    imagen: "imagenes/florero_rosas_mariposas.jpg",
    descripcion: "Arreglo floral presentado en un cilindro y acompañado de elementos decorativos que hacen de este un detalle especial.",
    caracteristicas: [
        "Flores frescas",
        "Presentación en cilindro",
        "Detalles decorativos"
    ]
},

{
    id: "ramo-jarron",
    nombre: "Ramo en Base con Frutas",
    categoria: "Ramos y arreglos florales",
    imagen: "imagenes/ramo_jarron.jpeg",
    descripcion: "Un detalle especial que combina un arreglo floral con frutas en una presentación decorativa.",
    caracteristicas: [
        "Arreglo floral",
        "Incluye frutas",
        "Presentación especial para regalo"
    ]
},

{
    id: "rosas-corazon",
    nombre: "Arreglo de Rosas",
    categoria: "Ramos y arreglos florales",
    imagen: "imagenes/rosas_corazon.jpeg",
    descripcion: "Arreglo elaborado con rosas, ideal para expresar sentimientos y sorprender en una ocasión especial.",
    caracteristicas: [
        "Rosas",
        "Diseño floral",
        "Ideal para regalar"
    ]
}
];

const productosCatalogo = document.querySelectorAll(".producto");

productosCatalogo.forEach(function(producto) {

    producto.addEventListener("click", function() {

        const idProducto = producto.dataset.producto;

        window.location.href = "detalle.html?producto=" + idProducto;

    });

});

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