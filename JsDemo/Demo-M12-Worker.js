// Wenn ich daten bekomme, mache ich etwas damit
// wir gehen davon aus, dass wir Längengrad und Breitengrad mit Komma getrennt bekommen
self.onmessage = function (e) {
    const values =e.value.split(","); // wir splitten die Daten in ein Array
    // String to Number
    const lat = parseFloat(values[0]); // wir konvertieren den Breitengrad in eine Zahl
    if(lat>0&&lat<90){
        self.postMessage("Nordhalbkugel"); // wenn der Breitengrad zwischen 0 und 90 ist, dann ist es die Nordhalbkugel
    } else {
        self.postMessage("Südhalbkugel"); // wenn der Breitengrad zwischen 0 und -90 ist, dann ist es die Südhalbkugel
    }
}
