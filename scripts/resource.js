/*resource templating logic*/

var resources = [];

/*constructor for Resource object*/
function Resource (options){
  for (key in options){
    this[key] = options[key];
  }
};

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
