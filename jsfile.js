let isflipped = false;
let firstCard, secondCard;
let point = 0;

function flipCard(){
  if (this === firstCard) return;
  (this).classList.toggle('flip');
  if(!isflipped){
    isflipped = true;
    firstCard = this;
  }else{
    isflipped = false;
    secondCard = this;
    if(firstCard.dataset.name === secondCard.dataset.name){
    cardMatched();
    }
    else{
      unflipcard();
      // shuffle();
}
  }
}
function unflipcard(){
  setTimeout(()=>{
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
},500);
}

function cardMatched(){
    $(firstCard).unbind('click');
    $(secondCard).unbind('click');
    alert(point = point+1);
}
function reset(){
  isflipped = false;
  [firstCard, secondCard] = [null, null];
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function()
{ const cards = $('.card-block');
  $(cards).on('click', flipCard);
});
