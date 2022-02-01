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
				plocation: "Davao, Philippines",
				pimage: "images\\brownley.jpg",
				pmessage:"Helo am doggo."},
			   {pname:"Bronwyn",
				page:5,
				plocation: "Quebec, Canada",
				pimage: "images\\bronwyn.jpg",
				pmessage:"Nyan nyan."},
			   {pname:"Blacky", page:2,
				plocation: "Michigan, United States",
				pimage: "images\\blacky.jpg",
				pmessage:"Helo am other doggo."},
			   {pname:"Snow",
				page:6,
				plocation: "Tel Aviv, Israel",
				pimage: "images\\snow.jpg",
				pmessage:"Yes am smol."},
			   {pname:"Cornelius",
				page:11,
				plocation: "Tokyo, Japan",
				pimage: "images\\cornelius.jpg",
				pmessage:"They love me here!"},
			   {pname:"Aarakocra",
				page:7,
				plocation: "Liverpool, United Kingdom",
				pimage: "images\\aarakocra.jpg",
				pmessage:"Squawk."},
			   {pname:"Bacon",
				page:1,
				plocation: "Colombo, Sri Lanka",
				pimage: "images\\bacon.jpg",
				pmessage:"Can I has cheezburger?"},
			   {pname:"Bean",
				page:9,
				plocation: "Chongqing, China",
				pimage: "images\\bean.jpg",
				pmessage:"Help, being served as lunch!"},
			   {pname:"Hotdog",
				page:11,
				plocation: "New Delhi, India",
				pimage: "images\\hotdog.jpg",
				pmessage:"Yes am long."},
			   {pname:"Agatha",
				page:23,
				plocation: "Palermo, Italy",
				pimage: "images\\agatha.jpg",
				pmessage:"Aaaaaaaaaaaaaaaaaaaaaa."},
			   {pname:"No more available pets",
				page:"try again later :c",
				plocation: "",
				pimage: "images\\blank.png",
				pmessage:""},
			   ];

/* Update Card */
function updateCard() {
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
