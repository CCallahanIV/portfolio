/*repo model file*/

(function(module){
  var RepoObj = {};

  RepoObj.requestRepos = function(callback) {
    $.when(
      $.get('/github/users/ccallahaniv/repos', function(data){
        console.log('getting');
        reposObj.allRepos = data;
      })
    ).done(callback);
  };


  module.RepoObj = RepoObj;
})(window);
