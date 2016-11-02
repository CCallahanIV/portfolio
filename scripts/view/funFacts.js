/*funFacts.js is a file for practicing functional programming by generating fun facts about the listed projects*/

portArticleView.renderFunFacts = function() {
  var factsRender = Handlebars.compile($('#funFacts-template').html());

  $('#numCats').text(PortListItem.uniqueCats().length);

  PortListItem.numCats().forEach(function(ele){
    $('#funFacts').append(factsRender(ele));
  });
  console.log(PortListItem.numCats());

};
