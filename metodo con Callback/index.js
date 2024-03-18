const fs = require('fs');

var Data = "./index.txt";

const content = 'Questo è il contenuto del file di testo.';

fs.writeFile( Data,content, (err) => {
    if (err) {
        console.error('Si è verificato un errore:', err);
    }else{
        console.log('Il file di testo è  scritto corr...');
    }
});