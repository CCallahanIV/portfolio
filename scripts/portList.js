/*portList.js this file controls population of the portfolio list as well as functionality of the portfolio item article preview*/
/*resource templating logic*/

var portListArray = [];
var portArticleArray = [];

/*constructor for PortListItem object*/
function PortListItem (options){
  for (key in options){
    this[key] = options[key];
  }
};

PortListItem.prototype.toHtml = function(template){
  var source = $(template).html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

portListContainer.forEach(function(ele) {
  portListArray.push(new PortListItem(ele));
});

portListArray.forEach(function(portItem){
  $('div#portArticle').append(portItem.toHtml('#portArticle-template'));
  $('ul#portList').append(portItem.toHtml('#portList-template'));
});
