// Demo Modul 3, JavaScript ist eingebunden in Demo-M03.html

// Variable Preis netto, Steuer
let preis_netto = 100;
let steuer = 1.19; // 19% USt
// Berechnung Preis brutto
let preis_brutto = preis_netto * steuer;
// Ausgabe Preis brutto in Konsole
console.log(preis_brutto+ " Euro");

// Code von Oben in Funktion auslagern
// Funktion berechneBrutto mit Parametern preis_netto und steuer
function berechneBrutto(preis_netto, steuer) {
    // Berechnung Preis brutto
    let preis_brutto = preis_netto * steuer;
    // Rückgabe Preis brutto
    return preis_brutto;
}


// Aufruf der Funktion berechneBrutto mit Parametern 100 und 1.19
let preis_brutto_function = berechneBrutto(100, 1.19);
console.log(preis_brutto_function+ " Euro");
