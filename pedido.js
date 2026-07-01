const nombreCliente = "Valentina Villamarin";
const ciudad = "Bogota";
const rappiPrime = false;

console.log("Hola",nombreCliente,"tu pedido a domicilio en",ciudad);

let productosPedido = ["Chocorramo", "Brownie", "Helado", "Bretaña"];

console.log("Lista completa de su pedido:",productosPedido);
console.log("1er producto de su pedido:",productosPedido[0]);

console.log("*Recibiendo llamada del cliente, agregó unas fresas con crema al pedido*");
console.log("\x1b[1m%s\x1b[0m","... Agregando producto al pedido ...");
productosPedido.push("Fresas con crema");

console.log("Imprimiendo lista de productos actualizada ...");
console.log("Lista completa de su pedido:",productosPedido);

console.log("*Recibiendo llamada del cliente, eliminó el último producto que agregó. fresas con crema*");
console.log("\x1b[1m%s\x1b[0m","... Eliminando producto al pedido ...");
productosPedido.pop();
console.log("Lista completa de su pedido:",productosPedido);
console.log("Cantidad de productos en el pedido:",(productosPedido.length));


let pedido = {
    cliente : nombreCliente,
    ciudadP : ciudad,
    productosPedido,
    estado : "En preparación"
};
console.log("\x1b[1m%s\x1b[0m","\n ...Detalles del pedido...");
console.log(pedido);
console.log("Cliente:",pedido.cliente);
console.log("\x1b[1m%s\x1b[0m","...Actualizando estado del pedido...");
pedido.estado="En camino";
console.log("\x1b[1m%s\x1b[0m","...Detalles actuales del pedio...");
console.log(pedido);
console.log("1er producto desde la ficha pedido:",pedido.productosPedido[0]);

let subtotalPedido = "26500";
let valorDomi = 6000;

const servicio = 0.10;

let totalPedido = Number(subtotalPedido) + valorDomi;
let valorServicio = totalPedido * servicio;


if(totalPedido>30000){
    console.log("\x1b[1m%s\x1b[0m","\n ...RECIBO FINAL DEL PEDIDO...")
    console.log("El pedido supera los 30.000 por lo que deberá pagar el 10% de servicio (propina domiciliario)");
    totalPedido = totalPedido + valorServicio;
    pedido.totalPagar = totalPedido;
    console.log(pedido);
}else{
    console.log("\x1b[1m%s\x1b[0m","\n ...RECIBO FINAL DEL PEDIDO...")
    console.log("El pedido no supera los 30.000 por lo que no deberá pagar el 10% de servicio (propina domiciliario)");
    pedido.totalPagar = totalPedido;
    console.log(pedido);
}









