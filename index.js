
let hasBlackJack=false;
let isAlive=false;
let message="";
let sum=0;
let cards=[];


let playerEl=document.getElementById("player-el")

let player = {
    name:"per",
    chips:145
}

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");
// console.log(messageEl)

playerEl.textContent= player.name + " :$" + player.chips




//console.log(sum);



function startGame()
{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard]
    sum=firstCard + secondCard;

    renderGame();
}    



function renderGame () {
    sumEl.textContent="sum: " + sum;
    cardEl.textContent= "cards: ";

    for(i=0;i<cards.length;i++) {
        cardEl.textContent += cards[i] + "  ";
    }
    // cardEl.textContent= "cards: " + cards[0] + " " + cards[1];

if (sum <= 20){
    message="Do you want to draw again?"
} 
else if (sum === 21){
    message="You got Black jack"
    hasBlackJack=true
}

else {
    message="You lost"
    isAlive=false
}

messageEl.textContent=message;

// console.log(message);

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("New Card")
        let card=getRandomCard();
        sum+=card;
        cards.push(card)
        console.log(cards)
        renderGame();
    } 

}


function getRandomCard(){
    let randomCard= (Math.floor(Math.random()*13)) + 1;
    if (randomCard ===1){
        randomCard =11;
    }

    else if (randomCard ===11 || randomCard===12 || randomCard===13){
        randomCard =10;
    }
    return randomCard;
}