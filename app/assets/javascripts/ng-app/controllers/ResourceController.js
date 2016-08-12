function ResourceController($scope, $stateParams,  ResourceService) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')

  var sp = Object.create($stateParams)
  ctrl.skopeName = sp.skope
  // var skopeNameVar = ctrl.skopeName.toString()
  ctrl.resources = ResourceService.getResource()//{skope: skopeName})
  // debugger
}

ResourceController.$inject = ['$scope', '$stateParams',  'ResourceService']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
