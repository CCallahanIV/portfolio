/*resource templating logic*/

var resources = [];

/*constructor for Resource object*/
function Resource (options){
  this.resTitle = options.resTitle;
  this.resUrl = options.resUrl;
  this.resCat = options.resCat;
  this.resDesc = options.resDesc;
  this.resIcon = options.resIcon;
}

Resource.prototype.toHtml = function(){
  var source = $('#resList-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

resContainer.forEach(function(ele) {
  resources.push(new Resource(ele));
});

resources.forEach(function(resource){
  $('div.resourceWrapper > ul').append(resource.toHtml());
});
