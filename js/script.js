
const gridElement = document.getElementById("grid");
let output = 0

// variabile bombe generata con 16 numeri casuali dalla funzione genArrayRandomNum
const bombe = genArrayRandomNum(1, 100, 16);
console.log(bombe);

// creazione variabile punteggio
let score = 0;
console.log("punteggio: ", score);

// ciclo for in cui creo le caselle e controllo se clicco sulle bombe 
for (let i = 0; i < 100; i++) {

    const newElement = createMyElement("div", "square");
    gridElement.append(newElement);
    let output = i + 1;
    newElement.append(output)

    newElement.addEventListener("click",

        function () {
            this.classList.add("clicked")
            console.log("clicked");

            // controllo se bombe include output che ho cliccato
            if (bombe.includes(output)) {
                this.classList.add("clickedboom")
                // messaggio in console con fine gioco e punteggio (con l'alert non funziona)
                console.log("boom fine gioco");
                console.log("hai totalizato" + score)
            } else {
                // alternativamente se il valore di bomba non è in quello che ho cliccato aumenta il punteggio e colora diversamente la casella
                this.classList.add("clicked")
                score++;
            }
        }

    )



}

// funzione di creazione elemento div e nome classe
function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}

//funzione di generatore caselle di appartenenza delle bombe in base alla lunghezza dell'array con possibile implementazione della difficoltà

function genArrayRandomNum(minNum, maxNum, lunghezzaArr) {

    const arrayToGen = [];

    while (arrayToGen.length < lunghezzaArr) {
        let newNumber = genRandomNumMinMax(minNum, maxNum);

        if (!arrayToGen.includes(newNumber)) {
            arrayToGen.push(newNumber);
        }
    }

    return arrayToGen;
}

// generazione numero random 
function genRandomNumMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}