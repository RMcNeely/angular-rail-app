angular
  .module('app', [ 'ui.router', 'ngAnimate', 'templates' ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        controller:'SkillController',
        templateUrl: 'home.html'
      })
      .state('about', {
        url: '/about',
        controller: 'SkillController',
        templateUrl: 'about.html'
      })

      // default fall back route
  //  $urlRouterProvider.otherwise('/');

  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode(true);

  })
