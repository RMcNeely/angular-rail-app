function SkillService($http, $stateParams) {
  API = 'http://localhost:3000/api/'

  this.query = function(){
    return $http.get((API + 'skills'), {cache:true})
  }

  this.get = function($stateParams){
    return $http.get(API + 'skills/' + $stateParams.id)
  }

  this.post = function(newSkill){
    return $http.post(API + 'skills', newSkill)
  }

}
SkillService.$inject = ['$http', '$stateParams']

angular
  .module('app')
  .service('SkillService', SkillService)
