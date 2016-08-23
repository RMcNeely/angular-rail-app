function NewSkillController($scope, $stateParams, $resource, Skill, Resource, $location) {
  var ctrl = this

  ctrl.formSubmit = function() {
    console.log($stateParams)
    console.log(ctrl)
    console.log(ctrl.newSkill)
    debugger
    Skill.save(ctrl.newSkill)
    $location.path('home/skills')
    Skill.query()
  }
  ctrl.skills = Skill.query()
  ctrl.resources = Resource.query()

  ctrl.categories = ['language', 'framework', 'technology', 'miscellaneous']
  console.log(ctrl.newSkill)

}

NewSkillController.$inject = ['$scope', '$stateParams', '$resource', 'Skill', 'Resource', '$location']

angular
  .module('app')
  .controller('NewSkillController', NewSkillController)
