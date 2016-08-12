function SkillController($scope, $state, $stateParams) {

  var self = $scope
  console.log('This log event has fired')

}

angular
  .module('app')
  .controller('SkillController', SkillController)
