// color input
var color = document.getElementById("colorPicker");

// size input
var canvas = document.getElementById("pixelCanvas");
var size = document.getElementById("sizePicker");
var inputHeight = document.getElementById("inputHeight");
var inputWidth = document.getElementById("inputWidth");


size.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid(inputHeight.value, inputWidth.value);
});

// makeGrid function
function makeGrid(inputHeight, inputWidth) {
    canvas.innerHTML = "";
    for (var h = 0; h < inputHeight; h++) {
        var row = canvas.insertRow(h);
        for (var w= 0; w < inputWidth; w++) {
            var cell = row.insertCell(w);
            cell.addEventListener("click", function(event) {
                event.target.style.backgroundColor = color.value;
            });
        }
    }
};
