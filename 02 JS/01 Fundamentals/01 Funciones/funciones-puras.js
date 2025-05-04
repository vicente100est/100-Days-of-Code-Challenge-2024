// Funciones puras

// Misma entrada, misma salida
// No producen efectos secundarios

// Efectos secundarios
// 1. Modicar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manitular el DOM
// 6. Obtener la fecha y hora actual

// Ejemplo de funcion pura
function suma(a, b) {
    return a + b;
}

// Funcion impura
function suma(a, b) {
    console.log('A:', a);
    return a + b;
}

let total = 0;

function sumWithSideEffect(a, b) {
    total += a + b;
    return total;
}

function square(x) {
    return x * x;
}

function add(x, y) {
    return x + y;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);