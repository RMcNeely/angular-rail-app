console.log('test test test')

function HomeController($scope) {
  var ctrl = this
  console.log(ctrl)
  console.log(ctrl === $scope)
}

HomeController.$inject=['$scope']
angular
  .module('app')
  .controller('HomeController', HomeController)
