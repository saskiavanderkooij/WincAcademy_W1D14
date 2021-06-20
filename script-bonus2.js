const gedag = function () {
    alert("Dag " + gebruikersNaam + ". Tot de volgende keer");
}

const getGebruikersNummer = function () {
    const inputnummer = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");
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

const pogingen = function () {
    const computerNummer = Math.floor(Math.random() * 25);
    for (index = 1; index <= 5; index++) {
        var gebruikersNummer = getGebruikersNummer();
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

const gebruikersNaam = prompt("Welkom! Wat is je naam?");
alert("Hallo " + gebruikersNaam + " laten we het spel: Raad het nummer spelen");
pogingen();







