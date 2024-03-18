const figlet = require('figlet');

const text = 'Hello, Chiara!';

figlet(text, function(err, data) {
    if (err) {
        console.log('Qualcosa è andato storto...');
        console.dir(err);
        return;
    }
    console.log(data);
});