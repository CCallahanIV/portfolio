/*portList.js this file controls population of the portfolio list as well as functionality of the portfolio item article preview*/
/*resource templating logic*/

var portListArray = [];

/*constructor for PortListItem object*/
function PortListItem (options){
  this.portListTitle = options.portListTitle;
  this.portListUrl = options.portListUrl;
  this.portListCat = options.portListCat;
  this.portListDesc = options.portListDesc;
}

PortListItem.prototype.toHtml = function(){
  var $newPortListItem = $('.portfolioList li.template').clone();

  $newPortListItem.find('a').attr('href',this.portListUrl);
  $newPortListItem.find('a').text(this.portListTitle);

  $newPortListItem.removeClass('template').addClass('portItem');

  return $newPortListItem;
};

portListContainer.forEach(function(ele) {
  portListArray.push(new PortListItem(ele));
});

portListArray.forEach(function(resource){
  $('div.listWrapper > ul').append(resource.toHtml());
});
