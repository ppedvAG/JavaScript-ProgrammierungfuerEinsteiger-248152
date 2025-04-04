const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Fehler beim Lesen der Datei:', err);
        return;
    }
    console.log('Dateiinhalt:', data);
});
fs.writeFile(filePath, 'Hallo Welt', (err) => {
    if (err) {
        console.error('Fehler beim Schreiben in die Datei:', err);
        return;
    }
    console.log('Datei erfolgreich geschrieben!');
});