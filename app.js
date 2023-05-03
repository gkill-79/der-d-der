

const express = require('express');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3333; 

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/pokemons/1', (req, res) => res.send("hello, bulbizarre"));

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    res.send(`hello, gros cochon, le pokemon ${pokemon.name}`);
    });

app.get('/api/pokemons', (req, res) => {
    res.send(`Il y a ${pokemons.length} pokemons dans le pokedex`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});












