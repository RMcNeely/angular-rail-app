function ResourceObject($resource, $stateParams) {
  console.log($stateParams)
  console.log('ResourceObject factory checking in')
  return ResourceObject = $resource('/api/resources/:id', {id: '@id'})
}

angular
  .module('app')
  .factory('ResourceObject', ResourceObject)
