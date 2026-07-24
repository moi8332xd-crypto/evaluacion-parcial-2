//Dado el precio de un producto, calcula el precio final aplicando un descuento del 15%, y además calcula cuánto dinero se 
//ahorró el cliente. Muestra ambos resultados en consola. Realiza el commit correspondiente.

let precioP = 100;
let descuento = 15;

/////-----------------------
let precioConDescuento;
let calculoDescuento = precioP * 0.15;
precioConDescuento = precioP - calculoDescuento;

///////---------------------------

let ahorrado = 0;
ahorrado = precioP - precioConDescuento;

//////------------------------------
console.log("||<Descuento>||");
console.log("El precio del producto es: "+ precioP);
console.log("El descuento para este producto es: "+descuento);

console.log("-----------------------------------");

console.log("precioConDescuento: "+ precioConDescuento+ "$");
console.log("Usted ha ahorrado: "+ ahorrado+"$");

console.log("-----------------------------------");






