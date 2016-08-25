function SkillController($scope, $stateParams, $resource, Skill, ResourceObject, $location) {
  var ctrl = this
  // debugger
  console.log('The SkillController has fired')
  console.log("This is the stateParams:")
  console.log($stateParams)
  console.log(ctrl)

  // ctrl.nested = NestedResourceObjects.query(newSkill.id)
  ctrl.skills = Skill.query()
  ctrl.resources = ResourceObject.query()
  if ($stateParams.id) {
    ctrl.skill = Skill.get({id: $stateParams.id})
  }
}

SkillController.$inject = ['$scope', '$stateParams', '$resource', 'Skill', 'ResourceObject', '$location']

angular
  .module('app')
  .controller('SkillController', SkillController)
