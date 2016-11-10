(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tabContent').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
