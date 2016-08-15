function ResourceController($scope, $stateParams,  ResourceService, Resource) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')
  // debugger
  ctrl.newResource = new Resource()

  ctrl.resources = Resource.query()

}

ResourceController.$inject = ['$scope', '$stateParams',  'ResourceService', 'Resource']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
