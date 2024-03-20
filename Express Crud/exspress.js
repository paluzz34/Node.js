const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
require('express-async-errors');

// Inizializza l'app Express
const app = express();

app.use(express.json());

// Configura l'app Express per registrare le richieste del client
app.use(morgan('dev'));

// Dummy database di pianeti
let planets = [
    {
        id: 1,
        name: "Terra",
    },
    {
        id: 2,
        name: "Marte",
    },
];

// Configura un endpoint per ottenere tutti i pianeti
app.get('/planets', (req, res) => {
    res.json(planets);
});

// Avvia il server sulla porta specificata nel file 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

res.status(200).json()