let mageContainer = document.querySelector('.mageContainer');
let warriorContainer = document.querySelector('.warriorContainer');




mageContainer.addEventListener("click", CharacterSelectMage);
warriorContainer.addEventListener("click", CharacterSelectWarrior);
document.querySelector('#warriorPlay').addEventListener("click", GameBeginWarrior);
document.querySelector('#magePlay').addEventListener("click", GameBeginMage);



function CharacterSelectMage() {
    mageContainer.style.width = '75%';
    warriorContainer.style.display = 'none';
    document.querySelector('.mageContainer').style.backgroundColor = 'rgb(108, 213, 255)';
    document.querySelector('.mageContainer').style.opacity = '100%';
    document.querySelector('#classDescriptionTitleMage').innerHTML = "Please enter your character name:";
    document.querySelector('#classDescriptionMage').innerHTML = "<input id='mageName' type='text' minLength='1' maxLength='12' placeholder='Character Name'>";
    document.querySelector('#magePlay').style.visibility = 'visible';
    mageContainer.removeEventListener("click", CharacterSelectMage)
}

function CharacterSelectWarrior() {
    warriorContainer.style.width = '75%';
    mageContainer.style.display = 'none';
    document.querySelector('.warriorContainer').style.backgroundColor = 'rgb(255, 125, 125)';
    document.querySelector('.warriorContainer').style.opacity = '100%';
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

        let man = new Hero(name,5,"Warrior");
        document.querySelector('.playerHPBox').style.display = 'inline';
        document.querySelector('#playerName').innerHTML = `${man.name}`;
        document.querySelector('#playerHealth').innerHTML = `HP: ${man.hitPoints}`;

            GenerateProblem();
        
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

        let man = new Hero(mageNames,4,"Mage");
        document.querySelector('.playerHPBox').style.display = 'inline';
        document.querySelector('.warriorHealth').src = `https://i.imgur.com/wEYcKEE.png`;
        document.querySelector('.warriorFun').src = `https://i.imgur.com/zjDEAyV.png`;
        document.querySelector('#playerName').innerHTML = `${man.name}`;
        document.querySelector('#playerHealth').innerHTML = `HP: ${man.hitPoints}`;


            var timerValue = 12,
            display = document.querySelector('#time');
            startTimer(timerValue, display);


        
    }
}
