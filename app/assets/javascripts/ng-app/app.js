angular
  .module('app', ['ui.router' ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        controller:'SkillController',
        templateUrl: 'templates/home.html'
      })
      .state('home.about', {
        url: '/home/about',
        controller: 'SkillController',
        templateUrl: 'templates/about.html'
      })

      $urlRouterProvider.otherwise('/home')
  })
