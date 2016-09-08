function NewResourceController($scope, $stateParams, ResourceObject, ResourceObjectService, SkillService, $state) {
  var ctrl= this
  SkillService.query().then(function(response){
      ctrl.skills = response.data
  })
  ctrl.newResource = ResourceObject
  console.log(ResourceObject)
  // debugger
  ctrl.formSubmit = function() {
    ResourceObjectService.post(ctrl.newResource).success(function(response){
      console.log(response)
      $state.go('resource', {id: response.id})
    }).error(function(error){
      alert('Something went wrong. Try again.')
    })
  }
}

NewResourceController.$inject=['$scope', '$stateParams', 'ResourceObject', 'ResourceObjectService', 'SkillService', '$state']
angular
  .module('app')
  .controller('NewResourceController', NewResourceController)
