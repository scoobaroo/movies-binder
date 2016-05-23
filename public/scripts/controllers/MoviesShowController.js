
angular
  .module('index')
  .controller('MoviesShowController', MoviesShowController);

MoviesShowController.$inject = ['$http', '$routeParams'];
function MoviesShowController (  $http,   $routeParams  ) {
  var vm = this;
  $http({
    method: 'GET',
    url: '/api/movies/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.movie = json.data;
  });
}
