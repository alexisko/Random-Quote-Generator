console.log("sanity check");
var quotes = ["move, bitch.", "It's not just a bag.<br>It's prada.", "I'm so frick-in' pissed!",
"Yo, hold my poodle.<br>Hold my poodle!", "Hi, I'm Cellulite Sally!<br>Look at my huge ba-donkey!",
"She's having a bitch fit!", "Tiple t, k, a.<br>Time to totally kick ass!", "For the lady, perhaps a salad?<br>Perhaps not!",
"Squeeze me!", "It's the Beverly Ho-Billies.", "Sombody throw Shamu back in the ocean.<br>Whoo!", "Don't hate me 'cause you ain't me!"];

var colors;
var randomNum, lastNum;

var quote = document.getElementById('quote');
var btn = document.getElementById('new-quote');
//
function getRandomNum() {
  return Math.floor(Math.random() * (quotes.length-1 + 1));
}

//
function getRandomQuote() {
  randomNum = getRandomNum();
  while(randomNum === lastNum) {
    randomNum = getRandomNum();
  }
  lastNum = randomNum;
  quote.innerHTML = quotes[randomNum];
}

getRandomQuote();

btn.addEventListener('click', getRandomQuote);
