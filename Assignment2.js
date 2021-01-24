const input = require(`readline-sync`);
console.log('$$$$$$$$$$$$$$$ welcome to war $$$$$$$$$$$$$$$')
let str = input.question('enter your name: ');
console.log(`howdy ${str} you currently have 50 p's`);
let pounds = input.questionInt('place your bet between 1 an 50: ');
if(pounds >= 1 , pounds <= 50){
  
  let values = ["1", "2", "3", "4", "5", "6"];
  let card1 = Math.floor(Math.random() * 12) + 1;
  let card2 = Math.floor(Math.random() * 12) + 1;
  let card3 = Math.floor(Math.random() * 12) + 1;
  let suit1 = Math.floor(Math.random() * 3) + 1;
  let suit2 = Math.floor(Math.random() * 3) + 1;
  let suit3 = Math.floor(Math.random() * 3) + 1;
  let suits=["♠", "♦", "♣", "♥"];
  console.log(`your bet is ${pounds} p's! `);
  
  if (card1 < card2,card3) {
    console.log('your card is ' + card1 + suits[suit1] + "\n player1's card: "+card2 + suits[suit2] +"\nplayer2's card: " +card3 + suits[suit3] );
    console.log(`you lost ${pounds} p's`);
    pounds = 50 - pounds;
   
     console.log(`you have ${pounds} left! goodbye`) ;
   
  }else if (card1 > card2||card3) {
    console.log('your card is ' + card1 + suits[suit1] + "\n player1's card: "+card2 + suits[suit2] +"\nplayer2's card: " +card3 + suits[suit3] );
    console.log(`you won ${pounds} p's`);
    pounds = 50 + pounds;
   
     console.log(`you have now ${pounds} ! goodbye`) ;
  }
  
}else{
  console.log('Liar!!!\ngood bye!');
  return 0;
}