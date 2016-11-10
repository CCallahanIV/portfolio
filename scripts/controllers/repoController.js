/*repo controller file*/
(function(module) {
  var repoController = {};

  repoController.reveal = function() {
    $('.tabContent').hide();
    $('#repos').fadeIn();
  };

  module.repoController = repoController;
})(window);
