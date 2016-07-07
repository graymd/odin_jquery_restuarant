$('document').ready(function(){
  // $('#content').append("<img src='https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13599757_10102164151784327_1578958758157309695_n.jpg?oh=64f50d282d12888181e27ebd7d3a1d85&oe=5830F01F'>")
  // appendData();
  $('#content').append(getHeadline());
  $('#content').append(getCopy());
  $('#content').append(getImage());
  // $('#content').append(getTabSection());
});


// var dataToAppend = function dataToAppend(){
// }


var getImage = function getImage(){
  return "<img src='https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13599757_10102164151784327_1578958758157309695_n.jpg?oh=64f50d282d12888181e27ebd7d3a1d85&oe=5830F01F'>"
 
}

var getHeadline = function getHeadline(){
  return "<h2>Maddie Daddie's Restaurant</h2>"
}

var getCopy = function getCopy(){
  return "<p>This restaurant is pretty awesome<p>"
}

var getTabSection = function getTabSection(){
  return "kittek"
}
