/* Almighty Get Function */
function get(id) {
		return document.getElementById(id);
}

/* Sitewide */
let counter = 0;
let messageBlock = "";
let cardBlock = "";
let ul = get("message-column");
let card = get("cardContent");
let petArray = [
			   {pname:"Brownley",
				page:20,
				plocation: "PH",
				pimage: "images\\brownley.jpg",
				pmessage:"Helo am doggo."},
			   ];

/* Update Card */
function updateCard() {
	generateCard();
	let mPet = petArray[counter];
	let cPet = petArray[counter+1];
	messageBlock = "<div class=\"messages\">" +
					"<div class=\"avatar\">" +
						"<img src=\"" + mPet.pimage + "\" alt=\"\" />" +
					"</div>" +
					"<div class=\"message\">" +
						"<div class=\"user\">" + mPet.pname +"</div>" +
						"<div class=\"text\">" + mPet.pmessage + "</div>" +
					"</div>" +
				"</div>";
	cardBlock = "<div class=\"user\">" +
						"<img class=\"user\" src=\"" + cPet.pimage + "\" alt=\"\" />" +
						"<div class=\"profile\">" +
							"<div class=\"name\">" + cPet.pname + "<span>, " + cPet.page + "</span></div>" +
							"<div class=\"local\">" +
								"<i class=\"fas fa-map-marker-alt\"></i>" +
								"<span>" + cPet.plocation + "</span>" +
							"</div>" +
						"</div>" +
					"</div>";
	counter += 1;
}

/* Grab random API Data */

async function fetchAPI(url) {
	try {
		const response = await fetch(url);
		const responseJSON = await response.json();
		return responseJSON;
	} catch (error) {
		console.error(error);
	};
}

function generateCard() {
	Promise.all([
		fetchAPI('https://api.thecatapi.com/v1/images/search'),
		fetchAPI('https://randomuser.me/api/'),
		fetchAPI('https://programming-quotes-api.herokuapp.com/Quotes/random')
	]).then(function (response){
		
		petArray = [...petArray,
					 {pname: response[1].results[0].name.first,
					  page: Math.floor(Math.random() * 30),
					  plocation: response[1].results[0].location.city + ", " + response[1].results[0].location.country,
					  pimage: response[0][0].url,
					  pmessage: response[2].en}, ]
	}).catch(function (err){
		console.log(err)
	});
}

/* Animate and Update */

function appendCard() {
	function slideLeft() {
		console.log("(2)add|swipeleft");
		card.classList.add("swipe-left");
	}
	function removeAnim() {
		console.log("(5)remove|newcard")
		card.classList.remove("new-card");
	}
	
	function changeCard() {
		updateCard();
		let li = document.createElement('li');
		li.innerHTML = messageBlock;
		ul.insertBefore(li, ul.firstChild);
		card.innerHTML = cardBlock;
		console.log("(3)remove|swipeleft")
		card.classList.remove("swipe-left");
		console.log("(4)add|newcard")
		card.classList.add("new-card");
		const TIMEIN = setTimeout(removeAnim, 1000);
	}
	
	console.log("(1)call|swipeleft")
	slideLeft();
	const TIMEOUT = setTimeout(changeCard, 650);
}

function popCard() {
	function swipeRight() {
		console.log("(2)add|swiperight");
		card.classList.add("swipe-right");
	}
	function removeAnim() {
		console.log("(5)remove|newcard")
		card.classList.remove("new-card");
	}
	
	function changeCard() {
		updateCard();
		card.innerHTML = cardBlock;
		console.log("(3)remove|swiperight");
		card.classList.remove("swipe-right");
		console.log("(4)add|newcard");
		card.classList.add("new-card");
		const TIMEIN = setTimeout(removeAnim, 1000);
	}
	
	console.log("(1)call|swiperight");
	swipeRight();
	const TIMEOUT = setTimeout(changeCard, 650);
}
