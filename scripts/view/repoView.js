/*repoView file*/
(function(module){
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());

  repoView.renderRepos = function(){
    console.log('rendering');
    $('#repos').empty().append(RepoObj.allRepos.map(repoCompiler));
  };

  RepoObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
