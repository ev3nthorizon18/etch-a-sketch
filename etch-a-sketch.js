document.body.onload = addElement;

function addElement () {
    const newSquareDiv= document.createElement("div");
    newSquareDiv.id = "SquareDivs";

    const containerDiv = document.getElementById("containerBox");
    containerDiv.insertAdjacentElement('afterend',newSquareDiv);
}

for (let i=0; i<255; i++){
    addElement(i)
}
