/*repo controller file*/
(function(module) {
  var repoController = {};

  articleController.reveal = function() {
    $('.tabContent').hide();
    $('#repos').fadeIn();
  };

  module.repoController = repoController;
})(window);
