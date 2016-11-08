(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('#home').fadeIn();
    $('#about').hide();
  };

  module.articleController = articleController;
})(window);
