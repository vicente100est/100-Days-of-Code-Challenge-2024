// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> CallBack

function a (){}
function b (a){}
b(a);

// Retornar funciones
function a (){
    function b (a){}
    return b;
}


// Funciones como variables -> Expresion de funcion
const a = function (){};

// Puede tener propiedades y metodos
function a (){}
const obj = {}
a.call(obj);

// Anidar funciones -> Nested functions
function a (){
    function b (){
        function c (){
            console.log('Hola');
        }
        c();
    }
    b();
}
a();

const rocket = {
    name: 'Falcon 9',
    launch: function () {
        console.log('🛫 Lanzando ' + this.name);
    },
    land: function () {
        console.log('🛬 Aterrizando ' + this.name);
    },
    fly: function () {
        console.log('🛩️ Volando ' + this.name);
    },
}