const eingabeFeld = document.getElementById("eingabeFeld");
const hinzufuegenButton = document.getElementById("hinzufuegenButton");
const toDoListe = document.getElementById("toDoListe");

hinzufuegenButton.addEventListener("click", neuesToDoHinzufuegen);

ausgewahlteToDo = new Array(); // Variable für das ausgewählte To-Do

function neuesToDoHinzufuegen() {

    let toDoText = eingabeFeld.value.trim(); // Leerzeichen entfernen

   if (toDoText !== "") {
        // Neues <li>-Element erstellen und Text setzen
        const neuesListItem = document.createElement("li"); // Neues <li>-Element erstellen
        neuesListItem.textContent = toDoText; // Text des <li>-Elements setzen

        // neue Checkbox erstellen
        const checkbox = document.createElement("input"); // Neues <input>-Element erstellen
        checkbox.type = "checkbox"; // Typ auf "checkbox" setzen

        // Checkbox-Event-Listener hinzufügen
        checkbox.addEventListener("change", function() {
            //Annonyme Funktion im Eventlistener

            //Wenn Checkbox ausgewählt ist
            if(checkbox.checked) {
                //Fügen wir das Element zu unserem Array hinzu
                ausgewahlteToDo.push(neuesListItem); // Das ToDo wird in das Array gepusht
                console.log(ausgewahlteToDo);
            } else {
                //Ansonsten löschen wir das Element aus dem Array heraus
                let index = ausgewahlteToDo.indexOf(neuesListItem); // Index des ToDos im Array
                if (index >= 0) {
                    ausgewahlteToDo.splice(index, 1); // Das ToDo wird aus dem Array entfernt
                }
            }
        });


        // Checkbox zum <li>-Element hinzufügen
        neuesListItem.appendChild(checkbox); // Checkbox zum <li>-Element hinzufügen

        toDoListe.appendChild(neuesListItem); // Neues <li>-Element zur Liste hinzufügen

        eingabeFeld.value = ""; // Eingabefeld zurücksetzen
    }
}

// Eventhandler für ausgewaehlteLoeschenButton
ausgewaehlteLoeschenButton = document.getElementById("ausgewaehlteLoeschenButton");
ausgewaehlteLoeschenButton.addEventListener("click", ausgewaehlteLoeschen);

function ausgewaehlteLoeschen() {
    for(index in ausgewahlteToDo) {
        console.log(index);
        toDoListe.removeChild(ausgewahlteToDo[index]);
    }
    ausgewahlteToDo = new Array();
}

// Button zum Löschen aller To-Dos mit Event-Listener
let loeschenButton = document.getElementById("loeschenButton");
loeschenButton.addEventListener("click", alleToDosLoeschen);

// Funktion zum Löschen aller To-Dos
function alleToDosLoeschen() {
    while(toDoListe.firstChild) {
        toDoListe.removeChild(toDoListe.firstChild); // Entfernt das erste Kind der Liste also unser ToDo (<li>)
    }
}

// Button zum Löschen des Ersten To-Dos mit Event-Listener
let erstesLoeschenButton = document.getElementById("erstesLoeschenButton");
erstesLoeschenButton.addEventListener("click", erstesToDoLoeschen);

// Funktion zum Löschen des erstesn To-Dos
function erstesToDoLoeschen() {
    if (toDoListe.firstChild) {
        toDoListe.removeChild(toDoListe.firstChild); // Entfernt das erste Kind der Liste also unser ToDo (<li>)
    }
}





