const checkNummer = function (gebruikersNummer) {
    const computerNummer = Math.floor(Math.random() * 25);
    if (gebruikersNummer == computerNummer) {
        alert("Gefeliciteerd je hebt gewonnen.");
        gedag();
    } else {
        alert("Dat is niet correct");
        opnieuw();
    }
};

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
        getGebruikersNummer();
    } else if (antwoord == "nee" || antwoord == "") {
        gedag();
    }
};

const gebruikersNaam = prompt("Welkom! Wat is je naam?");
alert("Hallo " + gebruikersNaam + " laten we het spel: Raad het nummer spelen");
var  gebruikersNummer = getGebruikersNummer();
checkNummer(gebruikersNummer);









