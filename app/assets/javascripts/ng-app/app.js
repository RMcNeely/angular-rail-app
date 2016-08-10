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
      .state('home.language', {
        url: '/language',
        controller: 'SkillController',
        templateUrl: 'language.html'
      })
      .state('home.skope', {
        url: '/:skope',
        controller: 'SkopeController',
        templateUrl: 'skope.html'
      })
      .state('home.technology', {
        url: '/technology',
        controller: 'SkillController',
        templateUrl: 'technology.html'
      })
      .state('home.miscellaneous', {
        url: '/miscellaneous',
        controller: 'SkillController',
        templateUrl: 'miscellaneous.html'
      })

      // default fall back route
  //  $urlRouterProvider.otherwise('/');

  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode(true);

  })
