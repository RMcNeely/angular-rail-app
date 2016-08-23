function ResourceController($scope, $stateParams,  ResourceService, Resource, Skill, $location) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')

  ctrl.resources = Resource.query()
  ctrl.skills = Skill.query()
  if ($stateParams.id) {
    ctrl.resource = Resource.get({id: $stateParams.id})
  }

}

ResourceController.$inject = ['$scope', '$stateParams',  '$resource', 'Resource', 'Skill', '$location']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
