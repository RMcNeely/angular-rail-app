function SkillController($scope, Skill, SkillService, $stateParams) {
  var ctrl = this
  // debugger
  console.log('The SkillController has fired')
  console.log("This is the stateParams:")
  console.log($stateParams)
  console.log(ctrl)
  if($stateParams.id){
    SkillService.get($stateParams).success(function(response){
      ctrl.skill = response
    }).error(function(error){
      alert("Woah something's not right here! Try refreshing the page.")
    })
  }else{
      SkillService.query().success(function(response){
        ctrl.skills = response
      }).error(function(error){
        alert("Woah something's not right here! Try refreshing the page.")
      })
  }
}

SkillController.$inject = ['$scope', 'Skill', 'SkillService', '$stateParams']

angular
  .module('app')
  .controller('SkillController', SkillController)
