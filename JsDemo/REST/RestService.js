const express = require('express');
const cors = require('cors'); // Import the CORS middleware

// Erstellen einer neuen Express-Anwendung
const app = express();

// Festlegen des Ports, auf dem der Server laufen soll
const PORT = 3000;

// Middleware, um JSON-Daten im Body von Anfragen zu verarbeiten
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Beispiel-Daten, die wir im Service verwenden
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// GET-Methode: Diese Route gibt die Liste der Items zurück
// Wenn ein Benutzer die URL http://localhost:3000/items aufruft, wird diese Methode ausgeführt
app.get('/items', (req, res) => {
    // Senden der Items als JSON-Antwort
    res.json(items);
});

// POST-Methode: Diese Route ermöglicht das Hinzufügen eines neuen Items
// Wenn ein Benutzer ein neues Item an http://localhost:3000/items sendet, wird diese Methode ausgeführt
app.post('/items', (req, res) => {
    // Das neue Item wird aus dem Body der Anfrage entnommen
    const newItem = req.body;

    // Eine einfache Validierung, um sicherzustellen, dass das Item einen Namen hat
    if (!newItem.name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    // Überprüfen, ob der Name bereits existiert
    if (items.some(item => item.name === newItem.name)) {
        return res.status(400).json({ error: 'Item with this name already exists' });
    }

    // Automatisch eine ID für das neue Item generieren
    newItem.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;

    // Das neue Item zur Liste hinzufügen
    items.push(newItem);

    // Senden einer Bestätigung mit dem hinzugefügten Item
    res.status(201).json(newItem);
});

// Starten des Servers
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});