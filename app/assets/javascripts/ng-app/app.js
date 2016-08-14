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
      .state('skill', {
        url: '/skills',
        controller: 'SkillController as ctrl',
        templateUrl: 'skill/skills.html'
      })
      .state('skill.resources', {
        url: '/skill/resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources.html'
      })
      .state('resources', {
        url: '/resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources.html'
      })
      .state('skill.new', {
        url: '/new',
        controller: 'SkopeController',
        controllerAs: 'ctrl',
        templateUrl: 'skil/new.html'
      })




      // default fall back route
  //  $urlRouterProvider.otherwise('/');

  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode(true);

  })
