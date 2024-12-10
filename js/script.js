//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const forKm = 0.21;

// num di km che l'utente deve fare

const UtenteKm = Number (prompt ('totale km da fare'));

// età dell'utente

const UtenteAge = Number (prompt('metti la tua età'));

// calcolo totale km

let totalCost = Utentekm * forKm;

// Sconto per minorenni 20% and 40% di sconto per gli over 65+

let discount = 0;

if ( UtenteAge) {
    discount = totalCost * 0.2;
} else if (UtenteAge >= 65) {
    discount = totalCost * 0.4;
}

totalCost = totalCost - discount;

console.log(totalCost);

alert('il prezzo totale è: ${totalCost.toFixed(2)}€');