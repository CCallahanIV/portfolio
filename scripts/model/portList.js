/*portList.js this file controls population of the portfolio list as well as functionality of the portfolio item article preview*/
/*resource templating logic*/
(function(module){
  /*constructor for PortListItem object*/
  function PortListItem (options){
    Object.keys(options).forEach(function(key){
      this[key] = options[key];
    }, this);
  };

  PortListItem.portListArray = [];

  PortListItem.prototype.toHtml = function(templateID){
    var source = $(templateID).html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  PortListItem.loadAll = function(inputData) {
    inputData.forEach(function(ele){
      PortListItem.portListArray.push(new Resource(ele));
    });

    portArticleView.renderObject(PortListItem.portListArray,'div#portArticle', '#portArticle-template');
    portArticleView.renderObject(PortListItem.portListArray,'ul#portList', '#portList-template');

    portArticleView.handlePreview();
    portArticleView.handleMainNav();
    portArticleView.populateFilter();
    portArticleView.handleCatFilter();
    portArticleView.renderFunFacts();
  };

  PortListItem.fetchAll = function() {
    function loadFromLocal(){
      PortListItem.loadAll(JSON.parse(localStorage.getItem('portListArray')));
    };
    function loadFromJson(){
      $.getJSON('/data/listContainer.json', function(data, message, xhr) {
        localStorage.setItem('listeTag', xhr.getResponseHeader('ETag'));
        localStorage.setItem('portListArray', JSON.stringify(data));
        PortListItem.loadAll(data);
      });
    };

    if (localStorage.portListArray) {
      var xhr = $.ajax(
        {url: '/data/listContainer.json',
        type: 'HEAD',
        success: function(){
          if(xhr.getResponseHeader('ETag') === localStorage.getItem('listeTag')){
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
  //return int of with total categories
  PortListItem.uniqueCats = function(){
    return PortListItem.portListArray.map(function(portListItem){
      return portListItem.portListCat;
    }).reduce(function(acc, cur, idx, array){
      if(array.indexOf(cur) === idx){
        acc.push(cur);
      }
      return acc;
    },[]);
  };

  //Returns array of objects with category name and number of projects in that category.
  PortListItem.numCats = function(){
    return PortListItem.uniqueCats().map(function(category){
      return {
        category: category,
        numProjects: PortListItem.portListArray.filter(function(element){
          return element.portListCat === category;
        }).length
      };
    });
  };
  module.PortListItem = PortListItem;
})(window);
