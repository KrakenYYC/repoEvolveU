console.log('im on line 1 Hello World from intro.js');

window.onload = onWindowHasLoaded;

function onWindowHasLoaded() {
	console.log('im on the onload function The page has finished loading.');
};

async function onWindowHasLoaded() {
	//async waits til response is back
	//starts multiple threads
	console.log('im here at line 12 The page has finished loading.');
	let response;
	//create a variable - tri-block which lets you do some stuff regardless
	// of a serious problem and response will deal with it

	try {
		response = await fetch('/info');
		//wait til response deals with problem
		if (response.status != 200)
			//200 is flask saying everything is ok then throw which is
		//caught by the catch for all other errors
			throw 'Invalid HTTP Response:' + response.status;
		console.log('Response:', response);
	      const data = await response.text();
	      //goes to response and gets the text or string - if there is
	      //no info route you wont get data
	      console.log('Data:', data);
	} catch (error) {
		console.log('*** im here line 30 We Have an error onWindowHasLoaded:', error);
		console.log('Response:', response);
	
	}
}
	console.log("im here at line 35 goodbye cruel world")


// 	try {
//   //  Block of code to try
// }
// catch(Exception e) {
//   //  Block of code to handle errors
// }
