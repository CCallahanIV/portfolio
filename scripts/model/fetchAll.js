/*fetchAll.js is a file dedicated to retrieving from data from either the server or from localStorage*/
(function(module){
  fetch = {
    'Resource' : Resource,
    'PortList' : PortListItem
  };

  fetch.fetchAll = function(ObjectName) {
    function loadFromLocal(){
      fetch[ObjectName].loadAll(JSON.parse(localStorage.getItem(ObjectName + 'Array')));
    };
    function loadFromJson(){
      $.getJSON('/data/' + ObjectName + 'Container.json', function(data, message, xhr) {
        localStorage.setItem(ObjectName + 'eTag', xhr.getResponseHeader('ETag'));
        localStorage.setItem(ObjectName + 'Array', JSON.stringify(data));
        fetch[ObjectName].loadAll(data);
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

  module.fetch = fetch;
})(window);
