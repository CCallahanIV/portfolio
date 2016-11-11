/*repo model file*/

(function(module){
  var RepoObj = {};

  RepoObj.requestRepos = function(callback) {
    $.when(
      $.get('/github/users/ccallahaniv/repos', function(data){
        RepoObj.allRepos = data;
      })
    ).done(callback);
  };


  module.RepoObj = RepoObj;
})(window);
