// I don't know javascript. A lot of this code is "adapted" from Sebastian Lague's game idea generator @ seblague.github.io/ideagenerator/
// any other borrowed code is referenced.
// god bless stackoverflow

var raceList = ['Aarakocra', 'Aasimar', 'Aetherborn', 'Bugbear', 'Centaur', 'Changeling', 'Dragonborn', 'Dwarf', 'Elf', 'Firbolg', 'Genasi', 'Gith', 'Gnome', 'Goblin', 'Goliath', 'Grung', 'Half-Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Vampire', 'Warforged', 'Yuan-Ti Pureblood'];
    
var classList = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rune Scribe", "Rogue", "Sorcerer", "Warlock", "Wizard"];

// this list is more detailed, but many of these backgrounds are just variants of another. these variants don't have their own pages, so e.g. dnd.wikidot.com/background:knight is empty
//var backgroundList = ['Acolyte', 'Anthropologist', 'Archaeologist', 'Charlatan', 'City Watch', 'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Criminal', 'Entertainer', 'Faceless', 'Faction Agent', 'Far Traveler', 'Folk Hero', 'Gladiator', 'Guild Artisan', 'Guild Merchant', 'Haunted One', 'House Agent', 'Hermit', 'Inheritor', 'Investigator', 'Knight', 'Knight of the Order', 'Mercenary Veteran', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Spy', 'Urban Bounty Hunter', 'Urchin', 'Uthgardt Tribe Member', 'Waterdhavian Noble'];

// hence, use a simpler list of backgrounds. all of these backgrounds have dnd.wikidot.com pages.
var fixedBackgroundList = ['Acolyte', 'Sailor', 'Archaeologist', 'Criminal', 'Charlatan', 'Faceless', 'Urchin', 'Hermit', 'Entertainer', 'Soldier', 'Inheritor', 'Outlander', 'Noble', 'Anthropologist', 'Sage', 'Courtier', 'Waterdhavian Noble', 'Cloistered Scholar', 'House Agent', 'Faction Agent', 'Far Traveler', 'Mercenary Veteran', 'Guild Artisan', 'Folk Hero', 'Haunted One', 'Clan Crafter', 'Uthgardt Tribe Member', 'Urban Bounty Hunter', 'Knight Of The Order']

var baseRace = '';

var baseClass = '';

var generatedRace = '';

var baseRace = '';

var generatedFirstClass = '';

var baseFirstClass = '';

var generatedSecondClass = '';

var baseSecondClass = '';

var randomBackground = '';

var generatedBackground = '';

//
    
function reset() {
    raceList = ['Aarakocra', 'Aasimar', 'Aetherborn', 'Aven', 'Bugbear', 'Centaur', 'Changeling', 'Dragonborn', 'Dwarf', 'Elf', 'Firbolg', 'Genasi', 'Gith', 'Gnome', 'Goblin', 'Goliath', 'Grung', 'Half-Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Warforged', 'Yuan-Ti'];
    
    classList = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    
	baseRace = '';
}

window.onload = function onLoad() {
	randomise();
}

function randomise() {
    reset();
    
	generatedAlignment = genAlignment();
	[generatedRace, baseRace] = genRace();
	[generatedFirstClass, firstBaseClass, firstSubClass, generatedSecondClass, secondBaseClass, secondSubClass] = genClass();
	generatedBackground = genBackground()
	
    document.getElementById("Alignment").innerHTML = generatedAlignment;
	document.getElementById("hRace").innerHTML = generatedRace;
	document.getElementById("hFirstClass").innerHTML = generatedFirstClass;
	document.getElementById("hSecondClass").innerHTML = generatedSecondClass;
	document.getElementById("hBackground").innerHTML = generatedBackground;
	
	// don't need a hyperlink for alignment
	document.getElementById("hRace").href = "http://dnd5e.wikidot.com/" + getSubpage('race');
	document.getElementById("hFirstClass").href = "http://dnd5e.wikidot.com/" + getSubpage('firstClass');
	document.getElementById("hSecondClass").href = "http://dnd5e.wikidot.com/" + getSubpage('secondClass');
	document.getElementById("hBackground").href = "http://dnd5e.wikidot.com/" + getSubpage('background');
}


function openInNewTab(subpage) {
	// adapted from https://stackoverflow.com/a/57536096/11412009
	const win = window.open('http://dnd5e.wikidot.com/' + subpage, '_blank');
	
	/* pointless and convoluted checks to see if the page is empty or not. 
	fetch("https://example.com/pluginchangelog.txt", {credentials: "omit"}).then(resp => resp.text()).then(text => {
  	if (text.search("(yet) exist") > -1) {
		const win = window.open('http://dnd5e.wikidot.com/' + subpage, '_blank');
		}
		
	else {
		
	}
	})
	*/
		

}

function getSubpage(source) {
	if (source == 'firstClass') {
		
		firstBaseClass = firstBaseClass.toLowerCase().replace(" ","-");
		firstSubClass = firstSubClass.toLowerCase().replace(" ","-");

		//openInNewTab(firstBaseClass + ":" + firstSubClass);
		return firstBaseClass + ":" + firstSubClass;
	}
	
	else if (source == 'secondClass') {
		secondBaseClass = secondBaseClass.toLowerCase().replace(" ","-");
		secondSubClass = secondSubClass.toLowerCase().replace(" ","-");

		//openInNewTab(secondBaseClass + ":" + secondSubClass);
		return secondBaseClass + ":" + secondSubClass;
			
	}
	
	else if (source == 'race') {
		if (baseRace == "Warforged") {
			baseRace = "Warforged-ua";
		}
		baseRace = baseRace.toLowerCase().replace(" ","-");
		
		//openInNewTab(baseRace);
		return baseRace;
	} 
	
	else if (source == 'background') {
		if (randomBackground == "Knight") {
			randomBackground = "Noble";
		}
		else if (randomBackground == "Spy") {
			randomBackground = "Criminal";
		}
		
		
		//openInNewTab("background:" + randomBackground.toLowerCase().replace(" ","-"))
		return "background:" + randomBackground.toLowerCase().replace(" ","-");
	}
}

//Generators

function genAlignment() {
    var horizontal = choice(["Lawful","Neutral","Chaotic"]);
    var vertical = choice(["Good","Neutral","Evil"]);
    if (horizontal == vertical) {
        return "True Neutral";
    }
    else {
        return (horizontal + " " + vertical);
    }
}

function genRace() {
    var randomRace = choice(raceList);
	var charRace = '';

    if (randomRace == "Elf" || randomRace == "Half-Elf") { 
        charRace = choice(['High Elf', 'Wood Elf', 'Drow', 'Sea Elf', 'Eladrin', 'Shadar-kai']);
        
		if (randomRace == "Half-Elf") { 
            charRace = "Half-" + charRace;
		}
	}

    else if (randomRace == "Dwarf") {
        charRace = choice(["Hill Dwarf","Mountain Dwarf","Duergar"]);
		}

    else if (randomRace == "Halfling") {
        charRace = choice(["Lightfoot Halfling","Stout Halfling","Ghostwise Halfling"]);
	}

    else if (randomRace == "Gnome") {
        charRace = choice(["Rock Gnome","Forest Gnome","Svirfneblin"]);
	}

    else if (randomRace == "Tiefling") {
        var subRace = choice(["Infernal","Abyssal","Feral","Archdemon"]);

        if (subRace == "Archdemon") {
            charRace = choice(["Baalzebul", "Dispater", "Fierna", "Glasya", "Levistus", "Mammon", "Mephistopheles", "Zariel"]) + " Bloodline Tiefling";
		}
        else {
            charRace = subRace + " Tiefling";
		}
	}

    else if (randomRace == "Genasi") {
        charRace = choice(["Air","Earth","Fire","Water"]) + " Genasi";
	}

    else if (randomRace == "Gith") {
        charRace = "Gith" + choice(["yanki", "zerai"]);
	}

    else if (randomRace == "Dragonborn") {
        charRace = choice(['Black', 'Blue', 'Green', 'Red', 'White', 'Brass', 'Bronze', 'Copper', 'Gold', 'Silver']) + " Dragonborn";
	}

    else if (randomRace == "Human") {
        charRace = choice(["Human", "Human", "Variant Human"]);
	}

    else if (randomRace == "Aven") {
        charRace = choice(["Aquilen", "Nocten", "Volturen"]) + " Aven";
	}

    else if (randomRace == "Aasimar") {
        charRace = choice(["Protector", "Scourge", "Fallen"]) + " Aasimar";
	}

    else if (randomRace == "Changeling") {
        charRace = choice(["Passer", "Becomer", "Reality Seeker"]) + " Changeling";
	}

    else if (randomRace == "Minotaur") {
        charRace = choice(["Sheep-Headed", "Bull-Headed"]) + " Minotaur";
	}

    else if (randomRace == "Simic Hybrid") {
        charRace = choice(["Human", "Elf"]) + " Simic Hybrid";
	}

    else if (randomRace == "Warforged") {
        charRace = choice(["", "", "", "Envoy", "Juggernaut", "Skirmisher"]) + " Warforged";
	}
	
	else if (randomRace == "Yuan-Ti") {
		charRace = "Yuan-Ti Pureblood";
	}

    else {
        charRace = randomRace;
	}

    //charRace = choice(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Revenant "]) + charRace;

    return [charRace, randomRace];
}

function genClass() {
	var randomClass = choice(classList);
	var subClassChoice = '';
	var finalClass = '';
	
	// in order to get results from dnd5e.wikidot.com, I need the base class (e.g. Druid) and a shorted version of the subclass (e.g. Twilight instead of Circle of Twilight)
	// to get this, store the initial random choice from the base classList and store the random choice from each class' list of subclasses
	
	if (randomClass == "Artificer") {
		subClassChoice = choice(["Alchemist","Armorer","Artillerist","Battle Smith"]);
		finalClass = subClassChoice + " Artificer";
		}

	else if (randomClass == "Barbarian") {
		subClassChoice = choice(["Ancestral Guardian","Battle Rager","Beast","Berserker","Juggernaut","Storm Herald","Wild Soul","Totem Warrior","Zealot"]);
		finalClass = "Path of the " + subClassChoice + " Barbarian";
		}

	else if (randomClass == "Bard") {
		subClassChoice = choice(["Creation","Eloquence","Glamour","Lore","Satire","Swords","Valor","Whispers"]);
		finalClass = "Bard of the College of " + subClassChoice;
		}

	else if (randomClass == "Blood Hunter") {
		subClassChoice = choice(["Ghostslayer","Lycan","Mutant","Profane Soul"]);
		finalClass = "Blood Hunter of the Order of the " + subClassChoice;
		}

	else if (randomClass == "Cleric") {
		subClassChoice = choice(["Ambition","Arcana","Blood","Death","Forge","Grave","Knowledge","Life","Light","Nature","Order","Protection","Solidarity","Strength","Tempest","Trickery","Twilight","Unity","War","Zeal"]);
		finalClass = subClassChoice + " Domain Cleric";
		}

	else if (randomClass == "Druid") {
		subClassChoice = choice(["Dreams","the Land","the Moon","the Shepherd","Spores","Stars","Twilight","Wildfire"]);
		finalClass = "Druid of the Circle of " + subClassChoice;
		// adapted from https://stackoverflow.com/a/9323226/11412009
		// this shortens the subClassChoice to the last word (e.g. "the Shepherd" to just "Shepherd") to work with dnd5e.wikidot.com's url system
		var lastWordIndex = finalClass.lastIndexOf(" ");
		subClassChoice = subClassChoice.substring(0, lastWordIndex);
		}

	else if (randomClass == "Fighter") {
		subClassChoice = choice(["Arcane Archer","Banneret","Brute","Battle Master","Cavalier","Champion","Echo Knight","Eldritch Knight","Monster Hunter","Psi Knight","Psychic Warrior","Rune Knight","Samurai","Scout", "Sharpshooter"]);
		finalClass = subClassChoice + " Fighter";
		}

	else if (randomClass == "Monk") {
		subClassChoice = choice(["Mercy","the Astral Self","the Cobalt Soul","Drunken Master","the Four Elements","the Kensei","the Long Death","the Open Hand","the Shadow","the Soul Knife","Tranquility"]);
		finalClass = "Monk practicing the Way of " + subClassChoice;
		}

	else if (randomClass == "Paladin") {
		subClassChoice = choice(["the Ancients","Conquest","the Crown","Devotion","Heroism","Redemption","Treachery","Venegence","the Watchers", "Oathbreaker"]);
		if (subClassChoice == "Oathbreaker") {
			finalClass = "Oathbreaker Paladin";
		}
		else {
			finalClass = "Paladin bound by the Oath of " + subClassChoice;
		}
		}

	else if (randomClass == "Ranger") {
		subClassChoice = choice(["Beast Master","Fey Wanderer","Gloom Stalker","Horizon Walker","Hunter","Monster Slayer","Primeval Guardian","Swarmkeeper"]);
		finalClass = subClassChoice + " Ranger";
		}
	
	else if (randomClass == "Rune Scribe") {
		subClassChoice = "Rune Scribe";
		finalClass = "Rune Scribe";
	}

	else if (randomClass == "Rogue") {
		subClassChoice = choice(["Arcane Trickster","Assassin","Inquisitive","Mastermind","Revived","Scout","Soulknife","Swashbuckler","Thief"]);
		finalClass = subClassChoice + " Rogue";
		}

	else if (randomClass == "Sorcerer") {
		subClassChoice = choice(["Aberrant Mind","Clockwork Soul","Draconic Bloodline","Divine Soul","Giant Soul","Phoenix","Psionic Soul","Pyromancy","Runechild","Sea","Shadow Magic","Stone","Storm","Wild"]);
		finalClass = subClassChoice + " Sorcerer";
		}

	else if (randomClass == "Warlock") {
		subClassChoice = choice(["Archfey","Celestial","Fiend","Great Old One","Hexblade","Kraken","Lurker in the Deep","Noble Genie","Raven Queen","Seeker","Undying"]);
		finalClass = "Warlock empowered by the " + subClassChoice;
		}

	else if (randomClass == "Wizard") {
		subClassChoice = choice(["Abjuration","Bladesinging","Chronurgy","Conjuration","Divination","Enchantment","Evocation","Graviturgy","Illusion","Invention","Lore Mastery","Necromancy","Onomancy","Psionics","Theurgy", "Transmutation","War Magic"]);
		finalClass = "Wizard of the School of " + subClassChoice;
		}

	if (choice(["dual", "single", "single", "single"]) == "single") {
		return [finalClass, randomClass, subClassChoice, "", "", ""];
	}
	
	// otherwise, dual class
	
	else {
			// https://medium.com/javascript-in-plain-english/how-to-remove-a-specific-item-from-an-array-in-javascript-a49b108404c
			// literally one of the most basic operations. why is this a two line ordeal? python has had this for years.
		var index = classList.indexOf(randomClass);
		if (index > -1) { 
			classList.splice(index, 1) 
		}

		var secondRandomClass = choice(classList);
		var secondFinalClass = ''
		var secondSubClassChoice = ''

		if (secondRandomClass == "Artificer") {
			secondSubClassChoice = choice(["Alchemist","Armorer","Artillerist","Battle Smith"]);
			secondFinalClass = secondSubClassChoice + " Artificer";
			}

		else if (secondRandomClass == "Barbarian") {
			secondSubClassChoice = choice(["Ancestral Guardian","Battle Rager","Beast","Berserker","Juggernaut","Storm Herald","Wild Soul","Totem Warrior","Zealot"]);
			secondFinalClass = "Path of the " + secondSubClassChoice + " Barbarian";
			}

		else if (secondRandomClass == "Bard") {
			secondSubClassChoice = choice(["Creation","Eloquence","Glamour","Lore","Satire","Swords","Valor","Whispers"]);
			secondFinalClass = "Bard of the College of " + secondSubClassChoice;
			}

		else if (secondRandomClass == "Blood Hunter") {
			secondSubClassChoice = choice(["Ghostslayer","Lycan","Mutant","Profane Soul"]);
			secondFinalClass = "Blood Hunter of the Order of the " + secondSubClassChoice;
			}

		else if (secondRandomClass == "Cleric") {
			secondSubClassChoice = choice(["Ambition","Arcana","Blood","Death","Forge","Grave","Knowledge","Life","Light","Nature","Order","Protection","Solidarity","Strength","Tempest","Trickery","Twilight","Unity","War","Zeal"]);
			secondFinalClass = secondSubClassChoice + " Domain Cleric";
			}

		else if (secondRandomClass == "Druid") {
			secondSubClassChoice = choice(["Dreams","the Land","the Moon","the Shepherd","Spores","Stars","Twilight","Wildfire"]);
			secondFinalClass = "Druid of the Circle of " + secondSubClassChoice;
			// adapted from https://stackoverflow.com/a/9323226/11412009
			// this shortens the secondSubClassChoice to the last word (e.g. "the Shepherd" to just "Shepherd") to work with dnd5e.wikidot.com's url system
			var lastWordIndex = secondSubClassChoice.lastIndexOf(" ");
			secondSubClassChoice = secondSubClassChoice.substring(0, lastWordIndex);
			}

		else if (secondRandomClass == "Fighter") {
			secondSubClassChoice = choice(["Arcane Archer","Banneret","Brute","Battle Master","Cavalier","Champion","Echo Knight","Eldritch Knight","Monster Hunter","Psi Knight","Psychic Warrior","Rune Knight","Samurai","Scout", "Sharpshooter"]);
			secondFinalClass = secondSubClassChoice + " Fighter";
			}

		else if (secondRandomClass == "Monk") {
			secondSubClassChoice = choice(["Mercy","the Astral Self","the Cobalt Soul","Drunken Master","the Four Elements","the Kensei","the Long Death","the Open Hand","the Shadow","the Soul Knife","Tranquility"]);
			secondFinalClass = "Monk practicing the Way of " + secondSubClassChoice;
			}

		else if (secondRandomClass == "Paladin") {
			secondSubClassChoice = choice(["the Ancients","Conquest","the Crown","Devotion","Heroism","Redemption","Treachery","Venegence","the Watchers", "Oathbreaker"]);
			if (secondSubClassChoice == "Oathbreaker") {
				secondFinalClass = "Oathbreaker Paladin";
			}
			else {
				secondFinalClass = "Paladin bound by the Oath of " + secondSubClassChoice;
			}
			}

		else if (secondRandomClass == "Ranger") {
			secondSubClassChoice = choice(["Beast Master","Fey Wanderer","Gloom Stalker","Horizon Walker","Hunter","Monster Slayer","Primeval Guardian","Swarmkeeper"]);
			secondFinalClass = secondSubClassChoice + " Ranger";
			}

		else if (secondRandomClass == "Rune Scribe") {
			secondSubClassChoice = "Rune Scribe";
			secondFinalClass = "Rune Scribe";
		}

		else if (secondRandomClass == "Rogue") {
			secondSubClassChoice = choice(["Arcane Trickster","Assassin","Inquisitive","Mastermind","Revived","Scout","Soulknife","Swashbuckler","Thief"]);
			secondFinalClass = secondSubClassChoice + " Rogue";
			}

		else if (secondRandomClass == "Sorcerer") {
			secondSubClassChoice = choice(["Aberrant Mind","Clockwork Soul","Draconic Bloodline","Divine Soul","Giant Soul","Phoenix","Psionic Soul","Pyromancy","Runechild","Sea","Shadow Magic","Stone","Storm","Wild"]);
			secondFinalClass = secondSubClassChoice + " Sorcerer";
			}

		else if (secondRandomClass == "Warlock") {
			secondSubClassChoice = choice(["Archfey","Celestial","Fiend","Great Old One","Hexblade","Kraken","Lurker in the Deep","Noble Genie","Raven Queen","Seeker","Undying"]);
			secondFinalClass = "Warlock empowered by the " + secondSubClassChoice;
			}

		else if (secondRandomClass == "Wizard") {
			secondSubClassChoice = choice(["Abjuration","Bladesinging","Chronurgy","Conjuration","Divination","Enchantment","Evocation","Graviturgy","Illusion","Invention","Lore Mastery","Necromancy","Onomancy","Psionics","Theurgy", "Transmutation","War Magic"]);
			secondFinalClass = "Wizard of the School of " + secondSubClassChoice;
			}
		
		return [finalClass, randomClass, subClassChoice, " / " + secondFinalClass, secondRandomClass, secondSubClassChoice];
	}
}

function genBackground() {
    randomBackground = choice(fixedBackgroundList);

    if (["A", "E", "I", "O", "U"].includes(randomBackground.charAt(0))) {
        fixedBackground = "an " + randomBackground;
	}
    else {
        fixedBackground = "a " + randomBackground;
	}

    return "with a past as " + fixedBackground;
}

//why aren't these built in?

//https://stackoverflow.com/a/9071606/11412009
function choice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}