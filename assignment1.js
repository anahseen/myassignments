const input = require(`readline-sync`);
let questionready = input.keyInYN("Welcome to the FC Barcelona Quiz!\nPress y when you're ready. ");
if (questionready != true) {
  return 0;
}
else {
  answers1 = ['Messi','Eto\'o','Suarez','Villa'];
  answers2 = ['4','5','6','7'];
  answers3 = ['1930','1899','1900','1950'];
  answers4 = ['Old Traford','Etihad','Santiago bernabeu','Camp Nou'];
  answers5 = ['Messi','Ronaldinho','Iniesta','Cruyff'];

question1Quiz = input.keyInSelect(answers1, 'Who is the african top goal scorrer of the team?');
question2Quiz = input.keyInSelect(answers2, 'How manny Uefa Champions League trophies have the club won?');
question3Quiz = input.keyInSelect(answers3, 'In what year was FC Barcelona created?');
question4Quiz = input.keyInSelect(answers4, 'What is the club\'s home stadium name?');
question5Quiz = input.keyInSelect(answers5, 'Who is the best player ever to wear the club\'s jersey?');

switch (question1Quiz) {

  case 0:
    question1Quiz = 0;
    break;

  case 1:
     question1Quiz = 1;
    break;

  case 2:
    question1Quiz = 0;
    break;
  case 3:
    question1Quiz = 0;
    break;
  }
switch (question2Quiz) {
  case 0:
     question2Quiz = 0;
    break;
  case 1:
     question2Quiz = 1;
    break;
  case 2:
     question2Quiz = 0;
    break;
  case 3:
     question2Quiz = 0;
    break;

}
switch (question3Quiz) {
  case 0:
     question2Quiz = 0;
    break;
  case 1:
     question2Quiz = 1;
    break;
  case 2:
     question2Quiz = 0;
    break;
  case 3:
     question2Quiz = 0;
    break;
 
}
switch (question4Quiz) {
  case 0:
     question2Quiz = 0;
    break;
  case 1:
     question2Quiz = 0;
    break;
  case 2:
     question2Quiz = 0;
    break;
  case 3:
     question4Quiz = 1;
    break;

}
switch (question5Quiz) {
  case 0:
     question5Quiz = 1;
    break;

  case 1:
     question2Quiz = 0;
    break;
  case 2:
     question2Quiz = 0;
    break;
  case 3:
     question2Quiz = 0;
    break;
    
}
console.log(add());

function add() {
  
 sum = question1Quiz + question2Quiz + question3Quiz + question4Quiz + question5Quiz;

return (' ');

}
 switch (sum) {
   case 1:
     console.log('\n20%!! clearly you are not a barca fan!.');
     break;
 
   case 2:
     console.log('\n40%! a little slow on games and knowledge of barca');
     break;
 
   case 3:
     console.log('\n60%!! we can see you have potential to be some fan!.');
     break;
 
   case 4:
     console.log('\n80% great you watch often barca games and you know a little hitory!');
     break;
 
   case 5:
     console.log('\n100% Wow!. you are a true culer!');
     break;
 
   default:
     console.log('\nno correct answer not a football or barca fan');
     break;
     
 }
 




}
