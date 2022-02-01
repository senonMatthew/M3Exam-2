// Quotes

let cardStatus = -1;
let currentArray = ["Choose a card first.", "No quote here.", "Not giving you a quote unless you pick a card.", "Please pick a card first."];
let author = "";

function switchCardStatus(card) {
	cardStatus = card;
	switch (cardStatus) {
		case 0: currentArray = [
			"The beginning is the most important part of the work.",
			"No human thing is of serious importance.",
			"The direction in which education starts a man will determine his future life.",
			"Only a philosopher's mind grows wings, since its memory always keeps it as close as possible to those realities by being close to which the gods are divine.",
			"The people have always some champion whom they set over them and nurse into greatness... this and no other is the root from which a tyrant springs; when he first appears, he is a protector."];
			author = "- Plato"
			break;
		case 1: currentArray = [
			"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
			"Pleasure in the job puts perfection in the work.",
			"Those that know, do. Those that understand, teach.",
			"The roots of education are bitter, but the fruit is sweet.",
			"Men are swayed more by fear than by reverence."];
			author = "- Aristotle";
			break;
		case 2: currentArray = [
			"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
			"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
			"Purity or impurity depends on oneself, no one can purify another.",
			"Long is the night to him who is awake; long is a mile to him who is tired; long is life to the foolish who do not know the true law.",
			"It is a man's own mind, not his enemy or foe, that lures him to evil ways."];
			author = "- Buddha";
			break;
		case 3: currentArray = [
			"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
			"The more we value things outside our control, the less control we have.",
			"To live a good life: We have the potential for it. If we can learn to be indifferent to what makes no difference.",
			"Receive without conceit, release without struggle.",
			"Be content to seem what you really are."];
			author = "- Marcus Aurelius";
			break;
		case 4: currentArray = [
			"Fine words and an insinuating appearance are seldom associated with true virtue.",
			"Do not impose on others what you yourself do not desire.",
			"Our greatest glory is not in never falling, but in rising every time we fall.",
			"Real knowledge is to know the extent of one's ignorance.",
			"Have no friends not equal to yourself."];
			author = "- Confucius";
			break;
	}
	document.getElementById("hidden").id = "button";
	console.log("DEBUG: Card Status is now " + cardStatus + ".");
}

function generateQuote() {
	document.getElementById("quoteText").innerHTML = currentArray[Math.floor(Math.random() * currentArray.length)];
	document.getElementById("author").innerHTML = author;
}

// Senon, Matthew Ira C.