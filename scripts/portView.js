/*portView.js is a file dedicated to handling the viewing functionality of the portfolio articles and list*/

var portArticleView = {};

portArticleView.handlePreview = function(){
  $('.portPreview').hide();

  $('#portList').on('click', 'a' , function(e){
    /*TODO: Add conditional statement to prevent opening another port article if one is already open. */
    e.preventDefault();
    $('article[data-title="' + $(this).text() + '"]').slideToggle();
  });

  $('article.portPreview').on('click', 'a.icon-minus', function(e){
    e.preventDefault();
    $(this).parent().slideToggle();
  });
};

portArticleView.handleMainNav = function(){
  $('.siteLinks').on('click', '.tab', function(e){
    e.preventDefault();

    $('.tabContent').hide();
    $('div[data-tab="' + $(this).text().toLowerCase() + '"]').fadeIn();
  });

  $('.siteLinks .tab:first').click();
};

portArticleView.populateFilter = function(){
  $('.portItem').each(function(){
    var category, optionTag;
    category = {
      portListCat : $(this).attr('data-cat')
    };

    var source = $('#listCatFilter-template').html();
    var templateRender = Handlebars.compile(source);
    optionTag = templateRender(category);

    if ($('#listCatFilter option[value="' + category.portListCat + '"]').length === 0){
      $('#listCatFilter').append(optionTag);
    }

  });
};

portArticleView.handleCatFilter = function(){
  $('#listCatFilter').on('change', function(){

    if($(this).val()) {
      $('.portItem').hide();
      $('.portItem[data-cat="' + $(this).val() + '"]').fadeIn();
    } else {
      $('.portItem').fadeIn();
    }

    if ($(this).val() === 'all') {
      $('.portItem').show();
    }

  });
};

portArticleView.handlePreview();
portArticleView.handleMainNav();
portArticleView.populateFilter();
portArticleView.handleCatFilter();
