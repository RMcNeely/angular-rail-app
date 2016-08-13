angular
  .module('app', [ 'ui.router', 'ngAnimate', 'templates', 'ngRoute', 'ngResource', 'ngMessages' ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        controller:'HomeController',
        templateUrl: 'home.html'
      })
      .state('home.about', {
        url: '/about',
        controller: 'SkillController',
        controllerAs: 'ctrl',
        templateUrl: 'about.html'
      })
      .state('skope', {
        url: '/:skope',
        controller: 'SkopeController as ctrl',
        // controllerAs: 'skope',
        templateUrl: 'skope/skope.html'
      })
      .state('skope.resources', {
        url: '/:skill/resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources.html'
      })
      .state('all-resources', {
        url: '/all-resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources.html'
      })
      .state('skope.new', {
        url: '/new',
        controller: 'SkopeController',
        controllerAs: 'ctrl',
        templateUrl: 'skope/new-skill.html'
      })



      // default fall back route
  //  $urlRouterProvider.otherwise('/');

  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode(true);

  })
