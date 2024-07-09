let numMap:Map<string,number>; 

export default function start() {
	console.log("Running Roman to int");
	console.log("--------------------------------------");
	let input:string = "MCMXCIV";
	romanToInteger(input);
}


function romanToInteger(input:string) {
	let solution:number = 0;
	numMap = initMap();
	for (let index = 0; index < input.length; index++) {
		const element = input.charAt(index);
		let toAdd = numMap.get(element)
		let check = checkForSubtraction(input.charAt(index), input.charAt(index+1));
		if (check != null) {
			toAdd = check;
			index++;
		}
		if (toAdd) {
			solution = solution + toAdd;
		}
	}
	return solution;
}


function checkForSubtraction(num1:string, num2:string) :number|null{
	if (num1 === "I"){
		if (num2 === "V") {
			return 4;
		}
		if (num2 === "X") {
			return 9;
		}
	} else if (num1 === "X"){
		if (num2 === "L") {
			return 40;
		}
		if (num2 === "C"){
			return 90;
		}
	} else if (num1 === "C"){
		if (num2 === "D") {
			return 400;
		}
		if (num2 === "M") {
			return 900;
		}
	}
	return null;
}

function initMap(){
	let numeralMap:Map<string, number> = new Map();
	numeralMap.set("I", 1);
	numeralMap.set("V", 5);
	numeralMap.set("X", 10);
	numeralMap.set("L", 50);
	numeralMap.set("C", 100);
	numeralMap.set("D", 500);
	numeralMap.set("M", 1000);
	return numeralMap;
}
