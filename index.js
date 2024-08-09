let computerChoice;
 function generatecomputerchoice(){
  let randomNumber = Math.random() * 3;
   
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = 'Bat';
    // console.log('computer choice is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = 'Ball';
    // console.log('computer choice is Ball');
  } else {
    computerChoice = 'Stump'
    // console.log('computer choice is Stump');
  }

}

    let scorestr= localStorage.getItem('score');
    let score = JSON.parse(scorestr) || {

     win: 0,
     tie:0,
    lost:0,

};

