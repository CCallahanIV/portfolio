$(document).ready( function (){
  var $ulNav = $('nav.siteLinks > ul');

  $('.icon-menu').on('click', function(){
    $ulNav.slideToggle('fast');
  });

  $(window).resize(function(){

    if($(window).width() >= 760){
      $ulNav.css('display','inline');
    } else {
      $ulNav.css('display','none');
    }
  });

});
