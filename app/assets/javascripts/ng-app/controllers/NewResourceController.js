function NewResourceController($scope, $resource, $state, $location, ResourceObject, Skill, $stateParams) {
  var ctrl= this

  ctrl.newResource = new ResourceObject()
  ctrl.formSubmit = function() {
    console.log($state)
    console.log($stateParams)
    console.log(ctrl)
    console.log(ctrl.newResource)
    console.log(ResourceObject)
    debugger
    ResourceObject.save(ctrl.newResource, function(result){

    // {
      console.log(ctrl.newResource)
      console.log(result)
      debugger
      $state.go('resource', {id: result.id})

    })
    // })
    // $location.path('resource/:id')
    // Resource.query()
  }
}


angular
  .module('app')
  .controller('NewResourceController', NewResourceController)
