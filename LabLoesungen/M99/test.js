import { Selector } from 'testcafe';

fixture `JSON Konverter Test`
    .page `C:\Users\de2\OneDrive - ppedv AG\Anlagen\Schulungsunterlagen\JavaScript-Einsteiger\JavaScript - Programmierung für Einsteiger\Extras\M-999-JsonStrings-Testcafe\JSON.html` // Update to the correct local file path

// Neuer Test mit dem Titel "JSON Konvertierung überprüfen"
test('JSON Konvertierung überprüfen', async t => {
    // Variablen für die Eingaben im HTML
    const jsonInput = Selector('#jsonInput'); // Corrected selector
    const convertButton = Selector('#convertButton'); // Corrected selector
    const output = Selector('#output'); // Corrected selector

    // Gültiger JSON String wir eingegeben und überprüft
    await t
        .typeText(jsonInput, '{"name": "Max", "age": 30}')
        .click(convertButton)
        // Mit expect können wir das Erwartete mit dem Tatsächlichen vergleichen
        .expect(output.innerText).eql('{\n  "name": "Max",\n  "age": 30\n}');

    // Ungültiger JSON String wir eingegeben und überprüft
    await t
        .selectText(jsonInput)
        .pressKey('delete') // Löschen des vorherigen Textes
        .typeText(jsonInput, '{"name": "Max", "age": 30,}') // Ungültiger JSON
        .click(convertButton)
        // Mit expect können wir das Erwartete mit dem Tatsächlichen vergleichen
        .expect(output.innerText).eql('Ungültiger JSON-String');
});