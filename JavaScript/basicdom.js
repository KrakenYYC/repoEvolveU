// console.log("document", document);
// document.body;


const log = console.log;


let title = document.getElementById("id409");  //create container title get id of the button
let mainTitle = "HEY What's Up, World?";  //define repeatable variables
let secondTitle = "Stop";

// log (function getTitle (mainTitle) {   the h1 wants a string
//   return mainTitle;
// }
// )

function callInput () {                                     //create function
	if (id406.textContent === mainTitle) {   //id of h1 equals something string must be ===
		id406.textContent = secondTitle;                    //change to
	} else {                                                //else
		id406.textContent = mainTitle}                  //back to original

};
//(callTheInput());          this may be calling it automatically??

title.addEventListener ('click', callInput);  //

let title2 = document.getElementById("idh3")

//so we have an id410 it is an input we want to send a value to the input

var myInput = document.getElementById("id410");

function populateInput () {
  alert ("i am a function residing outside an object");
};


var objectItem = {
	colour  : "pink",
	sweater : "orange",
	train   : 56,
	x_code  : "B9421",
	moveFast : function() {
		alert ("i am am anonymous function defined inside an object");
	},
	suckFace : function () {
		populateInput(); 
		alert ("i am a function referred to in an object");
	}
};

var objectList = [59, populateInput(), 23, {objectItem:sweater = "multicoloured"},
	 ["mobjectListother", "father"], 24, 25, "stop", "calc", (19+4), document.getElementById ("id410")];


//change Alberta to Saskatchewan with mouse hover
let title408 = document.getElementById("id408");  //create container title get id of the button
let mainAB = "Alberta";  //define repeatable variables
let mainSK = "Sakatchewan";


function callSelect () {                                     //create function
	if (id408.textContent === mainAB) {   //id of h1 equals something string must be ===
		id408.textContent = mainSK;                    //change to
	} else {                                                //else
		id408.textContent = mainAB}                  //back to original

};
//(callTheInput());          this may be calling it automatically??

title408.addEventListener ('mouseout', callSelect);  //


//write something that when you click on one item it changes another

let carrie = document.getElementById("id414");
let mood = document.getElementById("id415");

mood.misery = function () {
	prompt("How is your day Carrie?");
	return document.write("Your mood address is ", mood);
}

carrie.addEventListener('click', misery);

//new item




function stageMurder (blood, weapon) {
	var murder = "Place body,";
	murder += "on floor by weapon,";
	murder += "by" + blood + "pints of blood, and ";
	murder += + weapon + "weapons by dismembered body.";
	return murder;
};



// function myToString () {
//   var number = 15;
//   var n = number.toString();
//   document.getElementById("demo").innerHTML = n;
// }

function inSideFunction () {
	var after = "Nermo";
	function before (inSideFunction) {
		return "Ms. " + inSideFunction;
	}
	return before (after);
}