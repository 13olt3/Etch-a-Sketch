const container = document.querySelector(".container");
const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Resize grid";
button.addEventListener("click",getGridSize);
body.appendChild(button);
let tiles = 16;


function getGridSize() {
    
    var userInput = prompt("Enter desired grid size: ");
    while ((userInput <= 0) || (userInput >= 100)) {
        userInput = prompt("Invalid input. Choose a number between (0 - 100).");
    }
    
    createGrid(userInput);
    return;

}
let tileWidth = 200 / tiles;
let tileHeight = 200 / tiles;

function createGrid(numOfTiles){
    container.replaceChildren();
    for (let i=0; i <numOfTiles; ++i){
        var newBox = document.createElement("div");
        newBox.setAttribute("class", "row");   
        
        for (let j=0; j<numOfTiles; ++j){
            var boxRow = document.createElement("div");
            boxRow.setAttribute("class", "box");
            boxRow.setAttribute("style", "width: "+(200 / numOfTiles)+"px; height: " +(200 / numOfTiles)+ "px;");
            
            
    
            
            newBox.appendChild(boxRow);
        }
        const allBoxes = document.querySelectorAll(".box");
        allBoxes.forEach((button) => {
            button.addEventListener("mouseover", function(e){
                e.target.style.background = "red";        
            });
        });
        container.appendChild(newBox);
    }

}


createGrid(16);





// const allBoxes = document.querySelectorAll(".box");
// allBoxes.forEach((button) => {
//     button.addEventListener("mouseover", function(e){
//         e.target.style.background = "red";        
//     });
// });

