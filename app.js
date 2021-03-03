const wordCard = document.querySelectorAll('.wordCard');
const wordCardContent = document.querySelectorAll('.wordCardContent');
const gameZone = document.querySelector('.gameZone');
const pOutput = document.querySelector('.pOutput');
const aOutput = document.querySelector('.aOutput');
const aPlayAgain = document.querySelector('.aPlayAgain')
const pPlayAgain = document.querySelector('.pPlayAgain')
let pClickCount = 0;
let pConClickCount = 0;
let aClickCount = 0;
let aConClickCount = 0;
console.log(gameZone.clientHeight)

aOutput.style.height = gameZone.clientHeight
pOutput.style.height = gameZone.clientHeight

gameZone.addEventListener('click', (e)=>{
    if (e.target.tagName === 'BUTTON'){
        e.target.classList.toggle('cardHide');
        e.target.nextElementSibling.classList.toggle('cardHide');
        if (e.target.classList.contains('anthropology')){
            aClickCount ++
            aConClickCount ++
            pConClickCount = 0
        } else if(e.target.classList.contains('philosophy')){
            pClickCount ++
            pConClickCount ++
            aConClickCount = 0
        };
        let totalClickCount = pClickCount + aClickCount;
        if (totalClickCount === 5){
            gameZone.classList.toggle('gameZoneHide')
            if(pClickCount>aClickCount){
                pOutput.classList.toggle('outputHide')
            } else{
                aOutput.classList.toggle('outputHide')
            }
        }else if (pConClickCount ===3){
            gameZone.classList.toggle('gameZoneHide')
            pOutput.classList.toggle('outputHide')
        }else if (aConClickCount ===3){
            gameZone.classList.toggle('gameZoneHide')
            aOutput.classList.toggle('outputHide')
        };
    } 
    // else if(e.target.classList.contains('wordCardContent')){
    //     e.target.classList.toggle('cardHide');
    //     e.target.previousElementSibling.classList.toggle('cardHide');
    // }
})

aPlayAgain.addEventListener('click',()=>{
    pConClickCount = 0;
    pClickCount = 0;
    aConClickCount = 0;
    aClickCount = 0;
    gameZone.classList.toggle('gameZoneHide');
    aOutput.classList.add('outputHide');
    pOutput.classList.add('outputHide');
    for(i in wordCard){
        wordCard[i].classList.remove('cardHide')
        wordCardContent[i].classList.add('cardHide')
    }
})

pPlayAgain.addEventListener('click',()=>{
    pConClickCount = 0;
    pClickCount = 0;
    aConClickCount = 0;
    aClickCount = 0;
    gameZone.classList.toggle('gameZoneHide');
    aOutput.classList.add('outputHide');
    pOutput.classList.add('outputHide');
    for(i in wordCard){
        wordCard[i].classList.remove('cardHide')
        wordCardContent[i].classList.add('cardHide')
    }
})
