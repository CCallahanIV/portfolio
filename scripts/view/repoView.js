/*repoView file*/
(function(module){
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function(){
    $('#repos').empty().append(RepoObj.allRepos.map(repoCompiler));
  };

  RepoObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
