const gridElement = document.getElementById("grid");
let output = 0



for (let i = 0; i < 100; i++) {

    const newElement = createMyElement("div", "square");

    gridElement.append(newElement);
    newElement.addEventListener("click",

        function () {
            this.classList.add("clicked")
            console.log("clicked");
        }

    )

    let output = i + 1;
    newElement.append(output)


}


function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}

