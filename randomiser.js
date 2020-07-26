var raceList = ['Aarakocra', 'Aasimar', 'Aetherborn', 'Aven', 'Bugbear', 'Centaur', 'Changeling', 'Dragonborn', 'Dwarf', 'Elf', 'Firbolg', 'Genasi', 'Gith', 'Gnome', 'Goblin', 'Goliath', 'Grung', 'Half-Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Vampire', 'Warforged', 'Yuan-Ti Pureblood'];
    
var classList = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

var backstoryList = ['Acolyte', 'Barbarian Tribe Member', 'Charlatan', 'City Watch', 'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Criminal', 'Entertainer', 'Faction Agent', 'Far Traveler', 'Fisher', 'Folk Hero', 'Guild Artisan', 'Haunted One', 'Hermit', 'Inheritor', 'Knight', 'Marine', 'Mercenary Veteran', 'Noble', 'Outlander', 'Port City Noble', 'Sage', 'Sailor', 'Shipwright', 'Smuggler', 'Soldier', 'Urban Bounty Hunter', 'Urchin'];

var randomisedCharacter = '';
    
function reset() {
    raceList = ['Aarakocra', 'Aasimar', 'Aetherborn', 'Aven', 'Bugbear', 'Centaur', 'Changeling', 'Dragonborn', 'Dwarf', 'Elf', 'Firbolg', 'Genasi', 'Gith', 'Gnome', 'Goblin', 'Goliath', 'Grung', 'Half-Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Vampire', 'Warforged', 'Yuan-Ti Pureblood'];
    
    classList = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    
    randomisedCharacter = '';
}

window.onload = function onLoad() {
	randomise();
}

function randomise() {
    reset();
    
    document.getElementById("Alignment").innerHTML = genAlignment();
	document.getElementById("Race").innerHTML = genRace();
	document.getElementById("Class").innerHTML = genClass();
	document.getElementById("Backstory").innerHTML = genBackstory();
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

    else {
        charRace = randomRace;
	}

    charRace = choice(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Revenant "]) + charRace;

    return charRace;
}

function genClass() {
	var randomClass = choice(classList);
	var finalClass = '';

	if (randomClass == "Artificer") {
		finalClass = choice(["Alchemist","Artillerist","Battle Smith"]) + " Artificer"
		}

	else if (randomClass == "Barbarian") {
		finalClass = "Path of the " + choice(["Beast","Berserker","Wild Soul","Totem Warrior"]) + " Barbarian"
		}

	else if (randomClass == "Bard") {
		finalClass = "Bard of the College of " + choice(["Creation","Eloquence","Lore","Valor","Glamour","Whispers"])
		}

	else if (randomClass == "Blood Hunter") {
		finalClass = "Blood Hunter of the Order of the " + choice(["Ghostslayer","Lycan","Mutant","Profane Soul"])
		}

	else if (randomClass == "Cleric") {
		finalClass = choice(["Knowledge","Life","Light","Tempest","Trickery","Nature"]) + " Domain Cleric"
		}

	else if (randomClass == "Druid") {
		finalClass = "Druid of the Circle of " + choice(["the Land","Wildfire","the Moon"])
		}

	else if (randomClass == "Fighter") {
		finalClass = choice(['Arcane Archer', 'Banneret', 'Brute', 'Battle Master', 'Cavalier', 'Champion', 'Eldritch Knight', 'Monster Hunter', 'Samurai', 'Scout', 'Sharpshooter', 'Rune Knight', 'Psychic Warrior']) + " Fighter"
		}

	else if (randomClass == "Monk") {
		finalClass = "Monk practicing the Way of " + choice(["Mercy","the Astral Self","the Open Hand","the Four Elements","the Shadow"])
		}

	else if (randomClass == "Paladin") {
		finalClass = "Paladin bound by the Oath of " + choice(["Venegence","Devotion","Heroism","the Watchers","the Ancients"])
		}

	else if (randomClass == "Ranger") {
		finalClass = choice(["Hunter","Beast Master", "Swarmkeeper"]) + " Ranger"
		}

	else if (randomClass == "Rogue") {
		finalClass = choice(["Soulknife","Revived","Thief","Assassin","Arcane Trickster"]) + " Rogue"
		}

	else if (randomClass == "Sorcerer") {
		finalClass = choice(["Draconic Bloodline","Wild","Aberrant Mind","Clockwork Soul"]) + " Sorcerer"
		}

	else if (randomClass == "Warlock") {
		finalClass = "Warlock empowered by the " + choice(["Archfey","Great Old One","Fiend","Lurker in the Deep","Noble Genie"])
		}

	else if (randomClass == "Wizard") {
		finalClass = "Wizard of the School of " + choice(["Psionics","Onomancy","Evocation","Abjuration","Divination","Conjuration","Enchantment","Illusion","Necromancy","Transmutation"])
		}

	if (choice(["dual", "single", "single", "single"]) == "single") {
		return finalClass;
	}
	
	else {
			// https://medium.com/javascript-in-plain-english/how-to-remove-a-specific-item-from-an-array-in-javascript-a49b108404c
			// literally one of the most basic operations. why is this a two line ordeal? python has had this for years.
		var index = classList.indexOf(randomClass);
		if (index > -1) { 
			classList.splice(index, 1) 
		}

		randomClass = choice(classList);
		var secondClass = ''

		if (randomClass == "Artificer") {
			secondClass = choice(["Alchemist","Artillerist","Battle Smith"]) + " Artificer"
			}

		else if (randomClass == "Barbarian") {
			secondClass = "Path of the " + choice(["Beast","Berserker","Wild Soul","Totem Warrior"]) + " Barbarian"
			}

		else if (randomClass == "Bard") {
			secondClass = "Bard of the College of " + choice(["Creation","Eloquence","Lore","Valor","Glamour","Whispers"])
			}

		else if (randomClass == "Blood Hunter") {
			secondClass = "Blood Hunter of the Order of the " + choice(["Ghostslayer","Lycan","Mutant","Profane Soul"])
			}

		else if (randomClass == "Cleric") {
			secondClass = choice(["Knowledge","Life","Light","Tempest","Trickery","Nature"]) + " Domain Cleric"
			}

		else if (randomClass == "Druid") {
			secondClass = "Druid of the Circle of " + choice(["the Land","Wildfire","the Moon"])
			}

		else if (randomClass == "Fighter") {
			secondClass = choice(['Arcane Archer', 'Banneret', 'Brute', 'Battle Master', 'Cavalier', 'Champion', 'Eldritch Knight', 'Monster Hunter', 'Samurai', 'Scout', 'Sharpshooter', 'Rune Knight', 'Psychic Warrior']) + " Fighter"
			}

		else if (randomClass == "Monk") {
			secondClass = "Monk practicing the Way of " + choice(["Mercy","the Astral Self","the Open Hand","the Four Elements","the Shadow"])
			}

		else if (randomClass == "Paladin") {
			secondClass = "Paladin bound by the Oath of " + choice(["Venegence","Devotion","Heroism","the Watchers","the Ancients"])
			}

		else if (randomClass == "Ranger") {
			secondClass = choice(["Hunter","Beast Master", "Swarmkeeper"]) + " Ranger"
			}

		else if (randomClass == "Rogue") {
			secondClass = choice(["Soulknife","The Revived","Thief","Assassin","Arcane Trickster"]) + " Rogue"
			}

		else if (randomClass == "Sorcerer") {
			secondClass = choice(["Draconic Bloodline","Wild","Aberrant Mind","Clockwork Soul"]) + " Sorcerer"
			}

		else if (randomClass == "Warlock") {
			secondClass = "Warlock empowered by the " + choice(["Archfey","Great Old One","Fiend","Lurker in the Deep","Noble Genie"])
			}

		else if (randomClass == "Wizard") {
			secondClass = "Wizard of the School of " + choice(["Psionics","Onomancy","Evocation","Abjuration","Divination","Conjuration","Enchantment","Illusion","Necromancy","Transmutation"])
			}

		return finalClass + " / " + secondClass;
	}
}

function genBackstory() {
    var randomBackstory = choice(backstoryList);

    if (["A", "E", "I", "O", "U"].includes(randomBackstory.charAt(0))) {
        randomBackstory = "an " + randomBackstory;
	}
    else {
        randomBackstory = "a " + randomBackstory;
	}

    return "with a past as " + randomBackstory;
}

//why aren't these built in?

//https://stackoverflow.com/a/9071606/11412009
function choice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}