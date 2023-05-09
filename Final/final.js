var bossHealth = document.querySelector('#bossHP');
var heroHealth = document.querySelector('#heroHP');
var bossHp = 100;
var heroHp = 100;
var atkDmg = 10;

startGame();

function startGame(){
    bossHp = 100;
    setBossHp(100);
    setHeroHp(100);
}

//For the Animations
const bossPic = document.querySelector('.bossImg');
const heroPic = document.querySelector('.heroImg');
const hand = document.querySelector('.hand');

const cards = ["Assets/BlueMage/Attack.gif","Assets/BlueMage/Damage.gif","Assets/BlueMage/Death.gif"];
const cardAlt = [1,2,3,4,5];

for (i = 0; i < cards.length; i++){
    const newCard = document.createElement('img');
    newCard.setAttribute('src', cards[i]);
    newCard.setAttribute('alt', cardAlt[i]);
    const placeHolder = i;
    hand.appendChild(newCard);
    newCard.addEventListener("click", () => doDmg(placeHolder));
    }

function doDmg(num)  {
    heroPic.setAttribute('src',  cards[num]);
    heroPic.setAttribute('alt', cardAlt[num]);

    bossPic.setAttribute('src', "Assets/Necroman/DamageNec.gif");
    bossPic.setAttribute('alt', "BossHurt");
    
    setTimeout(() => {
        heroPic.setAttribute('src', "Assets/BlueMage/standing.gif");
        heroPic.setAttribute('alt', "HeroStanding");

        if (bossHp > atkDmg){
            bossPic.setAttribute('src', "Assets/Necroman/standingNec.gif");
            bossPic.setAttribute('alt', "BossStanding");
        }

        //Dmg
        bossHp = bossHp - atkDmg;
        setBossHp(bossHp);
    }, 3000);

    if (bossHp <= atkDmg){
        killBoss();
    }
}

function setHeroHp(x){
    heroHealth.textContent = x;
}

function setBossHp(x){
    bossHealth.textContent = x;
}

function killBoss(){
    bossPic.setAttribute('src', "Assets/Necroman/DeathNec.gif");
    bossPic.setAttribute('alt', "BossDying");

    setTimeout(() => {
        bossPic.setAttribute('src', "Assets/Necroman/Dead.jpg");
        bossPic.setAttribute('alt', "BossDead");
    }, 2500);

    setTimeout(() => {
        alert("Game Over");
        startGame();

        bossPic.setAttribute('src', "Assets/Necroman/standingNec.gif");
        bossPic.setAttribute('alt', "BossStanding");
    }, 3000);

}

//Boss
function bossDoDmg(){

}


