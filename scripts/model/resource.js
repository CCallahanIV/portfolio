/*resource templating logic*/
(function(module){
  /*constructor for Resource object*/
  function Resource (options){
    Object.keys(options).forEach(function(key){
      this[key] = options[key];
    }, this);
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

    portArticleView.renderObject(Resource.resources,'div.resourceWrapper > ul','#resList-template');
  };

  Resource.fetchAll = function() {
    function loadFromLocal(){
      Resource.loadAll(JSON.parse(localStorage.getItem('resources')));
    };
    function loadFromJson() {
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
  module.Resource = Resource;
})(window);
