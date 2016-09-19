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

  ctrl.addFavorite = function(skill){
    skill.favorite ++
    // debugger
    SkillService.update(skill).success( function(response){
      alert('Added this to your favorite Skill.')
    }).error( function(error){
      alert('Something went wrong. Try again.')
    })
  }

  ctrl.decreaseFavorite = function(skill){
    skill_hash = angular.copy(skill)

    skill_hash.favorite --
    // debugger
    SkillService.update(skill_hash).success( function(response){
      skill.favorite --
      alert('Removeded this from your favorite Skills.')
    }).error( function(error){
      alert('Something went wrong. You can\'t have less than 0 Favorites. Try again.')
    })
  }

}

SkillController.$inject = ['$scope', 'Skill', 'SkillService', '$stateParams']

angular
  .module('app')
  .controller('SkillController', SkillController)
