function CreateSkillService($scope) {
  this.buildSkill = new Skill($scope)

  //
  function Skill(data) {
  debugger
  this.newSKillName =data.newSKillName
  this.newSkillDescription = data.newSkillDescription
  this.newSkillLink = data.newSkillLink
  this.newSkillDocumentationLink = data.newSkillDocumentationLink
  this.newSkillVersion = data.newSkillVersion

  }
  // var Skill =
  //
  // $resource('/new-skill', {id: '@id'}, {
  //   update: { method: 'PUT' },
  //   delete: { method: 'DELETE' }
  // });
  //
  return "Skill";
}

CreateSkillService.$inject = ['$scope']

angular
  .module('app')
  .service('CreateSkillService', CreateSkillService)
