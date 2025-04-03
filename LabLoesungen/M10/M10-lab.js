// Mit dem Übergabeparameter success wird bestimmt, ob wir eine 
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if (success) {
                resolve({ name: "John", age: 30 });
            } else {
                reject("Fehler beim Abrufen der Daten");
            }
        }, 2000);
    });
}

async function getUserData(success) {
    try {
        const data = await fetchData(success);
        console.log("Benutzerdaten:", data);
    } catch (error) {
        console.error("Fehler:", error);
    }
}

// Beispielaufruf für getUserData
// getUserData(false);
// getUserData(true);

async function fetchMultipleData(successArray) {
    const promises = successArray.map(success => fetchData(success));
    
    try {
        const results = await Promise.allSettled(promises);
        console.log("Alle Benutzerdaten:", results);
    } catch (error) {
        console.error("Ein Fehler ist aufgetreten:", error);
    }
}

// Beispielaufruf mit mehreren Datenabfragen
fetchMultipleData([true, false, true, true]); // Erfolgreiche und fehlerhafte Datenabfragen
