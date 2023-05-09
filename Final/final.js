var bossHealth = document.querySelector('#bossHP');
var heroHealth = document.querySelector('#heroHP');

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
    newCard.addEventListener("click", () => changeImage(placeHolder));
    }

function changeImage(num)  {
    heroPic.setAttribute('src',  cards[num]);
    heroPic.setAttribute('alt', cardAlt[num]);

    bossPic.setAttribute('src', "Assets/Necroman/DamageNec.gif");
    bossPic.setAttribute('alt', "BossHurt");
    
    setTimeout(() => {
        heroPic.setAttribute('src', "Assets/BlueMage/standing.gif");
        heroPic.setAttribute('alt', "HeroStanding");

        bossPic.setAttribute('src', "Assets/Necroman/standingNec.gif");
        bossPic.setAttribute('alt', "BossStanding");
    }, 3000);
}

