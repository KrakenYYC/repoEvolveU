//add event listener to the Add Card button that invokes onAddMainCard
document.addEventListener('click', onAddMainCard);
//invokes the function clickAdd based on the event listener above
function onAddMainCard(event) {
	if (event.target.id === "idAdd") {  //if this is the id of the button
		mom = event.target.parentNode; //identify the parent
		mom.appendChild(clickAdd()); // append the return of the function
	} else if (event.target.id === "idBefore") { //this button pressed
		whereAmIBefore = event.target.parentNode;  //where are we
		dad = whereAmIBefore.parentNode; // who is the parent
		newCard = clickAdd(); //creates a new card
		newCard.className = "clCardBefore"; //new class to identify
		dad.insertBefore(newCard,whereAmIBefore); //where dad says to go
	} else if (event.target.id === "idAfter") { //this button pressed
		whereAmIAfter = event.target.parentNode;  //where are we
		sis = whereAmIAfter.parentNode; //who is the parent
		newCard = clickAdd(); //creates a new card
		newCard.className = "clCardAfter"; //new class to identify
		littlesis = whereAmIAfter.nextSibling;//making parent from where you are currently
		idLeft.insertBefore(newCard,littlesis);//insert sibling
	} else if (event.target.id === "idDelete") {
		whyAmIHere = event.target.parentNode;  //where are we
		bro = whyAmIHere.parentNode; //who is the parent
		bro.removeChild(whyAmIHere) ; //we never liked you
	} else {
		alert("Please pick an action.");
	}
	};


let nextCardNumber = 1;

function clickAdd(event){ 
	console.log("I\'m here in the clickAdd function");

//creates new div called newCard which includes the buttons
	const newCard = document.createElement("div");
	newCard.className = "clCard"; //css class for main card
	newCard.textContent = "C A R D   " + nextCardNumber++; //text

//creates the button for add a card before
	const addBefore = document.createElement("button");
	addBefore.setAttribute("id", "idBefore");
	addBefore.textContent = "Add Before";
//creates the button for add a card after
	const addAfter = document.createElement("button");
	addAfter.setAttribute("id", "idAfter");
	addAfter.textContent = "Add After";
//creates the button for deleting a card whichever div you're on
	const delCurrent = document.createElement("button");
	delCurrent.setAttribute("id", "idDelete");
	delCurrent.textContent = "Delete";

//grabs the main idLeft and appends a child called newCard and
//appends the buttons to the new card
	newCard.appendChild(document.createElement("br"));
	newCard.appendChild(addBefore);
	newCard.appendChild(addAfter);
	newCard.appendChild(delCurrent);
//the result of which is:
	return (newCard);
};