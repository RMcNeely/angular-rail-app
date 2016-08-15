function SkillController($scope, $state, $stateParams, Skill, $location) {
  var ctrl = this
  debugger
  console.log('The SkillController has fired')
  console.log($state)
  console.log($stateParams)
  console.log(ctrl)
  ctrl.formSubmit = function() {
    console.log($state)
    console.log($stateParams)
    console.log(ctrl)
    console.log(ctrl.newSkill)
    debugger
    Skill.save(ctrl.newSkill)
    $location.path('home/skills')
    Skill.query()
  }

  // ctrl.nested = NestedResources.query(newSkill.id)
  ctrl.skills = Skill.query()

  ctrl.categories = ['language', 'framework', 'technology', 'miscellaneous']
  console.log(ctrl.newSkill)
}

SkillController.$inject = ['$scope', '$stateParams', 'SkillService', 'Skill', '$location']

angular
  .module('app')
  .controller('SkillController', SkillController)
