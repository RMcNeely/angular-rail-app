function SkillController($scope, $stateParams, $resource, Skill, Resource, $location) {
  var ctrl = this
  // debugger
  console.log('The SkillController has fired')
  console.log("This is the stateParams:")
  console.log($stateParams)
  console.log(ctrl)

  // ctrl.nested = NestedResources.query(newSkill.id)
  ctrl.skills = Skill.query()
  ctrl.resources = Resource.query()
  if ($stateParams.id) {
    ctrl.skill = Skill.get({id: $stateParams.id})
  }
}

SkillController.$inject = ['$scope', '$stateParams', '$resource', 'Skill', 'Resource', '$location']

angular
  .module('app')
  .controller('SkillController', SkillController)
