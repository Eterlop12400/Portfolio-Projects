let man = new Hero("efewf",5,"Warrior")
let mon = new Monster("efewf",5,"Warrior")


function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ?  + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            clearInterval(timer);
            document.querySelector('#time').innerHTML = ' '
        } 

        if(timer == -1) {
            console.log('time is up');
            document.querySelector('#turnDirector').innerHTML = 'Time is Up!';
            GenerateProblem();
        }

    }, 1000);
}


function GenerateProblem() {
    
    mon.Idle();
    man.Idle();


document.querySelector('.questionContainer').style.display = 'inline-block';



randomNumA = Math.floor(Math.random() * 10);
randomNumB = Math.floor(Math.random() * 10);

solution = randomNumA + randomNumB;

let generateAnswer = [solution]

while(generateAnswer.length < 4) {
    num = Math.floor(Math.random() * 10);
    generateAnswer.push(num);
    generateAnswer = removeDup(generateAnswer);
}



let userAnswer = document.getElementById('funOne');
let userAnswerTwo = document.getElementById('funTwo');
let userAnswerThree = document.getElementById('funThree');
let userAnswerFour = document.getElementById('funFour');



 document.getElementById("question").innerHTML = (`Question: ${randomNumA} + ${randomNumB} = ?`);


changeValue();

userAnswer.addEventListener("click", answerChecker);
userAnswerTwo.addEventListener("click", answerChecker);
userAnswerThree.addEventListener("click", answerChecker);
userAnswerFour.addEventListener("click", answerChecker);

let hitPoints = 5;


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

// This method will check our input and compare it to the solution to the problem.
 function answerChecker() {
    let button = this.value * 1;


    if(button === solution) {
        document.querySelector('.questionContainer').style.display = 'none';
        document.getElementById("answerDisplay").innerHTML = ` `;

        man.WarriorAttack();
        mon.Damage();

        mon.hitPoints--;

        setTimeout(GenerateProblem, 2000);


    } else {
      document.querySelector('.questionContainer').style.display = 'none';
      hitPoints = hitPoints - 1;
      document.getElementById("answerDisplay").innerHTML = ` `;
      display = document.querySelector('#time');
      man.WarriorDamaged();
      mon.Attack();

      setTimeout(GenerateProblem, 2000);

    } 
 }
}

man.Idle();
