///constante variablen met daarin eentje voor de Suits (harten, schopen etc.) en eentje voor de Values (A,2,3 etc.)///
const SUITS = [];
SUITS[0] = "♣";
SUITS[1] = "♦";
SUITS[2] ="♥";
SUITS[3] = "♠";
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

///in deze class geef ik aan dat ik een object wil dat Deck heet en doormiddel van de constructor een functie laat runnen waardoor er elke keer nieuwe kaarten in 1 deck zitten. ook laat ik hier natuurlijk de kaarten schudden zodat je (bijna) nooit dezelfde hebt en zorg ik ervoor dat je de kaart te zien krijgt en weer terug in een deck gaat///
export default class Deck {
    constructor(cards = nieuw()) {
        this.cards = cards;

    }

    get NumberofCards() {
        return this.cards.length;
    }

    pop() {
        return this.cards.shift();
    }

    push(card) {
        this.cards.push(card)
    }

    shuffle() {
        for (let i = this.NumberofCards - 1; i > 0 ; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

///in deze class maak ik de kaarten aan. ook zorgt het gelijk ervoor dat de kaarten een div worden in HTMl en het zorgt ervoor dat het de juiste kleur krijgt///
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    get color() {
        return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
    }

    getHTML(){
        const Carddiv = document.createElement("div");
        Carddiv.innerText = this.suit; 
        Carddiv.classList.add("card", this.color);
        Carddiv.dataset.value = `${this.value} ${this.suit}`;
        return Carddiv
    }
}

///met deze functie zorg ik dat alle Suits en Values gerandomised zijn in het deck maar wel dat er maar 1 van elk is///
function nieuw() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value) 
        })
    })
}