function NewSkillController($scope, $state, $stateParams, $http, Skill, SkillService, ResourceObjectService) {
  var ctrl = this

  ResourceObjectService.query().then(function(response){
      ctrl.resources = response.data
  })

  ctrl.newSkill = Skill
  ctrl.formSubmit = function() {
    SkillService.post(ctrl.newSkill).success(function(response){
      console.log(response)
      $state.go('skill', {id: response.id})
    }).error(function(error){
      alert('Something went wrong. Try again.')
    })
  }
}

NewSkillController.$inject = ['$scope', '$state', '$stateParams', '$http', 'Skill', 'SkillService', 'ResourceObjectService']

angular
  .module('app')
  .controller('NewSkillController', NewSkillController)
