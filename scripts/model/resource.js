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
    console.log('rendering resources');
    portArticleView.renderObject(Resource.resources,'div.resourceWrapper > ul','#resList-template');
  };

  module.Resource = Resource;
})(window);
