/*resource templating logic*/

var resources = [];

/*constructor for Resource object*/
function Resource (options){
  this.resTitle = options.resTitle;
  this.resUrl = options.resUrl;
  this.resDesc = options.resDesc;
  this.resIcon = options.resIcon;
}

Resource.prototype.toHtml = function(){
  var $newResource = $('li.template').clone();

  $newResource.find('a').text(this.resTitle);
  $newResource.find('a').attr('href',this.resUrl);
  $newResource.find('p.resDesc').html(this.resDesc);
  $newResource.find('span.resIcon').removeClass('resIcon').addClass(this.resIcon);

  $newResource.removeClass('template').addClass('resItem');

  return $newResource;
};

resContainer.forEach(function(ele) {
  resources.push(new Resource(ele));
});

resources.forEach(function(resource){
  $('div.resourceWrapper > ul').append(resource.toHtml());
});
