
let mon = new Monster("placeHolder",4,"LizardMan");




function RpgAdventureGame() {
    let solution;
    let generateAnswer;
    let timerValue = man.timer;
    let clockTime;
    let time = document.querySelector('#time')

    let userAnswerOne = document.getElementById('answerOne');
    let userAnswerTwo = document.getElementById('answerTwo');
    let userAnswerThree = document.getElementById('answerThree');
    let userAnswerFour = document.getElementById('answerFour');

    
    userAnswerOne.addEventListener("click", answerChecker);
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
        clearInterval(clockTime);
        
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
    
        userAnswerOne.value = `${generateAnswer[0]}`;
        userAnswerOne.innerHTML = `${generateAnswer[0]}`;
    
        userAnswerTwo.value = `${generateAnswer[1]}`;
        userAnswerTwo.innerHTML = `${generateAnswer[1]}`;
    
        userAnswerThree.value = `${generateAnswer[2]}`;
        userAnswerThree.innerHTML = `${generateAnswer[2]}`;
    
        userAnswerFour.value = `${generateAnswer[3]}`;
        userAnswerFour.innerHTML = `${generateAnswer[3]}`;
    
    }
    
    function startTimer(duration, display) {
        let timer = duration, seconds;
        clockTime = setInterval(function () {
            seconds = parseInt(timer % 60, 10);
    
            display.textContent = seconds;
    
            if (--timer < 0) {
                clearInterval(clockTime);
                time.innerHTML = ' '
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
        clearInterval(clockTime);
    
    
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
                clearInterval(clockTime);
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
            clearInterval(clockTime);
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

        function gameOverWarrior() {
            document.querySelector('#testMonster').style.display = 'none';
            document.querySelector('.playerHPBox').style.display = 'none';
            document.querySelector('.monsterHPBox').style.display = 'none';
            document.querySelector('.warriorFun').style.display = 'none';
            document.querySelector('.questionContainer').style.display = 'inline-block';
            document.querySelector('#answerOne').style.display = 'none';
            document.querySelector('#answerTwo').style.display = 'none';
            document.querySelector('#answerThree').style.display = 'none';
            document.querySelector('#answerFour').style.display = 'none';
        
            userAnswerOne.removeEventListener("click", answerChecker);
            userAnswerTwo.removeEventListener("click", answerChecker);
            userAnswerThree.removeEventListener("click", answerChecker);
            userAnswerFour.removeEventListener("click", answerChecker);
            
            document.getElementById("question").innerHTML = (`Game Over!`);
        
            setTimeout(playAgain, 900);
        }
        
        function gameOverLizard() {
            document.querySelector('#testMonster').style.display = 'none';
            document.querySelector('.playerHPBox').style.display = 'none';
            document.querySelector('.monsterHPBox').style.display = 'none';
            document.querySelector('.warriorFun').style.display = 'none';
            document.querySelector('.questionContainer').style.display = 'inline-block';
            document.querySelector('#answerOne').style.display = 'none';
            document.querySelector('#answerTwo').style.display = 'none';
            document.querySelector('#answerThree').style.display = 'none';
            document.querySelector('#answerFour').style.display = 'none';
        
            userAnswerOne.removeEventListener("click", answerChecker);
            userAnswerTwo.removeEventListener("click", answerChecker);
            userAnswerThree.removeEventListener("click", answerChecker);
            userAnswerFour.removeEventListener("click", answerChecker);
        
            document.getElementById("question").innerHTML = (`You Win`);
        
            setTimeout(playAgain, 900);
        }
    }
}






