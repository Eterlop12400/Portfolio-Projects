let mageContainer = document.querySelector('.mageContainer');
let warriorContainer = document.querySelector('.warriorContainer');

let man = new Hero;






mageContainer.addEventListener("click", CharacterSelectMage);
warriorContainer.addEventListener("click", CharacterSelectWarrior);
document.querySelector('#warriorPlay').addEventListener("click", GameBeginWarrior);
document.querySelector('#magePlay').addEventListener("click", GameBeginMage);



function CharacterSelectMage() {
    mageContainer.style.width = '75%';
    warriorContainer.style.display = 'none';
    mageContainer.style.backgroundColor = 'rgb(108, 213, 255)';
    mageContainer.style.opacity = '100%';
    document.querySelector('#classDescriptionTitleMage').innerHTML = "Please enter your character name:";
    document.querySelector('#classDescriptionMage').innerHTML = "<input id='mageName' type='text' minLength='1' maxLength='12' placeholder='Character Name'>";
    document.querySelector('#magePlay').style.visibility = 'visible';
    mageContainer.removeEventListener("click", CharacterSelectMage)
}

function CharacterSelectWarrior() {
    warriorContainer.style.width = '75%';
    mageContainer.style.display = 'none';
    warriorContainer.style.backgroundColor = 'rgb(255, 125, 125)';
    warriorContainer.style.opacity = '100%';
    document.querySelector('#classDescriptionTitleWarrior').innerHTML = "Please enter your character name:";
    document.querySelector('#classDescriptionWarrior').innerHTML = "<input id='warriorName' type='text' minLength='1' maxLength='12' placeholder='Character Name'>";
    document.querySelector('#warriorPlay').style.visibility = 'visible';
    warriorContainer.removeEventListener("click", CharacterSelectWarrior)
}


function GameBeginWarrior() {
    let name = warriorName.value;

    if(name == '') {
        document.querySelector('#classDescriptionTitleWarrior').innerHTML = "Please enter a valid character name:";
        document.querySelector('#classDescriptionTitleWarrior').style.color = "darkRed"
    } else {
        document.querySelector('.question').style.display = 'none'
        warriorContainer.style.display = 'none';
        document.querySelector('.gameContainer').style.backgroundImage = "url('https://i.imgur.com/fzzirTD.png')";
        document.querySelector('.gameTimer').style.display = 'inline';

        document.querySelector('#testWarrior').style.display = 'inline';
        document.querySelector('#testMonster').style.display = 'inline';

        man = new Hero(name,5,"Warrior", 9);
        document.querySelector('.playerHPBox').style.display = 'inline';
        document.querySelector('.monsterHPBox').style.display = 'inline-flex';
        document.querySelector('#playerName').innerHTML = `${man.name}`;
        document.querySelector('#playerHealth').innerHTML = `HP: ${man.hitPoints}`;
        document.querySelector('#monsterHealthBar').innerHTML = `HP: ${mon.hitPoints}`;


        setTimeout(RpgAdventureGame, 2000);    
        
        display = document.querySelector('#time');
    }
}



function GameBeginMage() {
    let mageNames = mageName.value;

    if(mageNames == '') {
        document.querySelector('#classDescriptionTitleMage').innerHTML = "Please enter a valid character name:";
        document.querySelector('#classDescriptionTitleMage').style.color = "darkRed"
    } else {
        document.querySelector('.question').style.display = 'none'
        mageContainer.style.display = 'none';
        document.querySelector('.gameContainer').style.backgroundImage = "url('https://i.imgur.com/fzzirTD.png')";
        document.querySelector('.gameTimer').style.display = 'inline';

        document.querySelector('#testWarrior').style.display = 'inline';
        document.querySelector('#testMonster').style.display = 'inline';

        man = new Hero(mageNames,4,"Mage", 12);
        document.querySelector('.warriorFun').src = 'Sprites/mageTest.png';
        document.querySelector('.warriorFun').style.height = '16vh';
        document.querySelector('.playerHPBox').style.display = 'inline';
        man.healthBar(man.hitPoints);
        document.querySelector('.monsterHPBox').style.display = 'inline-flex';
        document.querySelector('#playerName').innerHTML = `${man.name}`;
        document.querySelector('#playerHealth').innerHTML = `HP: ${man.hitPoints}`;
        document.querySelector('#monsterHealthBar').innerHTML = `HP: ${mon.hitPoints}`;

        setTimeout(RpgAdventureGame, 2000); 

            display = document.querySelector('#time');


        
    }
}
