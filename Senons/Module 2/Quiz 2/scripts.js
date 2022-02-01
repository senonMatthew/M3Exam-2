let BMR = 0;
let calcBMR = 0;
let calGain = 0;
let name = "";
let age = 0;
let gender = "";
let height = 0;
let weight = 0;
let activity = 0;
let result = 0;
let comment = "";

/* Sitewide */

function get(id) {
		return document.getElementById(id);
	}

function resetCreds() {
	name = get("name").value;
	age = parseInt(get("age").value);
	gender = get("gender").value;
	height = parseInt(get("height").value);
	weight = parseInt(get("weight").value);
	activity = parseInt(get("activity").value);
	result = get("resultCalories");
	comment = get("comment");
}

function evaluateBMR() {
	if (15 <= age && age <= 80 && height > 0 && weight > 0) {
		if (calcBMR > 1750) {
			result.className = "resultBad";
			result.innerHTML = calcBMR + " Calories/day";
			comment.innerHTML = "You're either obese and/or exercising intensely.";
		} else if (calcBMR > 1340){
			result.className = "resultMeh";
			result.innerHTML = calcBMR + " Calories/day";
			comment.innerHTML = "You're either overweight and/or exercising daily.";
		} else if (calcBMR > 0){
			result.className = "resultGood";
			result.innerHTML = calcBMR + " Calories/day";
			comment.innerHTML = "You're either losing weight, or maintaining it well!";
		} else if (calcBMR < 0){
			result.className = "resultMeh";
			result.innerHTML = calcBMR + " Calories/day";
			comment.innerHTML = "This is mildly concerning.";
		} else {
			result.className = "resultBad";
			result.innerHTML = "Error, check input and log.";
			comment.innerHTML = "";
			
			console.log("DEBUG | A " + age + " | H " + height + " | W " + weight + " | G " + gender);
			console.log(calcBMR);
		}
	} else {
		result.className = "resultBad";
		result.innerHTML = "Error, check input and log.";
		comment.innerHTML = "";
		console.log(age);
	}
}

function roundBMR() {
	if (BMR > 0) {
		calcBMR = Math.floor(BMR);
	} else {
		calcBMR = Math.sign(BMR) * Math.round(Math.abs(BMR));
	}
}

/* Calculator */

function getInfo() {
	
	resetCreds();
	
	if (gender == "M") {
		BMR = (13.397*weight) + (4.799*height) - (5.677*age) + 88.362;
	} else {
		BMR = (9.247*weight) + (3.098*height) - (4.330*age) + 447.593;
	}
	
	switch (activity) {
		case 1:
			break;
		case 2: BMR *= 1.20011;
			break;
		case 3: BMR *= 1.37513;
			break;
		case 4: BMR *= 1.46544;
			break;
		case 5: BMR *= 1.55016;
			break;
		case 6: BMR *= 1.72520;
			break;
		case 7: BMR *= 1.90022;
			break;
			
	}
	roundBMR();
	evaluateBMR();
	resetIntake();
}

/* Calorie Tracker */

function toggleTracker() {
	document.getElementById("offToggle").id = "onToggle";
	document.getElementById("buttonOn").id = "buttonOff";
}

function updateCounter() {
	let food = get("gName").value;
	let calories = get("gCalories").value;
	let lastEntry = get("lastEntry");
	
	if (food == "" || calories == ""){
	} else {
		lastEntry.innerHTML = food + " (" + calories + " cal/day)"
		document.getElementById("gName").value = "";
		document.getElementById("gCalories").value = "";
		
		calGain += parseInt(calories);
		document.getElementById("totalCal").innerHTML = calGain;
		
		calcBMR -= calGain;
		evaluateBMR();
	}
}

function resetIntake() {
	lastEntry.innerHTML = ""
	document.getElementById("gName").value = "";
	document.getElementById("gCalories").value = "";
	document.getElementById("totalCal").innerHTML = 0;
	calGain = 0;
	
	roundBMR();
	evaluateBMR();
}
