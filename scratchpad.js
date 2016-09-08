// Creates a 16 x 16 square Grid

var size = 529;

$(document).ready(gridReady);


function makeSquare(size, n) {
    var margin = 3;
    var length = size/(n + margin);
    var square = $(document.createElement("div"));
    square.css("width", length);
    square.css("height", length);
    square.css("margin", margin);
    square.css("background-color", "blue");
    square.css("display", "inline-block");
    $(square).mouseenter(function() {
        $(square).css("background-color", "yellow");
    });
    $( "#clear" ).click(function() {
        $(square).css("background-color", "blue");
    });
    return square;
}



function makeRow(number) {
    var rowContainer = $(document.createElement("div"));
    for (var i = 0; i < number; i++){
        var ourSquare = makeSquare(size, number);
        rowContainer.append(ourSquare);
    }
    return rowContainer;
}

function makeGrid(number) {
    var grid = $(document.createElement("div"));
    for (var i = 0; i < number; i++){
        var ourRowContainer = makeRow(number);
        grid.append(ourRowContainer);
    }
    return grid;
}

function gridReady(number){
    if (!$.isNumeric(number)) {
        number = 16;
    }
    var ourGrid = makeGrid(number);
    $(".container").append(ourGrid);
}

function createNewGrid(){
    $('.container').html('');
    var number = parseInt(document.getElementsByName("quantity")[0].value);
    gridReady(number);
}

$('form').on("submit", function(e) {
    e.preventDefault();
    createNewGrid();
});
