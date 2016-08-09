angular
  .module('app', ['ui.router' ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        controller:'skillController',
        templateUrl: 'templates/home'
      })

      $urlRouterProvider.otherwise('/home')
  })
