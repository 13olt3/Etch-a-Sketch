
const container = document.querySelector(".container");

for ( var i = 0; i < 16; i++){
    var squareColumn = document.createElement("div");
    squareColumn.setAttribute("class", "box");
    for( var j = 0; j < 15; j++){
        var squareRow = document.createElement("div");
        squareRow.setAttribute("class", "sub1");
        squareColumn.appendChild(squareRow);
    }
    container.appendChild(squareColumn);
}



