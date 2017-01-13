var game = {
  players: [],
  addPlayer: function(){}
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

 function getRandomNumber(){
  return Math.floor(Math.random() * (151 - 0 + 1)); //give us random card number
}

$(document).ready(function(){  //button to generate random card
  $.get('http://pokeapi.co/api/v2/pokemon/' + getRandomNumber(), function(pokemon){
    console.log("1: ", pokemon.name);
  });

  $("#submit").click(function() {
    var pokemon = $.ajax("http://pokeapi.co/api/v2/pokemon/" + getRandomNumber());
    function(pokemon){
      console.log("1: ", pokemon.name);
    });
    var card = 'http://pokeapi.co/media/img/' + getRandomNumber() + '.png';

    console.log(pokemon);
    console.log("Hi There!");
  });

})
