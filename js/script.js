// quello che l'utente scrive nel prompt apparirà in html nel div con l'Id "password-generator"
// domande poste all'utente

const userName = prompt('Inserisci il tuo nome');
const userLastname = prompt('Inserisci il tuo cognome');
const favoriteColor = prompt('Inserisci il tuo colore preferito');

// la password generata in base alle risposte delle singole domande più l'anno in cui la password è stata generata

let htmlElement = document.getElementById('password-generator');
htmlElement.innerHTML = `Password: ${userName} ${userLastname} ${favoriteColor} 2021`;

