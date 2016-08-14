function SkopeController($scope, $stateParams,  SkopeService, Skill) {
  debugger
  var ctrl = this
  console.log($stateParams)
  console.log('The Skope Controller has fired')

  ctrl.formSubmit = function() {
    ctrl.newSkill.skope = skopeNameVar
    debugger
    ctrl.newSkill.$save(function(){
      $state('skope')
    })

  }

  var sp = Object.create($stateParams)
  ctrl.skopeName = sp.skope
  var skopeNameVar = ctrl.skopeName.toString()
  ctrl.skills = Skill.query({skope: skopeNameVar})

  ctrl.newSkill =  new Skill()
  // .buildSkill($scope)
  // new Skill(ctrl)

  // function Skill(data) {
  // debugger
  // this.newSKillName =data.newSKillName
  // this.newSkillDescription = data.newSkillDescription
  // this.newSkillLink = data.newSkillLink
  // this.newSkillDocumentationLink = data.newSkillDocumentationLink
  // this.newSkillVersion = data.newSkillVersion
  //
  // }
}

SkopeController.$inject = ['$scope', '$stateParams',  'SkopeService', 'Skill']
angular
  .module('app')
  .controller('SkopeController', SkopeController)
