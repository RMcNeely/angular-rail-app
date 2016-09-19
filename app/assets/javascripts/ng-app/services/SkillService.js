function SkillService($http, $stateParams) {
  API = 'https://angular-learn-source.herokuapp.com/api/'

  this.query = function(){
    return $http.get((API + 'skills'), {cache:true})
  }

  this.get = function($stateParams){
    return $http.get(API + 'skills/' + $stateParams.id)
  }

  this.post = function(newSkill){
    return $http.post(API + 'skills', newSkill)
  }

  this.update = function(skill) {
    return $http.put(API + 'skills/' + skill.id, skill)
  }

}
SkillService.$inject = ['$http', '$stateParams']

angular
  .module('app')
  .service('SkillService', SkillService)
