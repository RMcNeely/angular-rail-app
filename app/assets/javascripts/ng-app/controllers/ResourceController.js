function ResourceController($scope, $stateParams,  ResourceService) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')
  // debugger

  var sp = Object.create($stateParams)
  ctrl.skopeName = sp.skope || 'nil'
  var skopeNameVar = ctrl.skopeName.toString()
  var skillId = sp.skill || 'nil'
  ctrl.resources = ResourceService.getResource({skope: skopeNameVar, skill: skillId})
}

ResourceController.$inject = ['$scope', '$stateParams',  'ResourceService']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
