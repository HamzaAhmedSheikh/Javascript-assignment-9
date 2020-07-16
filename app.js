console.log('Javascript Assignment #9');

// FUNCTIONS, switch statements, while... do-while loops | JAVASCRIPT

// Assignment # 38-44 task #1

function power(base, exponent) {
	var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}

console.log(power(2,3));
console.log(power(5));

// Assignment # 38-44 task #2

function isLeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("displayAnswer").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
} 