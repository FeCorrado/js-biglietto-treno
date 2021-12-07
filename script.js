// collegamento file html
const outputHtml = document.getElementById("output");

//  km 
let kms = prompt("Quanti km vuoi percorrere?");
console.log(kms);
// età 
let age = prompt("Quanti anni hai?");
console.log(age);


// Prezzo senza sconto
const kmPr = 0.21;
let ticketPrice = kms * kmPr;
console.log(ticketPrice);


// Prezzo scontato
let discountPrice;
if (age < 18 && age >= 1) {
    discountPrice = ticketPrice * 0.8;
} else if (age > 65) {
    discountPrice = ticketPrice * 0.6; 
} else {
    discountPrice = ticketPrice;
}

outputHtml.innerHTML += `<br/>Il costo del tuo biglietto è di ${discountPrice}€.`;
console.log(discountPrice);


// Due cifre decimali
discountPrice = discountPrice.toFixed(2);
