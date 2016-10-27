$('document').ready( function (){

  $('.icon-menu').on('click', function(){
    var $ulNav = $('nav.siteLinks > ul');

    $ulNav.slideToggle('fast');

    if($ulNav.attr('style')==='display: none;'){
      $ulNav.removeAttr('style');
    }

  });
});
