
const setToDefault = () => {
    document.querySelector(".container").firstChild.nextSibling.textContent = "Refresh Me"
}

const randomDiceGenerator = () => {
    return "./images/dice"+Math.floor((Math.random() * 6) + 1).toString()+".png" ;
}

let img1 = randomDiceGenerator();
let img2 = randomDiceGenerator();

document.querySelector(".img1").setAttribute('src', img1);
document.querySelector(".img2").setAttribute('src', img2);


if(img1.match(/(\d+)/)[0] > img2.match(/(\d+)/)[0]){
    document.querySelector(".container").firstChild.nextSibling.textContent = "Player 1 Won"
}
else if(img1.match(/(\d+)/)[0] < img2.match(/(\d+)/)[0]){
    document.querySelector(".container").firstChild.nextSibling.textContent = "Player 2 Won"
}
else{
    document.querySelector(".container").firstChild.nextSibling.textContent = "Draw"

}

setInterval(setToDefault, 5000);
