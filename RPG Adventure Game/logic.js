let mageContainer = document.querySelector('.mageContainer');
let warriorContainer = document.querySelector('.warriorContainer');

mageContainer.addEventListener("click", makeBigMage);
warriorContainer.addEventListener("click", makeBigWarrior)


function makeBigMage() {
    mageContainer.style.width = '75%';
    warriorContainer.style.display = 'none';
    document.querySelector('.mageContainer').style.backgroundColor = 'rgb(108, 213, 255)';
    document.querySelector('.mageContainer').style.opacity = '100%';
    document.querySelector('#classDescriptionTitleMage').innerHTML = "Please enter your character name:";
    document.querySelector('#classDescriptionMage').innerHTML = "<input type='text' minLength='1' maxLength='12' placeholder='Character Name'></input>";
    document.querySelector('#magePlay').style.visibility = 'visible';
    mageContainerContainer.removeEventListener("click", makeBigWarrior)
}

function makeBigWarrior() {
    warriorContainer.style.width = '75%';
    mageContainer.style.display = 'none';
    document.querySelector('.warriorContainer').style.backgroundColor = 'rgb(255, 125, 125)';
    document.querySelector('.warriorContainer').style.opacity = '100%';
    document.querySelector('#classDescriptionTitleWarrior').innerHTML = "Please enter your character name:";
    document.querySelector('#classDescriptionWarrior').innerHTML = "<input type='text' minLength='1' maxLength='12' placeholder='Character Name'></input>";
    document.querySelector('#warriorPlay').style.visibility = 'visible';
    warriorContainer.removeEventListener("click", makeBigWarrior)
}