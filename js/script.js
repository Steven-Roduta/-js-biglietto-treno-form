// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

document.addEventListener('DOMContentLoaded', function() {

    // Prendo tutti gli elementi del DOM
    const formTicket = document.getElementById('ticket-form');
    const userName = document.getElementById('name');
    const userKm = document.getElementById('km');
    const userAge = document.getElementById('scelta');
    const reset = document.getElementById('resetbtn');
    const resultName = document.getElementById('name-result');
    const discount = document.getElementById('offer');
    const ticketTot = document.getElementById('ticket-cost');
   // const carrozza = document.getElementById('train');
   // const cpCode = document.getAnimations.getElementById('code');

    // faccio il  calcolo del prezzo
    function calcoloPrezzo() {

        const nome = userName.value;
        const km = parseFloat(userKm.value); 
        const age = userAge.value;

        // Controllo se i dati siano corrretti
        if (!nome || isNaN(km) || km <= 0) {
            alert('Compila correttamente tutti i campi.');
            return;
        }

        //costo tot. per km
        const prezzoPerKm = 0.21;
        let prezzo = km * prezzoPerKm;  


        // Calcolo sconto in base alla fascia di età
        let sconto = 0;
        if (age === 'opt2') {
            sconto = 0.20;  // 20% per i minorenni
        } else if (age === 'opt3') {
            sconto = 0.40;  // 40% per over 65
        }

        // Applico lo sconto al prezzo
        prezzo = prezzo * (1 - sconto);

        // numero random carrozza

        //const carrozzaRan = Math.floor(Math.random() * 9) + 1;

        // numero random Code

        //const codes = Math.floor(Math.random () * 95637 ) +1;

        // Mostro i risultati nel biglietto
        resultName.innerHTML = `<strong>Nome Passeggero</strong>: ${nome}`;
        discount.innerHTML = `<strong>Offerta</strong>: Biglietto Standard`;
        ticketTot.innerHTML = `<strong>Costo Biglietto</strong>: €${prezzo.toFixed(2)}`;

        //carrozza.innerHTML = `<strong>Numero Carrozza</strong>: ${carrozzaRan}`;
        //cpCode.innerHTML = `<strong>CP Codes</strong>: ${codes}`;

    }

    // Aggiungo l'evento al submit del form
    formTicket.addEventListener('submit', function(event) {
        event.preventDefault(); 
        calcoloPrezzo();
    });

    // Aggiungo l'evento per resettare il form e i risultati
    reset.addEventListener('click', function() {
        formTicket.reset();

        // Reset dei risultati nel biglietto
        resultName.innerHTML = `<strong>Nome Passeggero</strong>: -`;
        discount.innerHTML = `<strong>Offerta</strong>: -`;
        ticketTot.innerHTML = `<strong>Costo Biglietto</strong>: -`;
    });

});
