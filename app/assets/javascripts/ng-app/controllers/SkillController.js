function SkillController($scope, $state, $stateParams, Skill, Resource, $location) {
  var ctrl = this
  // debugger
  console.log('The SkillController has fired')
  console.log($state)
  console.log($stateParams)
  console.log(ctrl)

  // ctrl.nested = NestedResources.query(newSkill.id)
  ctrl.skills = Skill.query()
  ctrl.resources = Resource.query()

}

SkillController.$inject = ['$scope', '$stateParams', '$resource', 'Skill', 'Resource', '$location']

angular
  .module('app')
  .controller('SkillController', SkillController)
