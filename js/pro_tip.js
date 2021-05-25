const personaCreation = (nombre, apellido) => ({nombre, apellido})
//el objeto se identificar por los parentesis 
console.log(personaCreation('Ataulfo ', 'Ramirez'))

const argumentos= (...args) => args;
//al poner los 3 puntos(rest) a la funcion de flecha estamos refiriendonos a todos los argumentos
// despues del parametro rest no podemos poner mas parametros 
// si se pone otro argumento antes del rest, toma el primer valor, independiente
const [Años_married, años_robando, años_fucked, saludo, especiality]= argumentos(10, 20, 30, 'eres arte', 'nice dick');//guardas propiedades de los argumentos

console.log({Años_married, años_robando, años_fucked, saludo, especiality})//Muestra como objeto


