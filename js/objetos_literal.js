let personaje1 = {
    nombre: 'Walter White',
    alterEgo: 'Heinsenberg',
    profesion: 'High-School Teacher in Chemestry',
    alsoIs: 'Chef of Met and drug dealer',
    livePlace: {
        lat: 350700,
        long: -1063700
    },
    enemys: ['Tuco', 'Gustavo Fring', 'Pandilla', 'Your Self'],
    'caracther-favorite': ['jesse pinkman', 'Mike'],
    vivo: false,
}
//Metodos para llamar una propiedad
console.log(personaje1)
console.log('Alter-Life:', personaje1.alsoIs)
console.log('Alter-Ego:', personaje1['alterEgo'])
console.log('Most_Enemys:', personaje1.enemys[personaje1.enemys.length - 1])//Ultimo Personaje
console.log('Latitud:', personaje1.livePlace.lat, 'Lonjitud: ', personaje1.livePlace.long)//Como es un objeto se puede referir a este como otra propiedad
console.log('No.Enemys:', personaje1.enemys.length, personaje1.enemys)
console.log('First.Enemy:', personaje1.enemys[0])
console.log('Caracther fav:', personaje1["caracther-favorite"][1])//Como la propiedad esta escrita como un string, y es un arreglo, se coloca entre [] siguiente del elemento requerido

const x = 'vivo';
console.log('Vivo:', personaje1[x])
//La constante refiere una propiedad que posteriormente al indicarla entre [], el navegador buscara entre el objeto y al encontrar la propiedad con la referencia de la constante, dara el valor de tal

//MAS DETALLES
//Eliminar una propiedad
delete personaje1.profesion;
console.log(personaje1.profesion)
//Como Array
const entradas = Object.entries(personaje1);
Object.freeze(personaje1);//Congelar el objeto hasta este punto
personaje1.enfermo = true;//agregar una propiedad/no se puede modificar despues del freeze

console.table(entradas)

personaje1['caracther-favorite'][0]='Saul Goodman'//Pero aun se pueden cambiar los valores de propiedades especificas que contengan un array y/o otro objeto dentro
console.table(entradas)


const proper = Object.getOwnPropertyNames(personaje1);//Obtener nombre de las propiedades
const val = Object.values( personaje1)//obtener los valores de esas propiedades
console.log(proper, val);


