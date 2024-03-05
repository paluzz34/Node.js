const crypto = require('crypto');

console.log(Object.keys(crypto));
const randomId = crypto.randomBytes(10).toString("hex")
  //convertiamo questi byte casuali in una stringa esadecimale utilizzando questo metodo
console.log(randomId)
