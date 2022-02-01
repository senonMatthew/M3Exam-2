let quoteArray = [
			   {author:"Aristotle",
				quotes:[
					"No great mind has ever existed without a touch of madness.",
					"Wishing to be friends is quick work, but friendship is a slow ripening fruit.",
					"Happiness depends upon ourselves.",
					"He who has overcome his fears will truly be free.",
					"Whosoever is delighted in solitude, is either a wild beast or a god.",
				]},
			   {author:"Rodrigo Duterte",
				quotes:[
					"Hitler massacred 3 million Jews ... there's 3 million drug addicts. There are. I'd be happy to slaughter them.",
					"Give me salt and vinegar and I'll eat his liver.",
					"Please dont order me around. Or would you rather that I declare martial law?",
					"For the record, I believe in God, but I do not believe in religion, period.",
					"Steel is needed everywhere.",
				]},
			   {author:"Eminem",
				quotes:[
					"Love, when spelled backwards and read phonetically, reads evil",
					"If you have enemies, good that means you stood up for something.",
					"Somewhere deep down there's a decent man in me, he just can't be found.",
					"Behind every sucessful person lies a pack of haters.",
					"Damn. How much damage can you do with a pen?",
				]},
			   {author:"Notorious B.I.G",
				quotes:[
					"Im living everyday like a hustle, another drug to juggle. Another day, another struggle.",
					"Damn right I like the life I live, because I went from negative to positive.",
					"Birthdays was the worst days, now we sip champagne when we thirsty.",
					"If you dont love yourself, Ill make you see your own heart.",
					"Super Nintendo Sega Genesis, when I was dead broke, man I couldnt picture this.",
				]},
			   {author:"LeBron James",
				quotes:[
					"Maybe my pain was motivation.",
					"Ask me to steal, block out, sacrifice, lead, dominate. Anything. But its not what you ask of me, its what I ask of myself.",
					"I like criticism. It makes you strong.",
					"I dont need too much. Glamour and all that stuff dont excite me. I am just glad I have the game of basketball in my life.",
					"I treated it like every day was my last day with a basketball.",
				]}];

function getQuote(value) {
	document.getElementById("quote").innerHTML = quoteArray[value-1].quotes[Math.floor(Math.random() * 5)]
	document.getElementById("author").innerHTML = "by " + quoteArray[value-1].author;
}