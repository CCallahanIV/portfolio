/*fetchAll.js is a file dedicated to retrieving from data from either the server or from localStorage*/
(function(module){
  Fetch = {
    'Resource' : Resource,
    'PortList' : PortListItem
  };

  Fetch.fetchAll = function(ObjectName) {
    function loadFromLocal(){
      Fetch[ObjectName].loadAll(JSON.parse(localStorage.getItem(ObjectName + 'Array')));
    };
    function loadFromJson(){
      $.getJSON('/data/' + ObjectName + 'Container.json', function(data, message, xhr) {
        localStorage.setItem(ObjectName + 'eTag', xhr.getResponseHeader('ETag'));
        localStorage.setItem(ObjectName + 'Array', JSON.stringify(data));
        Fetch[ObjectName].loadAll(data);
      });
    };

    if (localStorage.portListArray) {
      var xhr = $.ajax(
        {url: '/data/' + ObjectName + 'Container.json',
        type: 'HEAD',
        success: function(){
          if(xhr.getResponseHeader('ETag') === localStorage.getItem(ObjectName + 'eTag')){
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

  module.Fetch = Fetch;
})(window);
