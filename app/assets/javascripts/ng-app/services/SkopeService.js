function SkopeService($resource) {
  var skill = this
  // var SkopeResource = $resource('/all-skills')

  this.getSkope = function(skopeName, callback) {
  return   SkopeResource.query({skope: skopeName}, function(data){
      console.log(skopeName)
      console.log(data)

    })
  }
  skill.buildSkill = function Skill(data) {
    skill.newSKillName =data.newSKillName
    skill.newSkillDescription = data.newSkillDescription
    skill.newSkillLink = data.newSkillLink
    skill.newSkillDocumentationLink =  akill.newSkillDocumentationLink
    skill.newSkillVersion = data.newSkillVersion
  }
  return this
}

SkopeService.$inject = ['$resource']

angular
  .module('app')
  .service('SkopeService', SkopeService)
