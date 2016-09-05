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
    return square;
}



function makeRow(number) {
    var rowContainer = $(document.createElement("div"));
    for (var i = 0; i < number; i++){
        var ourSquare = makeSquare(size, number);
        $(ourSquare).addClass("colored-square");
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







// 			       container.append( $("<div></div>").addClass("grid").height(squareSize).width(squareSize) );
// 		}
// 		    container.append($("<div></div>").css("clear", "both"));
// 	}
// });

//     for (var x = 0; x < number; x++) {
//         for (var y = 0; y < number; y++) {
//             $("<div>").addClass("square").appendTo(".container");
//         }
//     }
// });

// clears the Grid on clicking the button and prompts the user to enter new grid values

//$(".clear").on("click", clearAndPrompt);
// document.querySelector(".clear").addEventListener("click", clearAndPrompt);
//
// function clearAndPrompt() {
//     $('.container').css({'pointer-events': 'none'})
//     // $(".container").empty()
//     var input = prompt("Please enter the new grid dimensions");
//      }
//  function fitSquares(){
//    var width = 529;
//    var height = 529;
//    var areaDividedByNumber = Math.floor(Math.sqrt(width * height / input));
//    var squaresInNewGrid = Math.floor(Math.min(w / Math.ceil(w / areaDividedByNumber), h / Math.ceil(h / areaDividedByNumber)));
//  }


// takes the number of squares selected by the user and fits them into the grid
// (function fitSquares(){
//   var width = 529;
//   var height = 529;
//   var areaDividedByNumber = Math.floor(Math.sqrt(width * height / input));
//   return Math.floor(Math.min(w / Math.ceil(w / areaDividedByNumber), h / Math.ceil(h / areaDividedByNumber)));
// })();


// (function(){
//     var w = 529;
//     var h = 529;
//     var n = 22;
//     var a = Math.floor(Math.sqrt(w * h / n));
//     return Math.floor(Math.min(w / Math.ceil(w / a), h / Math.ceil(h / a)));
// })();
// }
// function clickButton() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }
// $(document).ready(function() {
// 	for (var i = 1; i <= 16; i++) {
// 		for (var j = 1; j <= 16; j++) {
// 			$('#container').append('<div class="pixel"></div>')
// 		};
// 	}
// });

// Idea setTimeOut to try prompt popping after emptying
