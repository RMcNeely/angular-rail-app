function ResourceController($scope, $stateParams, ResourceObjectService) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Resource Controller has fired')

  if($stateParams.id){
    ResourceObjectService.get($stateParams).success(function(response){
      ctrl.resource = response
    }).error(function(error){
      alert("Woah something's not right here! Try refreshing the page.")
    })
  }else{
      ResourceObjectService.query().success(function(response){
        ctrl.resources = response
      }).error(function(error){
        alert("Woah something's not right here! Try refreshing the page.")
      })
  }

  ctrl.addFavorite = function(skill){
    skill.favorite ++
    // debugger
    ResourceObjectService.update(skill).success( function(response){
      alert('Added this to your favorite Skill.')
    }).error( function(error){
      alert('Something went wrong. Try again.')
    })
  }

  // $document.scrollToElementAnimated('resources', 20, 40)
    // var someElement = angular.element(document.getElementById('resources'));
    // $document.scrollToElementAnimated(someElement);
}

ResourceController.$inject = ['$scope', '$stateParams',  'ResourceObjectService']
angular
  .module('app')
  .controller('ResourceController', ResourceController)
