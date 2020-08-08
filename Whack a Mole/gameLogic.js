
class User {
    constructor (score) {
        this.score = score
    }
}


let playerOne = new User (0);
let lastHole;
const holes = document.querySelectorAll("button");


// Function for random time.
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Function for random holes from buttons on screen.
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole) {
      return randomHole(holes);
    }

    lastHole = (hole)
    return hole;
}

// Random mole will peek out anywhere from 1 second to 2 seconds. Win & Lose condition is built into this function.
function peep() {
    const time = randomTime(500, 2000);
    const hole = randomHole(holes);
    hole.style.backgroundColor = "yellow";
    hole.innerHTML = "MOLE";
    setTimeout (() => {
        hole.style.backgroundColor = "white";
        hole.innerHTML = "Hole";
        if(playerOne.score < 15 && playerOne.score > -15) {
            peep();
        } else if (playerOne.score >=15) {
            document.getElementById("container").style.visibility = "hidden";
        document.getElementById("infoBox").style.visibility = "visible";
        document.getElementById("instructions").style.visibility = "visible";
        document.getElementById("playerScore").style.visibility = "hidden";
        document.getElementById("instructions").style.color = "green";
        document.getElementById("instructions").style.fontSize = "100px";
        document.getElementById("instructions").innerHTML = `You WIN!`;
        document.getElementById("welcome").innerHTML = `Press F5 to play again!`;
        } else {
        document.getElementById("container").style.visibility = "hidden";
        document.getElementById("infoBox").style.visibility = "visible";
        document.getElementById("instructions").style.visibility = "visible";
        document.getElementById("playerScore").style.visibility = "hidden";
        document.getElementById("instructions").style.color = "red";
        document.getElementById("instructions").style.fontSize = "100px";
        document.getElementById("instructions").innerHTML = `You LOSE!`;
        document.getElementById("welcome").innerHTML = `Press F5 to play again!`;
        }
    }, time);
}


// click to start game
document.getElementById("next").onclick = function() {
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("infoBox").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "hidden";
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
    peep();
};


// Check 1st button to see if it's a mole, if so and you click it you get a point. Other wise you lose a point.
document.getElementById("holeOne").onclick = function bonkOne() {
        if (document.getElementById('holeOne').innerHTML === "MOLE" && document.getElementById('holeOne').style.backgroundColor === "yellow") {
            playerOne.score ++;
            document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
            document.getElementById("holeOne").style.backgroundColor = "white";
            document.getElementById('holeOne').innerHTML = "Hole";
        } else {
                playerOne.score -- ;
                document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
            }
}

// Check 2nd button to see if it's a mole, if so and you click it you get a point. Other wise you lose a point.
document.getElementById("holeTwo").onclick = function bonkTwo() {
    if (document.getElementById('holeTwo').innerHTML === "MOLE" && document.getElementById('holeTwo').style.backgroundColor === "yellow") {
        playerOne.score ++;
        document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        document.getElementById("holeTwo").style.backgroundColor = "white";
        document.getElementById('holeTwo').innerHTML = "Hole";
    } else {
            playerOne.score -- ;
            document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        }
}

// Check 3rd button to see if it's a mole, if so and you click it you get a point. Other wise you lose a point.
document.getElementById("holeThree").onclick = function bonkThree() {
    if (document.getElementById('holeThree').innerHTML === "MOLE" && document.getElementById('holeThree').style.backgroundColor === "yellow") {
        playerOne.score ++;
        document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        document.getElementById("holeThree").style.backgroundColor = "white";
        document.getElementById('holeThree').innerHTML = "Hole";
    } else {
            playerOne.score -- ;
            document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        }
}

// Check 4th button to see if it's a mole, if so and you click it you get a point. Other wise you lose a point.
document.getElementById("holeFour").onclick = function bonkFour() {
    if (document.getElementById('holeFour').innerHTML === "MOLE" && document.getElementById('holeFour').style.backgroundColor === "yellow") {
        playerOne.score ++;
        document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        document.getElementById("holeFour").style.backgroundColor = "white";
        document.getElementById('holeFour').innerHTML = "Hole";
    } else {
            playerOne.score -- ;
            document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        }
}

// Check 5th button to see if it's a mole, if so and you click it you get a point. Other wise you lose a point.
document.getElementById("holeFive").onclick = function bonkFive() {
    if (document.getElementById('holeFive').innerHTML === "MOLE" && document.getElementById('holeFive').style.backgroundColor === "yellow") {
        playerOne.score ++;
        document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        document.getElementById("holeFive").style.backgroundColor = "white";
        document.getElementById('holeFive').innerHTML = "Hole";
    } else {
            playerOne.score -- ;
            document.getElementById("playerScore").innerHTML = `Player Score: ${playerOne.score}`;
        }
}


    
