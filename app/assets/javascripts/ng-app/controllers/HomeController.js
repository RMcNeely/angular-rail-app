function HomeController($scope) {
  var ctrl = this
  console.log($scope)
  console.log('The Home Controller has fired')

  // var sp = Object.create($stateParams)
  // ctrl.skopeName = sp.skope
  // var skopeNameVar = ctrl.skopeName.toString()
  // ctrl.resources = ResourceService.getResource()//{skope: skopeName})
  // debugger
}

HomeController.$inject = ['$scope' ]
angular
  .module('app')
  .controller('HomeController', HomeController)
