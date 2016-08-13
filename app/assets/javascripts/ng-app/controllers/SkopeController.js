function SkopeController($scope, $stateParams,  SkopeService) {
  var ctrl = this
  console.log($stateParams)
  console.log('The Skope Controller has fired')

  $scope.$watch($stateParams, function(){
    debugger
     if($stateParams.skill){
      ctrl.check = true
    } else {
      ctrl.check = false
    }
  })


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
