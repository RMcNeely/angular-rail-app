function SkillController($scope, $state, $stateParams, Skill) {
  var ctrl = this
  debugger
  console.log('Thes SkillController has fired')

  ctrl.formSubmit = function() {
    ctrl.newSkill.skope = skopeNameVar
    debugger
    ctrl.newSkill.$save(function(){
      $state('skope')
    })
  }
  ctrl.newSkill =  new Skill()

  ctrl.skills = Skill.query()
}

SkillController.$inject = ['$scope', '$stateParams',  'SkopeService', 'Skill']

angular
  .module('app')
  .controller('SkillController', SkillController)
