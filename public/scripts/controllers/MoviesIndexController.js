angular
  .module('index')
  .controller('MoviesIndexController', MoviesIndexController);

  MoviesIndexController.$inject = ['$http'];
  function MoviesIndexController (  $http  ) {
    var vm = this;
    $http({
      method: 'GET',
      url: '/api/movies'
    }).then(function successCallback(response) {
      console.log('got movies');
      vm.movies = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
    vm.createMovie = function () {
      console.log('creating movie', vm.newMovie);
      $http({
        method: 'POST',
        url: '/api/movies',
        data: vm.newMovie
      }).then(function successCallback(response) {
        vm.movies.push(response.data);
        console.log(response);
        console.log(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
    };
    vm.editMovie = function (movie) {
      console.log('editing movie', vm.movie);
      $http({
        method: 'PUT',
        url: '/api/movies/'+movie._id,
        data: {  director: vm.movie.director,
                  title: vm.movie.title}
      }).then(function successCallback(response) {
        vm.movies.push(response.data);
        console.log(response.data);
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    };
    vm.deleteMovie = function (movie) {
      $http({
        method: 'DELETE',
        url: '/api/movies/'+ movie._id
      }).then(function successCallback(json) {
        var index = vm.movies.indexOf(movie);
        vm.movies.splice(index, 1);
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };
  }
