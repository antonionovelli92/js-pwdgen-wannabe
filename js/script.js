console.log('JS OK')

/* TRACCIA: 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 
/*

/************* STEP:
 1. Prendo l'elemento dal DOM
 2. Chiede all'utente il suo nome;
 3. Chiede all'utente il suo cognome;
 4. Chiede all'utente il suo colore preferito;
 5. Inserisco tutti i suoi dati (NOME, COGNOME, COLORE PREFRITO) accompagnato dal numero 21;
 ********************/

// Prendo l'elemento dal dom
const passwordElement = document.getElementById('password');
//// console.log(passwordElement)

//Chiede all'utente il suo nome;
const userName = prompt('Come ti chiami?', 'Antonio');
//// console.log(userName)

//Chiede all'utente il suo cognome;
const userSurname = prompt('Qual è il tuo cognome?', 'Novelli');
//// console.log(userSurname)

//Chiede all'utente il suo colore preferito;
const userColor = prompt('Qual è il tuo colore preferito?', 'Blu');
//// console.log(userColor)

// inseriamo il risultato sull'HTML
passwordElement.innerHTML = `La tua password è: ${userName}${userSurname}${userColor}21`;
