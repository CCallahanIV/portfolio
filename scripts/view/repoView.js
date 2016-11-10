/*repoView file*/
(function(module){
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function(){
    $('#repos').empty().append(reposObj.allRepos.map(repoCompiler));
  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
