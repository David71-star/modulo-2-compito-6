// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const traduzione = function () {
  const h1 = document.querySelector("h1");
  h1.innerText = "NEGOZIO AUTO";
};

const notte = function () {
  const titolo = document.querySelector("body,*");
  titolo.classList.toggle("selezionato");
};

const indirizzo = function () {
  const cambiaVia = document.querySelector("footer p");
  cambiaVia.innerText = "Oristano (09014), Via Gustavo 1";
};

const link = function () {
  const azione = document.querySelectorAll("a");

  for (let i = 0; i < azione.length; i++) {
    azione[i].classList.add("link");
  }
};

const invisibilità = function () {
  const imgAll = document.querySelectorAll("img");

  for (let i = 0; i < imgAll.length; i++) {
    imgAll[i].classList.toggle("trasparente");
  }
};

const colore = function () {
  const cambiaColorePrezzo = document.querySelectorAll(".prodotto h4");

  for (let i = 0; i < cambiaColorePrezzo.length; i++) {
    cambiaColorePrezzo[i].style = `color: rgb(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)}
    )`;
  }
};
