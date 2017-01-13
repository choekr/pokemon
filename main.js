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
}

function getRandomNumber(){
  return Math.floor(Math.random() * 151); //give us random card number
}

var hand = [];
var imgAddress = [];
var html_str = "";
var img_str = "";

$(document).ready(function(){  //button to generate random card
  $("#submit").click(function() {
    var id = getRandomNumber();
    // if (html_str == null) {
    //     img_str = "<img src = 'http://pokeapi.co/media/img/" + id + ".png' >";
    //     html_str = "<h5> http://pokeapi.co/api/v2/pokemon/" + id + "</h5>";
    // }
    var pokemon = $.ajax({url: "http://pokeapi.co/api/v2/pokemon/" + id, success: function(pokemon){
      hand.push(pokemon.name);
      
      if (hand.length < 7) {
        img_str += "<img src = 'http://pokeapi.co/media/img/" + id + ".png' >";
        html_str = "";
        html_str += "<div> <h5>";
        for (var i=0; i<hand.length; i++) {
          if(i == 0) {
            html_str += hand[i];
          } else {
            html_str += ", " + hand[i];
          }
        }
        html_str += "</h5> </div>";

        console.log(hand);

      } else {
        html_str_fullHand = "<h1> You have a full hand </h1>"
        $('#warning').html(html_str_fullHand);
      }
    }});
    
    $('#info').html(html_str);
    $('#img').html(img_str);
    var card = 'http://pokeapi.co/media/img/' + id + '.png';
    imgAddress.push(card);
  });
})
