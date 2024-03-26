import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config()


dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));


let planets = [
    {
        id: 1,
        name: "Terra",
    },
    {
        id: 2,
        name: "Marte",
    }
];

app.use('/', (req, res, next) => {
    console.log(req.method);
    next();
});

app.get('/api/planets', (req, res) => {
    res.status(200).json(planets);
});

app.get('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    if (!planet) return res.status(404).json({ error: 'Pianeta non trovato' });
    res.status(200).json(planet);
});

app.post('/api/planets', (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    const validate = schema.validate(newPlanet);
    const planet = planets.find(p => p.id === Number(id));
    if (planet || validate.error) {
        res.status(400).json({ msg: 'Errore durante la creazione del pianeta' });
    } else {
        planets = [...planets, newPlanet];
        res.status(201).json({ msg: 'Pianeta aggiunto con successo' });
    }
});

app.put('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(p => p.id === Number(id) ? { ...p, name } : p);
    res.status(200).json({ msg: "Pianeta aggiornato" });
});

app.delete('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    planets = planets.filter(p => p.id !== Number(id));
    res.status(200).json({ msg: 'Pianeta eliminato' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});