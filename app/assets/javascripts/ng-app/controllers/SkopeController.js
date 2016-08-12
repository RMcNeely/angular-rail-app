function SkopeController($scope, $stateParams) {
  console.log($stateParams)
  console.log('The Skope Controller has fired')
  var self = $scope
  // console.log('This log event has fired')
}

angular
  .module('app')
  .controller('SkopeController', SkopeController)
