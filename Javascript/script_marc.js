///met de inport functie zorg ik ervoor dat de class Deck vanuit mijn card_game1.js word gehaald zodat ik hem hier ook kan gebruiken///
import Deck from "./card_game1.js";

///hierin heb ik de meest algemene items neergezet zoals de buttons, afbeeldingen enzo.///
let baron = document.getElementById("hm");
let erso = document.getElementById("BE");
let btn2 = document.getElementById("uitleg");
let pd = document.getElementById("playerdeck");
let bdy = document.getElementById("body");
let btn = document.getElementById("start");

///met deze constante variable zorg ik ervoor dat alle nummers waarden krijgen zodat de website weet wie er gewonnen heeft///
const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
}

///met deze constante variabelen zorg ik dat er 2 decks zijn, 2 kaarten slots en de tekst///
const computercardslot = document.querySelector(".computer-card-slot");
const playercardslot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

///hier zie je dat ik 4 variabelen heb gemaakt waarvan 1 op false staat///
let playerDeck, computerDeck, stop;
let inRound = false;

///zoals hier te zien is heb ik gezegd dat playerdeck een eventlistener krijgt en dat als stop actief is dat de game start en als inround false is dat er een kaart te zien is en anders dat de kaart opgeruimd word///
pd.addEventListener("click", () => {
    if (stop) {
        startGame();
        return
    }

    if (inRound) {
        cleanBeforeRound()
    } else {
        FlipCards()
    }
})

startGame();

///deze functie zorgt ervoor dat er telkens nieuwe decks komen en dat de decks geschud zijn///
function startGame() {
    const deck = new Deck();
    deck.shuffle();

    ///hiermee zeg ik dat de algemene kaartenstapel in 2e moet delen///
    const DeckMidpoint = Math.ceil(deck.NumberofCards / 2);

    ///hiermee zeg ik dat de decks elk uit de helft van de kaartenstapel moet bestaan///
    playerDeck = new Deck(deck.cards.slice(0, DeckMidpoint));
    computerDeck = new Deck(deck.cards.slice(DeckMidpoint, deck.NumberofCards));

    ///hiermee zeg ik dat zowel InRound als Stop op false moet zetten///
    inRound = false;
    stop = false;

    cleanBeforeRound()
}

///hiermee zorg ik ervoor dat alles weer terug naar 'normaal' gaat zodat je weer een nieuwe ronde kan spelen///
function cleanBeforeRound() {
    computercardslot.innerHTML = "";
    playercardslot.innerHTML = "";
    text.innerText = "";
    inRound = false;

    updatecards();
}

///hiermee zorg ik ervoor dat je de kaarten omslaat zodat je kan zien welke kaart je hebt getrokken///
function FlipCards() {
    inRound = true;

    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();


    playercardslot.appendChild(playerCard.getHTML());
    computercardslot.appendChild(computerCard.getHTML());

    updatecards();

    cart.play();
    cart.volume = 0.2;

    if (IsRoundWinner(playerCard, computerCard)) {
        text.innerText = "You Win"
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    } else if (IsRoundWinner(computerCard, playerCard)) {
        text.innerText = "You Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    } else {
        text.innerText = "Draw"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }

    if (isGameOver(playerDeck)) {
        text.innerText = "You Lost the Game!"
        stop = true;
    } else if (isGameOver(computerDeck)) {
        text.innerText = "You Won the Game!"
        stop = true;
    }
}

function updatecards() {
    computerDeckElement.innerText = computerDeck.NumberofCards;
    playerDeckElement.innerText = playerDeck.NumberofCards;
}

function IsRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

function isGameOver(deck) {
    return deck.NumberofCards === 0;
}

///start en uitleg buttons///
btn.addEventListener("click", function () {
    bdy.style.display = "grid";
    btn.style.display = "none";
    btn2.style.display = "none";
    erso.style.display = "none";
    cleanBeforeRound();
    Uitleg2.pause();
    Uitleg1.pause();
    Audionet1.pause();
    Audionet2.pause();
    Audionet3.pause();
    Audionet4.pause();
    Audionet5.pause();
    Audionet6.pause();
    Audionet7.pause();
    Audionet8.pause();
    Audionet9.pause();
    Audionet10.pause();
    Uitleg1.currentTime = 0;
    Uitleg2.currentTime = 0;
    Audionet1.currentTime = 0;
    Audionet2.currentTime = 0;
    Audionet3.currentTime = 0;
    Audionet4.currentTime = 0;
    Audionet5.currentTime = 0;
    Audionet6.currentTime = 0;
    Audionet7.currentTime = 0;
    Audionet8.currentTime = 0;
    Audionet9.currentTime = 0;
    Audionet10.currentTime = 0;
    Audionet1.play();
    Audionet1.volume = 1;
})

btn2.addEventListener("click", function () {
    btn.style.display = "none";
    btn2.style.display = "none";
    erso.style.display = "none";
    baron.style.display = "inline";
    Uitleg1.play();
    Uitleg1.volume = 0.3;
    Audionet1.pause();
    Audionet2.pause();
    Audionet3.pause();
    Audionet4.pause();
    Audionet5.pause();
    Audionet6.pause();
    Audionet7.pause();
    Audionet8.pause();
    Audionet9.pause();
    Audionet10.pause();
    Audionet1.currentTime = 0;
    Audionet2.currentTime = 0;
    Audionet3.currentTime = 0;
    Audionet4.currentTime = 0;
    Audionet5.currentTime = 0;
    Audionet6.currentTime = 0;
    Audionet7.currentTime = 0;
    Audionet8.currentTime = 0;
    Audionet9.currentTime = 0;
    Audionet10.currentTime = 0;
})

///Music variable///
let Audionet1 = new Audio("../games/music_marc/Backstory.mp3")
let Audionet2 = new Audio("../games/music_marc/Kompels Gezocht.mp3")
let Audionet3 = new Audio("../games/music_marc/tussenstuk1.mp3");
let Audionet4 = new Audio("../games/music_marc/backstory_decken.mp3");
let Audionet5 = new Audio("../games/music_marc/De Vliegende Hollander Muziek (Smokkelgang).mp3");
let Audionet6 = new Audio("../games/music_marc/tussenstuk2.mp3");
let Audionet7 = new Audio("../games/music_marc/reis naar CodeVille.mp3");
let Audionet8 = new Audio("../games/music_marc/vaart naar CodeVille.mp3");
let Audionet9 = new Audio("../games/music_marc/laatste tussenstuk.mp3");
let Audionet10 = new Audio("../games/music_marc/The End.mp3");
let Uitleg1 = new Audio("../games/music_marc/uitleg_1.mp3")
let Uitleg2 = new Audio("../games/music_marc/uitleg_2.mp3")
let cart = new Audio("../games/music_marc/Card Flip - sound effect (128 kbps).mp3")

///Music EventListerner///
Audionet1.addEventListener("ended", function () {
    Audionet2.play()
    Audionet2.volume = 1;
})
Audionet2.addEventListener("ended", function () {
    Audionet3.play();
    Audionet3.volume = 1;
})
Audionet3.addEventListener("ended", function () {
    Audionet4.play();
    Audionet4.volume = 1;
})
Audionet4.addEventListener("ended", function () {
    Audionet5.play();
    Audionet5.volume = 1;
})
Audionet5.addEventListener("ended", function () {
    Audionet6.play();
    Audionet6.volume = 1;
})
Audionet6.addEventListener("ended", function () {
    Audionet7.play();
    Audionet7.volume = 1;
})
Audionet7.addEventListener("ended", function () {
    Audionet8.play();
    Audionet8.volume = 1;
})
Audionet8.addEventListener("ended", function () {
    Audionet9.play();
    Audionet9.volume = 1;
})
Audionet9.addEventListener("ended", function () {
    Audionet10.play();
    Audionet10.volume = 1;
})
Audionet10.addEventListener("ended", function () {
    Audionet1.play();
    Audionet1.volume = 1;
})

///uitleg muziek///
Uitleg1.addEventListener("ended", function () {
    erso.style.display = "inline";
    baron.style.display = "none";
    btn.style.display = "none";
    btn2.style.display = "none";
    bdy.style.display = "none";
    Uitleg2.play();
    Audionet1.pause();
    Audionet2.pause();
    Audionet3.pause();
    Audionet4.pause();
    Audionet5.pause();
    Audionet6.pause();
    Audionet7.pause();
    Audionet8.pause();
    Audionet9.pause();
    Audionet10.pause();
    Uitleg1.currentTime = 0;
    Audionet1.currentTime = 0;
    Audionet2.currentTime = 0;
    Audionet3.currentTime = 0;
    Audionet4.currentTime = 0;
    Audionet5.currentTime = 0;
    Audionet6.currentTime = 0;
    Audionet7.currentTime = 0;
    Audionet8.currentTime = 0;
    Audionet9.currentTime = 0;
    Audionet10.currentTime = 0;
    Uitleg2.volume = 0.3;
})

Uitleg2.addEventListener("ended", function () {
    bdy.style.display = "grid";
    btn.style.display = "none";
    btn2.style.display = "none";
    erso.style.display = "none";
    Audionet1.play();
    Audionet1.volume = 0.1;
})




///uitleg minigame///
var pattern = ['b', 'a', 'r', 'o', 'n'];
var current = 0;

var keyHandler = function (event) {

    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }

    current++;

    if (pattern.length === current) {
        current = 0;
        erso.style.display = "inline";
        baron.style.display = "none";
        btn.style.display = "none";
        btn2.style.display = "none";
        bdy.style.display = "none";
        Uitleg2.play();
        Uitleg1.pause();
        Audionet1.pause();
        Audionet2.pause();
        Audionet3.pause();
        Audionet4.pause();
        Audionet5.pause();
        Audionet6.pause();
        Audionet7.pause();
        Audionet8.pause();
        Audionet9.pause();
        Audionet10.pause();
        Uitleg1.currentTime = 0;
        Audionet1.currentTime = 0;
        Audionet2.currentTime = 0;
        Audionet3.currentTime = 0;
        Audionet4.currentTime = 0;
        Audionet5.currentTime = 0;
        Audionet6.currentTime = 0;
        Audionet7.currentTime = 0;
        Audionet8.currentTime = 0;
        Audionet9.currentTime = 0;
        Audionet10.currentTime = 0;
        Uitleg2.volume = 0.3;
    }
}
document.addEventListener('keydown', keyHandler, false);

///back///
var pattern2 = ['b', 'a', 'c', 'k'];
var current2 = 0;

var keyHandler = function (event) {

    if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
        current2 = 0;
        return;
    }

    current2++;

    if (pattern2.length === current2) {
        current2 = 0;
        btn.style.display = "inline";
        btn2.style.display = "inline";
        erso.style.display = "none";
        baron.style.display = "none";
        bdy.style.display = "none";
        Uitleg2.pause();
        Uitleg1.pause();
        Audionet1.pause();
        Audionet2.pause();
        Audionet3.pause();
        Audionet4.pause();
        Audionet5.pause();
        Audionet6.pause();
        Audionet7.pause();
        Audionet8.pause();
        Audionet9.pause();
        Audionet10.pause();
        Uitleg1.currentTime = 0;
        Uitleg2.currentTime = 0;
        Audionet1.currentTime = 0;
        Audionet2.currentTime = 0;
        Audionet3.currentTime = 0;
        Audionet4.currentTime = 0;
        Audionet5.currentTime = 0;
        Audionet6.currentTime = 0;
        Audionet7.currentTime = 0;
        Audionet8.currentTime = 0;
        Audionet9.currentTime = 0;
        Audionet10.currentTime = 0;
    }
}
document.addEventListener('keydown', keyHandler, false);