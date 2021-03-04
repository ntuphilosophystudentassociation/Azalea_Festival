const wordCard = document.querySelectorAll('.word-card');
const wordCardContent = document.querySelectorAll('.word-card-content');
const gameZone = document.querySelector('.game-zone');
const pOutput = document.querySelector('.p-output');
const aOutput = document.querySelector('.a-output');
const aPlayAgain = document.querySelector('.a-play-again')
const pPlayAgain = document.querySelector('.p-play-again')
let pClickCount = 0;
let pConClickCount = 0;
let aClickCount = 0;
let aConClickCount = 0;

gameZone.addEventListener('click', (e)=>{
    if (e.target.classList.contains('word-card')){
        e.target.classList.toggle('card-hide');
        e.target.nextElementSibling.classList.toggle('card-hide');
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
            gameZone.classList.toggle('game-zone-hide')
            if(pClickCount>aClickCount){
                pOutput.classList.toggle('output-hide')
            } else{
                aOutput.classList.toggle('output-hide')
            }
        }else if (pConClickCount ===3){
            gameZone.classList.toggle('game-zone-hide')
            pOutput.classList.toggle('output-hide')
        }else if (aConClickCount ===3){
            gameZone.classList.toggle('game-zone-hide')
            aOutput.classList.toggle('output-hide')
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
    gameZone.classList.toggle('game-zone-hide');
    aOutput.classList.add('output-hide');
    pOutput.classList.add('output-hide');
    for(i in wordCard){
        wordCard[i].classList.remove('card-hide')
        wordCardContent[i].classList.add('card-hide')
    }
})

pPlayAgain.addEventListener('click',()=>{
    pConClickCount = 0;
    pClickCount = 0;
    aConClickCount = 0;
    aClickCount = 0;
    gameZone.classList.toggle('game-zone-hide');
    aOutput.classList.add('output-hide');
    pOutput.classList.add('output-hide');
    for(i in wordCard){
        wordCard[i].classList.remove('card-hide')
        wordCardContent[i].classList.add('card-hide')
    }
})
