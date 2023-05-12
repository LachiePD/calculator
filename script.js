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
	let evaluated = false;
	const getEvaluated = () =>{
		return evaluated;
	}
	const setEvaluated = () =>{
		evaluated = !evaluated;
	}

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
	const clear = () =>{
		array.length = 0;

	}
	return{
		getLength,
		lastInWasOperator,
		addToArray,
		getArray, 
		clear,
		getEvaluated,
		setEvaluated,
	}
}

const factoryInstance = arrayFactory();

const checkInput = (symbol) =>{
	if(symbol === '='){
		factoryInstance.addToArray(currentDisplay);
		evaluate();
		return;
	}

	console.log(factoryInstance.getEvaluated())
	if(factoryInstance.getEvaluated())
	{
		currentDisplay = "";
		setScreenValue();
		factoryInstance.setEvaluated();
	}
	const isOperator =(sym)=>{
		if(sym === '.'){
			return false
		}
		else{
			return	isNaN(sym);
		}
	}
	

	if(isOperator(symbol)){
		factoryInstance.addToArray(currentDisplay);
		currentDisplay = symbol;
		setScreenValue();
		factoryInstance.addToArray(currentDisplay);
	}

	if(isNaN(currentDisplay)){
		currentDisplay = "";
	}

	if(!isOperator(symbol)){
		currentDisplay += symbol;
		setScreenValue();
	}
}

const evaluate = () =>{
	const arr = factoryInstance.getArray();
	let operator;
	const result = arr.reduce( (acc , ele) =>{
			if(isNaN(ele)){
				operator = ele;
				return acc;
			}
		accInt = parseInt(acc);
		eleInt = parseInt(ele);
		switch(operator){
			case('X'):
				return acc * eleInt;
				break;
			case('+'):
				console.log(typeof(eleInt));
				return accInt + eleInt;
				break;
			case('-'):
				return acc - eleInt;
				break;
			case('/'):
				return acc / eleInt;
				break;
			default:
				acc += eleInt;
				break;
		}

		})
	currentDisplay = result;
	setScreenValue();
	factoryInstance.clear();
	factoryInstance.setEvaluated();
}
const fillInterface = () =>{
	for(const button of buttons)
	{
		calcInterface.appendChild(button.element);
	}
}
window.onload = fillInterface();
