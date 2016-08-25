function ResourceController($scope, $stateParams,  $resource, ResourceObject, Skill, $location) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')

  ctrl.resources = ResourceObject.query()
  ctrl.skills = Skill.query()
  if ($stateParams.id) {
    ctrl.resource = ResourceObject.get({id: $stateParams.id})
  }

}

ResourceController.$inject = ['$scope', '$stateParams',  '$resource', 'ResourceObject', 'Skill', '$location']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
