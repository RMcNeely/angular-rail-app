function NestedResources ($resource) {
  console.log("Now firing of a request for nested resources!")
  return NestedResources = $resource('api/skills/:id/resources', {id: '@id'})
}

angular
  .module('app')
  .factory('NestedResources', NestedResources)
