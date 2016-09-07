function ResourceObjectService($http, $stateParams) {
  API = 'http://localhost:3000/api/'

  this.query = function(){
    return $http.get((API + 'resources'), {cache:true})
  }

  this.get = function($stateParams){
    return $http.get(API + 'resources/' + $stateParams.id)
  }

  this.post = function(newResource){
    return $http.post(API + 'resources', newResource)
  }

  this.update = function(resource) {
    return $http.put(API + 'resources/' + resource.id, resource)
  }
}
ResourceObjectService.$inject = ['$http', '$stateParams']

angular
  .module('app')
  .service('ResourceObjectService', ResourceObjectService)
