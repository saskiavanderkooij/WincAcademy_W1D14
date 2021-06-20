const gedag = function () {
    alert("Dag " + gebruikersNaam + ". Tot de volgende keer");
}

const getComputerNummer = function (minGetal, maxGetal) {
    min = Math.ceil(minGetal);
    max = Math.floor(maxGetal);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getGebruikersNummer = function (minGetal, maxGetal) {
    let inputnummer = parseInt(prompt("Voer een nummer in van " + minGetal + " tot " + maxGetal + " om te beginnen met raden..."));

    while (isNaN(inputnummer)) {
        inputnummer = parseInt(prompt("Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"));
    }
    return inputnummer;
};

const opnieuw = function () {
    const antwoord = prompt("Wil je opnieuw spelen? ja / nee")
    if (antwoord == "ja") {
        pogingen();
    } else if (antwoord == "nee" || antwoord == "") {
        gedag();
    }
};

const speel = function (minGetal, maxGetal) {
    let computerNummer = getComputerNummer(minGetal, maxGetal);  

    for (index = 1; index <= 5; index++) {
        let gebruikersNummer = getGebruikersNummer(minGetal, maxGetal);
        if ((5 - index) >= 2 && gebruikersNummer != computerNummer) {
            alert("Dat is niet goed. Je hebt nog " + (5 - index) + " pogingen over.");
        } else if ((5 - index) == 1 && gebruikersNummer != computerNummer) {
            alert("Dat is niet goed. Dit is je laatste poging");
        } else if (gebruikersNummer != computerNummer) {
            alert("Dat is niet goed. Helaas je hebt al je pogingen gebruikt. Het spel is over!");
            opnieuw();
        } else {
            alert("Gefeliciteerd je hebt gewonnen.")
            gedag();
            break;
        }
    }
 };

let gebruikersNaam;
while (gebruikersNaam === undefined || gebruikersNaam === null || gebruikersNaam.length === 0) {
    gebruikersNaam = prompt("Welkom! Wat is je naam?");
}

alert("Hallo " + gebruikersNaam + " laten we het spel: Raad het nummer spelen");
alert("Bepaal zelf de range van getallen.");

let minGetal = parseInt(prompt("Kies het laagste getal:"));
while (isNaN(minGetal)) {
    minGetal = parseInt(prompt("Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"));
}

let maxGetal = parseInt(prompt("Kies nu het hoogste getal:"));
while (isNaN(maxGetal)) {
    maxGetal = parseInt(prompt("Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"));
}

speel(minGetal, maxGetal);








