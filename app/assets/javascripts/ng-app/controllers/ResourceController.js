function ResourceController($scope, $stateParams,  ResourceService, Resource, Skill, $location) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')
  // debugger
  // ctrl.formSubmit = function() {
  //   console.log($stateParams)
  //   console.log(ctrl)
  //   console.log(ctrl.newResource)
  //   debugger
  //   Resource.save(ctrl.newResource)
  //   $location.path('home/resources')
  //   Resource.query()
  // }

  ctrl.resources = Resource.query()
  ctrl.skills = Skill.query()
}

ResourceController.$inject = ['$scope', '$stateParams',  '$resource', 'Resource', 'Skill', '$location']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
