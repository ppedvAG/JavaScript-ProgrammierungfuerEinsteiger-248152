// neues Array mit Länge 4
let array = new Array(4);

// versuchen, auf Index 4 zuzugreifen
array[40] = 5; // JavaScript erlaubt das, aber es ist nicht sinnvoll
console.log(array[40]); 


// Array Städte mit Strings als Index
let hauptstaedte = new Array();
// Arrays dürfen auch Strings als Index haben
hauptstaedte["Deutschland"] = "Berlin";
hauptstaedte["Frankreich"] = "Paris";
hauptstaedte["Italien"] = "Rom";

// Über den Index "Deutschland" wird auf den dazugehörigen Wert "Berlin" zugegriffen
console.log("die hauptstadt von Deutschland ist " + hauptstaedte["Deutschland"]);

// neues array mit concat von zwei arrays
array1 = [1,3,4,5,6]
let array2 = array.concat(array1, [7,8,9]);
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}


// Array zu einem String konvertieren mit / als Trennzeichen
console.log(array2.toString()); 
console.log(hauptstaedte.join("-"));
var variable = array2.toString();
console.log(typeof variable); // Ausgabe: string
console.log(typeof array2); // Ausgabe: object

// Array zu einem String konvertieren mit + als Trennzeichen
console.log(array2.join("+"));



// neues Array für unshift und push
let zahlen = [1, 2, 3, 4, 5];
console.log(zahlen);

// an der ersten Stelle die Zahl 0 hinzufügen
zahlen.unshift(0); // [0, 1, 2, 3, 4, 5]
console.log(zahlen);

// an der letzten Stelle die Zahl 6 hinzufügen
zahlen.push(6); // [0, 1, 2, 3, 4, 5, 6]
console.log(zahlen);

// Element an der ersten Stelle entfernen
zahlen.shift(); // [1, 2, 3, 4, 5, 6]
console.log(zahlen);

// Element an der letzten Stelle entfernen
zahlen.pop(); // [1, 2, 3, 4, 5]
console.log(zahlen);

// Mit splice 2 Elemente ab der Stelle 2 entfernen
zahlen.splice(2, 2); // [1, 2, 5]
console.log(zahlen); 


// Mit splice 2 Elemente ab der Stelle 2 Hinzufügen
// Zahlen 3 und 4 werden ab der Stelle 2 hinzugefügt
zahlen.splice(2, 0, 3, 4, 5); // [1, 2, 3, 4, 5, 5]
console.log(zahlen);

// Array umdrehen
zahlen.reverse(); // [5, 5, 4, 3, 2, 1]
console.log(zahlen);