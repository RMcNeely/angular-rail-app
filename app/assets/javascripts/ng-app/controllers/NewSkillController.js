function NewSkillController($scope, $state, $stateParams, $resource, Skill, ResourceObject, $location) {
  var ctrl = this

  ctrl.newSkill = new Skill()
  ctrl.formSubmit = function() {
    console.log($stateParams)
    console.log(ctrl)
    console.log(ctrl.newSkill)
    debugger
    Skill.save(ctrl.newSkill, function(result) {
      $state.go('skill', {id: result.id})
    })
  }

}

NewSkillController.$inject = ['$scope', '$state', '$stateParams', '$resource', 'Skill', 'ResourceObject', '$location']

angular
  .module('app')
  .controller('NewSkillController', NewSkillController)
