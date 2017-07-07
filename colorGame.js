var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
	 if(colors[i]){
	 	squares[i].style.background = colors[i];
	 } else {
	 	squares[i].style.display = "none";
	 }

	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) { 
	 	squares[i].style.background = colors[i];
	 	squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){
	//generate new colors
	colors = generateRandomColors(6);
	//pick new random array element
	pickedColor = pickColor();
	//change color label
	colorDisplay.textContent = pickedColor
	this.textContent = "New Colors"
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add inital colors
	squares[i].style.background = colors[i];
	//add click listeners
	squares[i].addEventListener("click", function(){
		//grab color
		var clickedColor = this.style.background;
		//compare
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
				squares[i].style.background = color;
			}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make arrays
	var arr = []
	//add num nums
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return array
	return arr;
}
function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}


