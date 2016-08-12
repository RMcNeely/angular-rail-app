function SkopeController($scope, $stateParams,  SkopeService) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Skope Controller has fired')


  var sp = Object.create($stateParams)
  ctrl.skopeName = sp.skope
  var skopeNameVar = ctrl.skopeName.toString()
  ctrl.skills = SkopeService.getSkope({skope: skopeNameVar})
  // debugger
}

SkopeController.$inject = ['$scope', '$stateParams',  'SkopeService']
angular
  .module('app')
  .controller('SkopeController', SkopeController)
