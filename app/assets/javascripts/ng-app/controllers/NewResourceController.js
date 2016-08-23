function NewResourceController($scope, $resource, $stateParams, $location, Resource, Skill) {
  var ctrl= this
  ctrl.resources = Resource.query()
  ctrl.skills = Skill.query()

  ctrl.formSubmit = function() {
    console.log($stateParams)
    console.log(ctrl)
    console.log(ctrl.newResource)
    debugger
    Resource.save(ctrl.newResource)
    $location.path('home/resources')
    // Resource.query()
  }
}


angular
  .module('app')
  .controller('NewResourceController', NewResourceController)
