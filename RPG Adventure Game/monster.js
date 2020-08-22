class Monster {
    constructor(name, hitPoints, type) {
this.name = name;
this.hitPoints = hitPoints;
this.type = type;
    }

    Idle() {
        document.querySelector('#testMonster').style.width = '20vh';
        document.querySelector('.monsterFun').src = `https://i.imgur.com/TpSXwS9.png`;
        document.querySelector('.monsterFun').style.width = '';
        document.querySelector('.monsterFun').style.animation =  'moveSpritesheet .7s steps(3) infinite';
    }

    Damage() {
        document.querySelector('.monsterFun').src = `https://i.imgur.com/5ZZmGlv.png`;
        document.querySelector('.monsterFun').style.width = '40vh';
        document.querySelector('.monsterFun').style.animation = 'moveSpritesheet .7s steps(2) infinite';
    }

    Attack() {
        document.querySelector('#testMonster').style.width = '22vh';
        document.querySelector('.monsterFun').src = `https://i.imgur.com/wdmfZ47.png`;
        document.querySelector('.monsterFun').style.width = '120vh';
        document.querySelector('.monsterFun').style.animation = 'moveSpritesheet .7s steps(5) infinite';
    }
}