/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('index', ['ngRoute'])
  .config(config);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.
  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/movies',
        controllerAs: 'MoviesIndexCtrl',
        controller: 'MoviesIndexController'
      })
      .when('/:id', {
        templateUrl: 'templates/movies-show',
        controllerAs: 'MoviesShowCtrl',
        controller: 'MoviesShowController'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }
