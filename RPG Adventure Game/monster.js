class Monster {
    constructor(name, hitPoints, type) {
this.name = name;
this.hitPoints = hitPoints;
this.type = type;
    }

    Idle() {
        document.querySelector('#testMonster').style.width = '20vh';
        document.querySelector('.monsterFun').src = `Sprites/monsterTest.png`;
        document.querySelector('.monsterFun').style.width = '';
        document.querySelector('.monsterFun').style.animation =  'moveSpritesheet .7s steps(3) infinite';
    }

    Damage() {
        document.querySelector('.monsterFun').src = `Sprites/lizardHurt2.png`;
        document.querySelector('.monsterFun').style.width = '43vh';
        document.querySelector('.monsterFun').style.animation = 'moveSpritesheet .7s steps(2) infinite';
    }

    Attack() {
        document.querySelector('#testMonster').style.width = '22vh';
        document.querySelector('.monsterFun').src = `Sprites/lizardAttack.png`;
        document.querySelector('.monsterFun').style.width = '120vh';
        document.querySelector('.monsterFun').style.animation = 'moveSpritesheet .7s steps(5) infinite';
    }

    healthBar(hitPoints) {
        if(hitPoints === 5) {
            document.querySelector('.monsterHealth').src = `Sprites/5 health.png`;
        } else if(hitPoints === 4) {
            document.querySelector('.monsterHealth').src = `Sprites/MageHealthBar.png`;
        } else if(hitPoints === 3) {
            document.querySelector('.monsterHealth').src = `Sprites/3 MageHealthBar.png`;
        } else if(hitPoints === 2) {
            document.querySelector('.monsterHealth').src = `Sprites/2 MageHealthBar.png`;
        } else if(hitPoints === 1) {
            document.querySelector('.monsterHealth').src = `Sprites/1 MageHealthBar.png`;
        } else if(hitPoints === 0) {
            document.querySelector('.monsterHealth').src = `Sprites/0WarriorHealthBar.png`;
        }
    }

    Death() {
        document.querySelector('.monsterFun').src = `Sprites/lizardDeath.png`;
        document.querySelector('.monsterFun').style.width = '100vh';
        document.querySelector('#testMonster').style.width = '25vh';
        document.querySelector('.monsterFun').style.animation = 'moveSpritesheet .7s steps(4) infinite';
    }
}