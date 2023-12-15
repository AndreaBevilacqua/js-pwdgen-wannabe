console.log('JS OK')

/* 
  1 - dichiarare una variabile nome
  1b - chiedere il nome all'utente
  2 - dichiarare una variabile cognome
  2b - chiedere il cognome all'utente
  3 - dichiarare una variabile colore preferito
  3b - chiedere il colore preferito all'utente
  4 - Recupero l'elemento html
  5 - Costruisco la password
  6 - Costruisco il messaggio
  7- scrivo la password sulla pagina
*/

const Name = prompt("Come ti chiami?");
console.log(Name);

const LastName = prompt("Qual é il tuo cognome?");
console.log(LastName);

const FavouriteColor = prompt("Qual é il tuo colore preferito?");
console.log(FavouriteColor);

const element = document.getElementById("result");
console.log(element);

const password = Name + LastName + FavouriteColor + "12";
console.log(password);

const message = `Questa é la tua password ${password}`;
console.log(message);

element.innerText = password;




