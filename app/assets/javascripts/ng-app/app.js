angular
  .module('app', [ 'ui.router', 'ngAnimate', 'templates', 'ngRoute', 'ngResource' ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        controller:'SkillController',
        templateUrl: 'home.html'
      })
      .state('home.about', {
        url: '/about',
        controller: 'SkillController',
        controllerAs: 'ctrl',
        templateUrl: 'about.html'
      })
      .state('home.skope', {
        url: '/:skope/',
        controller: 'SkopeController as ctrl',
        // controllerAs: 'skope',
        templateUrl: 'skope.html'
      })



      // default fall back route
  //  $urlRouterProvider.otherwise('/');

  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode(true);

  })
