//neue Klasse Auto
class Auto {
    // Eigenschaften Marke, Modell und Fahrer
    constructor (marke, modell, fahrer) {
        this.marke = marke;
        this.modell = modell;
        // Klassen können auch Objekte anderer Klassen als Eigenschaften haben
        this.fahrer = fahrer; // Fahrer ist ein Objekt der Klasse Person
    }

    // methode Hupen
    hupen() {
        console.log(this.fahrer.name+" hupt!");
    }

}

// Klasse Person
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Die Klassen wurden jetzt erstellt, 
// somit wurde die Struktur der Objekte (Eigenschaften und Methoden)festgelegt
// Jetzt können Objekte dieser Klassen erstellt werden

// Personen-Objekt erstellen
bmwFahrer = new Person("Hans Müller");

// Auto Objekt erstellen mit Fahrer
bmwX5 = new Auto("BMW", "X5", bmwFahrer);


// Ausgabe der Eigenschaften von bmwX5
console.log(bmwX5.marke); // Ausgabe: BMW
console.log(bmwX5.modell); // Ausgabe: X5
// Aufruf der Methode hupen
bmwX5.hupen(); // Ausgabe: Hans Müller hupt!

// Der Konstruktor kann auch ohne Parameter aufgerufen werden
autoOhneEigenschaften = new Auto();
// Ausgabe der Eigenschaften von autoOhneEigenschaften
console.log(autoOhneEigenschaften.marke); // Ausgabe: undefined, weil kein Wert übergeben wurde
console.log(autoOhneEigenschaften.modell); // Ausgabe: undefined, weil kein Wert übergeben wurde


// Anonyme Klassen haben keinen Namen und werden direkt instanziiert
// Diese sind nicht wiederverwendbar und können nicht erweitert werden
// Sie sind nur für den einmaligen Gebrauch gedacht
// Anonyme Klasse für Fahrrad wird direkt instanziiert
fahrradTomTurbo = {
    marke: "Tom",
    modell: "Turbo",
    klingeln() {
        console.log("Brrrrring!");
    }
}
// Ausgabe der Eigenschaften
console.log(fahrradTomTurbo.marke); // Ausgabe: Tom
console.log(fahrradTomTurbo.modell); // Ausgabe: Turbo
// Funktionsaufruf der Methode klingeln
tomTurbo.klingeln(); // Ausgabe: Brrrrring!



// Auf Eigenschaften von Objeken kann immer zugegriffen werden
// Hier wird der Fahrer des BMWs auf "Peter Wurst" gesetzt
bmwFahrer.name = "Peter Wurst";
// Der Fahrer des BMWs wird aktuallisiert
bmwX5.fahrer = bmwFahrer;




