const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Servir les fichiers statiques des dossiers 'public' et 'js'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
