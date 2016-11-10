(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('.tabContent').hide();
    $('#home').fadeIn();
  };

  module.articleController = articleController;
})(window);
