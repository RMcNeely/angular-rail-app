angular
  .module('app', [ 'ui.router', 'ngAnimate', 'templates', 'ngRoute', 'ngResource', 'ngMessages', 'checklist-model' ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
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
      .state('home.skill', {
        url: '/skills',
        controller: 'SkillController as ctrl',
        templateUrl: 'skill/skills.html'
      })
      .state('home.skill.resources', {
        url: '/skill/:id/resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources.html'
      })
      .state('home.skill.new', {
        url: '/new',
        controller: 'NewSkillController',
        controllerAs: 'ctrl',
        templateUrl: 'skill/new.html'
      })
      .state('home.resources', {
        url: '/resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources/resources.html'
      })
      .state('home.resources.new', {
        url: '/new',
        controller: 'NewResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources/new.html'
      })

      //Default Fallback Route
      $urlRouterProvider.otherwise('home')

  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode({enabled: true, requireBase: false});

  })
