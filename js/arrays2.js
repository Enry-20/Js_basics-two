let games = ['Red Dead', 'DOOM ETERNAL', 'Skyrim', 'Dark Souls']
console.log('Larga:', games.length)

let first = games[1 - 1]
let last = games[games.length - 1]//ultima posicion

let best_games = [first, last]
//Me dara el elemto 0 y ultimo indicado

console.log(best_games)

games.forEach((elemento, indice, array)=>{
    console.log({elemento, indice, array})
});//metodo que por cada elemento de un arreglo, regresa 3 parametros, elemento, no.elemento, tipo de elemento

let addThat = games.push('The last of us')// agrega un nuevo elemento
// console.log(games)

addThat = games.unshift('Cuphead')
//Agrega un nuevo elemento al principio

console.log(addThat, games)

let deletedGame = games.pop();
// console.log(deletedGame, games)
//Borra un ultimo elemento

let pos = 1;
let juegos_borrados = games.splice(pos, 2);
//Borra elementos de una posicion especifica, especificando 2 parametros, el primero indica desde que posicion borrara los elementos, y la segunda cuantos borrara

console.log(juegos_borrados, games);

let sky = games.indexOf('Skyrim');
//Regresa el indice de un elemento especificando el string
console.log(sky, games, games.length);
//Al haber eliminado elementos del arreglo original, Skyrim termina estando en la posicion 1, con 3 elementos en total