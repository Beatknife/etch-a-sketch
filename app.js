const canvas = document.getElementById("canvas");
const divSquares = document.querySelectorAll("#canvas > div");
const generateBtn = document.getElementById("generateBtn");

function generateSquares(squares) {

    for(let i = 0; i < squares; i++) {

    let divSquares = document.createElement("div");
    canvas.appendChild(divSquares);
    divSquares.classList.add("divSquares");
    }
}

canvas.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("divSquares")) {
        event.target.style.backgroundColor = "orange";
    }
});

generateBtn.addEventListener("click", () => {

    let squareNum = parseFloat(prompt("Number of squares per side?"));

    if(squareNum <= 100) {
        canvas.textContent = "";
        generateSquares(squareNum ** 2); 
    }
    else if(squareNum > 100) {
        canvas.textContent = "";     
        alert("You can create max 100x100 squares.");
    }
    else if(isNaN(squareNum)) {
        canvas.textContent = "";
        alert("You can only input numbers.")
    }
});