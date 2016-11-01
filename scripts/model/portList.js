/*portList.js this file controls population of the portfolio list as well as functionality of the portfolio item article preview*/
/*resource templating logic*/

/*constructor for PortListItem object*/
function PortListItem (options){
  for (key in options){
    this[key] = options[key];
  }
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
  renderObject(PortListItem.portListArray,'div#portArticle', '#portArticle-template');
  renderObject(PortListItem.portListArray,'ul#portList', '#portList-template');
};

PortListItem.fetchAll = function() {
  var loadFromLocal = function(){
    PortListItem.loadAll(JSON.parse(localStorage.getItem('portListArray')));
  };
  var loadFromJson = function(){
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

// portListContainer.forEach(function(ele) {
//   portListArray.push(new PortListItem(ele));
// });

//
// portListArray.forEach(function(portItem){
//   $('div#portArticle').append(portItem.toHtml('#portArticle-template'));
//   $('ul#portList').append(portItem.toHtml('#portList-template'));
// });
