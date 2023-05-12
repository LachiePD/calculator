const symbolArray = ['7','8','9','/','4','5','6','X','1','2','3','+','0','.','=','-']

const calcInterface = document.getElementById('calcInterface');

let currentDisplay = document.getElementById("screenValue").textContent;

class CalcButton{
	constructor(buttonSymbol){
		this.buttonSymbol = buttonSymbol;
		this.element = document.createElement('button');
		this.element.classList = "calcButton";
		this.element.textContent = this.buttonSymbol;
		this.element.addEventListener('click',() =>{this.onClick()}); 
	}

	onClick(){
		checkInput(this.buttonSymbol);
	}
}
const buttons = 	symbolArray.map( (symbol) =>{
	return new CalcButton(symbol);
})

const setScreenValue = () =>{
	document.getElementById("screenValue").textContent =  currentDisplay;

}

const arrayFactory = () =>{
	const array = [];

	const getLength = () =>{
		return array.length;
	}

	const addToArray = (val) =>{
		array.push(val);
	}
	const lastInWasOperator = () =>{
		if(array.length === 0){
			return false;
		}
		return isNaN(array[array.length -1]);
	}
	const getArray = () =>{
	return(array);


	}
	return{
		getLength,
		lastInWasOperator,
		addToArray,
		getArray
	}
}

const factoryInstance = arrayFactory();

const checkInput = (symbol) =>{
	if(symbol === '='){
		factoryInstance.addToArray(currentDisplay);
		evaluate();
		return;
	}

	const isOperator =isNaN(symbol);
	

	if(isOperator){
		factoryInstance.addToArray(currentDisplay);
		currentDisplay = symbol;
		setScreenValue();
		factoryInstance.addToArray(currentDisplay);
	}

	if(isNaN(currentDisplay)){
		currentDisplay = "";
	}

	if(!isOperator){
		currentDisplay += symbol;
		setScreenValue();
	}
}

const evaluate = () =>{
	console.log(factoryInstance.getArray())


}
const fillInterface = () =>{
	for(const button of buttons)
	{
		calcInterface.appendChild(button.element);
	}
}
window.onload = fillInterface();
