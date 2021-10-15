class Productos {
    constructor(nombre, codigo, precio){
        this.nombre = nombre;
        this.codigo = parseInt(codigo);
        this.precio = parseFloat(precio);
    }

}

let nProductos = parseInt(prompt("Ingresa la cantidad de productos que quiere cargar"));

for (let i = 1; i <= nProductos; i++) {

    let nombreProducto = prompt("Ingrese nombre de producto");
    let codigoProducto = prompt("Ingrese codigo de producto");
    let precioProducto = prompt("Ingrese precio de producto");

    const newProducto = new Productos(nombreProducto, codigoProducto, precioProducto);

    console.log(`Nombre de producto: ${newProducto.nombre}\nCodigo de Producto: ${newProducto.codigo}\nPrecio de Producto: ${newProducto.precio}`);
}




