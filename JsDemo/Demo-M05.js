// Array mit 6 Zufallszahlen zwischen 0 und 49
lottozahlen = new Array();
for(i = 0; i<6; i++) {
    lottozahlen[i] = Math.floor(Math.random()*49);
    console.log(lottozahlen[i]);
}

// Zahl vom User ist hier hardcodiert
userZahl = 11;

// Boolean Variable um zu speichern, ob die Zahl gefunden wurde
gewonnen = false;

// mit for in Schleife die Lottozahlen durchlaufen
for(index in lottozahlen) {
    // mit index jede Lottozahl ansprechen und mit der Userzahl vergleichen
    if(lottozahlen[index] == userZahl) {
        // wenn die Zahl gefunden wurde, wird die gewonnen Variable auf true gesetzt
        gewonnen = true;
    }
}

// Überprüfung, ob die Zahl gefunden wurde
if(gewonnen) {
    console.log("Die Zahl " + userZahl + " war dabei, gratuliere!");
} else {
    console.log("Die Zahl " + userZahl + " war nicht dabei, schade!");
}

// DateTime ----------------------------------------------------------------------------

// Neue DateTime Speichern
heuteUm12 = new Date(2025,3,1,12); // Achtung: Monat 0-11, also 3=April
heuteUm11 = new Date("april 1 2025 11:00:00");

// Datum ausgeben
console.log(heuteUm12.toString());
console.log(heuteUm11.toString());


// heuteUm12 14 Tage dazu addieren
// 14 Tage in Millisekunden umrechnen
zeitInMillisekunden = 14*24*60*60*1000;

// heuteUm12 in Millisekunden umrechnen und die 14 Tage in Millisekunden dazu addieren
heuteUm12= heuteUm12.getTime() + zeitInMillisekunden;
// heuteUm12 wird wieder in ein Date Objekt umgewandelt und ausgegeben
console.log(new Date(heuteUm12).toString());

// RegEx ---------------------------------------------------------------------------------------

// neue Regulare Expression für die Suche nach Datum und Uhrzeit
// RegEx erzeugt mit https://regex-generator.olafneumann.org
// Neue Regex für Datum und Uhrzeit mit g Flag (global) (Format dd.mm.yyyy hh:mm)
regex = new RegExp("\\d\\d\\.\\d\\d\\.\\d\\d\\d\\d\\s\\d\\d:\\d\\d", "g")

// match liefert ein Array mit den gefundenen Werten zurück
ergebnis="12.12.2023 12:00, 12.12.2023 12:00".match(regex);
console.log(ergebnis);

// search liefert die Position des ersten gefundenen Wertes zurück
ergebnis="12.12.2023 12:00, 12.12.2023 12:00".search(regex);
console.log(ergebnis);

// replace ersetzt den gefundenen Wert mit dem zweiten Parameter
// mit replace den Text "Uhr" an die Uhzeit anhängen
ergebnis = "12.12.2023 12:00, 12.12.2023 12:00".replace(regex, "$& Uhr"); // $& ist der gefundene Wert
console.log(ergebnis);

// split teilt den Text an der Stelle des gefundenen Wertes
regex2 = new RegExp(",\\s", "g") // Regex für Komma und Leerzeichen
ergebnis = "12.12.2023 12:00, 12.12.2023 12:00".split(regex2);
console.log(ergebnis);