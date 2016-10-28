/*portList.js this file controls population of the portfolio list as well as functionality of the portfolio item article preview*/
/*resource templating logic*/

var portListArray = [];
var portArticleArray = [];

/*constructor for PortListItem object*/
function PortListItem (options){
  this.portListTitle = options.portListTitle;
  this.portListUrl = options.portListUrl;
  this.portListCat = options.portListCat;
  this.portListDesc = options.portListDesc;
}

PortListItem.prototype.toListHtml = function(){
  var source = $('#portList-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

PortListItem.prototype.toArticleHtml = function(){
  var source = $('#portArticle-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

portListContainer.forEach(function(ele) {
  portListArray.push(new PortListItem(ele));
});

portListArray.forEach(function(portItem){
  $('div#portArticle').append(portItem.toArticleHtml());
  $('ul#portList').append(portItem.toListHtml());
});
