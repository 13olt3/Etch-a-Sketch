const container = document.querySelector(".container");


for (let i=0; i <16; ++i){
    var newBox = document.createElement("div");
    newBox.setAttribute("class", "row");   
    
    for (let j=0; j<16; ++j){
        var boxRow = document.createElement("div");
        boxRow.setAttribute("class", "box");
        newBox.appendChild(boxRow);
    }
    container.appendChild(newBox);
}

// box.addEventListener("mouseover", function(e){
//     e.target.style.background = "blue";
// });
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach((button) => {
    button.addEventListener("mouseover", function(e){
        e.target.style.background = "red";
    });
});