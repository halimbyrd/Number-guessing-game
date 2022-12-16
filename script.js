const submitbtn = document.querySelector('.submit-btn');
const modalOverLay = document.querySelector('.modal-overlay');
const playAgainText = document.querySelector('.play-again-text');
const headerText = document.querySelector('.header-text');
const restartBtn = document.querySelector('.restart-btn');
const audio = new Audio('Undertale OST  011 - Determination.mp3');


const secrectNumber = Math.floor(Math.random() * 10) + 1;

let chances = 4


submitbtn.addEventListener('click', function() {
 const guess = document.querySelector('input').valueAsNumber;

if (guess === secrectNumber) {
    headerText.textContent = `${secrectNumber} is the correct Number 🥳`;
    document.body.style.backgroundColor = '#50C878';
  submitbtn.setAttribute("disabled", "disabled");
} 



else if (guess > secrectNumber) { 
  
    headerText.textContent = 'TOO HIGH! ';
    chances--;
    document.querySelector('.chances').textContent = chances;

}





else if (guess < secrectNumber) {
    
    headerText.textContent = 'TOO LOW!'
    chances--
    document.querySelector('.chances').textContent = chances;

}


if (chances < 1 ){
    modalOverLay.classList.add('active');
    audio.play();
}


})


// REST VALUES

playAgainText.addEventListener('click', function(){
    modalOverLay.classList.remove('active');
    audio.currentTime = 0;
    audio.pause();


  location.reload()



})


restartBtn.addEventListener('click', function() {
    location.reload();

})




/*

playAgainText.addEventListener('click', function(){
    modalOverLay.classList.remove('active');
    audio.currentTime = 0;
    audio.pause();


*/










/*

 const secrectNumber = Math.floor(Math.random() * 10) + 1;

    let chances = 3

    headerText.textContent = 'start guessing...';


    document.querySelector('.chances').textContent = chances;
    document.querySelector('body').style.backgroundColor = '#2a3d50'
    const guess = document.querySelector('input').value = ""


    */






