// Array mit Hobbies erstellen
let hobbies = ["zocken", "downhill", "Sport", "Reisen", "handwerkeln"];

// Funktion zum Hinzufügen eines Elements zum Array
function hinzufuegenHobby(neuesHobby) {
if (hobbies.length >= 5) {
hobbies.shift(); // Lösche das erste Element, falls mehr als 5 Elemente im Array sind
}
hobbies.push(neuesHobby); // Füge das neue Hobby ans Ende des Arrays hinzu
}

// Neues Hobby hinzufügen
hinzufuegenHobby("Freeride");

// Hobbies über einen for-loop ausgeben
for (let i = 0; i < hobbies.length; i++) {
console.log("Mein " + (i + 1) + ". Hobby: " + hobbies[i]);
}