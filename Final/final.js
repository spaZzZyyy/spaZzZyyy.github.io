var bossHealth = document.querySelector('#bossHP');
var heroHealth = document.querySelector('#heroHP');
var bossHp;
var heroHp;
var atkDmg;

startGame();

function startGame(){
    bossHp = 30;
    heroHp = 30;

    setBossHp(bossHp);
    setHeroHp(heroHp);
}

//For the Animations
const bossPic = document.querySelector('.bossImg');
const heroPic = document.querySelector('.heroImg');
const hand = document.querySelector('.hand');

const cards = ["Assets/BlueMage/Attack.gif", "Assets/BlueMage/Attack.gif", "Assets/BlueMage/Attack.gif"];
const cardAlt = [1,2,3];

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
        atkDmg = Math.floor(Math.random() * (10 - 0 + 1) + 1);
        bossHp = bossHp - atkDmg;
        setBossHp(bossHp);

        if (bossHp >= 0){
            bossDoDmg();
        }
        if (bossHp <= 0){
            killBoss();
        }
    }, 3000);

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

function killHero(){
    heroPic.setAttribute('src', "Assets/BlueMage/Death.gif");
    heroPic.setAttribute('alt', "HeroDying");

    setTimeout(() => {
        heroPic.setAttribute('src', "Assets/BlueMage/heroDead.jpg");
        heroPic.setAttribute('alt', "Hero Dead");
    }, 2500);

    setTimeout(() => {
        alert("Game Over");
        startGame();

        heroPic.setAttribute('src', "Assets/BlueMage/standing.gif");
        heroPic.setAttribute('alt', "BossStanding");
    }, 3000);

}

//Boss
function bossDoDmg(){
    heroPic.setAttribute('src', "Assets/BlueMage/Damage.gif");
    heroPic.setAttribute('alt', "Hero Taking Damage");

    bossPic.setAttribute('src', "Assets/Necroman/AttackNecro.gif");
    bossPic.setAttribute('alt', "Boss doing damage");

    setTimeout(() => {
        heroPic.setAttribute('src', "Assets/BlueMage/standing.gif");
        heroPic.setAttribute('alt', "HeroStanding");


        bossPic.setAttribute('src', "Assets/Necroman/standingNec.gif");
        bossPic.setAttribute('alt', "BossStanding");
        
        atkDmg = Math.floor(Math.random() * (10 - 0 + 1) + 1);
        heroHp = heroHp - atkDmg;
        setHeroHp(heroHp);
        if (heroHp <= 0){
            killHero();
        }
    }, 2400);
}


