
let mon = new Monster("efewf",4,"Warrior");




function RpgAdventureGame() {
    let solution;
    let generateAnswer;
    let timerValue = man.timer;
    let timerFun;

    let userAnswer = document.getElementById('funOne');
    let userAnswerTwo = document.getElementById('funTwo');
    let userAnswerThree = document.getElementById('funThree');
    let userAnswerFour = document.getElementById('funFour');
    
    userAnswer.addEventListener("click", answerChecker);
    userAnswerTwo.addEventListener("click", answerChecker);
    userAnswerThree.addEventListener("click", answerChecker);
    userAnswerFour.addEventListener("click", answerChecker);

    generateProblem();

    function generateProblem() {
       
        mon.Idle();

        if(man.type === "Mage") {
            man.IdleMage();
        } else {
            man.IdleWarrior();
        }


        document.querySelector('#turnDirector').innerHTML = 'Player Attack!';
        document.querySelector('#turnDirector').style.color = "#8ffd8f";
        clearInterval(timerFun);
        
        document.querySelector('.questionContainer').style.display = 'inline-block';
        

        
        randomNumA = Math.floor(Math.random() * 10);
        randomNumB = Math.floor(Math.random() * 10);
        
        solution = randomNumA + randomNumB;
        
        generateAnswer = [solution]
        
        while(generateAnswer.length < 4) {
            num = Math.floor(Math.random() * 10);
            generateAnswer.push(num);
            generateAnswer = removeDup(generateAnswer);
        }

        startTimer(timerValue, this.display);
        document.getElementById("question").innerHTML = (`Question: ${randomNumA} + ${randomNumB} = ?`);
        
        
        changeValue();


    }
    
    // This function will remove any duplicate numbers in our array.
    function removeDup(arr) {
        let result = []
        arr.forEach((item, index) => { if (arr.indexOf(item) == index) result.push(item) });
        return result;
    }
    
    
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    function changeValue(){
        shuffle(generateAnswer);
    
        document.getElementById("funOne").value = `${generateAnswer[0]}`;
        document.getElementById("funOne").innerHTML = `${generateAnswer[0]}`;
    
        document.getElementById("funTwo").value = `${generateAnswer[1]}`;
        document.getElementById("funTwo").innerHTML = `${generateAnswer[1]}`;
    
        document.getElementById("funThree").value = `${generateAnswer[2]}`;
        document.getElementById("funThree").innerHTML = `${generateAnswer[2]}`;
    
        document.getElementById("funFour").value = `${generateAnswer[3]}`;
        document.getElementById("funFour").innerHTML = `${generateAnswer[3]}`;
    
    }
    
    function startTimer(duration, display) {
        let timer = duration, seconds;
        timerFun = setInterval(function () {
            seconds = parseInt(timer % 60, 10);
            seconds = seconds < 10 ?  + seconds : seconds;
    
            display.textContent = seconds;
    
            if (--timer < 0) {
                clearInterval(timerFun);
                document.querySelector('#time').innerHTML = ' '
            } 
    
            if(timer == -1) {
                man.hitPoints--;
                document.querySelector('#turnDirector').innerHTML = 'Time is Up!';
                document.querySelector('#playerHealth').innerHTML = `HP: ${man.hitPoints}`;
                document.querySelector('.questionContainer').style.display = 'none';
                man.healthBar(man.hitPoints);

                mon.Attack();

                if(man.type === "Mage") {
                    man.MageDamaged();
                } else {
                    man.WarriorDamaged();
                }

                if(man.hitPoints !== 0) {
                    setTimeout(generateProblem, 2000);
                } else if(man.hitPoints === 0) {
                    document.querySelector('#turnDirector').innerHTML = 'Ohhh Nooooo!';
                    document.querySelector('#turnDirector').style.color = 'red';
                    document.querySelector('#turnDirector').style.display = 'none';
                    document.querySelector('.gameTimer').style.display = 'none';
        
                    mon.Idle();

                    if(man.type === "Mage") {
                        man.MageDeath();
                    } else {
                        man.WarriorDeath();
                    }
        
                    setTimeout(gameOverWarrior, 900);
                }
            }
    
        }, 1000);
    }
    // This method will check our input and compare it to the solution to the problem.
    function answerChecker() {
        let button = this.value * 1;
        clearInterval(timerFun);
    
    
        if(button === solution) {
            document.querySelector('.questionContainer').style.display = 'none';
            mon.hitPoints--;
            document.querySelector('#monsterHealthBar').innerHTML = `HP: ${mon.hitPoints}`;
            document.getElementById("answerDisplay").innerHTML = ` `;
            document.querySelector('#turnDirector').innerHTML = 'A Solid Hit!';
    
            if(man.type === "Mage") {
                man.MageAttack();
            } else {
                man.WarriorAttack();
            }

            mon.Damage();
    
            mon.healthBar(mon.hitPoints);

            if(mon.hitPoints !== 0) {
                setTimeout(generateProblem, 2000);
            } else if(mon.hitPoints === 0) {
                clearInterval(timerFun);
                document.querySelector('#turnDirector').innerHTML = 'Ohhh Yeah!';
                document.querySelector('#turnDirector').style.color = 'yellow';
                document.querySelector('#turnDirector').style.display = 'none';
                document.querySelector('.gameTimer').style.display = 'none';
    
                if(man.type === "Mage") {
                    man.IdleMage();
                } else {
                    man.IdleWarrior();
                }

                mon.Death();

                setTimeout(gameOverLizard, 700);
            }

        
        } else if(button !== solution) {
        document.querySelector('.questionContainer').style.display = 'none';
        man.hitPoints--;
        document.querySelector('#playerHealth').innerHTML = `HP: ${man.hitPoints}`;
        document.querySelector('#turnDirector').innerHTML = 'Better Luck Next Time!';
        document.querySelector('#turnDirector').style.color = "red";
        document.getElementById("answerDisplay").innerHTML = ` `;

        if(man.type === "Mage") {
            man.MageDamaged();
        } else {
            man.WarriorDamaged();
        }

        mon.Attack();

        man.healthBar(man.hitPoints);

        if(man.hitPoints !== 0) {
            setTimeout(generateProblem, 2000);
        } else if(man.hitPoints === 0) {
            clearInterval(timerFun);
            document.querySelector('#turnDirector').innerHTML = 'Ohhh Nooooo!';
            document.querySelector('#turnDirector').style.color = 'red';
            document.querySelector('#turnDirector').style.display = 'none';
            document.querySelector('.gameTimer').style.display = 'none';

            mon.Idle();
            
            if(man.type === "Mage") {
                man.MageDeath();
            } else {
                man.WarriorDeath();
            }

            setTimeout(gameOverWarrior, 900);
        }


    
        } 
    }
}

function gameOverWarrior() {
    document.querySelector('#testMonster').style.display = 'none';
    document.querySelector('.playerHPBox').style.display = 'none';
    document.querySelector('.monsterHPBox').style.display = 'none';
    document.querySelector('.warriorFun').style.display = 'none';
    document.querySelector('.questionContainer').style.display = 'inline-block';
    document.querySelector('#funOne').style.display = 'none';
    document.querySelector('#funTwo').style.display = 'none';
    document.querySelector('#funThree').style.display = 'none';
    document.querySelector('#funFour').style.display = 'none';
    document.getElementById("question").innerHTML = (`Game Over!`);
}

function gameOverLizard() {
    document.querySelector('#testMonster').style.display = 'none';
    document.querySelector('.playerHPBox').style.display = 'none';
    document.querySelector('.monsterHPBox').style.display = 'none';
    document.querySelector('.warriorFun').style.display = 'none';
    document.querySelector('.questionContainer').style.display = 'inline-block';
    document.querySelector('#funOne').style.display = 'none';
    document.querySelector('#funTwo').style.display = 'none';
    document.querySelector('#funThree').style.display = 'none';
    document.querySelector('#funFour').style.display = 'none';
    document.getElementById("question").innerHTML = (`You Win`);
}




