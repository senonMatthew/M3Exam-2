const refreshClassList = () => {          
	let seed = Math.floor(Math.random() * 12);
	let choice = "";
	
	fetch('https://www.dnd5eapi.co/api/classes/')
    .then(
        function(responseR) {
            if (responseR.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get class list. Status Code: ' + response.status)
                return;
            }

            responseR.json().then(function(data){
				console.log(data)
                choice = data.results[seed].index
				fetch('https://www.dnd5eapi.co/api/classes/' + choice)
    .then(
        function(responseC) {
            if (responseC.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get class item. Status Code: ' + response.status)
                return;
            }

            responseC.json().then(function(data){
				
				console.log(data)
                document.getElementById('name').innerText = data.name

                document.getElementById('entry1').innerText = "Hit Dice: "
                document.getElementById('entry2').innerText = "Proficient in: "
                document.getElementById('entry3').innerText = "Saving throws: "

                document.getElementById('e1text').innerText = "1d" + data.hit_die
                document.getElementById('e2text').innerText = data.proficiencies[0].name + ", " + data.proficiencies[1].name + " etc." 
                document.getElementById('e3text').innerText = data.saving_throws[0].name + " and " + data.saving_throws[1].name
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
	
	
}

const refreshRaceList = () => {          
	let seed = Math.floor(Math.random() * 9);
	let choice = "";
	
	fetch('https://www.dnd5eapi.co/api/races/')
    .then(
        function(responseR) {
            if (responseR.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get race list. Status Code: ' + response.status)
                return;
            }

            responseR.json().then(function(data){
				console.log(data)
                choice = data.results[seed].index
				fetch('https://www.dnd5eapi.co/api/races/' + choice)
    .then(
        function(responseC) {
            if (responseC.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get race item. Status Code: ' + response.status)
                return;
            }

            responseC.json().then(function(data){
				
				console.log(data)
                document.getElementById('name').innerText = data.name

                document.getElementById('entry1').innerText = "Speed: "
                document.getElementById('entry2').innerText = "Alignment: "
                document.getElementById('entry3').innerText = "Size: "

                document.getElementById('e1text').innerText = data.speed + "ft."
                document.getElementById('e2text').innerText = data.alignment
                document.getElementById('e3text').innerText = data.size
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
	
	
}

const refreshMonsterList = () => {          
	let seed = Math.floor(Math.random() * 332);
	let choice = "";
	
	fetch('https://www.dnd5eapi.co/api/monsters/')
    .then(
        function(responseR) {
            if (responseR.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get monster list. Status Code: ' + response.status)
                return;
            }

            responseR.json().then(function(data){
				console.log(data)
                choice = data.results[seed].index
				fetch('https://www.dnd5eapi.co/api/monsters/' + choice)
    .then(
        function(responseC) {
            if (responseC.status !== 200) {
                console.log('Unable to connect properly to D&D5E API. Cannot get monster item. Status Code: ' + response.status)
                return;
            }

            responseC.json().then(function(data){
				
				console.log(data)
                document.getElementById('name').innerText = data.name

                document.getElementById('entry1').innerText = "Type: "
                document.getElementById('entry2').innerText = "Alignment: "
                document.getElementById('entry3').innerText = "Info - - "

                document.getElementById('e1text').innerText = data.type
                document.getElementById('e2text').innerText = data.alignment 
                document.getElementById('e3text').innerText = "Hitpoints: " + data.hit_points + "\n" + "Armor Class: " + data.armor_class + "\n" + "Hit Dice: " + data.hit_dice + "\n" + "XP: " + data.xp
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
            })
        }
    )
    .catch(function(err){console.log('Fetch Error :-S', err)})
	
	
}

const consolePrint = () => {
	console.log("If we had more time, this would have been an entire list of the entries, and it wouldn't be a random generator. The code would have also been a lot cleaner to be honest.")
}