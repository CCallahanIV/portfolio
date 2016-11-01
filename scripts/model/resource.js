/*resource templating logic*/

/*constructor for Resource object*/
function Resource (options){
  for (key in options){
    this[key] = options[key];
  }
};

Resource.resources = [];

Resource.prototype.toHtml = function(templateID){
  var source = $(templateID).html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

Resource.loadAll = function(inputData) {
  inputData.forEach(function(ele){
    Resource.resources.push(new Resource(ele));
  });
  renderObject(Resource.resources,'div.resourceWrapper > ul','#resList-template');
};

Resource.fetchAll = function() {
  var loadFromLocal = function(){
    Resource.loadAll(JSON.parse(localStorage.getItem('resources')));
  };
  var loadFromJson = function(){
    $.getJSON('/data/resourceContainer.json', function(data, message, xhr) {
      localStorage.setItem('resourceeTag', xhr.getResponseHeader('ETag'));
      localStorage.setItem('resources', JSON.stringify(data));
      Resource.loadAll(data);
    });
  };

  if (localStorage.resouces) {
    var xhr = $.ajax(
      {url: '/data/resourceContainer.json',
      type: 'HEAD',
      success: function(){
        if(xhr.getResponseHeader('ETag') === localStorage.getItem('resoureceeTag')){
          loadFromLocal();
        } else {
          loadFromJson();
        }
      }
    });
  } else {
    loadFromJson();
  }
};


// resContainer.forEach(function(ele) {
//   resources.push(new Resource(ele));
// });

// resources.forEach(function(resource){
//   $('div.resourceWrapper > ul').append(resource.toHtml());
// });
