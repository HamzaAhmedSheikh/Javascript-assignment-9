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
  
    document.write("<br />" + "Occurrences in a sentence " + findOccurrences());

// Chapter #38-44 and Task #8

// 1 km = 1000 meters, 1 meter = 3.28 feet, 1 foot = 12 inches, foot = 30 centimeters


// Chapter #38-44 and Task #9
// Chapter #38-44 and Task #10



 

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

// Chapter #53-57 and Task #1

var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
