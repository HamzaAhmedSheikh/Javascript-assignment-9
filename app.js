console.log('Javascript Assignment #9');

// Chapter #38-44 and Task #1

function power(base, exponent) {
	var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}

document.write("<br />" + "Answer is " + power(2,4));

// Chapter #38-44 and Task #2

function isLeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("displayAnswer").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
} 

// Chapter #38-44 and Task #3

function areaOfTriangle(a, b, c) {
 var s = ( a + b + c ) / 2;     

   return s*(s - a)*(s - b)*(s - c);     
		
}
 
  document.write("<br />" + "Area of Triangle is: "  + areaOfTriangle(2, 5, 6));

// Chapter #38-44 and Task #4
    
   function averageFunction(subject1, subject2, subject3) {
      var averageInThreeSubjects = subject1 + subject2 + subject3 / 3;
	  
	  return averageInThreeSubjects;	   
   }

   function percentageFunction(subject1, subject2, subject3) {
	  
	var obtainedMarks = subject1 + subject2 + subject3;

	var percentage = obtainedMarks * 100 / 300;

	return percentage;

}

   function mainFuntion(sub1 ,sub2 ,sub3) {

   var percentage =	percentageFunction(sub1, sub2, sub3)
   var average = averageFunction(sub1 ,sub2 ,sub3)
   
    return "<br />" + 'Percentage in three subject ' + percentage + '%' + "<br />" + 'Average marks in three subject ' + average;

	
}

   document.write(mainFuntion(70, 80, 60))

 // Chapter #38-44 and Task #5  

// Chapter #38-44 and Task #6

function removeVowels(str) {

	console.log(str.length);
  
	if(str.length <= 25) {
		return "<br />" + "Remove Vowels " + str.replace(/[aeiou]/gi, '');
	}

	else{
	  return "length is greater than 25 words"
	}
	
  }

  document.write(removeVowels("Hamza Ahmed Sheikh"))

// Chapter #38-44 and Task #7

function findOccurrences() {
	var str = "Pleases read this application and give me gratuity";
	var count = 0;
	let haveSeenVowel = false;
  
	for (const letter of str.toLowerCase()) {
	  switch (letter) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
		  {
			if (haveSeenVowel) {
			  count++;
			  haveSeenVowel = false;
			} else {
			  haveSeenVowel = true;
			}
			break;
		  }
		default:
		  haveSeenVowel = false
	  }
	}
  
	return count
  }
  
    document.write("<br />" + "Occurrences in a sentence " + findOccurrences() + "<br />");

// Chapter #38-44 and Task #8

 function meters(a) {  
   return 1000 * a	    	
}

 function feet(a) {
   return 3281 * a	 
 }

 function inches(a) {
   return 39370 * a	 
 }

 function centimeters(a) {
	return 100000 * a  
 }

 function distanceBetweenCities(b) { 

  	
	
  return  "Meters " + meters(b) + "<br />" + "Feet " + (feet(b)) + "<br />" + "Inches " +  (inches(b)) + "<br />" + "Centimeters " + (centimeters(b))

 }

   document.write(distanceBetweenCities(200));

// Chapter #38-44 and Task #9

 function overTime(totalhour) {
	 if(totalhour > 40) {
		 var extrahour = totalhour - 40;

		 return "<br />" + "Rs: " + extrahour * 12
	 }
	 else {
		 return  "<br />" + "your work is less than 40 hours"
	 }
 }

  document.write(overTime(50));


// Chapter #38-44 and Task #10

function currencyDenomination() {
	var cash = +prompt("Enter amount to withdrawn ");
	var hundred = cash / 100;
	var fifty = cash / 50;
	var ten = cash / 10;

	return "<br />" + `you will have ${hundred} hundred notes ${fifty} fifty notes ${ten} ten notes`   

}

document.write(currencyDenomination())
 

// Chapter #43-48 and Task #1

 function greetUser() {
     alert("Hello User")
 }

// Chapter #43-48 and Task #2

function showTheMessage() {
    alert('Thanks for purchasing a phone from us');
}

// Chapter #43-48 and Task #3 

function deleteRowFunction() {
	
	var td = event.target.parentNode;	 
	var tr = td.parentNode; 	
	tr.parentNode.removeChild(tr);
}

// Chapter #43-48 and Task #4

function setNewImage() {
   document.getElementById("bulb").src = "./images/pic_bulbon.gif"    
}

function setOldImage() {
    document.getElementById("bulb").src = "./images/pic_bulboff.gif"    
}

// Chapter #43-48 and Task #5

var clicks = 0;

    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
	};
	
	function setClick() {
		clicks -= 1;
		document.getElementById("clicks").innerHTML = clicks;		
	}

// Chapter #49-52 and Task #1

function showInput() {
	document.getElementById('displayEmail').innerHTML = document.getElementById("user_email").value;
	document.getElementById('displayPassword').innerHTML = document.getElementById("user_id").value;
			
}

// Chapter #49-52 and Task #2

function expandLoris() {
	 var expandedParagraph = `Slow lorises are a group of several species of
							  trepsirrhine primates which make up the genus Nycticebus.
							  They have a round head, narrow snout, large eyes, and a
							  variety of	distinctive coloration patterns
							  that are species-dependent. The hands and feet of slow lorises
							  have several	adaptations that give them a pincer-like grip and 
							  enable them to grasp branches for long periods of time.
							  Slow lorises have a toxic bite, a rare trait among mammals.`;
	 document.getElementById("expandThePara").innerHTML = expandedParagraph;
 }
	
// Chapter #49-52 and Task #3

 var list = document.getElementById('list');

 function addTodo() {
	 
	 var todo_item = document.getElementById("todo-item");	 

	 var li = document.createElement("td");
	 var liText = document.createTextNode(todo_item.value);	 

	 li.appendChild(liText)

	 // create delete button
    
	 var delBtn = document.createElement("button")
	 var delText = document.createTextNode("DELETE")

	 delBtn.setAttribute("class", "btn")
	 delBtn.setAttribute("onclick", "deleteItem(this)")
	 delBtn.appendChild(delText)


	  // create edit button
	  
	 var editBtn = document.createElement("button")  
	 var editText = document.createTextNode("Edit")

	 editBtn.appendChild(editText)
	 editBtn.setAttribute("onclick", "editItem(this)")

	 li.appendChild(delBtn)
	 li.appendChild(editBtn)

	 list.appendChild(li)
	
	 todo_item.value = ''
 }
 
  function deleteItem(e) {
	  e.parentNode.remove()
  }

  function deleteAll() {
	  list.innerHTML = ""
  }
  
  function editItem(e) {
	   var val = e.parentNode.firstChild.nodeValue
	   var editValue = prompt("Enter edit value", val)
	 
	   e.parentNode.firstChild.nodeValue = editValue

	
  }

// Chapter #53-57 and Task #1

  function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;	
	expandImg.parentElement.style.display = "block";
	
  }

 




// Assignment # 58-67 and Task #1

var content = document.getElementById("main-content")

console.log(content);

// Assignment # 58-67 and Task #2 

var contentChildren = document.getElementById("main-content").childNodes

  console.log(contentChildren);

// Assignment # 58-67 and Task #3  

  var elements = document.getElementsByClassName('render');
  var inner = [];

  for ( var i = 0; i < elements.length; ++i )
	inner.push( elements[i].innerHTML + "<br />");
	
	document.write("<br />" + inner );

// Assignment # 58-67 and Task #4

var firstName = document.getElementById("first-name").value = "Hamza";

// Assignment # 58-67 and Task #5

var lastName = document.getElementById("last-name").value = "Ahmed";
var userEmail = document.getElementById("email").value = "alexbank@example.com";

// Assignment # 58-67 and Task #6

var type = document.getElementById("form-content").nodeType

  document.write("The node is an element node: " + type);

// Assignment # 58-67 and Task #7

var childType = document.getElementById("last-name").nodeType
var checkType = document.getElementById("email").nodeType

 console.log(childType);
 console.log(checkType);

 // Assignment # 58-67 and Task #8

 var title = document.getElementById('lastName')
    //  title.id = "last_name" 

 // Assignment # 58-67 and Task #9

 var getFirst = document.getElementById("main-content").firstChild.innerHTML;
 var getLast = document.getElementById("main-content").lastChild.innerHTML;

 document.write('<br />' + "First Child:- " + getFirst + "<br />");
 document.write("Last Child:- " + getLast);
 
 // Assignment # 58-67 and Task #10

 var item = document.getElementById("lastName")
 var itemOne = item.nextSibling
 var itemTwo = item.previousSibling
  
  console.log(itemOne);
  console.log(itemTwo);
  
 // Assignment # 58-67 and Task #11 

 var findNode = document.getElementById("email").parentNode.nodeType;

 console.log(findNode);