const gridElement = document.getElementById("grid");
let output = 0

const bombe = genArrayRandomNum(1, 100, 16);
console.log(bombe);
let score = 0;
console.log("punteggio: ", score);

for (let i = 0; i < 100; i++) {

    const newElement = createMyElement("div", "square");
    gridElement.append(newElement);
    let output = i + 1;
    newElement.append(output)

    newElement.addEventListener("click",

        function () {
            this.classList.add("clicked")
            console.log("clicked");
            if (bombe.includes(output)) {
                this.classList.add("clickedboom")
                console.log("boom fine gioco");
                console.log("hai totalizato" + score)
            } else {
                this.classList.add("clicked")
                score++;
            }
        }

    )



}


function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}

// bomb generator

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