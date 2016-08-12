angular
  .module('app', [ 'ui.router', 'ngAnimate', 'templates' ])
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
        templateUrl: 'about.html'
      })
      .state('skopes', {
        url: 'skopes',
        controller: 'SkopeController',
        templateUrl: 'skope.html'
      })
      // .state('skopes.skope', {
      //   url: 'skopes/:skope',
      //   controller: 'SkopeController',
      //   templateUrl: 'skope/show.html'
      // })
      .state('home.skope', {
        url: '/:skope/',
        controller: 'SkopeController',
        templateUrl: 'skope.html'
      })
      // .state('home.skope', {
      //   url: '/:skope',
      //   controller: 'SkopeController',
      //   controllerAs: 'skope',
      //   templateUrl: 'skope.html'
      // })
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
