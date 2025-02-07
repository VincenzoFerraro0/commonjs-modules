/*
3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

import  createHobbie from './hobbie.js';
import  createNames from './names.js';

const fullName = createNames('Mario', 'Rossi');
const hobbies = createHobbie('Calcio', 'Lettura', 'Viaggi');


function createPerson() {
    
    return {
        fullName,
        hobbies
    };
}

console.log(createPerson());


