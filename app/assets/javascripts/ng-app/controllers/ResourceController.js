function ResourceController($scope, $stateParams, ResourceObjectService) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')

  if($stateParams.id){
    ResourceObjectService.get($stateParams).success(function(response){
      ctrl.resource = response
    }).error(function(error){
      alert("Woah something's not right here! Try refreshing the page.")
    })
  }else{
      ResourceObjectService.query().success(function(response){
        ctrl.resources = response
      }).error(function(error){
        alert("Woah something's not right here! Try refreshing the page.")
      })
  }
}

ResourceController.$inject = ['$scope', '$stateParams',  'ResourceObjectService']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
