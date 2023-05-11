const symbolArray = ['7','8','9','/','4','5','6','X','1','2','3','+','0','.','=','-']

const calcInterface = document.getElementById('calcInterface');

let currentDisplay = document.getElementById("screenValue").textContent;

const inputArray = [];


class CalcButton{
	constructor(buttonSymbol){
		this.buttonSymbol = buttonSymbol;
		this.element = document.createElement('button');
		this.element.classList = "calcButton";
		this.element.textContent = this.buttonSymbol;
		this.element.addEventListener('click',() =>{this.onClick()}); 
	}

	onClick(){
		console.log("Clicked" + this.buttonSymbol);
		checkInput(this.buttonSymbol);
	}
}

const checkInput = (symbol) =>{
	switch(symbol){
		case('X'):
			inputArray.push(currentDisplay)
			document.getElementById("screenValue").textContent = "X";
			break;
		case('.'):
			inputArray.push(currentDisplay)
			document.getElementById("screenValue").textContent = ".";
			break;
		case('+'):
			inputArray.push(currentDisplay)
			document.getElementById("screenValue").textContent = "+";
			break;
		case('='):
			inputArray.push(currentDisplay)
			document.getElementById("screenValue").textContent = "=";
			break;
		case('/'):
			inputArray.push(currentDisplay)
			document.getElementById("screenValue").textContent = "/";
			break;
		case('+'):
			inputArray.push(currentDisplay)
			document.getElementById("screenValue").textContent = "+";
			break;
		default:
			currentDisplay += symbol;
			document.getElementById("screenValue").textContent = currentDisplay;
	}


}
const changeCurrentDisplay = () => {
	console.log("here");
}
const buttons = 	symbolArray.map( (symbol) =>{
	console.log(symbol);
	return new CalcButton(symbol);

})
const fillInterface = () =>{
	for(const button of buttons)
	{
		calcInterface.appendChild(button.element);
	}
}
window.onload = fillInterface();
