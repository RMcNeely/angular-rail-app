console.log('test 2.1.1')

angular
  .module('app', [ 'ui.router', 'templates', 'ngRoute', 'ngMessages', 'checklist-model', 'duScroll' ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        controller:'HomeController',
        controllerAs: 'ctrl',
        templateUrl: 'home.html'
      })
      .state('home.about', {
        url: 'about',
        controller: 'HomeController',
        controllerAs: 'ctrl',
        templateUrl: 'about.html'
      })
      .state('home.skill', {
        url: 'skills',
        controller: 'SkillController',
        controllerAs: 'ctrl',
        templateUrl: 'skills/skills.html'
      })
      .state('skill', {
        url: 'skills/:id',
        controller: 'SkillController',
        controllerAs: 'ctrl',
        templateUrl: 'skills/show.html'
      })
      .state('skill.resources', {
        url: 'resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources/show.html'
      })
      .state('home.skill.new', {
        url: 'new',
        controller: 'NewSkillController',
        controllerAs: 'ctrl',
        templateUrl: 'skills/new.html'
      })
      .state('home.resources', {
        url: 'resources',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources/resources.html'
      })
      .state('resource', {
        url: 'resources/:id',
        controller: 'ResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources/show.html'
      })
      .state('home.resources.new', {
        url: 'new',
        controller: 'NewResourceController',
        controllerAs: 'ctrl',
        templateUrl: 'resources/new.html'
      })

      //Default Fallback Route
      $urlRouterProvider.otherwise('/')
      // configure.$inject=['$scope', '$state', '$stateParams', 'Skill', 'ResourceObject', 'SkillService', 'ResourceObjectService', '$http']
  //  // enable HTML5 Mode for SEO
  //  $locationProvider.html5Mode({enabled: true, requireBase: false});
  console.log('test')
  })
