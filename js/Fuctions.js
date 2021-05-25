const hello = function(name){
    console.log(arguments);//
    console.log('Hello world '+ name);
    return 10
}

let hola2 = function(nombre){
    console.log('Hello ' + nombre);
}//Parametro

hola2('fucked', 40, true, 'Boobs');//Funcion con parametro/argumento definidos
hello('of fuckeds', 40, true, 'Boobs');// Al mandar mas argumentos a la funcion esta la interpreta con la propiedad arguments

const hi3 = (nombre)=>{
    console.log('No mames, '+ nombre + ', lavate el pito')

}

hi3('Arturo')
//Al llamar una funcion esta imprime lo que se le solicita, mas no esta definida

const eterno = (what)=>{
    let retor = console.log('Eterno '+ what)
    return retor//Hast aqui llega la funcion
    console.log('my dick is big')//No se ejecutara despues del return
}

eterno('retorno')
// Retornara el valor definido en la variables 

//APLICACIONES
let suma= (a, b) => a + b;
console.log( suma(10, 20));

const obtAleatorio = ()=> Math.random;

console.log(obtAleatorio());
 