function Resource($resource) {
  console.log('Resource factory checking in')
  return Resource = $resource('/api/resources/:id', {id: '@id'})
}

angular
  .module('app')
  .factory('Resource', Resource)
