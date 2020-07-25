var raceList = ['Aarakocra', 'Aasimar', 'Aetherborn', 'Aven', 'Bugbear', 'Centaur', 'Changeling', 'Dragonborn', 'Dwarf', 'Elf', 'Firbolg', 'Genasi', 'Gith', 'Gnome', 'Goblin', 'Goliath', 'Grung', 'Half-Elf', 'Half-Orc', 'Halfling', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tortle', 'Triton', 'Vampire', 'Warforged', 'Yuan-Ti Pureblood'];
    
var classList = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

var backstoryList = ['Acolyte', 'Barbarian Tribe Member', 'Charlatan', 'City Watch', 'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Criminal', 'Entertainer', 'Faction Agent', 'Far Traveler', 'Fisher', 'Folk Hero', 'Guild Artisan', 'Haunted One', 'Hermit', 'Inheritor', 'Knight', 'Marine', 'Mercenary Veteran', 'Noble', 'Outlander', 'Port City Noble', 'Sage', 'Sailor', 'Shipwright', 'Smuggler', 'Soldier', 'Urban Bounty Hunter', 'Urchin']

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
    var generatedAlignment = genAlignment();
    var generatedFirstClass = genClass("");
    var generatedSecondClass = genClass(generatedFirstClass);
    var generatedRace = genRace();
    var generatedBackstory = genBackstory();
    
    var randomisedCharacter = "A " + generatedAlignment + " " + generatedRace + " " + generatedFirstClass + generatedSecondClass + " " + generatedBackstory;
    document.getElementById("content").innerHTML = randomisedCharacter;
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

    if (randomRace in ["Elf", "Half-Elf"]) { 
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

function genClass(previousClass) {
    if (previousClass == "") {
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
        
        return finalClass;
        
       }
    else {
        if (choice(["dual", "single", "single", "single"]) == "dual") {
            randomClass = choice(classList);
            finalClass = '';

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
                finalClass = choice(["Soulknife","The Revived","Thief","Assassin","Arcane Trickster"]) + " Rogue"
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

            return " / " + finalClass;
        }
        
        else {
            return "";
        }
    }
}

function genBackstory() {
    var randomBackstory = choice(backstoryList);

    if (randomBackstory[0] in ["A", "E", "I", "O", "U"]) {
        randomBackstory = "an " + randomBackstory;
	}
    else {
        randomBackstory = "a " + randomBackstory;
	}

    return "with a past as " + randomBackstory;
}

//why isn't this built in?

function choice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}