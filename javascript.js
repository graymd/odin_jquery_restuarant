$('document').ready(function(){
  // $('#content').append("<img src='https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/13599757_10102164151784327_1578958758157309695_n.jpg?oh=64f50d282d12888181e27ebd7d3a1d85&oe=5830F01F'>")
  // appendData();
  $('#content').append(getHeadline());
  $('#content').append(getCopy());
  // $('#content').append(getImage());
  // $('#content').append(getTabSection());
  $('a').click(function(){
    console.log('clicked', $(this).text());
    setSelectedTab($(this));
    updateTabbedSection($(this).text());
  })
});

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

var setSelectedTab = function setSelectedTab(userInputTab){
  removeSelectedId();
  userInputTab.attr('id', 'selected');
}

var removeSelectedId = function removeSelectedId(){
  $('a').removeAttr("id", "selected")
}

var updateTabbedSection = function updateTabbedSection(userInputTab){
  clearPageContent();
  var pageNumber = pageToDisplay(userInputTab);
  $('#pageContent').append(getPageText(pageNumber));
}

var pageToDisplay = function pageToDisplay(userInputTab){
  return userInputTab[3];
}

var getPageText = function getPageText(pageNumber){
  if (pageNumber === "1"){
    return page1;
  } else if (pageNumber === "2"){
    return page2;
  } else if (pageNumber === "3"){
    return page3;
  }
}

var clearPageContent = function clearPageContent(){
  console.log("clear");
  $('#pageContent').empty();
}

var page1 = "this is page 1";
var page2 = "this is page 2";
var page3 = "this is page 3";
