function Skill($resource, $stateParams) {
  // debugger
  console.log("Skill factory checking in")
  console.log($resource)
  // console.log($state)
  console.log($stateParams)
  return Skill = $resource('/api/skills/:id', {id: '@id'}, {method: 'PUT'} )

}
Skill.$inject = ['$resource', '$stateParams']
angular
  .module('app')
  .factory('Skill', Skill)
