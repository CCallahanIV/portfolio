$('document').ready( function (){

  $('.icon-menu').on('click', function(){
    $('nav.siteLinks > ul').slideToggle('fast',function(){
      console.log('Did a thing.');
    });
  });

});
