class Hero {
    constructor(name, hitPoints, type) {
this.name = name;
this.hitPoints = hitPoints;
this.type = type;
    }

    Idle() {
        document.querySelector('.warriorFun').src = `https://i.imgur.com/TzIRqDI.png`;
        document.querySelector('.warriorFun').style.width = '40vh';
        document.querySelector('.warriorFun').style.animation =  'moveSpritesheet .6s steps(2) infinite';
    }


    WarriorAttack() {
        document.querySelector('.warriorFun').src = `https://i.imgur.com/h4VIouC.png`;
        document.querySelector('.warriorFun').style.width = '100vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1s steps(5) infinite';
    }

    WarriorDamaged() {
        document.querySelector('.warriorFun').src = `https://i.imgur.com/MoGSSnR.png`;
        document.querySelector('.warriorFun').style.width = '70vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1s steps(4) infinite';
    }
}