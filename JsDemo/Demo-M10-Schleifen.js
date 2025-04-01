// var i = 0;
// while Schleife
// Die Schleife wird solange durchlaufen, wie die Bedingung erfüllt ist
while (i<10) {
    console.log(i);
    i++;
}

// for Schleife
for(i = 0; i<10; i++) {
    if(i % 2 != 0) {
        console.log(i + " ist ungerade");
    } else {
        console.log(i + " ist gerade");
    }
}

// do while Schleife
// Die Schleife wird mindestens einmal durchlaufen, auch wenn die Bedingung nicht erfüllt ist
j = 0;
do {
    console.log(i);
    j++;
} while (j<10);

// for in Schleife
// Die Schleife wird für jedes Element im Array durchlaufen
array = [1, 2, 3, 4, 5];
for(index in array) {
    console.log("Element and der Stelle "+ index + " ist "+ array[index]);
}


// for in Schleife für Objekte

// Klasse Auto mit Eigenschaften Marke und Modell
class Auto {
    // Eigenschaften Marke und Modell
    constructor (marke, modell) {
        this.marke = marke;
        this.modell = modell;
    }
}

// Objekt VW erstellen
vw = new Auto("VW", "Golf");
// alle Eigenschaften von vw werden durch iteriert
for(index in vw) {
    // Mit index auf die Eigenschaften zugreifen und den Wert ausgeben
    console.log("Eigenschaft "+ index + " ist "+ vw[index]);
}