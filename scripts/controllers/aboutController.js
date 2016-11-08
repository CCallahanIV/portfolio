(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* DONE: Use your DOM skills to reveal only the about section! */
    $('#about').fadeIn();
    $('#home').hide(); 
  };

  module.aboutController = aboutController;
})(window);
