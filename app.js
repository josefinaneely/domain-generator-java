



let pronoun = ['el', 'los', 'mi'];
let adj = ['gran', 'super', 'pequeño'];
let noun = ['perro', 'pajaro', 'proyecto'];

function getRandomElement(arr) {    
return arr[Math.floor(Math.random() * arr.length)];}

let anyString = `www.${getRandomElement(pronoun)}${getRandomElement(adj)}${getRandomElement(noun)}.com`;





console.log(anyString);




