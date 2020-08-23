class Hero {
    constructor(name, hitPoints, type, timer) {
this.name = name;
this.hitPoints = hitPoints;
this.type = type;
this.timer = timer;
    }

    IdleMage() {
        document.querySelector('.warriorFun').src = 'Sprites/mageTest.png';
        document.querySelector('.warriorFun').style.width = '40vh';
        document.querySelector('.warriorFun').style.height = '16vh';
        document.querySelector('#testWarrior').style.width = '20vh';
        document.querySelector('.warriorFun').style.animation =  'moveSpritesheet .6s steps(2) infinite';
    }

    IdleWarrior() {
        document.querySelector('.warriorFun').src = `Sprites/idleTestWarrior.png`;
        document.querySelector('.warriorFun').style.width = '40vh';
        document.querySelector('.warriorFun').style.height = '20vh';
        document.querySelector('.warriorFun').style.animation =  'moveSpritesheet .6s steps(2) infinite';
    }


    WarriorAttack() {
        document.querySelector('.warriorFun').src = `Sprites/warriorAttack.png`;
        document.querySelector('.warriorFun').style.width = '100vh';
        document.querySelector('.warriorFun').style.height = '17vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1s steps(5) infinite';
    }

    MageAttack() {
        document.querySelector('.warriorFun').src = `Sprites/mageAttack.png`;
        document.querySelector('#testWarrior').style.width = '15vh';
        document.querySelector('.warriorFun').style.width = '104vh';
        document.querySelector('.warriorFun').style.height = '16vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1s steps(7) infinite';
    }

    MageDamaged() {
        document.querySelector('.warriorFun').src = `Sprites/mageHurt.png`;
        document.querySelector('.warriorFun').style.width = '70vh';
        document.querySelector('.warriorFun').style.height = '16vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1s steps(4) infinite';
    }

    WarriorDamaged() {
        document.querySelector('.warriorFun').src = `Sprites/warriorhurt.png`;
        document.querySelector('.warriorFun').style.width = '70vh';
        document.querySelector('.warriorFun').style.height = '16vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1s steps(4) infinite';
    }

    healthBar(hitPoints) {
        if(hitPoints === 5) {
            document.querySelector('.warriorHealth').src = `Sprites/5 health.png`;
        } else if(hitPoints === 4) {
            document.querySelector('.warriorHealth').src = `Sprites/MageHealthBar.png`;
        } else if(hitPoints === 3) {
            document.querySelector('.warriorHealth').src = `Sprites/3 MageHealthBar.png`;
        } else if(hitPoints === 2) {
            document.querySelector('.warriorHealth').src = `Sprites/2 MageHealthBar.png`;
        } else if(hitPoints === 1) {
            document.querySelector('.warriorHealth').src = `Sprites/1 MageHealthBar.png`;
        } else if(hitPoints === 0) {
            document.querySelector('.warriorHealth').src = `Sprites/0WarriorHealthBar.png`;
        }
    }

    MageDeath() {
        document.querySelector('.warriorFun').src = `Sprites/mageDead.png`;
        document.querySelector('.warriorFun').style.width = '190vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1.5s steps(10) infinite';
    }

    WarriorDeath() {
        document.querySelector('.warriorFun').src = `Sprites/warriorDeath.png`;
        document.querySelector('.warriorFun').style.width = '190vh';
        document.querySelector('.warriorFun').style.animation = 'moveSpritesheet 1.5s steps(10) infinite';
    }
}